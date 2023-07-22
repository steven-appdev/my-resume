import down from '../img/sort-down.png';

function Academic(){
    return(
        <div className="flex flex-col h-screen">
            <div className='flex flex-1 justify-center items-center main'>
                <div className='flex flex-col academic'>
                    <h1 className="animate__animated animate__fadeIn academic-title">here are my Academic History.</h1>

                    <div className="animate__animated animate__flipInX academic-entry">
                        <h2>Diploma in Computer Studies</h2>
                        <p>UOW Malaysia KDU</p>
                        <p>Malaysia</p>
                        <p>2017-2019</p>
                        <p>Graduated with Distinction</p>
                    </div>

                    <div className='animate__animated animate__flipInX flex justify-center'>
                        <img className='down' src={down}></img>
                    </div>

                    <div className="animate__animated animate__flipInX academic-entry">
                        <h2>Computer Science BSc (Hons)</h2>
                        <p>Northumbria University</p>
                        <p>United Kingdom</p>
                        <p>2020-2022</p>
                        <p>Graduated and Awarded with First Class Honour</p>
                    </div>

                    <div className='animate__animated animate__flipInX flex justify-center'>
                        <img className='down' src={down}></img>
                    </div>

                    <div className="animate__animated animate__flipInX academic-entry">
                        <h2>Advanced Computer Science MSc</h2>
                        <p>Northumbria University</p>
                        <p>United Kingdom</p>
                        <p>2023-Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Academic;