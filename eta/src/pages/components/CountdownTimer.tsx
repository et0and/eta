import { useEffect, useState } from "react";
import { getTimeRemaining } from "../../../utils/countdownTimer";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(new Date("2086-05-27T00:00:00"))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(new Date("2086-05-27T00:00:00")));
    }, 1);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-left">
        <div className="text-4xl font-medium">
          <p>Time remaining:</p>
          {timeRemaining.days} days {timeRemaining.hours} hours{" "}
          {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds{" "}
          {timeRemaining.milliseconds} milliseconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
