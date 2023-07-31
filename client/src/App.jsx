import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { GRADE_TYPE, QUARTERS } from './constants';

import { Button, Table, TextArea } from './components';

const App = () => {
  const [textAreaInput, setTextAreaInput] = useState('');
  const [studentGrades, setStudentGrades] = useState([]);

  const TABLE_HEADERS = ['Name', 'Quarter', 'Homeworks', 'Tests', 'Quarter Average'];

  const getStudentGrades = async () => {
    const response = await axios
      .get("http://localhost:3000/v1/grades")
      .catch((error) => console.log(error));

    setStudentGrades(response.data);
  };

  const submitGrades = async () => {
    
    const parsedGrades = [];
    
    // split the text area input into lines
    const lines = textAreaInput.split(/\r?\n/);
    
    try {
  
      // first line should be quarter declaration
      if(!(lines[0] in QUARTERS)){
        throw new Error("First line should be Quarter information.");
      }
  
      let activeQuarter = 0;

      lines.forEach((line) => {
        // check if line is a Quarter declaration
        if(line in QUARTERS){
          activeQuarter = QUARTERS[line];
        }
        else{
          // split line by space,
          // assume first two element is the student name
          // the rest are grades
          const records = line.split(' ');
          const studentName = `${records[0]} ${records[1]}`;
          const grades = records.splice(2);
  
          // now map each grades into respective grade type
          let activeGradeType = '';
          const mapGrades = {
            'test': [],
            'homework': []
          }
  
          // first element should be quarter declaration
          if(!(grades[0] in GRADE_TYPE)){
            throw new Error("Grades should be preceded by a grade type.");
          }
          grades.forEach((grade) => {
            // check if element is a grade type
            if(grade in GRADE_TYPE){
              activeGradeType = GRADE_TYPE[grade];
            }
            else{
              // insert the element to respective grade map
              mapGrades[activeGradeType].push(grade);
            }
          });
  
          parsedGrades.push({
            'name': studentName,
            'quarter': activeQuarter,
            ...mapGrades
          });
  
        }
      });
    } catch (error) {
      alert(error);
    }

    const response = await axios
      .post("http://localhost:3000/v1/grades", parsedGrades)
      .catch((error) => console.log(error));

    getStudentGrades();
  };

  const handleTextChange = (event) => {
    setTextAreaInput(event.target.value);
  };

  useEffect(() => {
    getStudentGrades();
  }, []);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <TextArea value={textAreaInput} onChange={handleTextChange} />
          <Button onClick={submitGrades} />
          <Button/>
        </div>
        <div className="col-span-8">
          <Table headers={TABLE_HEADERS} data={studentGrades}/>
        </div>
      </div>
    </>
  )
}

export default App;
