import { useState } from "react"
import { generateTruthTable } from "../utils/bc_generate_truth_table"
import TruthTable from "./TruthTable"
import { type Result } from "../utils/bc_syntax"

function isalpha(char: string) {
  return char.toLowerCase() !== char.toUpperCase()
}

function addMulOperators(input: string) {
  let result = ""
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      result += input[i]
      continue
    } else if (
      (isalpha(input[i]) && isalpha(input[i - 1])) ||
      input[i] === '!' && isalpha(input[i - 1]) ||
      input[i] === '(' && input[i - 1] === ')' ||
      input[i] === '(' && isalpha(input[i - 1]) ||
      isalpha(input[i]) && input[i - 1] === ')'
    ) {
      result += '*' + input[i]
    } else {
      result += input[i]
    }
  }
  return result
}

export default function ExprInput() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<Result | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const processedInput = addMulOperators(input.replace(/\s/g, ''))
    const res = generateTruthTable(processedInput)
    setResult(res)
  }

  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter boolean expression"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit" className="form-button">
          Generate Truth Table
        </button>
      </form>
      
      {result && (
        <div className="">
          {result.type === "Invalid"
            ? <span className="">{result.msg}</span>
            : <TruthTable table={result.type === "ValidTable" ? result : null} />
          }
        </div>
      )}
    </div>
  )
}
