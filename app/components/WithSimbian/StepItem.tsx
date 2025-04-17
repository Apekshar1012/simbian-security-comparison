"use client";
import { motion } from "framer-motion";
import Icon from "@/app/components/UI/Icon";

interface StepItemProps {
  title: string;
  description: string;
  icon: string;
  isActive: boolean;
}

const StepItem: React.FC<StepItemProps> = ({ title, description, icon, isActive }) => {
  return (
    <motion.div
      className={`bg-green-100 p-8 rounded-lg shadow-md flex flex-col items-center text-center transition-colors duration-300 ${
        isActive ? "bg-green-200" : ""
      }`}
    >
      <div
        className={`w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center mb-3 transition-colors duration-300 ${
          isActive ? "bg-green-600" : ""
        }`}
      >
        <Icon name={icon} size={30} />
      </div>
      <h3 className={`text-xl font-semibold text-green-700 mb-2 transition-colors duration-300 ${isActive ? "text-green-800" : ""}`}>
        {title}
      </h3>
      <p className="text-sm text-gray-700">{description}</p>
      {isActive && (
        <motion.div
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, type: "spring", damping: 12, stiffness: 100 }}
        >
          <Icon name="check" size={16} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StepItem;
