function Table ({ headers, data}){
  return (
    <>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    { headers.map((header, key) => (
                        <th key={key} scope="col" className="px-6 py-3">
                          {header}
                        </th>
                      ))
                    }
                  </tr>
              </thead>
              <tbody>
                { data.length > 0 ? (
                  data.map((record, key) => {
                    return (
                      <tr key={key} className="bg-white border-b">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {record.name}
                        </td>
                        <td className="px-6 py-4">
                            {record.quarter}
                        </td>
                        <td className="px-6 py-4">
                          {record.homeworks.map(homework => homework.grade).join(' ')}
                        </td>
                        <td className="px-6 py-4">
                          {record.tests.map(test => test.grade).join(' ')}
                        </td>
                        <td className="px-6 py-4">
                          {record.quarterAverage}
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr className="bg-white border-b">
                    <td>No items to display.</td>
                  </tr>
                )}
              </tbody>
          </table>
      </div>
    </>
  )
}

export default Table;
