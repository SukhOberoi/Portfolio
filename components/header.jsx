import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
	const [menu, setMenu] = useState(true);

	return (
		<>
			<div className="sticky top-0 z-20 px-6 pt-6 pb-4 bg-black ">
				<header>
					<div className="flex items-end justify-between">
						<Link to="/">
							<h1 className="text-3xl -rotate-[15deg] font-['Dancing_Script']">
								Sukh
							</h1>
						</Link>
						<div className="md:hidden">
							<button className="text-white" onClick={()=>{setMenu(!menu)}}>
								{menu ? (
									<FontAwesomeIcon icon={faBars} className="w-5 h-5" />
								) : (
									<FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
								)}
							</button>
						</div>
						<ul className="hidden space-x-4 md:flex">
							<Link to="/">
								<li className="p-2">Home</li>
							</Link>
							<Link to="/Skills">
								<li className="p-2">Skills</li>
							</Link>
							<Link to="/Projects">
								<li className="p-2">Projects</li>
							</Link>
							<Link to="/Extras">
								<li className="p-2">Extras</li>
							</Link>
						</ul>
					</div>
				</header>
			</div>
{	!menu &&		<div className="flex justify-center items-center fixed z-20 top-[76px] h-dvh w-full bg-black pb-4 md:hidden">
			<ul className="flex flex-col items-center gap-2 text-center md:hidden" onClick={()=>{setMenu(true)}}>
							<Link to="/">
								<li className="p-2 border-2 border-zinc-500 rounded-lg w-[250px]">Home</li>
							</Link>
							<Link to="/Skills">
								<li className="p-2 border-2 border-zinc-500 rounded-lg w-[250px]">Skills</li>
							</Link>
							<Link to="/Projects">
								<li className="p-2 border-2 border-zinc-500 rounded-lg w-[250px]">Projects</li>
							</Link>
							<Link to="/Extras">
								<li className="p-2 border-2 border-zinc-500 rounded-lg w-[250px]">Extras</li>
							</Link>
						</ul>
			</div>}
		</>
	);
};
export default Header;
