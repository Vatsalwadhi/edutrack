import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProgress from './pages/student/StudentProgress';
import PerformancePrediction from './pages/student/PerformancePrediction';
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import StudentManagement from './pages/faculty/StudentManagement';
import ReportsAnalytics from './pages/faculty/ReportsAnalytics';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Student */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/progress" element={<StudentProgress />} />
        <Route path="/student/prediction" element={<PerformancePrediction />} />

        {/* Faculty */}
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/students" element={<StudentManagement />} />
        <Route path="/faculty/reports" element={<ReportsAnalytics />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
