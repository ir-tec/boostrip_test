import React from "react";
import { motion } from "framer-motion";
const MessageTooltip = ({
  message,
  turn_off_handler,
}: {
  message?: string;
  turn_off_handler: () => void;
}) => {
  return (
    <motion.div
      onAnimationComplete={async () => {
        try {
          await new Promise<void>((res) => {
            setTimeout(() => {
              res();
            }, 2000);
          });
          turn_off_handler();
        } catch {
          /* empty */
        }
      }}
      className="bg-yellow-600"
      animate={{ translateX: message ? 0 : "-150vw" }}
      transition={{ duration: 0.4, bounce: 0.2 }}
      style={{
        backgroundColor: "InfoText",
        position: "fixed",
        bottom: 24,
        width: "fit-content",
        padding: "8px 16px",
        borderRadius: 4,
        left: 24,
        fontWeight: "bold",
        color: "white",
      }}
    >
      {message}
    </motion.div>
  );
};

export default MessageTooltip;
