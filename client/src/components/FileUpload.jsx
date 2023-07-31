function FileUpload ({ onChange, text }) {
  return (
    <>
      <input type="file" accept=".txt" onChange={onChange} />
    </>
  )
}

export default FileUpload;
