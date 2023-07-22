import portrait from '../img/cvPhoto.png';

function Home() {
    return (
        <div className='animate__animated animate__fadeInDown flex flex-col h-screen'>
            <div className='flex flex-1 justify-center items-center main'>
                <div className='flex flex-col'>
                    <div>
                        <h1>my name is Steven.</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-10 px-5'>
                            <img src={portrait} alt='This is my face' className='w-60'></img>
                            </div>
                            <div className='shrink p-10 about'>
                            <p>
                                My name is Tan Teck Xun. But you can call me Steven. I am a fresh graduate from Northumbria University who is currently looking for opportunities and are not afraid of taking any new challenges.
                                I have been learning various programming skills for the past 6 years and I always love to challenge myself to develop different project, ranging from web to games development, take this website as a robust example!
                                I would consider myself as a fast learner who can constantly and rapidly adapt new skill and turn it into solution.
                                I personally believed that there is never an end when it comes to learning new skills, and everyone will definitely learn something new everyday.
                                In conclusion, I am very excited and I am commited that I would be contributing 100% of my skills, knowledge and passion towards any opportunities given to me in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;