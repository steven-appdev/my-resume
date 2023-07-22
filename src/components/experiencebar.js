export default function ExperienceBar(props){
    return(
        <div className='rectangle relative'>
            <div className='inner-rectangle absolute' style={{width: `${props.experience}`}}/>
            <p className="text-white font-bold relative">{props.experience}</p>
        </div>
    )
}