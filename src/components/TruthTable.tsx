export type TruthTableProps = {
  table: {
    type: 'ValidTable'
    header: string[]
    rows: boolean[][]
  } | null
}

export default function TruthTable({ table }: TruthTableProps) {
  if (!table || table.type !== "ValidTable") return null;
  
  return (
    <table>
      <thead>
        <tr>
          {table.header.map((col, idx) => (
            <th key={idx}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row, rIdx) => (
          <tr key={rIdx}>
            {row.map((cell, cIdx) => (
              <td key={cIdx}>{+cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}