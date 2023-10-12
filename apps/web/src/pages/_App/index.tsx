import { Outlet, Link } from '@tanstack/router'

function App() {
  return (
    <div className='h-[100dvh] bg-gray-800 text-gray-300 border-gray-500'>
      <div className='flex flex-wrap px-10 py-5 gap-x-10'>
        <Link to="/">Form</Link> <Link to="/drag-and-drop">Drag and Drop</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default App
