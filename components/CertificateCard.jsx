import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ModalImage from "react-modal-image";


export default function CertificateCard(props) {
	return (
		<div className="p-6 bg-black border-2 rounded-lg shadow-inner border-zinc-500">
			<h2 className="text-lg"> {props.name} </h2>
			<p className={props.cred?"":"py-2"}>Issued by: {props.issuer} {props.cred && (
				<a href={props.cred} target="blank">
					<Button variant="outline">
						Credential&nbsp;
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</Button>
				</a>
			)}</p>
			<p>Issue Date: {props.date}</p>
            <ModalImage 
            className="mt-2 border-2 rounded-lg border-zinc-500"
            small={props.iPath}
            large={props.iPath}
            alt="Certificate"
            hideZoom = {true}
            hideDownload = {true}
            />
			
		</div>
	);
}
