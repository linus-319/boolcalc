# BoolCalc

View the webpage [here](https://boolcalc.tfagan.com).

# About

The purpose of this tool is to provide users a simple syntax for Boolean Algebra expressions that is as close to regular algebra syntax as possible.

Boolean Algebra syntax replaces the logical `and`, `or`, and `not` with `*`, `+`, and `!` respectively. 

In the spirit of algebraic notation, since the logical `and` is represented as multiplication, for such operations you can remove the `*` operator entirely, so that `a * b` is equivalent to `ab`.

Finally, this tool supports any level of nested parenthesis, where an expression inside parenthesis is evaluated first.

# Examples of Valid Expressions

| Expression | Logical Translation |
| -- | -- |
| A + B | A or B |
| A * B | A and B |
| AB | A and B |
| !A | not A |
| (A+B)*C | (A or B) and C |
| (A+B)C | (A or B) and C |
| (ABC)+(!BCD) | (A and B and C) OR ((not B) and C and D) |
| (A+B+C)(!B+C+D) | (A or B or C) AND ((not B) or C or D) |

Notice the `not` operator in the last two examples is wrapped in parenthesis, to illustrate the order of operations.

# Order of Operations

| Evaluation Order | Boolean Algebra Operator | Logical Equivalent |
| -- | -- | -- |
| 1st | ( ) | ( any valid expression ) |
| 2nd | ! | not |
| 3rd | * | and |
| 4th | + | or |