"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "@/app/components/UI/Icon";

const alertDropVariants = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { y: 10, opacity: 0, transition: { duration: 0.1 } },
};

const cardVariants = {
  normal: {},
  newAlert: {
    scale: 1.03,
    boxShadow: `0 0 8px rgba(var(--color-${({ color }) => color}-500-rgb), 0.7)`,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

interface AlertCardProps {
  title: string;
  count: number;
  icon: string;
  alerts: string[];
  color: "red" | "orange" | "red-600" | "green"; // Define possible color types
}

const AlertCard: React.FC<AlertCardProps> = ({ title, count: initialCount, icon, alerts, color }) => {
  const [count, setCount] = useState(initialCount);
  const [currentAlerts, setCurrentAlerts] = useState<string[]>([]);
  const [isNewAlert, setIsNewAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 2) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const alertInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * alerts.length);
      setCurrentAlerts((prevAlerts) => [alerts[randomIndex], ...prevAlerts.slice(0, 2)]);
      setIsNewAlert(true);
      setTimeout(() => setIsNewAlert(false), 300);
    }, 2500);
    return () => clearInterval(alertInterval);
  }, [alerts]);

  return (
    <motion.div
      className={`bg-${color}-100 p-6 rounded-md shadow-md flex flex-col items-center`}
      variants={cardVariants}
      animate={isNewAlert ? "newAlert" : "normal"}
      style={{ "--color-red-500-rgb": "248, 113, 113", "--color-orange-500-rgb": "251, 146, 60", "--color-red-600-rgb": "220, 38, 38" }}
    >
      <div className={`w-12 h-12 rounded-full bg-${color}-500 text-white flex items-center justify-center mb-3`}>
        <Icon name={icon} size={24} />
      </div>
      <h3 className={`text-xl font-semibold text-${color}-700 mb-2`}>{title}</h3>
      <motion.span className={`text-4xl font-bold text-${color}-800`}>{count}</motion.span>
      <div className="mt-4 w-full">
        <h4 className={`text-sm font-semibold text-${color}-600 mb-1`}>Recent Alerts:</h4>
        <div className="relative h-20 overflow-hidden">
          {currentAlerts.map((alert, index) => (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full text-sm text-gray-700"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={alertDropVariants}
              style={{ top: `${index * 22}px` }}
            >
              {alert}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AlertCard;
