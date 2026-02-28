import { Calendar, MapPin, TrendingUp, Bookmark, ArrowUpRight } from 'lucide-react'
import type { Grant } from '../data/grants'
import { useNavigate } from 'react-router-dom'

type Props = { grant: Grant }

const statusConfig = {
    open:    { label: 'Открыт', classes: 'bg-green-900/30 text-green-400 border-green-800/50' },
    closing: { label: 'Скоро',  classes: 'bg-amber-900/30 text-amber-400 border-amber-800/50' },
    new:     { label: 'Новый',  classes: 'bg-[rgba(0,198,167,0.1)] text-[#00c6a7] border-[rgba(0,198,167,0.2)]' },
}

const categoryColors: Record<string, string> = {
    'Наука':       'bg-blue-900/30 text-blue-400',
    'Образование': 'bg-purple-900/30 text-purple-400',
    'IT / Tech':   'bg-[rgba(0,198,167,0.1)] text-[#00c6a7]',
    'Инновации':   'bg-orange-900/30 text-orange-400',
    'Общество':    'bg-pink-900/30 text-pink-400',
}

export default function GrantCard({ grant }: Props) {
    const navigate = useNavigate()
    const status   = statusConfig[grant.status]
    const catColor = categoryColors[grant.category] ?? 'bg-white/5 text-white/50'

    return (
        <div
            onClick={() => navigate(`/grant/${grant.id}`)}
            className="bg-[#0c1e33] border border-[rgba(255,255,255,0.06)] rounded-xl p-5 hover:border-[rgba(0,198,167,0.25)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-200 group cursor-pointer flex flex-col gap-4"
        >
            {/* Top */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${status.classes}`}>
              {status.label}
            </span>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${catColor}`}>
              {grant.category}
            </span>
                    </div>
                    <h3 className="text-[14.5px] font-semibold text-white leading-snug group-hover:text-[#00c6a7] transition-colors">
                        {grant.title}
                    </h3>
                    <p className="text-[12.5px] text-[#3d5a72] mt-0.5">{grant.provider}</p>
                </div>

                <button
                    onClick={e => e.stopPropagation()}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(0,198,167,0.1)] hover:border-[rgba(0,198,167,0.3)] transition-all flex-shrink-0"
                >
                    <Bookmark size={14} className="text-[#3d5a72] hover:text-[#00c6a7]" />
                </button>
            </div>

            {/* Description */}
            <p className="text-[12.5px] text-[#7a9bb5] leading-relaxed line-clamp-2">
                {grant.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-[12px] text-[#3d5a72]">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
            {grant.deadline}
            {grant.daysLeft <= 7 && (
                <span className="text-amber-400 font-semibold">· {grant.daysLeft} дн.</span>
            )}
        </span>
                <span className="flex items-center gap-1.5">
          <MapPin size={12} />
                    {grant.country}
        </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {grant.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 bg-white/5 text-[#7a9bb5] rounded-md border border-white/5">
            {tag}
          </span>
                ))}
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5">
        <span className="text-[20px] font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
          {grant.currency} {grant.amount}
        </span>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(0,198,167,0.08)] rounded-lg border border-[rgba(0,198,167,0.15)]">
                        <TrendingUp size={11} className="text-[#00c6a7]" />
                        <span className="text-[11.5px] font-semibold text-[#00c6a7]">{grant.matchScore}% совпадение</span>
                    </div>
                    <button
                        onClick={e => e.stopPropagation()}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#00c6a7] text-[#07111f] text-[12px] font-bold rounded-lg hover:bg-[#00ddb9] active:scale-95 transition-all"
                    >
                        Подать <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>
        </div>
    )
}