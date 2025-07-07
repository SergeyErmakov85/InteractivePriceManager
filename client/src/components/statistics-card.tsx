interface StatisticsCardProps {
  value: string | number;
  label: string;
  className?: string;
}

export default function StatisticsCard({ value, label, className = "" }: StatisticsCardProps) {
  return (
    <div className={`gradient-pink-purple rounded-2xl p-6 text-white shadow-lg ${className}`}>
      <div className="text-center">
        <div className="text-4xl font-bold mb-2">{value}</div>
        <div className="text-pink-100">{label}</div>
      </div>
    </div>
  );
}
