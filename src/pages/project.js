import PastProject from "../components/pastproject";
import Title from "../components/title";
import Dissertation from "../files/spcs-dissertation.pdf";
import MSCDissertation from "../files/nss-dissertation.pdf";

const pastproj = [
    {
        title: "My Resume", 
        type:"Self Improvement", 
        description:"The website you are currently looking at! The website was developed entirely using ReactJS with the support of Tailwind CSS. The website consists of numerous information about me, ranging from something about me to my personal projects that I had worked on. The purpose of the website is to both polish my React skills alongside with creating a space that could served as my portfolio.", 
        tags: ["React", "Tailwind"], 
        git: "https://github.com/steven-appdev/my-resume"
    },
    {
        title: "Pointless Calculator API", 
        type:"Self Improvement/Fun Project", 
        description:"Ever find an API that makes you ask why it exist? Pointless Calculator is that API that calculates two numbers using various operators. But on all seriousness, this is a self improvement project to polish my Python skill and learn Flask.", 
        tags: ["Python", "Flask"], 
        git: "https://github.com/steven-appdev/api-calculator"
    },
    {
        title: "Smart Plant Caring System using IoT", 
        type:"Bachelor's Degree Final Year Project", 
        description:"A smart device that adopted the IoT technology with the combination of sensor to automate the process of taking cares of a plant. The project also features a website that visualise all the collected data. If you wish to learn more about the project, feel free to download my dissertation that has been written and submitted in partial fulfilment of the regulations governing the award of the Degree of BSc. (Honours) Computer Science.", 
        tags: ["PHP", "IoT", "Docker", "MSSQL", "MQTT", "Telegraf", "InfluxDB", "Bootstrap", "JavaScript"],
        video: "https://youtu.be/r4GNv0IWV4M",
        download: Dissertation
    },
    {
        title: "Starducks Coffee",
        type:"Self Improvement",
        description:"Starduck Coffee is a game made using Godot for Coffee Jam 2023 under 14 days. You play as Mocha, who is a new employee at Starduck Coffee. Your job is to serve as many customers as possible without making them run out of patience or making any rookie mistakes.",
        tags: ["Godot", "C#", "Aseprite", "Game Jam", "Placed #17"],
        git: "https://github.com/steven-appdev/starduck-coffee",
        video: "https://www.youtube.com/watch?v=82xSyFJp0fw",
        itch: "https://stevenplus.itch.io/starducks-coffee"
    },
    {
        title: "Epic Free Bot",
        type:"Self Improvement",
        description:"A custom automated Discord bot that retrieves free game on Epic Store daily and posting it on Discord server as an embedded message .",
        tags: ["JavaScript", "Discord Bot", "Automation", "Embedded Message"],
        git: "https://github.com/steven-appdev/epic-free-bot"
    },
    {
        title: "Interactive Visualisation for National Student Survey data",
        type:"Master's Degree Final Year Project",
        description:"An interactive dashboard has been developed to visualises the National Student Survey (NSS) data (e.g., Positivity Scores, Response Rate). The NSS is an annual survey published to assist higher education institutions in evaluating teaching performance and student satisfaction.",
        tags: ["TypeScript", "React", "Tailwind", "MySQL", "PHP"],
        git: "https://github.com/steven-appdev/nss-dashboard",
        download: MSCDissertation
    },
    {
        title: "National Student Survey (NSS) Data Integration System using ETL Approach",
        type:"Master's Degree Final Year Project",
        description:"Researched and developed as part of the master’s degree project by conceptualising a solution for integrating future NSS data into the existing database. The integration system hosted on a Microsoft Azure cloud Docker environment was developed using an ETL approach designed to allow big CSV data to be Extracted and Transformed before Loaded into the database.",
        tags: ["Python", "Apache Spark", "ETL Approach", "Microsoft Azure", "Docker", "Big Data"],
        git: "https://github.com/steven-appdev/nss-integration-api"
    }
]

export default function Project(){
    return(
        <div className="flex flex-col grow items-center pt-10">
            <Title title="here are my Projects."/>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10 w-full lg:w-[1250px]">
                {pastproj.map((item) => (
                    <PastProject content={item}/>
                ))}
            </div>
        </div>
    )
}