import FeatureList from "./components/FeatureList";
import Hero from "./components/Hero";
import DailyHealthTips from "./components/DailyHealthTips";
import HealthTopics from "./components/HealthTopics";
import { getAllData } from "@/lib/api";
import FeatureVideo from "./components/FeatureVideo";
import React from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import SubscribeForm from "./components/SubscibeForm";

export default async function Home() {
  const data = await getAllData();
  return (
    <div>
        <Hero />
        <React.Suspense fallback={<div className="py-8 flex justify-center"><LoadingSpinner size="sm" /></div>}>
          <FeatureList list={data} />
        </React.Suspense>
        <DailyHealthTips />
        <HealthTopics />
        <FeatureVideo />
    </div>
  );
}
