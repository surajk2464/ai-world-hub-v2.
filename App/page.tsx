'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Tools', value: '0', icon: '🛠️', color: 'from-blue-500 to-blue-600' },
    { label: 'Categories', value: '0', icon: '📂', color: 'from-purple-500 to-purple-600' },
    { label: 'News Articles', value: '0', icon: '📰', color: 'from-pink-500 to-pink-600' },
    { label: 'Feedback Messages', value: '0', icon: '💬', color: 'from-green-500 to-green-600' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
          <p className="text-muted-foreground mt-1">Manage your AI tools platform</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2 font-medium text-slate-950 hover:shadow-lg hover:shadow-cyan-500/50">
          <Plus className="h-4 w-4" />
          Add New Tool
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg glass-strong border border-cyan-500/30 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
              <div className={`text-4xl`}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg glass-strong border border-white/10 p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Recent Activity</h3>
        <div className="text-center py-8">
          <p className="text-muted-foreground">No recent activity</p>
          <p className="text-xs text-muted-foreground mt-1">Start by adding your first tool</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-3">
        <button className="rounded-lg glass p-4 border border-white/10 hover:border-cyan-500/30 text-left">
          <p className="text-sm font-semibold text-foreground">Add Tool</p>
          <p className="text-xs text-muted-foreground mt-1">Create a new AI tool entry</p>
        </button>
        <button className="rounded-lg glass p-4 border border-white/10 hover:border-cyan-500/30 text-left">
          <p className="text-sm font-semibold text-foreground">Post News</p>
          <p className="text-xs text-muted-foreground mt-1">Share AI industry news</p>
        </button>
        <button className="rounded-lg glass p-4 border border-white/10 hover:border-cyan-500/30 text-left">
          <p className="text-sm font-semibold text-foreground">View Feedback</p>
          <p className="text-xs text-muted-foreground mt-1">Read user feedback</p>
        </button>
      </div>
    </div>
  )
}
