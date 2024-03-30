import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="sticky top-0 z-20 px-6 pt-6 pb-4 bg-black ">
			<header>
				<div className="flex justify-between">
					<Link to="/">
						<h1 className="text-3xl -rotate-[15deg] font-['Dancing_Script']">
							Sukh
						</h1>
					</Link>
					<ul className="flex justify-center gap-4 list-none">
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
	);
};
export default Header;
