import { ArrowRight, CalendarDays, Users } from "lucide-react";
import { Link } from "react-router-dom";
export default function EventCard({ event }) {
    return (
        <article className="group clip-corner overflow-hidden border border-white/10 bg-panel transition duration-300 hover:-translate-y-1 hover:border-safety/60 hover:shadow-glow">
            <div
                style={
                    event.posterImage
                        ? { backgroundImage: `url(${event.posterImage})` }
                        : undefined
                }
                className={`relative h-52 overflow-hidden bg-cover bg-center bg-gradient-to-br ${event.accent}`}
            >
                <div className="fine-grid absolute inset-0 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
                <span className="absolute left-5 top-5 border border-white/40 bg-ink/50 px-2 py-1 font-mono text-xs">
                    {event.code}
                </span>
                <div className="absolute bottom-4 left-5 right-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70">
                        {event.category}
                    </span>
                    <h3 className="font-display text-4xl font-bold uppercase leading-none">
                        {event.title}
                    </h3>
                </div>
            </div>
            <div className="p-5">
                <p className="mb-5 text-sm text-slate-400">{event.tagline}</p>
                <div className="mb-5 grid grid-cols-2 gap-3 border-y border-white/10 py-4 text-xs text-slate-300">
                    <span className="flex items-center gap-2">
                        <CalendarDays size={15} className="text-safety" />
                        {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                        <Users size={15} className="text-safety" />
                        {event.teamSize}
                    </span>
                </div>
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                    <i className="h-2 w-2 rounded-full bg-emerald-400" />
                    {event.status}
                </div>
                <div className="flex gap-2">
                    <Link
                        to={`/events/${event.slug}`}
                        className="button-secondary flex-1 !px-3 !py-2 text-center"
                    >
                        Details
                    </Link>
                    <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="button-primary flex-1 !px-3 !py-2"
                    >
                        Register <ArrowRight size={15} />
                    </a>
                </div>
            </div>
        </article>
    );
}
