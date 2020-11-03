import { useState, useLayoutEffect } from 'react';

/**
 * UseTimer Hook to show the timer
 * @param {number} time
 */
const useTimer = time => {
    const [seconds, setSeconds] = useState(time);

    const resetTimer = () => {
        setSeconds(time);
    };

    const startTimer = interval => {
        setSeconds(seconds => {
            if (seconds === 1) {
                clearInterval(interval);
            }
            return seconds - 1;
        });
    };

    useLayoutEffect(() => {
        let timer = null;
        if (isActive) {
            timer = setInterval(() => startTimer(timer), 1000);
        }
        return () => clearInterval(timer); // when unmount
    }, [seconds]);
    return [seconds, resetTimer];
};

export default useTimer;
