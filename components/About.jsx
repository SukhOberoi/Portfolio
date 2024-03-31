import { forwardRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpressSimple, faGoogle, faReact } from '@fortawesome/free-brands-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'


const About = forwardRef((props, ref) => {
    return (
        <div className="flex flex-col w-full h-screen gap-3 p-4 m-auto md:w-1/2 place-content-center md:p-0" ref={ref}>
            <h2 className="text-3xl text-left md:text-5xl">About Me</h2>
            <p className="text-sm md:text-base">
				Hello 👋 , I'm Sukh, a 2nd-year &lt;BTechCSEStudent
				/&gt; with a relentless passion for coding and technology. At
				the age of 9, I kickstarted my journey by creating a blog using
				WordPress <FontAwesomeIcon icon={faWordpressSimple} />, laying the foundation for my love for web
				development.
				</p>
				
				<p className="text-sm md:text-base">
				My early exposure to coding during robotics workshops in school
				ignited a spark that has grown into an addiction, propelling me
				to explore new horizons. Proud Runner-up in{" "}
				<b><FontAwesomeIcon icon={faGoogle} /> Google India's Code to Learn competition</b> in 2017, where I
				demonstrated my skills by creating the innovative 'School
				Assistant' Android app using MIT's App Inventor. These formative experiences laid the foundation for
				my deep-seated curiosity and problem-solving skills.
				</p>
				<p className="text-sm md:text-base">
				Currently, I contribute as a dedicated member of the Coding
				Ninjas Club SRM, focusing on Web Development <FontAwesomeIcon icon={faLaptopCode} /> Eager to stay
				ahead of the curve, I am delving into the world of React.js <FontAwesomeIcon icon={faReact} />
				</p>
				<p className="text-sm md:text-base">
				As a proactive problem-solver, I identified a gap in my college
				experience and crafted a Chrome extension to calculate
				attendance margins, fixing design flaws in the college portal.
				This project reflects my dedication to improving user
				experiences and finding solutions to real-world challenges.
				</p>
				<p className="text-sm md:text-base">
				One of my key strengths is adaptability. While I may initially
				resist change, I quickly embrace and integrate new concepts,
				showcasing my resilience and ability to stay ahead in the
				ever-evolving tech landscape.
				</p>
        </div>
    );
});

export default About;