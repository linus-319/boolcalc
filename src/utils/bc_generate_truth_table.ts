import { parser } from './bc_parser';
import type { Result } from './bc_syntax';
import { evalProgram } from './bc_evaluator';

export function generateTruthTable(input: string): Result | null {
  if (input.trim() === '') {
    return null;
  }

  try {
    const parsed = parser.Program.tryParse(input);
    return evalProgram(parsed);
  } catch (error) {
    return {
      type: 'Invalid',
      msg: error instanceof Error ? error.message : 'Parse error'
    };
  }
}