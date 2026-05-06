import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Wrapper = styled.div`
  background: #0d1117;
  border: 1px solid rgba(0, 201, 255, 0.15);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 201, 255, 0.06);
  margin-bottom: 28px;
  font-family: 'Fira Code', 'Courier New', monospace;
  max-width: 500px;

  @media (max-width: 960px) {
    max-width: 100%;
  }
`;

const TitleBar = styled.div`
  background: #161b22;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Dot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

const TitleText = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 11px;
  margin-left: 6px;
  letter-spacing: 0.03em;
`;

const Body = styled.div`
  padding: 16px 20px;
  min-height: 120px;
`;

const TermLine = styled.div`
  font-size: 13.5px;
  line-height: 1.6;
  margin-bottom: 2px;
`;

const CmdText = styled.span`
  color: #00c9ff;
`;

const Prompt = styled.span`
  color: #7ee787;
  margin-right: 6px;
  user-select: none;
`;

const OutputText = styled.div`
  color: #e6edf3;
  padding-left: 2px;
  margin-bottom: 10px;
`;

const Arrow = styled.span`
  color: #f0883e;
  margin-right: 6px;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 7px;
  height: 13px;
  background: #00c9ff;
  animation: ${blink} 1s step-end infinite;
  vertical-align: middle;
  margin-left: 1px;
  border-radius: 1px;
`;

const TerminalWindow = ({ lines = [], title = "oumeima@portfolio: ~" }) => {
  const [state, setState] = useState([{ cmd: "", outVisible: false, lineIdx: 0 }]);

  useEffect(() => {
    const last = state[state.length - 1];
    const lineData = lines[last.lineIdx];
    if (!lineData) return;

    const fullCmd = `$ ${lineData.cmd}`;

    if (!last.outVisible) {
      if (last.cmd.length < fullCmd.length) {
        const timer = setTimeout(() => {
          setState(prev => {
            const copy = [...prev];
            copy[copy.length - 1] = {
              ...copy[copy.length - 1],
              cmd: fullCmd.slice(0, last.cmd.length + 1),
            };
            return copy;
          });
        }, 65);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setState(prev => {
            const copy = [...prev];
            copy[copy.length - 1] = { ...copy[copy.length - 1], outVisible: true };
            return copy;
          });
        }, 220);
        return () => clearTimeout(timer);
      }
    } else {
      const nextIdx = last.lineIdx + 1;
      if (nextIdx < lines.length) {
        const timer = setTimeout(() => {
          setState(prev => [...prev, { cmd: "", outVisible: false, lineIdx: nextIdx }]);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [state, lines]);

  const last = state[state.length - 1];
  const isDone = last.outVisible && last.lineIdx === lines.length - 1;

  return (
    <Wrapper>
      <TitleBar>
        <Dot color="#ff5f56" />
        <Dot color="#ffbd2e" />
        <Dot color="#27c93f" />
        <TitleText>{title}</TitleText>
      </TitleBar>
      <Body>
        {state.map((item, i) => {
          const lineData = lines[item.lineIdx];
          const isLast = i === state.length - 1;
          return (
            <div key={i}>
              <TermLine>
                <Prompt>~</Prompt>
                <CmdText>{item.cmd}</CmdText>
                {!item.outVisible && isLast && <Cursor />}
              </TermLine>
              {item.outVisible && lineData && (
                <OutputText>
                  <Arrow>›</Arrow>
                  {lineData.out}
                </OutputText>
              )}
            </div>
          );
        })}
        {isDone && (
          <TermLine>
            <Prompt>~</Prompt>
            <Cursor />
          </TermLine>
        )}
      </Body>
    </Wrapper>
  );
};

export default TerminalWindow;
