import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, TrendingUp, BarChart3, LogOut, GraduationCap } from 'lucide-react';

const studentLinks = [
  { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/student/progress', label: 'My Progress', icon: TrendingUp },
  { to: '/student/prediction', label: 'Performance Prediction', icon: BarChart3 },
];

const facultyLinks = [
  { to: '/faculty/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/faculty/students', label: 'Student Management', icon: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )},
  { to: '/faculty/reports', label: 'Reports & Analytics', icon: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )},
];

export default function Sidebar({ role }) {
  const navigate = useNavigate();
  const links = role === 'faculty' ? facultyLinks : studentLinks;

  return (
    <aside className="w-60 min-h-screen bg-[#2b2455] flex flex-col fixed left-0 top-0 z-30">
      {/* Logo */}
      <div className="px-5 py-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-white text-lg font-bold leading-tight">EduTrack</h1>
          <p className="text-gray-400 text-xs">Analytics Platform</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 mt-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-[#2b2455] shadow-md'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 pb-6">
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all w-full"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
