import React from 'react'

export default function home() {
  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <div className="flex gap-4 mt-4">
      <div>Usuarios: </div>
      <div>Posts: </div>
      <div>Álbumes:</div>
    </div>
  </div>
  )
}
