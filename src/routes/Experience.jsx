import React from "react";
import { Button } from "../../components/ui/button.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
	return (
		<div className="md:h-[calc(100dvh-85px)] flex items-center justify-center">
			<div className="max-w-[1000px] p-4">
				<h1 className="mb-2 text-3xl font-bold">
					Machine Learning and Data Analytics Trainee/Intern
				</h1>
				<p className="text-xl">Cygnet.One</p>
				<p className="mb-2 text-lg">05/2024 - 07/2024</p>
				<p className="mb-4 text-lg">Ahmedabad</p>
				<div className="text-base">
					<ul className="pl-5 space-y-2 list-disc">
						<li>
							Sensor Calibration Data Analysis:
							<ul className="pl-5 list-disc">
								<li>Analyzed work pending days, technician, and sensor efficiency.</li>
								<li>Built a regression model for order completion prediction and integrated data into MongoDB.</li>
							</ul>
						</li>
						<li>Meeting Minutes Automation:
							<ul className="pl-5 list-disc">
								<li>Developed a pipeline for transcription and summarization of meeting recordings using transformers.</li>
								<li>Automated document generation with company letterhead.</li>
							</ul>
						</li>
						<li>Football Win Probability Predictor:
							<ul className="pl-5 list-disc">
								<li>Created a classification model to predict match outcome probabilities using tournament data.</li>
							</ul>
						</li>
						<li>Multilingual Search System:
							<ul className="pl-5 list-disc">
								<li>Designed a semantic search tool for documentation in German, Dutch, and English.</li>
								<li>Implemented cross-language search using word embeddings and provided a demo webpage.</li>
							</ul>
						</li>
					</ul>
                    <div className="h-4"></div>
                    <a href="/InternshipLetter.Pdf" target="blank">
      					<Button variant="outline">
      						Certificate&nbsp;
      						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      					</Button>
      				</a>
				</div>
			</div>
		</div>
	);
};

export default Experience;
