import { useState, useEffect } from "react";
import "./App.css";

const formatMsToDuration = (ms: number) => {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  const pad = (n: number, z: number = 2) => {
    z = z || 2;
    return ("00" + n).slice(-z);
  };
  const minuteSecond = `${minutes}`.padStart(2, "0") + ":" + pad(seconds);

  if (hours > 0) {
    return `${hours}:${minuteSecond}`;
  }

  return `${minuteSecond}`;
};

const getRemainingTime = (hours: number, minutes: number) => {
  const startTime = new Date();
  startTime.setHours(hours, minutes, 0);
  return startTime.getTime() - new Date().getTime();
};

function App() {
  const params = new URLSearchParams(window.location.search);
  const time = params.get("time");
  const [hours, minutes] =
    time?.split(":").map((s) => parseInt(s, 10) || 0) ?? [];
  const [timeLeft, setTimeLeft] = useState(getRemainingTime(hours, minutes));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getRemainingTime(hours, minutes);
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes]);

  return <div className="App">{formatMsToDuration(timeLeft)}</div>;
}

export default App;
