import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";
import { Button } from "./ui/button.jsx";
import { ChevronDownIcon } from "@radix-ui/react-icons";

function Hero({ aboutRef }) {
    const handleClick = (e) => {
        e.preventDefault();
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="flex flex-col items-center w-full gap-10 h-dvh place-content-center">
            <div>
                <h1 className="text-4xl text-center md:text-5xl">Hi,</h1>
                <h1 className="p-3 text-3xl text-center md:text-4xl">I'm <span className="text-4xl md:text-5xl">Sukh Singh Oberoi</span></h1>
            </div>
            <Avatar>
                <AvatarImage src="./sukh.jpeg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="icon" onClick={handleClick}>
                <ChevronDownIcon className="h-7 w-7" />
            </Button>
        </div>
    );
}

export default Hero;