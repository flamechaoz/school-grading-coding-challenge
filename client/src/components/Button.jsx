function Button ({ onClick, text }) {
  return (
    <button onClick={onClick} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
      {text}
    </button>
  )
}

export default Button;
