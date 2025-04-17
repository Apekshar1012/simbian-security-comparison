"use client";
import AlertCard from "./AlertCard";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "@/app/components/UI/Icon";

const initialCounts = {
  ignored: 200,
  wronglyClosed: 35,
  active: 5,
};

const dummyAlerts = [
  "Phishing Email",
  "Suspicious Login",
  "Malware Activity Detected",
  "Brute Force Attack on Server",
  "Potential Data Exfiltration",
  "Unusual Network Traffic",
];

const WithoutSimbianSection = () => {
  const [counts, setCounts] = useState(initialCounts);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) => ({
        ignored: prevCounts.ignored + Math.floor(Math.random() * 3) + 1,
        wronglyClosed: prevCounts.wronglyClosed + (Math.random() < 0.2 ? 1 : 0),
        active: prevCounts.active + (Math.random() < 0.1 ? 1 : 0),
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-blue-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black tracking-tight">Without Simbian</h2>
        <div className="w-screen grid grid-cols-1 md:grid-cols-3 gap-6">
          <AlertCard
            title="Ignored Alerts"
            count={counts.ignored}
            icon="alert-triangle"
            alerts={dummyAlerts}
            color="red"
          />
          <AlertCard
            title="Wrongly Closed Alerts"
            count={counts.wronglyClosed}
            icon="x-circle"
            alerts={dummyAlerts}
            color="orange"
          />
          <AlertCard
            title="Active Threats"
            count={counts.active}
            icon="shield-exclamation"
            alerts={dummyAlerts}
            color="red-600"
          />
        </div>
        <div className="mt-12 text-left">
          <div className="space-y-3">
            <p className="text-white font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
              Wasting valuable analyst time on false positives
            </p>
            <p className="text-white font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
              Processing one alert at a time, missing the big picture
            </p>
            <p className="text-white font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-white"></span>
              More time fixing SOAR automation, less time on real threats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithoutSimbianSection;
