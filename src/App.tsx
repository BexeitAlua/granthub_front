import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Dashboard from './pages/Dashboard'
import GrantDetail from './pages/GrantDetail'
import Auth from './pages/Auth'

export default function App() {
    const [search, setSearch] = useState('')

    return (
        <BrowserRouter>
            <Routes>
                {/* Auth — без сайдбара */}
                <Route path="/auth" element={<Auth />} />

                {/* Основные страницы — с лейаутом */}
                <Route path="/*" element={
                    <div className="flex h-screen bg-[#07111f] overflow-hidden">
                        <Sidebar />
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <TopBar search={search} onSearch={setSearch} />
                            <Routes>
                                <Route path="/" element={<Dashboard search={search} />} />
                                <Route path="/grant/:id" element={<GrantDetail />} />
                            </Routes>
                        </div>
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    )
}