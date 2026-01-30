import styles from './AboutText.module.css';

export default function AboutText() {
    return (
        <div className='page-container'>
            <ul className={styles['about-list']}>
                <li>
                    <p>I developed a need for this tool when taking a digital systems course during my undergrad degree. In the course, designing logical circuit boards required creating complex truth tables, and throughout the course I tried many online truth table generators that were helpful for checking my work, however the syntax was too verbose for my liking.</p>
                </li>
                <li>
                    <p>I always preferred writing boolean expressions in algebraic form, and since I couldn't find a tool that was able to parse expressions in my preferred notation, I took it upon myself to create BoolCalc, a tool with a streamlined syntax for entering complex boolean expressions to be translated into truth tables.</p>
                </li>
                <li>
                    <p>This tool was originally coded in Haskell for a different course I took on the organization of programming languages which taught me how to translate a context-free grammar into a functional language.</p>
                </li>
                <li>
                    <p>For the purposes of hosting this as a website, I rewrote the Haskell code in Typescript, which allows the parsing and evaulation of Boolean expressions to be executed client-side, eliminating the need for a backend server.</p>
                </li>
            </ul>
        </div>
    )
}