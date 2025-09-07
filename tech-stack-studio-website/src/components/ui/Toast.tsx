"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useEffect } from "react";

export type ToastType = "success" | "error" | "warning";

interface ToastProps {
  type: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6" />;
      case "error":
        return <XCircle className="w-6 h-6" />;
      case "warning":
        return <AlertCircle className="w-6 h-6" />;
    }
  };

  const getColors = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-800/90",
          border: "border-green-600",
          text: "text-green-100",
          icon: "text-green-400",
        };
      case "error":
        return {
          bg: "bg-red-800/90",
          border: "border-red-600",
          text: "text-red-100",
          icon: "text-red-400",
        };
      case "warning":
        return {
          bg: "bg-yellow-800/90",
          border: "border-yellow-600",
          text: "text-yellow-100",
          icon: "text-yellow-400",
        };
    }
  };

  const colors = getColors();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 max-w-md"
        >
          <div
            className={`
            ${colors.bg} ${colors.border} ${colors.text}
            border backdrop-blur-sm rounded-lg shadow-2xl p-4
            flex items-start space-x-3
          `}
          >
            <div className={`${colors.icon} flex-shrink-0`}>{getIcon()}</div>
            <div className="flex-1">
              <p className="text-sm font-medium leading-relaxed">{message}</p>
            </div>
            <button
              onClick={onClose}
              className={`
                ${colors.text} hover:opacity-70 transition-opacity
                flex-shrink-0 ml-2
              `}
              aria-label="Close notification"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
