import { useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Search, FileText, BarChart2, Link } from 'lucide-react'

const features = [
    {
        icon: Search,
        title: 'Семантический поиск',
        color: '#00c6a7',
        bg: 'rgba(0,198,167,0.08)',
        desc: 'BERT и Word2Vec понимают смысл запроса, расширяют ключевые слова и ранжируют по релевантности.'
    },
    {
        icon: Sparkles,
        title: 'AI-рекомендации',
        color: '#8b5cf6',
        bg: 'rgba(139,92,246,0.08)',
        desc: 'Персональный подбор на основе профиля, истории поиска и поведения. Обновляется в реальном времени.'
    },
    {
        icon: FileText,
        title: 'Автоматизация заявок',
        color: '#f5a623',
        bg: 'rgba(245,166,35,0.08)',
        desc: 'LLM генерирует черновики, мотивационные письма. Eligibility Check проверяет соответствие условиям.'
    },
    {
        icon: BarChart2,
        title: 'Аналитика & Big Data',
        color: '#22c55e',
        bg: 'rgba(34,197,94,0.08)',
        desc: 'Карта трендов по регионам и секторам. Мониторинг доноров. Дашборды с дедлайнами и статистикой.'
    },
    {
        icon: TrendingUp,
        title: 'Агрегация данных',
        color: '#3b82f6',
        bg: 'rgba(59,130,246,0.08)',
        desc: 'ML-классификация источников, NLP-парсинг PDF и HTML, автоматическая дедупликация из 10+ платформ.'
    },
    {
        icon: Link,
        title: 'Интеграции',
        color: '#ef4444',
        bg: 'rgba(239,68,68,0.08)',
        desc: 'Telegram, Gmail, Google Calendar, Notion. GPT API, LangChain. Прямые интеграции с EU Portal.'
    },
]

const steps = [
    { num: '01', title: 'Создайте профиль',        desc: 'Укажите интересы, специальность и страну. ИИ сразу строит модель ваших предпочтений.' },
    { num: '02', title: 'Получите рекомендации',   desc: 'Алгоритм анализирует 12 000+ возможностей и подбирает те, что подходят именно вам.' },
    { num: '03', title: 'Проверьте соответствие',  desc: 'Eligibility Check AI анализирует условия гранта и выдаёт процент совпадения с вашим профилем.' },
    { num: '04', title: 'Подайте заявку',          desc: 'LLM генерирует черновик заявки и мотивационное письмо на основе вашего профиля.' },
]

const testimonials = [
    {
        name: 'Айгерим К.',
        role: 'PhD, IT Research · НУ',
        initials: 'АК',
        gradient: 'from-[#00c6a7] to-[#8b5cf6]',
        text: 'GrantHub.AI нашёл для меня EU Horizon за 5 минут. Раньше я тратила на это недели поиска.',
    },
    {
        name: 'Данияр С.',
        role: 'Стартап-основатель · Алматы',
        initials: 'ДС',
        gradient: 'from-[#f5a623] to-[#ef4444]',
        text: 'AI подобрал 8 грантов под наш EdTech стартап. Подали на 3, получили одобрение по двум.',
    },
    {
        name: 'Мадина Т.',
        role: 'Исследователь · КазНУ',
        initials: 'МТ',
        gradient: 'from-[#3b82f6] to-[#8b5cf6]',
        text: 'Стипендию Болашак нашла здесь за 2 минуты. Сервис сам заполнил черновик заявки.',
    },
]

export default function Landing() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#07111f] text-white overflow-x-hidden">

            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-16
        bg-[rgba(7,17,31,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">

                <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-8 h-8 bg-[#00c6a7] rounded-lg flex items-center justify-center text-[#07111f] font-bold text-sm"
                         style={{ fontFamily: "'Instrument Serif', serif" }}>G</div>
                    <span className="text-[17px] font-bold text-white"
                          style={{ fontFamily: "'Instrument Serif', serif" }}>
            Grant<span className="text-[#00c6a7]">Hub</span>.AI
          </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Функции', 'Как работает', 'Отзывы'].map(link => (
                        <a key={link} href={`#${link}`}
                           className="text-[13.5px] text-[#7a9bb5] hover:text-white transition-colors cursor-pointer">
                            {link}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/auth')}
                        className="px-4 py-2 border border-[rgba(255,255,255,0.1)] rounded-lg text-[13px] text-[#7a9bb5] hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-all">
                        Войти
                    </button>
                    <button
                        onClick={() => navigate('/auth')}
                        className="px-4 py-2 bg-[#00c6a7] text-[#07111f] rounded-lg text-[13px] font-bold hover:bg-[#00ddb9] transition-all">
                        Начать бесплатно
                    </button>
                </div>
            </nav>

            <section className="relative min-h-screen flex items-center pt-16 px-12 overflow-hidden">


                <div className="absolute inset-0 pointer-events-none"
                     style={{
                         backgroundImage: `linear-gradient(rgba(0,198,167,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,198,167,0.04) 1px, transparent 1px)`,
                         backgroundSize: '56px 56px'
                     }} />

                <div className="absolute top-[-150px] right-[-150px] w-[700px] h-[700px] rounded-full pointer-events-none"
                     style={{ background: 'radial-gradient(circle, rgba(0,198,167,0.07) 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
                     style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)' }} />

                <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
                     style={{ background: 'linear-gradient(transparent, #07111f)' }} />

                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,198,167,0.2)] bg-[rgba(0,198,167,0.06)] text-[#00c6a7] text-xs font-semibold mb-8"
                             style={{ animation: 'fadeUp 0.5s ease both' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00c6a7] animate-pulse" />
                            AI-платформа нового поколения
                        </div>

                        <h1 className="font-bold leading-[1.05] mb-6"
                            style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontSize: 'clamp(42px, 5.5vw, 68px)',
                                letterSpacing: '-2px',
                                animation: 'fadeUp 0.5s 0.1s ease both',
                                opacity: 0,
                                animationFillMode: 'forwards'
                            }}>
                            Находи гранты<br />
                            <span className="text-[#00c6a7]">быстрее</span>{' '}
                            <span className="text-[#3d5a72]">с ИИ</span>
                        </h1>

                        <p className="text-[17px] text-[#7a9bb5] leading-relaxed max-w-lg mb-10 font-light"
                           style={{ animation: 'fadeUp 0.5s 0.2s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                            Агрегируем <strong className="text-white font-semibold">12 000+</strong> грантов, стипендий
                            и стажировок. ИИ подбирает возможности под ваш профиль
                            и автоматизирует подачу заявок.
                        </p>

                        <div className="flex items-center gap-4 mb-12"
                             style={{ animation: 'fadeUp 0.5s 0.3s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                            <button
                                onClick={() => navigate('/auth')}
                                className="flex items-center gap-2 px-7 py-3.5 bg-[#00c6a7] text-[#07111f] font-bold rounded-xl hover:bg-[#00ddb9] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,198,167,0.3)] transition-all text-[15px]">
                                Начать бесплатно <ArrowRight size={16} />
                            </button>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="flex items-center gap-2 px-7 py-3.5 border border-[rgba(255,255,255,0.1)] text-[#b8d0e0] font-medium rounded-xl hover:bg-[#0c1e33] hover:border-[rgba(255,255,255,0.2)] transition-all text-[15px]">
                                Смотреть демо →
                            </button>
                        </div>

                        <div className="flex items-center gap-10"
                             style={{ animation: 'fadeUp 0.5s 0.4s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                            {[
                                { val: '12K+',  label: 'Грантов в базе' },
                                { val: '94%',   label: 'Точность AI'    },
                                { val: '10+',   label: 'Источников'     },
                                { val: '3 мин', label: 'До первой заявки' },
                            ].map(({ val, label }) => (
                                <div key={label}>
                                    <div className="text-2xl font-bold text-white"
                                         style={{ fontFamily: "'Instrument Serif', serif" }}>{val}</div>
                                    <div className="text-[11px] text-[#3d5a72] mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Browser mockup */}
                    <div className="relative" style={{ animation: 'fadeLeft 0.7s 0.3s ease both', opacity: 0, animationFillMode: 'forwards' }}>
                        {/* Browser frame */}
                        <div className="bg-[#0c1e33] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">

                            {/* Browser bar */}
                            <div className="flex items-center gap-3 px-4 py-3 bg-[#050e1a] border-b border-[rgba(255,255,255,0.06)]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                                </div>
                                <div className="flex-1 bg-[#07111f] rounded-md px-3 py-1.5 text-[11px] text-[#3d5a72] border border-[rgba(255,255,255,0.05)]">
                                    granthub.ai/dashboard
                                </div>
                            </div>

                            {/* Dashboard preview inside browser */}
                            <div className="flex" style={{ height: '360px' }}>

                                {/* Mini sidebar */}
                                <div className="w-36 bg-[#050e1a] border-r border-[rgba(255,255,255,0.05)] p-3 flex flex-col gap-1 flex-shrink-0">
                                    {[
                                        { icon: '🏠', label: 'Главная',  active: true  },
                                        { icon: '🔍', label: 'Поиск',    active: false },
                                        { icon: '⭐', label: 'Избранное', active: false },
                                        { icon: '📋', label: 'Заявки',   active: false },
                                        { icon: '📊', label: 'Аналитика', active: false },
                                    ].map(({ icon, label, active }) => (
                                        <div key={label}
                                             className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] transition-all
                        ${active
                                                 ? 'bg-[rgba(0,198,167,0.1)] text-[#00c6a7] border border-[rgba(0,198,167,0.15)]'
                                                 : 'text-[#3d5a72]'
                                             }`}>
                                            <span className="text-sm">{icon}</span> {label}
                                        </div>
                                    ))}
                                </div>

                                {/* Mini content */}
                                <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
                                    {/* Search */}
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-[#07111f] border border-[rgba(255,255,255,0.06)] rounded-lg px-3 py-1.5 text-[10.5px] text-[#3d5a72]">
                                            🔍  Найти гранты...
                                        </div>
                                        <div className="px-3 py-1.5 bg-[#00c6a7] rounded-lg text-[10px] font-bold text-[#07111f]">
                                            Искать
                                        </div>
                                    </div>

                                    {/* Filter chips */}
                                    <div className="flex gap-1.5">
                                        {['Казахстан ×', 'IT / Tech ×', 'до 1 мая ×'].map(chip => (
                                            <span key={chip} className="px-2 py-0.5 bg-[rgba(0,198,167,0.08)] border border-[rgba(0,198,167,0.15)] rounded-full text-[9.5px] text-[#00c6a7]">
                        {chip}
                      </span>
                                        ))}
                                    </div>

                                    {[
                                        { badge: 'Рекомендован ✦', title: 'EU Horizon Grant 2025',  amount: '€ 50 000',   color: '#00c6a7', match: 94 },
                                        { badge: 'Популярное',      title: 'Стипендия Болашак',     amount: '$ 25 000',   color: '#f5a623', match: 87 },
                                        { badge: 'Новый',           title: 'Google.org Impact',     amount: '$ 100 000',  color: '#8b5cf6', match: 79 },
                                    ].map(({ badge, title, amount, color, match }) => (
                                        <div key={title}
                                             className="bg-[#07111f] border border-[rgba(255,255,255,0.05)] rounded-lg p-2.5 flex items-center justify-between"
                                             style={{ borderLeft: `2px solid ${color}` }}>
                                            <div>
                                                <div className="text-[9px] font-bold mb-0.5" style={{ color }}>{badge}</div>
                                                <div className="text-[11px] font-semibold text-white">{title}</div>
                                                <div className="text-[10px] text-[#3d5a72] mt-0.5">{amount}</div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1.5">
                                                <span className="text-[9px] font-bold" style={{ color }}>{match}%</span>
                                                <div className="px-2 py-0.5 bg-[#00c6a7] rounded text-[8.5px] font-bold text-[#07111f]">
                                                    Подать
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="px-3 py-2 bg-[rgba(0,198,167,0.06)] border border-[rgba(0,198,167,0.15)] rounded-lg text-[9.5px] text-[#00c6a7] font-medium">
                                        ✦ AI подобрал 14 новых возможностей по вашему профилю
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -left-16 bottom-16 bg-[#0c1e33] border border-[rgba(255,255,255,0.08)] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                             style={{ animation: 'float 3s ease-in-out infinite' }}>
                            <div className="w-7 h-7 rounded-lg bg-[rgba(0,198,167,0.12)] flex items-center justify-center text-sm">✦</div>
                            <div>
                                <div className="text-[11px] font-semibold text-white">AI-рекомендация</div>
                                <div className="text-[10px] text-[#3d5a72]">94% совпадение</div>
                            </div>
                        </div>

                        <div className="absolute -right-12 top-12 bg-[#0c1e33] border border-[rgba(255,255,255,0.08)] rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-xl"
                             style={{ animation: 'float 3s 1.5s ease-in-out infinite' }}>
                            <div className="w-7 h-7 rounded-lg bg-[rgba(245,166,35,0.12)] flex items-center justify-center text-sm">📅</div>
                            <div>
                                <div className="text-[11px] font-semibold text-white">Дедлайн через 3 дня</div>
                                <div className="text-[10px] text-[#3d5a72]">EU Horizon Grant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="Функции" className="py-28 px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,198,167,0.2)] bg-[rgba(0,198,167,0.06)] text-[#00c6a7] text-xs font-semibold mb-5">
                            Возможности
                        </div>
                        <h2 className="text-[42px] font-bold text-white leading-tight mb-4"
                            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}>
                            Всё необходимое в одной платформе
                        </h2>
                        <p className="text-[16px] text-[#7a9bb5] max-w-lg mx-auto font-light">
                            Интеллектуальные инструменты для поиска, анализа и подачи заявок на гранты
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)]">
                        {features.map(({ icon: Icon, title, color, bg, desc }) => (
                            <div key={title}
                                 className="bg-[#0c1e33] p-8 group hover:bg-[#112540] transition-all duration-300 relative overflow-hidden cursor-default">

                                <div className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left"
                                     style={{ background: color }} />

                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                                     style={{ background: bg, border: `1px solid ${color}20` }}>
                                    <Icon size={22} style={{ color }} />
                                </div>
                                <h3 className="text-[16px] font-bold text-white mb-3 tracking-tight"
                                    style={{ fontFamily: "'Instrument Serif', serif" }}>
                                    {title}
                                </h3>
                                <p className="text-[13px] text-[#7a9bb5] leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="Как работает" className="py-24 px-12 bg-[#050e1a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,198,167,0.2)] bg-[rgba(0,198,167,0.06)] text-[#00c6a7] text-xs font-semibold mb-5">
                            Как работает
                        </div>
                        <h2 className="text-[42px] font-bold text-white leading-tight"
                            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}>
                            Четыре шага до нужного гранта
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 gap-8 relative">

                        <div className="absolute top-7 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px"
                             style={{ background: 'linear-gradient(90deg, transparent, rgba(0,198,167,0.3), transparent)' }} />

                        {steps.map(({ num, title, desc }) => (
                            <div key={num} className="flex flex-col gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-[#0c1e33] border border-[rgba(0,198,167,0.2)] flex items-center justify-center relative z-10"
                                     style={{ fontFamily: "'Instrument Serif', serif" }}>
                                    <span className="text-2xl font-bold text-[#00c6a7]">{num}</span>
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-bold text-white mb-2"
                                        style={{ fontFamily: "'Instrument Serif', serif" }}>
                                        {title}
                                    </h3>
                                    <p className="text-[13px] text-[#7a9bb5] leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="Отзывы" className="py-24 px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-[42px] font-bold text-white"
                            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}>
                            Что говорят пользователи
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {testimonials.map(({ name, role, initials, gradient, text }) => (
                            <div key={name}
                                 className="bg-[#0c1e33] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 hover:border-[rgba(0,198,167,0.2)] transition-all duration-300">
                                {/* Stars */}
                                <div className="flex gap-0.5 mb-4">
                                    {[1,2,3,4,5].map(i => (
                                        <span key={i} className="text-[#00c6a7] text-sm">★</span>
                                    ))}
                                </div>
                                <p className="text-[14px] text-[#b8d0e0] leading-relaxed mb-5">"{text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                                        {initials}
                                    </div>
                                    <div>
                                        <div className="text-[13px] font-semibold text-white">{name}</div>
                                        <div className="text-[11px] text-[#3d5a72]">{role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-12">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="absolute inset-0 rounded-3xl"
                         style={{ background: 'radial-gradient(ellipse at center, rgba(0,198,167,0.08) 0%, transparent 70%)' }} />

                    <div className="relative bg-[#0c1e33] border border-[rgba(0,198,167,0.2)] rounded-3xl px-12 py-16">
                        <div className="w-14 h-14 bg-[#00c6a7] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sparkles size={26} className="text-[#07111f]" />
                        </div>
                        <h2 className="text-[40px] font-bold text-white mb-4"
                            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '-1.5px' }}>
                            Начни прямо сейчас
                        </h2>
                        <p className="text-[16px] text-[#7a9bb5] mb-8 font-light">
                            Регистрация бесплатна. AI-подбор начинается сразу после создания профиля.
                        </p>

                        <div className="flex items-center justify-center gap-4 mb-8">
                            <button
                                onClick={() => navigate('/auth')}
                                className="flex items-center gap-2 px-8 py-4 bg-[#00c6a7] text-[#07111f] font-bold rounded-xl hover:bg-[#00ddb9] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,198,167,0.3)] transition-all text-[15px]">
                                Зарегистрироваться бесплатно <ArrowRight size={16} />
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 px-8 py-4 border border-[rgba(255,255,255,0.1)] text-[#b8d0e0] font-medium rounded-xl hover:bg-[#112540] transition-all text-[15px]">
                                Смотреть демо
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-6 text-[12.5px] text-[#3d5a72]">
                            {['Без кредитной карты', 'Бесплатный доступ к 12K+ грантов', 'AI-подбор с первого дня'].map(item => (
                                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-[#00c6a7]" /> {item}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <footer className="border-t border-[rgba(255,255,255,0.06)] px-12 py-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-[#00c6a7] rounded-lg flex items-center justify-center text-[#07111f] font-bold text-xs">G</div>
                        <span className="text-[15px] font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Grant<span className="text-[#00c6a7]">Hub</span>.AI
            </span>
                    </div>
                    <div className="flex gap-8">
                        {['О проекте', 'API', 'Конфиденциальность', 'Контакты'].map(link => (
                            <a key={link} href="#" className="text-[12.5px] text-[#3d5a72] hover:text-white transition-colors">{link}</a>
                        ))}
                    </div>
                    <p className="text-[12px] text-[#3d5a72]">© 2025 GrantHub.AI</p>
                </div>
            </footer>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
        </div>
    )
}