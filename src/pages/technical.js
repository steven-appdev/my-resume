import ExperienceBar from "../components/experiencebar";
import Title from "../components/title";

const codeExp = [
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", language: "HTML5", experience: 80},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", language: "CSS", experience: 70},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", language: "Javascript", experience: 70},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", language: "C#", experience: 80},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", language: "Docker", experience: 35},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", language: "React", experience: 65},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg", language: "Arduino", experience: 30},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", language: "C", experience: 30},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", language: "PHP", experience: 80},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", language: "Python", experience: 50},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", language: "Flask", experience: 30},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", language: "Unity", experience: 50},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", language: "Bootstrap", experience: 60},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", language: "Tailwind", experience: 70},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", language: "Godot", experience: 40},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", language: "MySQL", experience: 70}
]

export default function technical(){
    return(
        <div className="flex flex-col grow items-center pt-10">
            <Title title="here are my Technical Skills."/>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-10 w-[275px] md:w-[600px] lg:w-[1050px]">
                {codeExp.map((item) => (
                    <div className="flex flex-col animate__animated animate__flipInX">
                        <img className="language-logo mx-auto mb-5 hover:-translate-y-1 hover:scale-110 duration-300" src={item.logo} alt={item.language}/>
                        <ExperienceBar experience={item.experience}/>
                    </div>
                ))}
            </div>
            <h2 className="text-5xl font-light mt-20 text-center">and countless to come in the future...</h2>
        </div>
    )
}