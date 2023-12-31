import portrait from "../img/cvPhoto.png";
import Title from "../components/title";
import CustomButton from "../components/custom-buttons";

export default function Home() {
    return (
        <div className="animate__animated animate__fadeIn flex flex-col grow items-center pt-10">
            <Title title="my name is Steven."/>
            <div>
                <div className="flex flex-col lg:flex-row">
                    <div className="py-10 px-5">
                        <img src={portrait} alt="This is my face" className="w-60 m-auto"></img>
                    </div>
                    <div className="shrink p-5 lg:p-10 w-full lg:w-[32rem] text-justify">
                        <p>
                            My name is Tan Teck Xun. But you can call me Steven. I am a fresh graduate from Northumbria University who is currently looking for opportunities and are not afraid of taking any new challenges.
                            I have been learning various programming skills for the past 6 years and I always love to challenge myself to develop different project, ranging from web to games development, take this website as a robust example!
                            I would consider myself as a fast learner who can constantly and rapidly adapt new skill and turn it into solution.
                            I personally believed that there is never an end when it comes to learning new skills, and everyone will definitely learn something new everyday.
                            In conclusion, I am very excited and I am commited that I would be contributing 100% of my skills, knowledge and passion towards any opportunities given to me in the future.
                        </p>
                    </div>
                </div>
                <div className="mt-20 w-[92%] mx-auto">
                    <a href="mailto: steventan@outlook.my">
                        <CustomButton type="email"/>
                    </a>
                    <a href="tel:+6010-2959289">
                        <CustomButton type="phone"/>
                    </a>
                </div>
            </div>
        </div>
    );
}