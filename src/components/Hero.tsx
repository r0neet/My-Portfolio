'use client'
import { Laptop, Image, Plane, PieChart, Heart, Pencil } from 'lucide-react'

interface Category {
  title: string
  icon: React.ReactNode
  description?: string
}

const categories: Category[] = [
  {
    title: 'Tech + Workplace',
    icon: <Laptop className="w-12 h-12 text-blue-400" />,
  },
  {
    title: 'People and Arts',
    // eslint-disable-next-line jsx-a11y/alt-text
    icon: <Image className="w-12 h-12 text-blue-400" />,
  },
  {
    title: 'Travel',
    icon: <Plane className="w-12 h-12 text-orange-400" />,
  },
  {
    title: 'Food',
    icon: <PieChart className="w-12 h-12 text-yellow-400" />,
  },
  {
    title: 'Essays',
    icon: <Heart className="w-12 h-12 text-blue-400" />,
  },
  {
    title: 'Other Projects',
    icon: <Pencil className="w-12 h-12 text-gray-400" />,
  },
]

function CategoryCard({ title, icon }: Category) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 text-center group hover:bg-gray-900 rounded-lg transition-all duration-300">
      <div className="w-24 h-24 flex items-center justify-center bg-gray-900 rounded-lg group-hover:bg-gray-800">
        {icon}
      </div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
