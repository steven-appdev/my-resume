import PastProject from "../components/pastproject";
import Title from "../components/title";

const pastproj = [
    {title: "My Resume", type:"Self Improvement", description:"The website you are currently looking at! The website was developed entirely using ReactJS with the support of Tailwind CSS. The website consists of numerous information about me, ranging from something about me to my personal projects that I had worked on. The purpose of the website is to both polish my React skills alongside with creating a space that could served as my portfolio.", language: ["React", "Tailwind"], link: "https://github.com/steven-appdev/my-resume", video: null},
    {title: "Pointless Calculator API", type:"Self Improvement/Fun Project", description:"Ever find an API that makes you ask why it exist? Pointless Calculator is that API that calculates two numbers using various operators. But on all seriousness, this is a self improvement project to polish my Python skill and learn Flask.", language: ["Python", "Flask"], link: "https://github.com/steven-appdev/api-calculator", video: null},
    {title: "Smart Plant Caring System using IoT", type:"Bachelor Degree Project", description:"A smart device that adopted the IoT technology with the combination of sensor to automate the process of taking cares of a plant. The project also features a website that visualise all the collected data. If you wish to learn more about the project, feel free to download my dissertation that has been written and submitted in partial fulfilment of the regulations governing the award of the Degree of BSc. (Honours) Computer Science.", language: ["PHP", "IoT", "Docker", "MSSQL", "MQTT", "Telegraf", "InfluxDB", "Bootstrap"], link: null, video: "https://youtu.be/r4GNv0IWV4M"},
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