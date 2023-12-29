function ButtonText(props){
    switch(props.type){
        case "git":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-github my-auto pr-2" style={{fontSize: "20px"}}></i>GitHub
                </p>
            )
        
        case "youtube":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-youtube-play my-auto pr-2" style={{fontSize: "20px"}}></i>YouTube
                </p>
            )

        case "email":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-envelope my-auto pr-2" style={{fontSize: "20px"}}></i>Email me at steventan@outlook.my
                </p>
            )

        case "phone":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-phone my-auto pr-2" style={{fontSize: "20px"}}></i>Call me at +6010-2959289
                </p>
            )

        case "download":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-download my-auto pr-2" style={{fontSize: "20px"}}></i>Report
                </p>
            )

        case "itch":
            return(
                <p className="px-2 my-auto">
                    <i className="fa fa-gamepad my-auto pr-2" style={{fontSize: "20px"}}></i>Itch.io
                </p>
            )

        default:
            return null;
    }
}

export default function CustomButton(props){
    return(
        <button className="flex flex-row rounded-full bg-gray-800 hover:bg-gray-600 duration-300 text-white px-10 py-3 m-3 mx-auto w-full justify-center">
            <ButtonText type={props.type}/>
        </button>
    )
}