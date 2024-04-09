// Routes
import { Link } from 'react-router-dom'
// Dark Mode
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
// Components
import CreateNote from './components/CreateNote'
import ListNote from './components/ListNote'

// Context
import { NoteProvider } from "./Context/noteContext"



function App() {
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NoteProvider>
        <main className="container"> 

          <header className="flex items-center justify-between">
            <h1 className="my-6 text-3xl font-bold">
              <Link to="/">Note app</Link>
            </h1>
            <div className="flex gap-3">
              <CreateNote />
              <ModeToggle />      
            </div>
          </header>  

          <ListNote />      
          
          <footer className="p-8 mt-16 text-center border-t-2">
            <p>Hecho con ❤️</p>
          </footer>

        </main>
      </NoteProvider>
    </ThemeProvider>
  )
}

export default App