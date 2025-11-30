export default function SyntaxRules() {
  return (
    <div className="syntax-container">
      <h1 className="syntax-header syntax-rules">Boolean Algebra Syntax</h1>
      <div className="table-container">
        <table className="syntax-table">
          <thead>
            <tr>
              <th>Order of Operations</th>
              <th>Logical Operators</th>
              <th>Boolean Algebra Operator</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>Parenthesis</td>
              <td>( )</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>NOT</td>
              <td>!</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>AND</td>
              <td>*</td>
            </tr>
            <tr>
              <td>4th</td>
              <td>OR</td>
              <td>+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="syntax-rules">
        <ul>
          <li>
            <p>Boolean variables are represented by a single alphabetic character that can be either uppercase or lowercase. For example, the variables `a` and `A` would be treated as unique boolean variables.</p>
          </li>
          <li>
            <p>Any boolean expression can support any level of nested parentheses.</p>
          </li>
          <li>
            <p>The notation for these boolean expressions is very similar to regular algebra, especially when it comes to the AND operator.</p>
            <p>For example, the logical expression <code>"A AND B"</code> is equivalent to <code>a*b</code>, <code>ab</code>, <code>a(b)</code>, <code>(a)b</code>, and <code>(a)(b)</code>, just like how you would normally notate multiplication of variables in algebra.</p>
          </li>
          <li>
            <p>All expressions will be stripped of whitespace before parsing, so you can choose to enter your expression with or without any whitespace.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}