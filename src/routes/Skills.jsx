import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../components/ui/accordion";
import CertificateCard from "../../components/CertificateCard.jsx";
import AchievementCard from "../../components/AchievementCard";
import Certs from "../assets/Certs.jsx";
import Achievements from "../assets/Achievements.jsx";

export default function Skills() {
	return (
		<>
			<Accordion
				type="single"
				collapsible
				className="w-5/6 m-auto max-w-[850px]"
			>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-2xl">
						Skills
					</AccordionTrigger>
					<AccordionContent>
						<div>
							<Accordion
								type="multiple"
								collapsible
								className="p-4"
							>
								<AccordionItem value="item-1">
									<AccordionTrigger>
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
											<li>
												Basic Photo and Video Editing
											</li>
											<li>Word, Excel, PowerPoint</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="text-2xl">
						Certifications
					</AccordionTrigger>
					<AccordionContent>
						<div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2">
							{Certs.map((certificate) => (
								<CertificateCard
									key={certificate["Course Name"]}
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
					<AccordionTrigger className="text-2xl">
						Achievements
					</AccordionTrigger>
					<AccordionContent>
						<div className="p-6">
							{Achievements.map((ach) => (
								<AchievementCard
									key={ach.Achievement}
									Achievement={ach.Achievement}
									Description={ach.Description}
									Issuer={ach.IssuedBy}
									Date={ach.Date}
									Link={ach.CredentialLink}
									ImgList={ach.Images}
								/>
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger className="text-2xl">
						Education
					</AccordionTrigger>
					<AccordionContent className="p-4">
						<ul className="list-disc list-outside">
							<li>
								<p className="text-lg">
									BTech - Computer Science
								</p>
								2022-2026
								<br /> SRM University <br /> CGPA: 8.91
							</li>
							<li>
								<p className="text-lg">Schooling (CBSE)</p>
								Delhi Public School - Bopal Ahmedabad
								<br /> 12th (2022) : 86% (PCM with Computer
								Science) <br /> 10th (2020) : 96%
							</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
