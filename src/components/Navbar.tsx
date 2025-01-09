'use client'
import Link from 'next/link'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'WRITING', href: '/writing' },
  { name: 'PROJECTS/PRESS', href: '/projects' },
  { name: 'WORK WITH ME', href: '/contact' },
]
export default function Navbar() {
    return (
      <nav className="w-full py-6 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest">
              MURIEL VEGA
            </h1>
            <p className="text-gray-400 tracking-widest text-sm md:text-base text-center">
              ATLANTA-BASED TECH, FOOD + CULTURE WRITER
            </p>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-8 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }
  