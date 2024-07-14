import AcademicHistory from "../components/academichistory";
import Title from "../components/title";

const history = [
    { title: "Diploma in Computer Studies", university: "UOW Malaysia KDU", country: "Malaysia", year: "2017-2019", award: "Graduated with Distinction"},
    { title: "Bachelor's Degree (Hons) in Computer Science", university: "Northumbria University", country: "United Kingdom", year: "2020-2022", award: "Graduated with First Class Honour"},
    { title: "Master of Science in Advanced Computer Science", university: "Northumbria University", country: "United Kingdom", year: "2023-2024", award: "Graduated with First Class Honour"},
]

export default function Academic(){
    return(
        <div className="flex flex-col grow items-center pt-10">
            <Title title="here are my Academic History."/>
            <div className="w-full lg:w-[1250px]">
                {history.map((item) => (
                    <AcademicHistory content={item}/>
                ))}
            </div>
        </div>
    );
}