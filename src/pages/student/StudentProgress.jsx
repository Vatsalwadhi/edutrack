import DashboardLayout from '../../components/DashboardLayout';
import ChartCard from '../../components/ChartCard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import performanceData from '../../data/performance.json';
import { AlertTriangle } from 'lucide-react';

export default function StudentProgress() {
  const { subjectPerformance, scoreDistribution, performanceVsAttendance, improvementSuggestions } = performanceData;

  const getAttendanceColor = (att) => {
    const num = parseInt(att);
    if (num >= 90) return 'bg-green-100 text-green-700';
    if (num >= 85) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <DashboardLayout role="student" userName="Alex Johnson" avatarLetter="A" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Academic Progress</h1>
        <p className="text-gray-500 mt-1">Detailed breakdown of your performance across all subjects</p>
      </div>

      {/* Subject-wise Performance Table */}
      <ChartCard title="Subject-wise Performance" icon={
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
        </svg>
      } className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium">Subject</th>
                <th className="text-center py-3 px-4 font-medium">Code</th>
                <th className="text-center py-3 px-4 font-medium">Internal</th>
                <th className="text-center py-3 px-4 font-medium">Exam</th>
                <th className="text-center py-3 px-4 font-medium">Total</th>
                <th className="text-center py-3 px-4 font-medium">Percentage</th>
                <th className="text-center py-3 px-4 font-medium">Attendance</th>
                <th className="text-center py-3 px-4 font-medium">Credits</th>
              </tr>
            </thead>
            <tbody>
              {subjectPerformance.map((sp, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="py-4 px-4 font-medium text-gray-800">{sp.subject}</td>
                  <td className="py-4 px-4 text-center text-gray-500">{sp.code}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{sp.internal}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{sp.exam}</td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-800">{sp.total}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {sp.percentage}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAttendanceColor(sp.attendance)}`}>
                      {sp.attendance}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-600">{sp.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Score Distribution" icon={
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        }>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={scoreDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="internalMarks" name="Internal Marks" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={30} />
              <Bar dataKey="examMarks" name="Exam Marks" fill="#7c3aed" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Performance vs Attendance" icon={
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={performanceVsAttendance}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Score %" dataKey="score" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
              <Radar name="Attendance %" dataKey="attendance" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Improvement Suggestions */}
      <ChartCard title="Personalized Improvement Suggestions" icon={<AlertTriangle className="w-5 h-5 text-yellow-500" />}>
        <div className="space-y-4">
          {improvementSuggestions.map((item, i) => (
            <div key={i} className="border-l-4 border-yellow-400 bg-yellow-50/50 rounded-r-xl p-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-gray-800">{item.subject}</h4>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  item.priority === 'Medium Priority'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Issue:</span> {item.issue}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Suggestion:</span> {item.suggestion}
              </p>
            </div>
          ))}
        </div>
      </ChartCard>
    </DashboardLayout>
  );
}
