import React, { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { Box, BoxProps } from "@mui/material";

interface CustomScrollbarProps extends BoxProps {
  children: React.ReactNode;
}

const Scrollbar: React.FC<CustomScrollbarProps> = ({ children, ...other }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ps = new PerfectScrollbar(container);

    return () => {
      ps.destroy();
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      style={{ position: "relative", height: "100%", overflow: "hidden" }}
      {...other}
    >
      {children}
    </Box>
  );
};

export default Scrollbar;
