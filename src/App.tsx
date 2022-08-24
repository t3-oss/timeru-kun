import "./App.css";
import { useTimer } from "react-timer-hook";

function App() {
  const params = new URLSearchParams(window.location.search);
  const time = params.get("time");
  const [inputHours, inputMinutes] =
    time?.split(":").map((s) => parseInt(s, 10) || 0) ?? [];
  const expiry = new Date();
  expiry.setHours(inputHours, inputMinutes, 0);
  const { hours, minutes, seconds } = useTimer({ expiryTimestamp: expiry });

  return (
    <div className="App">
      {!!hours && `${hours}:`}
      {minutes}:{`${seconds}`.padStart(2, "0")}
    </div>
  );
}

export default App;
