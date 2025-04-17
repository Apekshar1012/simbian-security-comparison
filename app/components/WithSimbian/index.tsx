"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import StepItem from "./StepItem";
import ZeroAlertCard from "./ZeroAlertCard";
import Icon from "@/app/components/UI/Icon";

interface Step {
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  { title: "Triaged & Reported", description: "SOC Agent handled investigation and reporting", icon: "user-check" },
  { title: "Automated Response", description: "Incident automatically contained", icon: "shield-check" },
  { title: "Comprehensive Analysis", description: "AI recognized patterns", icon: "brain" },
  { title: "Accurate Detection", description: "Zero false positives", icon: "check-circle" },
  { title: "24/7 Coverage", description: "No analyst fatigue", icon: "clock" },
];

const WithSimbianSection = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const controls = useAnimation();
  const containerWidth = `${(steps.length + 1) * 100}vw`;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % (steps.length + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${activeStep * 100}vw`,
      transition: { type: "spring", duration: 0.8, bounce: 0.2 },
    });
  }, [activeStep, controls]);

  // Define Gemini-inspired color palette
  const geminiColors = {
    blue: 'hsl(214, 89%, 52%)',  // A vibrant blue
    purple: 'hsl(262, 85%, 60%)', // A rich purple
    gray: 'hsl(208, 16%, 85%)',    // A light gray for backgrounds
  };

  const cardStyle = {
    backgroundColor: 'from-blue-50 to-black-100',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.15)',
    },
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'semibold',
    color: 'hsl(0, 0%, 20%)',
    marginBottom: '16px',
  };

  const countStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'hsl(0, 0%, 20%)',
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-100 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-700 tracking-tight">With Simbian</h2>
        <motion.div
          className="relative flex"
          style={{ width: containerWidth }}
          animate={controls}
        >
          {steps.map((step, index) => (
            <div key={index} className="w-screen p-8 flex justify-center items-center">
              <StepItem {...step} isActive={index <= activeStep} />
            </div>
          ))}
          <div className="w-screen p-8 flex justify-center items-center gap-6">
            <div style={cardStyle}>
              <h3 style={titleStyle}>Ignored Alerts</h3>
              <div style={countStyle}>0</div>
            </div>
            <div style={cardStyle}>
              <h3 style={titleStyle}>Wrongly Closed</h3>
                <div style={countStyle}>0</div>
            </div>
            <div style={cardStyle}>
              <h3 style={titleStyle}>Active Threats</h3>
              <div style={countStyle}>0</div>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 text-left">
          <div className="space-y-3">
            <p className="text-green-600 font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
              90% of alerts resolved automatically, 24/7
            </p>
            <p className="text-green-600 font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
              Correlates alerts to your environment
            </p>
            <p className="text-green-600 font-medium flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
              Investigate every alert—no SOAR needed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithSimbianSection;
