import { useEffect, useState } from "react";
const target = new Date("2026-12-12T09:00:00+06:00").getTime();
export default function Countdown() {
    const [left, setLeft] = useState(Math.max(0, target - Date.now()));
    useEffect(() => {
        const id = setInterval(
            () => setLeft(Math.max(0, target - Date.now())),
            1000,
        );
        return () => clearInterval(id);
    }, []);
    const vals = [
        ["DAYS", Math.floor(left / 86400000)],
        ["HOURS", Math.floor(left / 3600000) % 24],
        ["MIN", Math.floor(left / 60000) % 60],
        ["SEC", Math.floor(left / 1000) % 60],
    ];
    return (
        <div className="grid grid-cols-4 divide-x divide-white/10 border-y border-white/10 bg-panel/70">
            {vals.map(([l, v]) => (
                <div key={l} className="px-2 py-5 text-center sm:py-7">
                    <b className="block font-display text-3xl text-safety sm:text-5xl">
                        {String(v).padStart(2, "0")}
                    </b>
                    <span className="text-[10px] font-bold tracking-[.2em] text-slate-500 sm:text-xs">
                        {l}
                    </span>
                </div>
            ))}
        </div>
    );
}
