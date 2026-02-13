export default function ChartCard({ title, icon, children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}>
      {title && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <span className="text-indigo-500">{icon}</span>}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
}
