import "./App.css";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import ToolsContainer from "./components/tools-container/ToolsContainer";
import StepsSection from "./components/StepsSection";
import Pricing from "./components/pricing/Pricing";
import { Suspense } from "react";

async function digitalTools() {
  const response = await fetch("digiToolsData.json");
  return response.json();
}

function App() {
  const data = digitalTools();
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <StatsSection></StatsSection>
      <Suspense fallback={<div>Loading tools...</div>}>
        <ToolsContainer data={data} />
      </Suspense>
      <StepsSection></StepsSection>
      <Pricing></Pricing>
    </>
  );
}

export default App;
