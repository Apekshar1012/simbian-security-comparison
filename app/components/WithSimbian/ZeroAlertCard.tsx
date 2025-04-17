"use client";
import { motion } from "framer-motion";
import Icon from "@/app/components/UI/Icon";

interface ZeroAlertCardProps {
  title: string;
  count: number;
  icon: string;
  color: "green";
}

const ZeroAlertCard: React.FC<ZeroAlertCardProps> = ({ title, count, icon, color }) => {
  return (
    <motion.div
      className={`bg-${color}-100 p-6 rounded-md shadow-md flex flex-col items-center`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`w-12 h-12 rounded-full bg-${color}-500 text-white flex items-center justify-center mb-3`}>
        <Icon name={icon} size={24} />
      </div>
      <h3 className={`text-xl font-semibold text-${color}-700 mb-2`}>{title}</h3>
      <motion.div className="relative">
        <motion.span className={`text-4xl font-bold text-${color}-800`}>{count}</motion.span>
        <motion.div
          className="absolute top-[-8px] right-[-8px] w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", damping: 10, stiffness: 120, delay: 0.3 }}
        >
          <Icon name="check" size={18} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ZeroAlertCard;
