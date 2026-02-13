import DashboardLayout from '../../components/DashboardLayout';
import ChartCard from '../../components/ChartCard';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import predictionsData from '../../data/predictions.json';
import { TrendingUp, AlertCircle, Brain, Trophy, Target, Lightbulb } from 'lucide-react';

export default function PerformancePrediction() {
  const {
    predictedFinalScore, confidenceLevel, riskLevel, riskDescription,
    academicStanding, improvementRate, expectedFinalGrade, gradeRange,
    gradeProbability, predictionVsActual, contributingFactors,
    subjectPredictions, strengths, areasToImprove, recommendations
  } = predictionsData;

  return (
    <DashboardLayout role="student" userName="Alex Johnson" avatarLetter="A" avatarColor="#7c3aed">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Performance Prediction</h1>
        <p className="text-gray-500 mt-1">AI-powered analysis and grade predictions based on your current progress</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Predicted Final Score */}
        <div className="bg-gradient-to-br from-[#6c5ce7] to-[#a855f7] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-white/80" />
            <span className="text-sm font-medium text-white/80">Predicted Final Score</span>
          </div>
          <p className="text-5xl font-bold mb-2">{predictedFinalScore}%</p>
          <p className="text-sm text-white/70">Based on current performance trajectory</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-white/80">Confidence Level</span>
            <span className="text-sm font-bold">{confidenceLevel}%</span>
          </div>
          <div className="mt-1 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white/70 rounded-full" style={{ width: `${confidenceLevel}%` }}></div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700">Risk Assessment</span>
          </div>
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            {riskLevel}
          </span>
          <p className="text-sm text-gray-600 mb-4">{riskDescription}</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Academic Standing</span>
              <span className="font-semibold text-green-600">{academicStanding}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Improvement Rate</span>
              <span className="font-semibold text-blue-600">{improvementRate}</span>
            </div>
          </div>
        </div>

        {/* AI Prediction Model */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-700">AI Prediction Model</span>
          </div>
          <div className="text-center my-4">
            <span className="text-6xl font-bold text-purple-600">{expectedFinalGrade}</span>
            <p className="text-sm text-gray-500 mt-2">Expected Final Grade</p>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Grade Range</span>
              <span className="font-semibold text-gray-800">{gradeRange}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Probability</span>
              <span className="font-semibold text-gray-800">{gradeProbability}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Prediction vs Actual */}
        <ChartCard title="Prediction vs Actual Performance">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={predictionVsActual}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[70, 95]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="predicted"
                name="Predicted Score"
                stroke="#7c3aed"
                strokeDasharray="5 5"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="actual"
                name="Actual Score"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={{ r: 4 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Contributing Factors */}
        <ChartCard title="Performance Contributing Factors">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={contributingFactors}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                nameKey="name"
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={true}
              >
                {contributingFactors.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Subject-wise Grade Predictions Table */}
      <ChartCard title="Subject-wise Grade Predictions" className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium">Subject</th>
                <th className="text-center py-3 px-4 font-medium">Current Score</th>
                <th className="text-center py-3 px-4 font-medium">Predicted Score</th>
                <th className="text-center py-3 px-4 font-medium">Expected Grade</th>
                <th className="text-center py-3 px-4 font-medium">Improvement</th>
              </tr>
            </thead>
            <tbody>
              {subjectPredictions.map((sp, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="py-4 px-4 font-medium text-gray-800">{sp.subject}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{sp.currentScore}</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">{sp.predictedScore}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {sp.expectedGrade}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">{sp.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ChartCard>

      {/* Strengths, Areas to Improve, Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-green-500" />
            <h3 className="text-lg font-semibold text-gray-800">Strengths</h3>
          </div>
          <ul className="space-y-3">
            {strengths.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Areas to Improve */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-orange-500" />
            <h3 className="text-lg font-semibold text-gray-800">Areas to Improve</h3>
          </div>
          <ul className="space-y-3">
            {areasToImprove.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-800">Recommendations</h3>
          </div>
          <ul className="space-y-3">
            {recommendations.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
