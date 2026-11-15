import { schedule } from "../../data/schedule";
import Button from "../common/Button";
import SectionTitle from "../common/SectionTitle";
export default function TimelinePreview() {
    return (
        <section className="bg-[#0e151c] py-24">
            <div className="shell">
                <div className="flex flex-col justify-between sm:flex-row sm:items-end">
                    <SectionTitle
                        eyebrow="Site programme"
                        title="Three days. Full load."
                    />
                    <Button
                        to="/schedule"
                        variant="secondary"
                        className="mb-10"
                    >
                        Full schedule
                    </Button>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                    {schedule.map((day) => (
                        <div className="panel p-6" key={day.day}>
                            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                <b className="eyebrow">{day.day}</b>
                                <span className="font-display text-2xl font-bold">
                                    {day.date}
                                </span>
                            </div>
                            {day.items.slice(0, 3).map(([time, event], i) => (
                                <div
                                    className="grid grid-cols-[58px_1fr] gap-4 py-3"
                                    key={i}
                                >
                                    <span className="font-mono text-xs text-safety">
                                        {time}
                                    </span>
                                    <p className="text-sm font-medium">
                                        {event}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
