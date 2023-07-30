function TextArea ({ value, onChange }){
  return (
    <>
      <textarea onChange={onChange} rows="10" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." />
    </>
  )
}

export default TextArea;
