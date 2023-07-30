import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { GRADE_TYPE, QUARTERS } from './constants';

import { Button, TextArea } from './components';

const App = () => {
  const [textAreaInput, setTextAreaInput] = useState('');

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

    console.log(response.data);
  };

  const handleTextChange = (event) => {
    setTextAreaInput(event.target.value);
  };
  
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <TextArea value={textAreaInput} onChange={handleTextChange} />
      <Button onClick={submitGrades} />
    </>
  )
}

export default App;
