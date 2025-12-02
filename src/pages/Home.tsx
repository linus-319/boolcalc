import ExprInput from "../components/ExprInput"
import TruthTable from "../components/TruthTable"
import { useState } from 'react';
import { type Result } from "../utils/bc_syntax"


export default function Home() {
  const [result, setResult] = useState<Result | null>(null);

  return (
    <div className="parent-div">
      <div className="">
        <ExprInput onResultChange={setResult} />
      </div>
      <div className="truth-table">
        {result && (
          <div className="">
            {result.type === "Invalid"
              ? <span className="">{result.msg}</span>
              : <TruthTable table={result.type === "ValidTable" ? result : null} />
            }
          </div>
        )}
      </div>
    </div>
  )
} 