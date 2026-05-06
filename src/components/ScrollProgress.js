import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00c9ff, #0077b6);
  z-index: 10001;
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 10px rgba(0, 201, 255, 0.6);
  transition: width 0.08s linear;
  pointer-events: none;
`;

const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setPct((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <Bar style={{ width: `${pct}%` }} />;
};

export default ScrollProgress;
