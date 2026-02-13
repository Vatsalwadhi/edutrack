export default function StatCard({ icon, title, value, subtitle, bgColor = 'bg-white', textColor = 'text-gray-800', iconElement }) {
  return (
    <div className={`${bgColor} rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 min-w-[200px]`}>
      <div className="flex items-start justify-between mb-2">
        <p className={`text-sm font-medium ${bgColor === 'bg-white' ? 'text-gray-500' : 'text-white/80'}`}>{title}</p>
        {iconElement && <div className={`${bgColor === 'bg-white' ? 'text-gray-400' : 'text-white/70'}`}>{iconElement}</div>}
      </div>
      <p className={`text-3xl font-bold ${bgColor === 'bg-white' ? textColor : 'text-white'}`}>{value}</p>
      {subtitle && (
        <p className={`text-xs mt-1 ${bgColor === 'bg-white' ? 'text-gray-400' : 'text-white/70'}`}>{subtitle}</p>
      )}
    </div>
  );
}
