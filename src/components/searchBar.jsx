import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";

export default function searchBar({ value, onChange, placeholder = "Buscar..." }) {
  return (
    <div className="max-w-md mx-auto mb-4">
      <div className="relative">
        <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-3 py-2 rounded-2xl border border-gray-700 bg-gray-800 text-white placeholder-gray-400"
        />
      </div>
    </div>
  )
}
