import Hero from "../../components/Hero.jsx";
import About from "../../components/About.jsx";
import { useRef } from "react";

export default function Home(){
    const aboutRef = useRef(null);
    return <>
        <Hero aboutRef={aboutRef}/>
        <About ref={aboutRef}/>
    </>
}