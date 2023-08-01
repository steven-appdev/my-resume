//Each Past Project components should consists of Title, Description, Language and GitHub link (if applicable)

import GitHubButton from "./github-button"

function Link(props){
    if(props.link !== null){
        return(
            <a href={props.link} className="mx-auto">
                <GitHubButton/>
            </a>
        )
    }
    return(<p className="italic font-light px-10 py-2 mt-7">No repository available.</p>)
}

export default function PastProject(props){
    return(
        <div className="animate__animated animate__flipInX flex flex-col p-10 border-[2px] border-grey-200 hover:border-black duration-300 rounded-lg text-center">
            <h2 className="text-[25px] font-bold pb-2">{props.content.title}</h2>
            <p>{props.content.type}</p>
            <p>{props.content.description}</p>
            <p>{props.content.language}</p>
            <Link link={props.content.link}/>
        </div>
    )
}