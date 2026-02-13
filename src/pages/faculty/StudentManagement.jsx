import { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import studentsData from '../../data/students.json';
import { Search } from 'lucide-react';

export default function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = studentsData.filter(
    (s) =>
      s.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getRiskBadge = (risk) => {
    switch (risk) {
      case 'Low Risk':
        return 'bg-green-100 text-green-700';
      case 'Medium Risk':
        return 'bg-yellow-100 text-yellow-700';
      case 'High Risk':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getGpaColor = (gpa) => {
    if (gpa >= 8.5) return 'text-green-600';
    if (gpa >= 7.0) return 'text-blue-600';
    return 'text-red-500';
  };

  const getAttendanceBadge = (att) => {
    if (att >= 85) return 'bg-green-100 text-green-700';
    if (att >= 75) return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <DashboardLayout role="faculty" userName="Dr. Sarah Mitchell" avatarLetter="D" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
        <p className="text-gray-500 mt-1">View and manage student performance data</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or student ID..."
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 bg-gray-50"
          />
        </div>
      </div>

      {/* Student Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 border-b border-gray-200">
                <th className="text-left py-4 px-6 font-medium">Student</th>
                <th className="text-center py-4 px-4 font-medium">Student ID</th>
                <th className="text-center py-4 px-4 font-medium">Department</th>
                <th className="text-center py-4 px-4 font-medium">Semester</th>
                <th className="text-center py-4 px-4 font-medium">GPA</th>
                <th className="text-center py-4 px-4 font-medium">Attendance</th>
                <th className="text-center py-4 px-4 font-medium">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: student.avatarColor }}
                      >
                        {student.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{student.studentName}</p>
                        <p className="text-xs text-gray-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-600">{student.rollNumber}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{student.department}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{student.semester}</td>
                  <td className={`py-4 px-4 text-center font-semibold ${getGpaColor(student.gpa)}`}>
                    {student.gpa}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAttendanceBadge(student.attendancePercentage)}`}>
                      {student.attendancePercentage}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${getRiskBadge(student.riskLevel)}`}>
                      {student.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
