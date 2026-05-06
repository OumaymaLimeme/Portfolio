import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
`;

const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0, 201, 255, 0.07), transparent 80%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <Overlay ref={ref} />;
};

export default CursorGlow;
