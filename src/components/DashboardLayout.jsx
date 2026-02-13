import Sidebar from './Sidebar';
import TopNav from './TopNav';

export default function DashboardLayout({ children, role, userName, avatarLetter, avatarColor }) {
  return (
    <div className="flex min-h-screen bg-[#f3f4f8]">
      <Sidebar role={role} />
      <div className="flex-1 ml-60">
        <TopNav
          userName={userName}
          role={role === 'faculty' ? 'Faculty' : 'Student'}
          avatarLetter={avatarLetter}
          avatarColor={avatarColor}
        />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
