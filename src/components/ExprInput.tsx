import { useState } from "react"
import { generateTruthTable } from "../utils/bc_generate_truth_table"
import { type Result } from "../utils/bc_syntax"
import styles from "./ExprInput.module.css"
import HelpButton from "./HelpButton"
import ValidExprExamples from "./ValidExprExamples"

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

type ExprInputProps = {
  onResultChange: (result: Result | null) => void
}

export default function ExprInput({ onResultChange }: ExprInputProps) {
  const [input, setInput] = useState("")
  const [showExamples, setShowExamples] = useState(false)

  function toggleExamples() {
    setShowExamples(prev => !prev)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const processedInput = addMulOperators(input.replace(/\s/g, ''))
    const res = generateTruthTable(processedInput)
    onResultChange(res)
  }



  return (
    <div className={styles["form-container"]}>
      <div className={styles.card}>
        <HelpButton onClick={toggleExamples} />
        {showExamples ? (
          <>
            <h1>Syntax Examples</h1>
            <ValidExprExamples />
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className={styles["form-input"]}
              type="text"
              placeholder="Enter boolean expression"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button type="submit" className={styles["form-button"]}>
              Generate Truth Table
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
