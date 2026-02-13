# 🎓 EduTrack - Student Progress Tracking & Performance Prediction System

A modern, AI-powered web application for tracking student academic progress and predicting performance outcomes. Built with React, Tailwind CSS, and Recharts.

## ✨ Features

### For Students
- 📊 **Dashboard** - Overview of academic performance with visual analytics
- 📈 **Progress Tracking** - Subject-wise performance breakdown with detailed tables and charts
- 🔮 **Performance Prediction** - AI-powered grade predictions and personalized recommendations
- 📉 **Visual Analytics** - Bar charts, radar charts, line charts, and pie charts
- 💡 **Improvement Suggestions** - Personalized tips for academic improvement

### For Faculty
- 👥 **Dashboard** - Monitor class performance and identify at-risk students
- 📋 **Student Management** - Searchable table with student profiles, GPA, attendance, and risk levels
- 📊 **Reports & Analytics** - Comprehensive analytics with downloadable reports
- ⚠️ **Risk Assessment** - Automatic identification of students needing attention
- 📈 **Attendance Tracking** - Class attendance trends over time

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4
- **Charts:** Recharts
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** JavaScript

## 📁 Project Structure

```
edutrack/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── TopNav.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── StatCard.jsx
│   │   └── ChartCard.jsx
│   ├── data/
│   │   ├── students.json
│   │   ├── performance.json
│   │   ├── attendance.json
│   │   └── predictions.json
│   └── pages/
│       ├── LoginPage.jsx
│       ├── SignupPage.jsx
│       ├── student/
│       │   ├── StudentDashboard.jsx
│       │   ├── StudentProgress.jsx
│       │   └── PerformancePrediction.jsx
│       └── faculty/
│           ├── FacultyDashboard.jsx
│           ├── StudentManagement.jsx
│           └── ReportsAnalytics.jsx
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/edutrack.git
   cd edutrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 Demo Login

### Student Account
- **Email:** alex.johnson@university.edu
- **Password:** (any password)
- **Role:** Student

### Faculty Account
- **Email:** sarah.mitchell@university.edu
- **Password:** (any password)
- **Role:** Faculty

> **Note:** This is a demo application. Authentication is not enforced - simply select a role and click "Sign In".

## 🎯 Pages & Routes

| Route | Description |
|-------|-------------|
| `/login` | Login page with role selection |
| `/signup` | Registration page |
| `/student/dashboard` | Student overview with performance stats |
| `/student/progress` | Detailed academic progress tracking |
| `/student/prediction` | AI-powered performance predictions |
| `/faculty/dashboard` | Faculty overview with class analytics |
| `/faculty/students` | Student management and search |
| `/faculty/reports` | Comprehensive reports and analytics |

## 📊 Data Structure

The application uses JSON files for dummy data:

- **students.json** - Student profiles with GPA, attendance, risk levels
- **performance.json** - Subject marks, score distribution, improvement suggestions
- **attendance.json** - Attendance trends and monthly progress
- **predictions.json** - AI predictions, contributing factors, recommendations

## 🎨 Design Features

- Modern EdTech SaaS dashboard aesthetic
- Gradient accent colors (blue, purple, green, orange)
- Responsive design (desktop-first)
- Clean typography with Inter font
- Smooth transitions and hover effects
- Accessible color contrasts

## 📈 Charts & Visualizations

- **Bar Charts** - Score distribution, class performance, subject analysis
- **Radar Charts** - Performance vs attendance, skill assessment
- **Line Charts** - Prediction trends, attendance over time
- **Pie Charts** - Risk distribution, contributing factors

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built by a senior frontend engineer as a demonstration of modern React development practices.

## 🙏 Acknowledgments

- Design inspired by modern EdTech platforms
- Charts powered by Recharts library
- Icons by Lucide React
