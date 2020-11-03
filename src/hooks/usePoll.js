import { useState, useLayoutEffect, useEffect } from 'react';

/**
 * usePoll Hook for polling API
 * @param {number} time
 */
const usePoll = (time, maxTime, callAPI, startPoll, _callback = () => { }) => {
    const [seconds, setSeconds] = useState(maxTime);
    const resetTimer = () => {
        setSeconds(maxTime);
    };
    //Call callback when timer reached maxTimer limit
    useEffect(() => {
        if (seconds === 1) {
            _callback();
        }
    }, [seconds])

    const startTimer = interval => {
        //API CALL
        callAPI();
        setSeconds(seconds => {
            if (seconds === 1) {
                clearInterval(interval);
            }
            return seconds - 1;
        });
    };

    useLayoutEffect(() => {
        let timer = null;
        if (startPoll) {
            timer = setInterval(() => startTimer(timer), time);
        }
        return () => clearInterval(timer); // when unmount
    }, [seconds]);
    return [seconds, resetTimer];
};

export default usePoll;
