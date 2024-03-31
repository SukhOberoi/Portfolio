import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import BestTimes from "./BestTimes.jsx";
import { Skeleton } from "./ui/skeleton";

function secondsToHms(seconds) {
	var hours = Math.floor(seconds / 3600);
	var minutes = Math.floor((seconds % 3600) / 60);
	var sec = Math.floor(seconds % 60);

	return hours + ":" + minutes + ":" + sec;
}

const Monkey = () => {
	const [best, setBestData] = useState(null);
	const [stats, setStats] = useState(null);

	const apekey = import.meta.env.VITE_monkeyToken;
	useEffect(() => {
		fetch("https://api.monkeytype.com/users/stats", {
			method: "GET",
			headers: {
				Authorization: `ApeKey ${apekey}`,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				// Handle the data received from the API
				console.log(data);
				setStats(data);
			})
			.catch((error) => {
				// Handle errors
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			});
		fetch("https://api.monkeytype.com/users/personalBests?mode=time", {
			method: "GET",
			headers: {
				Authorization: `ApeKey ${apekey}`,
			},
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				// Handle the data received from the API
				console.log(data);
				setBestData(data);
			})
			.catch((error) => {
				// Handle errors
				console.error(
					"There was a problem with the fetch operation:",
					error
				);
			});
	}, []);

	return (
		<div className="text-center">
			{/* <a href="https://data.typeracer.com/pit/profile?user=ssothegreat&ref=badge" target="_top"><img src="https://data.typeracer.com/misc/badge?user=ssothegreat" border="0" alt="TypeRacer.com scorecard for user ssothegreat"/></a> */}
			<h1 className="p-4 text-4xl">Monkeytype Stats</h1>
			<div className="flex justify-center">
				{stats ? (
					<Card
						Heading="Time Spent"
						cardData={secondsToHms(stats.data.timeTyping)}
						dataUnit="hours"
					/> ):
					<Skeleton className="w-[165px] h-[120px] rounded-lg" />
				}
			</div>
			<h2 className="p-4 text-3xl">Personal Bests</h2>
			{best ? (
				<div className="flex flex-wrap justify-center gap-3 mx-4">
					<BestTimes
						time="15s"
						wpm={best.data["15"][0].wpm}
						// best.data['15'][0].wpm
						acc={best.data["15"][0].acc}
						// data['15'][0].acc
						timestamp={best.data["15"][0].timestamp}
						// data['15'][0].timestamp
					/>
					<BestTimes
						time="30s"
						wpm={best.data["30"][0].wpm}
						// best.data['15'][0].wpm
						acc={best.data["30"][0].acc}
						// data['15'][0].acc
						timestamp={best.data["30"][0].timestamp}
						// data['15'][0].timestamp
					/>
					<BestTimes
						time="60s"
						wpm={best.data["60"][0].wpm}
						// best.data['15'][0].wpm
						acc={best.data["60"][0].acc}
						// data['15'][0].acc
						timestamp={best.data["60"][0].timestamp}
						// data['15'][0].timestamp
					/>
					<BestTimes
						time="120s"
						wpm={best.data["120"][0].wpm}
						// best.data['15'][0].wpm
						acc={best.data["120"][0].acc}
						// data['15'][0].acc
						timestamp={best.data["120"][0].timestamp}
						// data['15'][0].timestamp
					/>
				</div>
				
			):
				<div className="flex flex-wrap justify-center gap-3 mx-4">
					<Skeleton className="w-[165px] h-[165px] rounded-lg" />
					<Skeleton className="w-[165px] h-[165px] rounded-lg" />
					<Skeleton className="w-[165px] h-[165px] rounded-lg" />
					<Skeleton className="w-[165px] h-[165px] rounded-lg" />
				</div>
			}
			<p className="my-3 text-zinc-500">
						Powered by MonkeyType Public API
					</p>
		</div>
	);
};

export default Monkey;
