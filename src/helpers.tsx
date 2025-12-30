import { useState, useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    function tick() {
      savedCallback.current?.();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export function Birb() {
  const f1 = "∽('▿')~";
  const f2 = "~('▿')∽";
  const [f, setF] = useState(f1);
  useEffect(() => {
    const t = setInterval(() => setF((p) => (p === f1 ? f2 : f1)), 200);
    return () => clearInterval(t);
  }, []);
  return <pre>{f}</pre>;
}

export function Cat() {
  const f1 = "~(^._.)";
  const f2 = "∽(^._.)";
  const [f, setF] = useState(f1);
  useEffect(() => {
    const t = setInterval(() => setF((p) => (p === f1 ? f2 : f1)), 200);
    return () => clearInterval(t);
  }, []);
  return <pre>{f}</pre>;
}
