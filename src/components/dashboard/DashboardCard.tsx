import React from 'react'

type DashboardCardProps = {
  title: string
  value: number
  description: string
  icon: React.ReactNode
  color: string // warna tailwind gradient misal: from-blue-600 to-blue-400
}

const DashboardCard = ({ title, value, description, icon, color }: DashboardCardProps) => {
  return (
    <div className="relative flex flex-col bg-white bg-clip-border rounded-xl shadow-md">
      <div
        className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr ${color} text-white absolute -mt-4 grid h-16 w-16 place-items-center`}
      >
        {icon}
      </div>

      <div className="p-4 text-right">
        <p className="text-sm text-gray-600">{title}</p>
        <h4 className="text-3xl font-semibold text-gray-900">{value}</h4>
      </div>

      <div className="border-t border-gray-100 p-4">
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default DashboardCard
