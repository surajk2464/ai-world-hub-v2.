'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Plus, Edit2, Trash2, LogOut } from 'lucide-react'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Tools', href: '/admin/tools', icon: '🛠️' },
    { label: 'Categories', href: '/admin/categories', icon: '📂' },
    { label: 'News', href: '/admin/news', icon: '📰' },
    { label: 'Feedback', href: '/admin/feedback', icon: '💬' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} border-r border-white/10 glass transition-all duration-300 hidden md:flex flex-col`}>
        <div className="p-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3 hover:text-cyan-400">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xs font-bold">
              AI
            </div>
            {sidebarOpen && <span className="font-bold text-foreground">Hub Admin</span>}
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <button className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-red-500/10 hover:text-red-400 transition-colors">
            <LogOut className="h-4 w-4" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="sticky top-0 border-b border-white/10 glass px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden md:flex items-center justify-center h-10 w-10 rounded-lg glass border border-white/10 hover:border-cyan-500/30"
          >
            <ChevronDown className={`h-5 w-5 transition-transform ${sidebarOpen ? 'rotate-90' : '-rotate-90'}`} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
