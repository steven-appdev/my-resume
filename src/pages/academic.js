import Title from '../components/title';

const history = [
    { title: "Diploma in Computer Studies", university: "UOW Malaysia KDU", country: "Malaysia", year: "2017-2019", award: "Graduated with Distinction"},
    { title: "Computer Science BSc (Hons)", university: "Northumbria University", country: "United Kingdom", year: "2020-2022", award: "Graduated and Awarded with First Class Honour"},
    { title: "Advanced Computer Science MSc", university: "Northumbria University", country: "United Kingdom", year: "2023-Present", award: "tbd"},
]

export default function Academic(){
    return(
        <div className='flex flex-col h-screen pt-10'>
            <div className='flex flex-1 justify-center main'>
                <div className='flex flex-col academic'>
                    <Title title='here are my Academic History.'/>
                    {history.map((item) => (
                        <div className='animate__animated animate__flipInX academic-entry'>
                            <h2 className='text-[25px] font-bold pb-2'>{item.title}</h2>
                            <p>{item.university}</p>
                            <p>{item.country}</p>
                            <p>{item.year}</p>
                            <p>{item.award}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}