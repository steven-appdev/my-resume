import Title from "../components/title";
import WorkExperience from "../components/workexp";

const experience = [
    {
        company: "Infineon Technologies",
        position: "SAP Basis Trainee (Diploma Internship)",
        location: "Melaka, Malaysia",
        duration: "Jan, 2019 - Apr, 2019",
        description: "A 4-months internship taken as part of the Diploma programme at KDU University. Involved in handling IT Service Management system tickets submitted by clients, managing user account and assigning user roles within the IT system (e.g. creating SAP account)."
    }
]

export default function work(){
    return(
        <div className="flex flex-col grow items-center pt-10">
            <Title title="here are my Working Experience."/>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-full lg:w-[1250px]">
                {experience.map((item) => (
                    <WorkExperience content={item}/>
                ))}
            </div>
        </div>
    )
}