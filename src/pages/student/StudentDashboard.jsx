import DashboardLayout from '../../components/DashboardLayout';
import ChartCard from '../../components/ChartCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import performanceData from '../../data/performance.json';
import predictionsData from '../../data/predictions.json';
import { TrendingUp, Users, BookOpen, Award } from 'lucide-react';

const summaryCards = [
  { title: 'Overall GPA', value: '8.4', icon: <Award className="w-5 h-5" />, color: 'text-indigo-600' },
  { title: 'Attendance', value: '87%', icon: <Users className="w-5 h-5" />, color: 'text-green-600' },
  { title: 'Subjects', value: '5', icon: <BookOpen className="w-5 h-5" />, color: 'text-blue-600' },
  { title: 'Predicted Grade', value: 'A', icon: <TrendingUp className="w-5 h-5" />, color: 'text-purple-600' },
];

export default function StudentDashboard() {
  return (
    <DashboardLayout role="student" userName="Alex Johnson" avatarLetter="A" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Alex! Here's your academic overview</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {summaryCards.map((card) => (
          <div key={card.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500 font-medium">{card.title}</span>
              <span className={card.color}>{card.icon}</span>
            </div>
            <p className={`text-3xl font-bold ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Score Distribution" icon={<TrendingUp className="w-5 h-5" />}>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={performanceData.scoreDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="internalMarks" name="Internal Marks" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              <Bar dataKey="examMarks" name="Exam Marks" fill="#7c3aed" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Performance vs Attendance" icon={<Users className="w-5 h-5" />}>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={performanceData.performanceVsAttendance}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Score %" dataKey="score" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
              <Radar name="Attendance %" dataKey="attendance" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Quick Predictions */}
      <ChartCard title="Subject-wise Quick Overview">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-100">
                <th className="text-left py-3 px-4 font-medium">Subject</th>
                <th className="text-center py-3 px-4 font-medium">Current</th>
                <th className="text-center py-3 px-4 font-medium">Predicted</th>
                <th className="text-center py-3 px-4 font-medium">Grade</th>
              </tr>
            </thead>
            <tbody>
              {predictionsData.subjectPredictions.map((sp) => (
                <tr key={sp.subject} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{sp.subject}</td>
                  <td className="py-3 px-4 text-center text-gray-600">{sp.currentScore}</td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">{sp.predictedScore}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {sp.expectedGrade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </DashboardLayout>
  );
}
