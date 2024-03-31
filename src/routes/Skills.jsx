import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../components/ui/accordion";
import CertificateCard from "../../components/CertificateCard.jsx";
import certs from "../assets/Certs.jsx";

export default function Skills() {

	return (
		<>
			<Accordion
				type="single"
				collapsible
				className="w-5/6 m-auto max-w-[850px]"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-2xl">Skills</AccordionTrigger>
					<AccordionContent>
						<div>
							<Accordion type="multiple" collapsible className="p-4">
								<AccordionItem value="item-1">
									<AccordionTrigger >
										Web Development
									</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>JavaScript</li>
											<li>React.js</li>
											<li>node.js</li>
											<li>Express</li>
											<li>Tailwind CSS</li>
											<li>RESTful APIs</li>
											<li>Flask</li>
											<li>HTML/CSS</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>
										Languages
									</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>JavaScript</li>
											<li>Python</li>
											<li>Java</li>
											<li>C/C++</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>
										Miscellaneous
									</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>MySQL/DBMS</li>
											<li>Object Oriented Programming</li>
											<li>Canva</li>
											<li>Basic Photo and Video Editing</li>
											<li>Word, Excel, PowerPoint</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="text-2xl">Certifications</AccordionTrigger>
					<AccordionContent>
						<div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
						  {certs.map((certificate) => (
                <CertificateCard
                  name={certificate["Course Name"]}
                  issuer={certificate["Issued By"]}
                  date={certificate["Issue Date"]}
                  cred={certificate["Credential Link"]}
                  iPath={certificate.ImagePath}
                />
              ))}
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="text-2xl">Achievements</AccordionTrigger>
					<AccordionContent>
						Yes. I haven't achieved anything in life
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
