/* -------------------------------------------------------------------------- */
/*                             Signal Cursor (Idle Pulse)                     */
/* -------------------------------------------------------------------------- */

import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const SignalCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isIdle, setIsIdle] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Update position
      setPos({ x: e.clientX, y: e.clientY });

      // Moving → not idle
      setIsIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);

      // If no movement for 1.5s → idle
      idleTimer.current = setTimeout(() => {
        setIsIdle(true);
      }, 1500);
    };

    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <CursorWrapper
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      className="signal-cursor"
    >
      {/* Core dot */}
      <Dot />

      {/* Idle waves */}
      {isIdle && (
        <>
          <Ripple style={{ animationDelay: '0s' }} />
          <Ripple style={{ animationDelay: '0.75s' }} />
        </>
      )}
    </CursorWrapper>
  );
};

/* ------------------------------ Styled Parts ------------------------------ */

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(-100px, -100px, 0);
  will-change: transform;

  @media (pointer: coarse) {
    display: none; /* hide on touch devices */
  }
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: var(--cw);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04);
`;

const pulse = keyframes`
  0% {
    transform: scale(0.4);
    opacity: 0.04;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
`;

const Ripple = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.05); /* opacity < 0.05 */
  transform: translate(-50%, -50%);
  animation: ${pulse} 1.5s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

export default SignalCursor;
