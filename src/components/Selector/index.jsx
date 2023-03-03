import Waitboard from '../../components/Waitboard'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
export default function Selector() {
    const INITIAL_TIMER = 0;
    //Here the game ends
    const TARGET_TIMER = 2800;
    // Code refactoring
    const [timer, setTimer] = useState(INITIAL_TIMER);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const interval = useRef();
    const list = [32, 132, 232, 332, 432];
    useEffect(() => {
        function handleTimer() {
            interval.current = setInterval(() => {
                setTimer((count) => count + 2);
            }, 1);
            setIsTimerRunning(true);
        }
        if (timer >= TARGET_TIMER - 400 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + 1.9);
            }, 1);
        }
        if (timer >= TARGET_TIMER - 350 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + 1.3);
            }, 1);
        }

        if (timer >= TARGET_TIMER - 300 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + 1.1);
            }, 1);
        }
        if (timer >= TARGET_TIMER - 250 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + .8);
            }, 1);
        }

        if (timer >= TARGET_TIMER - 200 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + .5);
            }, 1);
        }
        if (timer >= TARGET_TIMER - 150 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + 0.2);
            }, 1);
        }

        if (timer >= TARGET_TIMER - 100 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + .1);
            }, 1);
        }
        if (timer >= TARGET_TIMER - 50 && isTimerRunning) {
            clearInterval(interval.current);

            interval.current = setInterval(() => {
                setTimer((count) => count + .1);
            }, 1);
        }

        if (timer >= TARGET_TIMER) {
            clearInterval(interval.current);

        }
        if (timer === INITIAL_TIMER) {
            handleTimer();
        }
    }, [timer]);

    return (
        <>
            <div className={`relative w-[calc(100%-200px)] h-full`}>
                <div className='flex flex-row relative w-full'>
                    <div className='w-9 h-9 absolute bg-white blur-[9px] rounded-full left-[-68px] ' style={{ top: `${Math.floor(timer / 500) % 2 ? list[Math.floor((timer / 100)) % 5] : list[5 - Math.floor((timer / 100)) % 5]}px` }}></div>
                    <div className='w-9 h-9 absolute bg-white blur-[9px] rounded-full right-[-68px] ' style={{ top: `${Math.floor(timer / 500) % 2 ? list[Math.floor((timer / 100)) % 5] : list[5 - Math.floor((timer / 100)) % 5]}px` }}></div>
                </div>
                <div className={`w-full absolute border-t-4 border-dashed after:w-5 after:h-5 after:bg-[#fff] after:absolute after:-right-2 after:rotate-45 after:-top-3 before:w-5 before:h-5 before:bg-[#fff] before:absolute before:-left-2 before:rotate-45 before:-top-3`} style={{ top: `${Math.floor(timer / 500) % 2 ? timer % 500 : 500 - (timer % 500)}px` }}></div>
                <Waitboard />
            </div>
        </>
    )
}