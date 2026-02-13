import DashboardLayout from '../../components/DashboardLayout';
import ChartCard from '../../components/ChartCard';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import studentsData from '../../data/students.json';
import performanceData from '../../data/performance.json';
import attendanceData from '../../data/attendance.json';
import { Users, AlertTriangle, BookOpen, TrendingUp } from 'lucide-react';

const riskDistribution = [
  { name: 'Low Risk', value: 3, color: '#10b981' },
  { name: 'Medium Risk', value: 2, color: '#f59e0b' },
  { name: 'High Risk', value: 2, color: '#ef4444' },
];

const atRiskStudents = studentsData.filter(s => s.riskLevel !== 'Low Risk');

export default function FacultyDashboard() {
  const totalStudents = studentsData.length;
  const atRiskCount = atRiskStudents.length;
  const avgAttendance = Math.round(studentsData.reduce((a, s) => a + s.attendancePercentage, 0) / totalStudents);
  const avgGPA = (studentsData.reduce((a, s) => a + s.gpa, 0) / totalStudents).toFixed(2);

  return (
    <DashboardLayout role="faculty" userName="Dr. Sarah Mitchell" avatarLetter="D" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Dashboard</h1>
        <p className="text-gray-500 mt-1">Monitor class performance and identify students who need support</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Total Students</span>
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{totalStudents}</p>
          <p className="text-xs text-gray-400 mt-1">Computer Science Dept.</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">At-Risk Students</span>
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{atRiskCount}</p>
          <p className="text-xs text-gray-400 mt-1">Need attention</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Average Attendance</span>
            <BookOpen className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{avgAttendance}%</p>
          <p className="text-xs text-green-500 mt-1">↑ 2% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">Average GPA</span>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-gray-800">{avgGPA}</p>
          <p className="text-xs text-green-500 mt-1">↑ 0.3% from last month</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ChartCard title="Class Performance Distribution">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={performanceData.classPerformanceDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="range" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" name="Number of Students" fill="#7c3aed" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Student Risk Distribution">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={riskDistribution}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}`}
                labelLine={true}
              >
                {riskDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Attendance Trend */}
      <ChartCard title="Attendance Trend Over Time" className="mb-6">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={attendanceData.classAttendanceTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis domain={[70, 95]} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="attendance"
              name="Class Attendance %"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ r: 5, fill: '#4f46e5' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Students Requiring Attention */}
      <ChartCard title="Students Requiring Attention" icon={<AlertTriangle className="w-5 h-5 text-yellow-500" />}>
        <div className="space-y-4">
          {atRiskStudents.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: student.avatarColor }}
                >
                  {student.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{student.studentName}</p>
                  <p className="text-xs text-gray-500">{student.rollNumber} • Semester {student.semester}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500">GPA</p>
                  <p className={`font-semibold ${student.gpa < 7 ? 'text-red-500' : 'text-orange-500'}`}>{student.gpa}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">Attendance</p>
                  <p className={`font-semibold ${student.attendancePercentage < 75 ? 'text-red-500' : 'text-orange-500'}`}>{student.attendancePercentage}%</p>
                </div>
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                  student.riskLevel === 'High Risk'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {student.riskLevel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ChartCard>
    </DashboardLayout>
  );
}
