export default function WorkExperience(props){
    return(
        <div className="animate__animated animate__flipInX border-[2px] mb-5 p-10 border-grey-200 hover:border-black duration-300 rounded-lg text-center">
            <h2 className="text-[25px] font-bold pb-2">{props.content.company}</h2>
            <p>{props.content.position}</p>
            <p>{props.content.location}</p>
            <p>{props.content.duration}</p>
            <p className="font-light mx-auto my-5 w-full sm:w-[80%] h-auto">{props.content.description}</p>
        </div>
    )
}