import Home from "./routes/Home.jsx";
import "./main.css";
import Header from "/components/header.jsx";
import Extras from "./routes/Extras.jsx"
import { Routes, Route } from "react-router-dom";
import Projects from "./routes/Projects.jsx";
import Skills from "./routes/Skills.jsx";
import Experience from "./routes/Experience.jsx";

const App = () => {
	return (
		<>
            <Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Experience" element={<Experience />} />
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Extras" element={<Extras />} />

			</Routes>
		</>
	);
};

export default App;
