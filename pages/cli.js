import { useRef, useState } from "react"
import styles from "../styles/Cool.module.css"
import Draggable, { DraggableCore } from "react-draggable"
import { useRouter } from "next/router"
import Experienced from "../components/Experienced"
import skills from "../components/skill_raw"
import Skill from "../components/Skill"
import Head from "next/head"



function About() {
    return (
        <Draggable>
            <div className={`${styles.terminalBox} ${'mt-4 mt-md-0'}`} >
                <Head>
                    <title>Mohammad Irfan Portfolio</title>
                </Head>
                <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable"}`}> </div>

                <div className={`${styles.crtLines}`} >
                    <div className="pl-3 pt-2" style={{ "fontSize": "30px", "fontWeight": "bold" }} >Sr. Software Developer </div>

                    <div className={`${"d-flex p-3"}`}  >

                        <div>
                            <svg fill="rgb(153, 218, 175, 0.8)" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" /></svg>

                        </div>


                        <div className={`${'ml-4'} ${"d-flex"} ${'flex-column'}`} >
                            <div> Name: Md. Irfan </div>
                            <div> Experience: 7Y </div>
                            <div> Email: md.irfan40@gmail.com </div>
                            <div>Location: Gurugram </div>
                            <div>Languages: Hindi, English </div>
                        </div>
                    </div>
                </div>


            </div>
        </Draggable>
    )
}

function Help() {
    return (
        <Draggable>
            <div className={`${styles.terminalBox}`} >
                <div className={`${styles.terminalBox}`} >
                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable"}`}> </div>
                    <span className="p-2" > Help</span>
                </div>


                <div className={`${styles.crtLines} ${'p-3'}`} >
                    <p>
                        <i>htop -</i> Run this command to see work experiences and their responsibilities. Why htop? Because htop lists all the processes; every process holds some kind of context. Processes represent my job; context represents my work.
                    </p>
                    <p>
                        <i>ls -</i> This command will show my skills. Why ls? ls lists all files and directories persisted on disk. These files and directories represent my skills that are persisted in mind. Also last two character of skills is ls.
                    </p>
                    <p>
                        <i>df -</i> This command displays disk space usage. Similarly, my educational background can be likened to the information displayed by the df command. Just as df shows how disk space is utilized, my education showcases how my knowledge and skills are utilized to solve the problems.
                    </p>
                    <p>
                        <i>wget -</i> This command downloads my CV. Why wget? Wget is used to download files, and I use it to download my CV.
                    </p>
                    <p>
                        <i>whoami -</i> No need to explain this command; it explains itself.
                    </p>
                    <p>
                        <i>linkd -</i> This command opens my LinkedIn profile in a new tab.
                    </p>
                </div>


            </div>
        </Draggable>
    )
}


function Work() {
    return (
        <Draggable>
            <div>
                <div className={`${styles.terminalBox}`} >
                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable pl-2"} `}>
                    </div>

                    <span className={`${styles.crtLines} ${"px-3"}`}>Work History</span>


                </div>


                <div className={`${styles.terminalBox}`} >


                    <div className={styles.crtLines} >
                        <Experienced titleClass={"text-warning"} ></Experienced>
                    </div>


                </div>
            </div>
        </Draggable>
    )
}

function Education() {
    return (
        <Draggable>
            <div className={`${styles.terminalBox}`} >
                <div className={`${styles.terminalBox}`} >
                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable"}`}> </div>
                    <span className="p-2" >Education </span>
                </div>
                <div className={styles.crtLines}  >
                    <ul className=" normal-font mt-4 ">
                        <li className="mb-2" >
                            <span className="mr-2">
                                {" "}
                                <svg
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z" />
                                </svg>
                            </span>
                            <b>Scaler:</b> Specialized in Software Development & Problem Solving (2023)
                        </li>
                        <li className="mb-2" >
                            <span className="mr-2">
                                {" "}
                                <svg
                                    fill="#fff"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z" />
                                </svg>
                            </span>
                            <b>MDU Rohtak: </b> B.Tech. CSE (2017)
                        </li>
                        <li className="mb-2">
                            <span className="mr-2">
                                <svg
                                    fill="#fff"
                                    width="18"
                                    height="18"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M16.112 20.985h-8.217c-1.912-.062 8.217 0 8.217 0m-7.029-18.69c.29-1.242 1.408-2.275 2.904-2.295 1.454 0 2.631 1.002 2.934 2.308 2.108.516 4.063 1.824 4.722 4.939.28 1.321.539 2.995.754 4.756.8.043 1.873.262 2.107 1.585.317 1.793.496 4.021.496 5.325 0 1.646-1.128 2.053-2.001 2.122-.048 1.708-.737 2.902-2.999 2.948-1.632.033-3.812.008-5.996 0-2.185.008-4.364.033-5.996 0-2.263-.046-2.951-1.24-3-2.948-.873-.067-2.008-.471-2.008-2.121 0-1.307.18-3.54.496-5.326.234-1.327 1.314-1.544 2.114-1.585.213-1.768.466-3.439.733-4.735.649-3.154 2.59-4.465 4.74-4.973m9.917 15.693c-.012 2.008-.987 2.939-2.888 2.997-2.739.026-5.478.028-8.217 0-1.912-.062-2.882-1.188-2.895-2.997v-3.997h14v3.997zm-8-2.998v2.998c0 .553.449.999 1 .999.552 0 1-.447 1-.999v-2.998h5v2.995c0 1.438-.547 1.963-1.908 2-2.725.026-5.451.028-8.176 0-1.21-.035-1.862-.57-1.916-1.889-.024-1.035 0-2.071 0-3.106h5zm.459-9.71c-1.876.104-2.858.83-3.466 2.298-.489 1.182-.648 2.649-.729 3.915-.061.623-.953.625-.999-.019.014-.657.163-2.022.401-3.012.435-1.81 1.27-3.278 3.055-3.879 1.25-.422 3.247-.414 4.462-.037 1.92.592 2.786 2.167 3.21 4.132.2.93.323 2.155.336 2.826-.049.612-.886.648-.994.055-.101-1-.091-1.99-.485-3.325-.607-2.063-1.718-2.86-3.775-2.959l.692 2.385c.166.746-.405 1.454-1.167 1.454-.749 0-1.321-.685-1.172-1.429l.631-2.405zm.541 2.043c.33 0 .597.267.597.597 0 .329-.267.597-.597.597-.33 0-.597-.268-.597-.597 0-.33.267-.597.597-.597m1.791-5.221c-.33-.654-.994-1.102-1.797-1.102-.822.011-1.462.465-1.781 1.096 1.067-.128 2.46-.135 3.578.006" />
                                </svg>
                            </span>
                            12th from CBSE Board Delhi (2013)
                        </li>
                        <li className="mb-2" >
                            <span className="mr-2" >
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 7h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm-6 2h-8v1h8v-1zm11-10c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z" /></svg>
                            </span>
                            <b>Udemy:</b> Microservices with Node JS and React
                        </li>
                        <li className="mt-1">
                            <span className="mr-2" >
                                <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M19 7h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm-6 2h-8v1h8v-1zm11-10c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z" /></svg>
                            </span>
                            <b>Udemy:</b> AWS Certified Solutions Architect Associate SAA-C02 2022

                        </li>
                    </ul>
                </div>
            </div>
        </Draggable>
    )
}

function Intro() {
    return (
        <Draggable>
            <div className={`${styles.terminalBox}`} >
                <div className={`${styles.terminalBox}`} >
                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable"}`}> </div>
                    <span className="p-2" >Introduction </span>
                </div>
                <div className={styles.crtLines}  >

                    <div style={{ fontSize: "16px" }} className="p-3" >
                        With over 7 years of hands-on experience in software development, I am Mohammad Irfan, a seasoned Senior Software Developer with a passion for crafting innovative and scalable solutions. With a solid foundation in various programming languages, frameworks, and system architectures, I thrive on the challenges of designing and implementing software systems that drive efficiency and performance. My track record includes leading teams to deliver impactful projects while optimizing operational costs and enhancing system reliability. I am committed to continuous learning and staying updated with the latest technologies to contribute effectively to the dynamic landscape of software development.

                    </div>

                </div>
            </div>
        </Draggable>
    )
}

function Window({ command }) {
    switch (command) {
        case "htop":
            return <Work></Work>

        case "help":
            return <Help></Help>


        case "df":
            return <Education></Education>

        case "whoami":
            return <Intro></Intro>

        default:
            return <About></About>
    }
}



export default function Cool() {
    const [command, setCommand] = useState('')
    const router = useRouter()
    const [commandError, setCommandError] = useState('')
    const [visibleWindow, setVisibleWindow] = useState('')
    const allowed_commad = new Set(["htop", "ls", "wget", "df", "clear", "linkd", "whoami", "help"])
    const commandInput = useRef()
    const audio = useRef()


    function commadEnter(e) {

        if (e.key == 'Enter') {

            setCommandError("")


            if (command && !allowed_commad.has(command)) {
                setCommandError("command not found: " + command)
                audio.current.play()

            } else {

                if (command === "wget") {
                    router.push({ pathname: "/print", query: { next: "/cli" } })
                    commandInput.current.value = ""
                } else if (command === "linkd") {
                    window.open("https://www.linkedin.com/in/md-irfan-mi-b42561b7/", '_blank');
                    commandInput.current.value = ""
                }
                else {
                    setVisibleWindow(command)
                    setCommand("")
                    commandInput.current.value = ""
                }

            }
        }


    }


    return (
        <div  >
            <video autoPlay muted loop className={styles.coolTechBg}>
                <source src="hello_world.mp4" type="video/mp4" />
            </video>
            <div className={styles.coolTech} >

                <div className="container-fluid" >
                    <div className="row" >

                        <div className="col-md-3 order-md-1 order-2" >

                            <div className={styles.terminalBox} >
                                <div className={`${styles.terminalBox}`} >
                                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines}`}> </div>

                                    <span className="p-2" > Links </span>

                                </div>

                                <div onClick={e => setVisibleWindow("clear")} className={`${styles.terminalBoxItem} ${styles.crtLines}`} >
                                    {">"}  Home
                                </div>
                                <div onClick={e => setVisibleWindow("htop")} className={`${styles.terminalBoxItem} ${styles.crtLines}`} >
                                    {">"} Work History
                                </div>
                                <div onClick={e => setVisibleWindow("ls")} className={`${styles.terminalBoxItem} ${styles.crtLines}`} >
                                    {">"} Skills
                                </div>
                                <div onClick={e => setVisibleWindow("df")} className={`${styles.terminalBoxItem} ${styles.crtLines}`} >
                                    {">"} Education
                                </div>

                            </div>
                            <Draggable

                            >
                                <div className={`${styles.terminalBox} ${"mt-4 mb-5 mb-md-0"} ${"dragable"}`} >
                                    <div className={`${styles.terminalBox}`} >
                                        <div className={`${styles.terminalBoxHeader} ${styles.crtLines}`}> </div>
                                        <span className="px-2" >Commands</span>
                                    </div>
                                    <div className={`${styles.crtLines} ${'mt-2'}`} >
                                        <div className="py-1 px-3" >  <i>htop </i>- Work Experience</div>
                                        <div className="py-1 px-3" >  <i>ls </i>- Skills</div>
                                        <div className="py-1 px-3" >  <i>df </i>- Education</div>
                                        <div className="py-1 px-3" >  <i>help </i>- Help</div>
                                        <div className="py-1 px-3" >  <i>wget </i>- Download CV</div>
                                        <div className="py-1 px-3" >  <i>whoami </i>- Introduction</div>
                                        <div className="py-1 px-3" >  <i>linkd </i>- Open linkedin profile </div>
                                        <div className="py-1 px-3" >  <i>clear </i>- Reset</div>
                                    </div>
                                </div>
                            </Draggable>

                        </div>

                        <div className="col-md-9 order-md-2 order-1"  >


                            <div className={`${"d-flex flex-column"}  ${styles.mainContent}`}>
                                <div className="row" >
                                    <img width={350} style={{ position: 'absolute', left: "-11px", opacity: 0.2 }} src="name.png" ></img>
                                    <img width={300} style={{ position: 'absolute', right: "0", top: "100px", opacity: 0.1, rotate: "45deg" }} src="name.png" ></img>
                                    <img width={200} style={{ position: 'absolute', right: "90px", top: "160px", opacity: 0.1, rotate: "45deg" }} src="name.png" ></img>

                                    <div className="col-md-8 mb-4 mb-md-0" >
                                        <Window command={visibleWindow} > </Window>

                                    </div>

                                    <div className="col-md-4 ml-auto" >
                                        {visibleWindow == "ls" ? <Draggable>
                                            <div className={`${styles.terminalBox}`} >
                                                <div className={`${styles.terminalBox}`} >
                                                    <div className={`${styles.terminalBoxHeader} ${styles.crtLines} ${"dragable"}`}> </div>
                                                    <span className="p-2" >Skills </span>
                                                </div>

                                                <div className={`${styles.crtLines}`} >
                                                    <Skill isSingle={true} showSoftSkill={false} showPersonalInfo={false} ></Skill>
                                                </div>


                                            </div>
                                        </Draggable> : null}
                                    </div>

                                </div>

                                {/* command area */}


                                <div className={ `${"mt-auto"} ${styles.terminalInputBox}` } >

                                    <audio ref={audio} src="jug-pop-3-186888.mp3" > </audio>

                                    <div className={`${styles.terminalBox}`} >
            
                                        <div className={`${styles.terminalBoxHeader} ${styles.crtLines}`}> </div>
                         

                                        <div className={`${"p-2"} `} >
                                            <span className={styles.text} > {">"} </span>
                                            <input ref={commandInput} onKeyDown={commadEnter} onChange={e => setCommand(e.target.value)} placeholder="Enter command here" className={`${styles.commandInput}`} />
                                        </div>
                                        {commandError.length ?
                                            <div className="p-2 small" >
                                                {commandError}
                                            </div> : null
                                        }


                                    </div>

                                </div>

                                
                            </div>
                        </div>


                    </div>
                </div>



            </div>
            {/* <div className="lines" > </div> */}
        </div>
    )
}