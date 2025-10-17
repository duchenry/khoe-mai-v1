import FeatureList from "./components/FeatureList";
import Hero from "./components/Hero";
import DailyHealthTips from "./components/DailyHealthTips";
import HealthTopics from "./components/HealthTopics";
import { getAllData } from "@/lib/api";
import FeatureVideo from "./components/FeatureVideo";

export default async function Home() {
  const data = await getAllData();
  return (
    <div>
        <Hero />
        <FeatureList list={data} />
        <DailyHealthTips />
        <HealthTopics />
        <FeatureVideo />
    </div>
  );
}
