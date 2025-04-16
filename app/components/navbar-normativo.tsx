import Link from 'next/link'
import React from 'react'

const NavBarNormativo = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="container mx-auto">
        <ul className="flex space-x-4">

          <li>
            <Link href="/" className="text-gray-500 hover:text-blue-500">Buscar Proyectos </Link>
          </li>
          
          <li>
            <Link href="/chatia" 
                     className="text-gray-500 hover:text-blue-500">
                       ChatIA Normativo
            </Link>
          </li>          
        </ul>
      </div>
    </nav>
  )
}

export default NavBarNormativo