import { useState } from 'react'
import { grants, type Grant } from '../data/grants'
import GrantCard from '../components/GrantCard'
import { Sparkles, TrendingUp, Clock, CheckCircle, ChevronDown } from 'lucide-react'

const categories  = ['Все', 'Наука', 'Образование', 'IT / Tech', 'Инновации', 'Общество']
const countries   = ['Все страны', 'Казахстан', 'ЕС', 'Международный', 'США / Международный']
const sortOptions = ['По совпадению', 'По дедлайну', 'По сумме']

export default function Dashboard({ search = '' }: { search?: string }) {
    const [activeCategory, setActiveCategory] = useState('Все')
    const [activeCountry, setActiveCountry]   = useState('Все страны')
    const [activeSort, setActiveSort]         = useState('По совпадению')

    const filtered: Grant[] = grants
        .filter(g => activeCategory === 'Все' || g.category === activeCategory)
        .filter(g => activeCountry  === 'Все страны' || g.country === activeCountry)
        .filter(g => {
            if (!search.trim()) return true
            const q = search.toLowerCase()
            return (
                g.title.toLowerCase().includes(q) ||
                g.provider.toLowerCase().includes(q) ||
                g.category.toLowerCase().includes(q) ||
                g.tags.some(t => t.toLowerCase().includes(q))
            )
        })
        .sort((a, b) => {
            if (activeSort === 'По совпадению') return b.matchScore - a.matchScore
            if (activeSort === 'По дедлайну')  return a.daysLeft - b.daysLeft
            return 0
        })

    return (
        <div className="flex-1 overflow-y-auto bg-[#07111f]">

            {/* Header */}
            <div className="px-8 pt-8 pb-0">
                <h1 className="text-[26px] font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Instrument Serif', serif" }}>
                    Добро пожаловать, Алуа 👋
                </h1>
                <p className="text-[14px] text-[#3d5a72] mt-1">
                    {search
                        ? <>Результаты по запросу «<span className="text-white">{search}</span>»: <span className="text-[#00c6a7] font-semibold">{filtered.length}</span> грантов</>
                        : <>Найдено <span className="text-[#00c6a7] font-semibold">{filtered.length}</span> возможностей под ваш профиль</>
                    }
                </p>
            </div>

            {/* Stats */}
            <div className="px-8 mt-6 grid grid-cols-4 gap-4">
                {[
                    { icon: TrendingUp,  label: 'Грантов в базе',  value: '12 400+', color: 'text-[#00c6a7]',  bg: 'bg-[rgba(0,198,167,0.08)]' },
                    { icon: Sparkles,    label: 'AI-совпадений',   value: '34',      color: 'text-purple-400', bg: 'bg-purple-900/20'          },
                    { icon: Clock,       label: 'Дедлайн скоро',   value: '3',       color: 'text-amber-400',  bg: 'bg-amber-900/20'           },
                    { icon: CheckCircle, label: 'Поданных заявок', value: '12',      color: 'text-green-400',  bg: 'bg-green-900/20'           },
                ].map(({ icon: Icon, label, value, color, bg }) => (
                    <div key={label} className="bg-[#0c1e33] border border-[rgba(255,255,255,0.06)] rounded-xl px-5 py-4 flex items-center gap-4">
                        <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon size={18} className={color} />
                        </div>
                        <div>
                            <p className="text-[22px] font-bold text-white leading-none"
                               style={{ fontFamily: "'Instrument Serif', serif" }}>
                                {value}
                            </p>
                            <p className="text-[12px] text-[#3d5a72] mt-0.5">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* AI Banner */}
            <div className="mx-8 mt-5 px-5 py-3.5 bg-[rgba(0,198,167,0.06)] border border-[rgba(0,198,167,0.2)] rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00c6a7] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles size={15} className="text-[#07111f]" />
                </div>
                <div className="flex-1">
                    <span className="text-[13px] font-semibold text-[#00c6a7]">AI-рекомендация · </span>
                    <span className="text-[13px] text-[#7a9bb5]">
            На основе вашего профиля «PhD · IT · Казахстан» подобрано{' '}
                        <strong className="text-white">14 новых возможностей</strong>
          </span>
                </div>
                <button className="text-[12px] font-semibold text-[#00c6a7] hover:text-white transition-colors whitespace-nowrap">
                    Смотреть все →
                </button>
            </div>

            {/* Filters */}
            <div className="px-8 mt-6 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-medium transition-all
                ${activeCategory === cat
                                ? 'bg-[#00c6a7] text-[#07111f] font-bold'
                                : 'bg-[#0c1e33] border border-[rgba(255,255,255,0.08)] text-[#7a9bb5] hover:border-[rgba(0,198,167,0.3)] hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    {[
                        { value: activeCountry, onChange: setActiveCountry, options: countries },
                        { value: activeSort,    onChange: setActiveSort,    options: sortOptions },
                    ].map(({ value, onChange, options }) => (
                        <div key={value} className="relative">
                            <select
                                value={value}
                                onChange={e => onChange(e.target.value)}
                                className="appearance-none pl-3 pr-7 py-1.5 bg-[#0c1e33] border border-[rgba(255,255,255,0.08)] rounded-lg text-[12.5px] text-[#7a9bb5] focus:outline-none focus:ring-2 focus:ring-[rgba(0,198,167,0.2)] cursor-pointer"
                            >
                                {options.map(o => <option key={o}>{o}</option>)}
                            </select>
                            <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3d5a72] pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Count */}
            <div className="px-8 mt-4">
                <p className="text-[12px] text-[#3d5a72]">
                    Показано <span className="font-medium text-[#7a9bb5]">{filtered.length}</span> из {grants.length} результатов
                    {search && (
                        <button onClick={() => {}} className="ml-3 text-[#00c6a7] hover:underline">
                            Сбросить поиск ×
                        </button>
                    )}
                </p>
            </div>

            {/* Cards */}
            <div className="px-8 mt-4 pb-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filtered.length > 0
                    ? filtered.map(grant => <GrantCard key={grant.id} grant={grant} />)
                    : (
                        <div className="col-span-3 text-center py-20 text-[#3d5a72]">
                            <div className="text-4xl mb-4">🔍</div>
                            <p className="text-[15px] text-[#7a9bb5] font-medium">Ничего не найдено</p>
                            <p className="text-[13px] mt-1">Попробуйте изменить фильтры или поисковый запрос</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}