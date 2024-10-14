import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Vite React TS - Tailwind CSS - shadcn/ui</h1>
        <p className="text-lg text-gray-600 mb-6">Start developing now!</p>
        <Button>Get Started</Button>
      </div>
    </>
  )
}

export default App
