import PastProject from "../components/pastproject";
import Title from "../components/title";

const pastproj = [
    {title: "My Resume", type:"Self Improvement", description:"This website is the project you're looking at! Test", language: "ReactJS", link: "https://www.google.com/?&bih=1057&biw=1920&hl=en"},
    {title: "My Resume", type:"Self Improvement", description:"This website is the project you're looking at! Test", language: "ReactJS", link: null},
    {title: "My Resume", type:"Self Improvement", description:"This website is the project you're looking at! Test", language: "ReactJS", link: "true"},
]

export default function Project(){
    return(
        <div className="flex flex-col grow items-center pt-10">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
            <Title title="here are my Projects."/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full lg:w-[950px]">
                {pastproj.map((item) => (
                    <PastProject content={item}/>
                ))}
            </div>
        </div>
    )
}