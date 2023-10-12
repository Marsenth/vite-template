import { Outlet, Link } from '@tanstack/router';
import 'ui/styles.css';

function App() {
  return (
    <div>
      <div className='flex flex-wrap px-60 py-5 gap-x-10'>
        <Link to="/">Form</Link>
      </div>

      <Outlet />
    </div>
  )
}

export default App
