import DashboardLayout from '../../components/DashboardLayout';
import ChartCard from '../../components/ChartCard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LineChart, Line
} from 'recharts';
import performanceData from '../../data/performance.json';
import attendanceData from '../../data/attendance.json';
import predictionsData from '../../data/predictions.json';
import { Users, TrendingUp, FileText, AlertTriangle, Download } from 'lucide-react';

const gradeDistribution = [
  { range: '90-100', count: 5 },
  { range: '80-89', count: 15 },
  { range: '70-79', count: 12 },
  { range: '60-69', count: 8 },
  { range: 'Below 60', count: 3 },
];

const reports = [
  {
    title: 'Semester Performance Report',
    description: 'Complete analysis of student performance for current semester',
    tag: 'Performance',
    date: 'Feb 10, 2026',
  },
  {
    title: 'Attendance Analysis Report',
    description: 'Detailed attendance patterns and trends analysis',
    tag: 'Attendance',
    date: 'Feb 8, 2026',
  },
  {
    title: 'Risk Assessment Report',
    description: 'At-risk students identification and intervention suggestions',
    tag: 'Risk',
    date: 'Feb 5, 2026',
  },
];

export default function ReportsAnalytics() {
  return (
    <DashboardLayout role="faculty" userName="Dr. Sarah Mitchell" avatarLetter="D" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-500 mt-1">Comprehensive analysis and downloadable reports</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-600 rounded-2xl p-5 text-white shadow-sm">
          <Users className="w-6 h-6 text-white/70 mb-2" />
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm text-white/80">Total Students</p>
        </div>
        <div className="bg-green-500 rounded-2xl p-5 text-white shadow-sm">
          <TrendingUp className="w-6 h-6 text-white/70 mb-2" />
          <p className="text-3xl font-bold">89%</p>
          <p className="text-sm text-white/80">Pass Rate</p>
        </div>
        <div className="bg-purple-600 rounded-2xl p-5 text-white shadow-sm">
          <FileText className="w-6 h-6 text-white/70 mb-2" />
          <p className="text-3xl font-bold">7.6</p>
          <p className="text-sm text-white/80">Average GPA</p>
        </div>
        <div className="bg-orange-500 rounded-2xl p-5 text-white shadow-sm">
          <AlertTriangle className="w-6 h-6 text-white/70 mb-2" />
          <p className="text-3xl font-bold">4</p>
          <p className="text-sm text-white/80">Need Attention</p>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Subject Performance Analysis">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData.subjectAnalysis}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="internal" name="Internal" fill="#ef4444" radius={[3, 3, 0, 0]} barSize={18} />
              <Bar dataKey="exam" name="Exam" fill="#10b981" radius={[3, 3, 0, 0]} barSize={18} />
              <Bar dataKey="assignment" name="Assignment" fill="#3b82f6" radius={[3, 3, 0, 0]} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Progress Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData.monthlyProgressTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="attendance"
                name="Attendance"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4, fill: '#10b981' }}
              />
              <Line
                type="monotone"
                dataKey="performance"
                name="Performance"
                stroke="#7c3aed"
                strokeWidth={2}
                dot={{ r: 4, fill: '#7c3aed' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Class Skill Assessment">
          <ResponsiveContainer width="100%" height={320}>
            <RadarChart data={predictionsData.classSkillAssessment}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar name="Average Score" dataKey="score" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Grade Distribution">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={gradeDistribution} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="range" tick={{ fontSize: 11 }} width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Number of Students" fill="#7c3aed" radius={[0, 4, 4, 0]} barSize={25} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Generated Reports */}
      <ChartCard title="Generated Reports" icon={<FileText className="w-5 h-5" />}>
        <div className="flex justify-end mb-4">
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-700 transition shadow-sm">
            <FileText className="w-4 h-4" />
            Generate New Report
          </button>
        </div>
        <div className="space-y-4">
          {reports.map((report, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{report.title}</p>
                  <p className="text-xs text-gray-500">{report.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {report.tag}
                </span>
                <span className="text-xs text-gray-400">{report.date}</span>
                <button className="flex items-center gap-1.5 bg-green-500 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-green-600 transition">
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </ChartCard>
    </DashboardLayout>
  );
}
