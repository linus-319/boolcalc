export default function ValidExprExamples() {
  return (
    <div className="">
      <table className="">
        <thead>
          <tr className="">
            <th className="">Expression</th>
            <th className="">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="">A+B</td>
            <td className="">A OR B</td>
          </tr>
          <tr className="">
            <td className="">A*B</td>
            <td className="">A AND B</td>
          </tr>
          <tr className="">
            <td className="">AB</td>
            <td className="">A AND B</td>
          </tr>
          <tr className="">
            <td className="">!A</td>
            <td className="">NOT A</td>
          </tr>
          <tr className="">
            <td className="">(A+B)*C</td>
            <td className="">(A OR B) AND C</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}