import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard(props) {
	return (
		<div className="grid grid-cols-1 p-6 border-2 rounded-lg shadow-inner border-zinc-500 w-[500px] bg-black">
			<h1 className="text-2xl">{props.name}</h1>
			<p className="text-justify">{props.des}</p>

			<div className="flex flex-col items-end mt-3 place-self-end">
			  <div>
			    <a href={props.url} target="blank">
    				<Button variant="outline">
    					GitHub&nbsp;
    					<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    				</Button>
    			</a>
    			{props.demo && (
    				<span> &nbsp;
    				  <a href={props.demo} target="blank">
      					<Button variant="outline">
      						Demo&nbsp;
      						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      					</Button>
      				</a>
    				</span>
    			)}
			  </div>
			
			<p className="mt-1 text-sm text-right">Language: {props.lang}</p></div>
		</div>
	);
}
