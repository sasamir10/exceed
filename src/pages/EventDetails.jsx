import {useParams,Navigate} from 'react-router-dom'
import {events} from '../data/events'
import {CalendarDays,MapPin,Users,Banknote,Clock,Download,CheckCircle2,Phone} from 'lucide-react'

export default function EventDetails(){
 const {eventSlug}=useParams()
 const e=events.find(x=>x.slug===eventSlug)
 if(!e)return <Navigate to="/404" replace/>
 const facts=[[CalendarDays,'Date',e.date],[MapPin,'Venue',e.venue],[Users,'Team size',e.teamSize],[Banknote,'Entry fee',e.fee],[Banknote,'Prize money',e.prize],[Clock,'Deadline',e.deadline]]
 return <>
  <section className="blueprint pb-14 pt-32"><div className="shell"><p className="eyebrow mb-4">{e.code} / {e.category}</p><h1 className="font-display text-6xl font-bold uppercase leading-none sm:text-8xl">{e.title}</h1><p className="mt-5 text-xl text-slate-300">{e.tagline}</p></div></section>
  <section className="pb-24"><div className="shell grid gap-10 lg:grid-cols-[1fr_360px]"><div>
   <div style={e.posterImage?{backgroundImage:`url(${e.posterImage})`}:undefined} className={`relative mb-10 h-72 overflow-hidden bg-cover bg-center bg-gradient-to-br ${e.accent} sm:h-[430px]`}><div className="fine-grid absolute inset-0"/>{!e.posterImage&&<div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[.3em]">Poster placeholder / replace in events.js</div>}</div>
   <div className="space-y-12"><div><h2 className="mb-4 font-display text-3xl font-bold uppercase">The challenge</h2><p className="max-w-3xl leading-8 text-slate-400">{e.description}</p></div><Detail title="Rounds / timeline" items={e.rounds} numbered/><Detail title="Competition rules" items={e.rules}/><Detail title="Judging criteria" items={e.criteria}/></div>
  </div><aside className="lg:-mt-16"><div className="sticky top-24 panel p-6"><p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase text-emerald-400"><i className="h-2 w-2 rounded-full bg-emerald-400"/>{e.status}</p><div className="divide-y divide-white/10">{facts.map(([Icon,l,v])=><div className="flex gap-3 py-4" key={l}><Icon size={18} className="shrink-0 text-safety"/><div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{l}</p><p className="mt-1 text-sm font-semibold">{v}</p></div></div>)}</div><a href={e.registrationLink} target="_blank" rel="noreferrer" className="button-primary mt-6 w-full">Register now</a><a href={e.rulebook} className="button-secondary mt-3 w-full"><Download size={17}/>Download rulebook</a><div className="mt-6 border-t border-white/10 pt-5"><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Event contact</p><p className="mt-2 font-semibold">{e.contact.name}</p><p className="mt-1 flex items-center gap-2 text-sm text-slate-400"><Phone size={14}/>{e.contact.phone}</p></div></div></aside></div></section>
 </>
}

function Detail({title,items,numbered}){return <div><h2 className="mb-5 font-display text-3xl font-bold uppercase">{title}</h2><div className="grid gap-3 sm:grid-cols-2">{items.map((x,i)=><div key={x} className="panel flex gap-4 p-4"><span className="grid h-7 w-7 shrink-0 place-items-center bg-safety font-mono text-xs font-bold text-ink">{numbered?String(i+1).padStart(2,'0'):<CheckCircle2 size={16}/>}</span><p className="text-sm leading-6 text-slate-300">{x}</p></div>)}</div></div>}
