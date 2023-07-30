export default function AcademicHistory(props){
    return(
        <div className='animate__animated animate__flipInX border-[2px] mb-5 p-10 border-grey-200 hover:border-black duration-300 rounded-lg text-center'>
            <h2 className='text-[25px] font-bold pb-2'>{props.content.title}</h2>
            <p>{props.content.university}</p>
            <p>{props.content.country}</p>
            <p>{props.content.year}</p>
            <p>{props.content.award}</p>
        </div>
    )
}