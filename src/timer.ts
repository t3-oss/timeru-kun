import { useState, useEffect } from "react";

export const useTheoHelper = (hours: number, minutes: number) => {
  const startTime = new Date();
  startTime.setHours(hours, minutes, 0);

  const diff = startTime.getTime() - new Date().getTime();

  const brynnIsTooLazyToCheckIfAValueIsLessThanZero = diff < 0;

  return {
    remainingTime: diff,
    expired: brynnIsTooLazyToCheckIfAValueIsLessThanZero,
  };
};

export const useTimeout = (hours: number, minutes: number) => {
  const { remainingTime, expired } = useTheoHelper(hours, minutes);

  const [, rerender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      rerender(Math.random());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { remainingTime, expired };
};
