import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";

export default function AchievementCard(props) {
	return (
		<div className="p-6 border-2 rounded-lg shadow-inner border-zinc-500">
			<h2 className="text-lg">{props.Achievement}</h2>
			<p>{props.Description}</p>
			{props.Issuer && <p>Issued By: {props.Issuer}</p>}
			{props.Date && <p>Date: {props.Date}</p>}
			{props.Link && (
				<a href={props.Link} target="blank">
					<Button variant="outline">
						Link&nbsp;
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</Button>
				</a>
			)}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			    {props.ImgList.map((img) => {
    				return (
    					<ModalImage
    						className="mt-2 border-2 rounded-lg border-zinc-500 "
    						small={img}
    						large={img}
    						alt="Image"
    						hideZoom={true}
    						hideDownload={true}
    					/>
    				);
    			})}
			</div>
		</div>
	);
}
