import CustomButton from "./custom-buttons"

function Link(props){
    if(props.link !== null){
        return(
            <a href={props.link}>
                <CustomButton type="git"/>
            </a>
        )
    }
}

function Video(props){
    if(props.link !== null){
        return(
            <a href={props.link}>
                <CustomButton type="youtube"/>
            </a>
        )
    }
}

function Download(props){
    if(props.link !== null){
        return(
            <a href={props.link} download>
                <CustomButton type="download"/>
            </a>
        )
    }
}

export default function PastProject(props){
    return(
        <div className="animate__animated animate__bounceIn flex flex-col relative p-10 border-[2px] border-grey-200 hover:border-black duration-300 rounded-lg text-center">
            <h2 className="text-[25px] font-bold pb-2">{props.content.title}</h2>
            <p>{props.content.type}</p>
            <p className="font-light mx-auto my-5 w-full sm:w-[80%] h-auto">{props.content.description}</p>
            <div className="flex flex-wrap h-auto p-1 w-full sm:w-[80%] mx-auto justify-center m-5">
                {props.content.language.map((item) => (
                    <p className="rounded-full bg-gray-600 hover:bg-gray-500 duration-300 text-white w-fit px-5 py-1 m-1"><i class="fa fa-tag" aria-hidden="true"></i> {item}</p>
                ))}
            </div>
            <div className="my-1 w-full sm:w-[80%] mx-auto">
                <Link link={props.content.link}/>
                <Video link={props.content.video}/>
                <Download link={props.content.download}/>
            </div>
        </div>
    )
}