export default function AboutText() {
    return (
        <div className="about-container">
            <h1 className="about-header about-rules">About</h1>
            <div className="text-container">
                <p>I developed a need for this tool when taking a digital systems course during my undergrad degree. In the course, designing logical circuit boards required creating complex truth tables, and throughout the course I tried many online truth table generators that were helpful for checking my work, however the syntax was always far too verbose for my liking.</p>
                <p>I always preferred writing boolean expressions in algebraic form, and since I couldn't find a tool that was able to parse expressions in my preferred notation, I took it upon myself to create boolcalc, a streamlined tool for entering complex boolean expressions to be translated into truth tables.</p>
                <p>This tool was originally coded in Haskell for a different course I took on the organization of programming languages which taught me how to translate a context-free grammar into a functional language.</p>
                <p>For the purposes of hosting this as a website, I rewrote the Haskell code in Typescript, which allows the parsing logic to be executed client-side, eliminating the need for a backend server.</p>
                <p>My hope is that users of this tool, especially electrical engineering students will be able to efficiently translate complex boolean expressions into valid truth tables to facilitate the design of complex logical circuits.</p>
            </div>
        </div>
    )
}