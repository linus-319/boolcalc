import ExprInput from "../components/ExprInput"
import TruthTable from "../components/TruthTable"
import { useState } from 'react';
import { type Result } from "../utils/bc_syntax"
import styles from './Home.module.css'


export default function Home() {
  const [result, setResult] = useState<Result | null>(null);

  return (
    <div className="parent-div">
      <div className={styles["home-container"]}>
        <div>
          <ExprInput onResultChange={setResult} />
        </div>
        <div className={styles["truth-table"]}>
          {result && (
            <div>
              {result.type === "Invalid"
                ? <span>{result.msg}</span>
                : <TruthTable table={result.type === "ValidTable" ? result : null} />
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 