"use client";
import { useState, useEffect } from "react";

const ResendOTPTimer = ({ onTimerComplete }) => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        // Check if there is an existing timer in localStorage
        const storedExpiration = localStorage.getItem("otpResendExpiration");
        const now = Date.now();

        if (storedExpiration && parseInt(storedExpiration, 10) > now) {
            setTimeLeft(Math.ceil((parseInt(storedExpiration, 10) - now) / 1000));
        }

        const timerInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerInterval);
                    onTimerComplete();
                    localStorage.removeItem("otpResendExpiration");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [onTimerComplete]);

    const startTimer = (duration) => {
        const expirationTime = Date.now() + duration * 1000;
        localStorage.setItem("otpResendExpiration", expirationTime.toString());
        setTimeLeft(duration);
    };

    return (
        <div>
            {timeLeft > 0 ? (
                <p className="text-muted">
                    You can resend the OTP in <strong>{timeLeft}s</strong>.
                </p>
            ) : (
                <button
                    className="theme-btn btn-style-three call-modal small"
                    onClick={() => {
                        startTimer(60);
                        onTimerComplete();
                    }}
                >
                    Resend OTP
                </button>
            )}
        </div>
    );
};

export default ResendOTPTimer;
