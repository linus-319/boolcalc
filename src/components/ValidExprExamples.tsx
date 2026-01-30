export default function ValidExprExamples() {
  return (
    <div className='page-container'>
      <div className='page-table-container'>
        <table className='page-table'>
          <thead>
            <tr>
              <th>Expression</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A+B</td>
              <td>A OR B</td>
            </tr>
            <tr>
              <td>A*B</td>
              <td>A AND B</td>
            </tr>
            <tr>
              <td>AB</td>
              <td>A AND B</td>
            </tr>
            <tr>
              <td>!A</td>
              <td>NOT A</td>
            </tr>
            <tr>
              <td>(A+B)*C</td>
              <td>(A OR B) AND C</td>
            </tr>
            <tr>
              <td>(A+B)C</td>
              <td>(A OR B) AND C</td>
            </tr>
            <tr>
              <td>(ABC)+(!BCD)</td>
              <td>(A AND B AND C) OR ((NOT B) AND C AND D)</td>
            </tr>
            <tr>
              <td>(A+B+C)(!B+C+D)</td>
              <td>(A OR B OR C) AND ((NOT B) OR C OR D)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}