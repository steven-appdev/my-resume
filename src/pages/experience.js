import ExperienceBar from '../components/experiencebar';

const codeExp = [
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", language: "HTML5", experience: "80%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", language: "CSS", experience: "60%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", language: "Javascript", experience: "60%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", language: "C#", experience: "80%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", language: "Docker", experience: "30%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", language: "React", experience: "60%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg", language: "Arduino", experience: "50%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", language: "C", experience: "30%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", language: "PHP", experience: "80%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", language: "Python", experience: "70%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", language: "Flask", experience: "40%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", language: "Unity", experience: "50%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", language: "Bootstrap", experience: "70%"},
    {logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", language: "Tailwind", experience: "70%"},
]

export default function experience(){
    return(
        <div className="flex flex-col h-screen pt-10">
            <div className='flex flex-1 justify-center main'>
                <div className='flex flex-col academic'>
                    <h1 className="animate__animated animate__fadeIn academic-title pb-20">here are my Experiences.</h1>
                    <div className='grid grid-cols-5 gap-10'>
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"></link>
                        {codeExp.map((item) => (
                            <div className='flex flex-col animate__animated animate__flipInX'>
                                <img className="language-logo mx-auto mb-5" src={item.logo} alt={item.language}/>
                                <ExperienceBar experience={item.experience}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}