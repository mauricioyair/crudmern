import { useContext } from "react";

// Dialog Shadcn/ui
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Context
import { NoteContext } from "../Context/noteContext"

const CreateNote: React.FC = () => {
  const createNoteContext = useContext(NoteContext)
  if (!createNoteContext) return null;
  const { newtitle, newdescription, saveNote, setNewTitle, setNewDescription, setSaveNote } = createNoteContext

  const addNote = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    const title = newtitle.trim()
    const description = newdescription.trim()
    
    if(title && description) {
      fetch('http://localhost:4000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({
          "titulo": title,
          "descripcion": description,          
        }),
      })
      .then(response => response.json())
      .then(data => {
        setSaveNote([...saveNote, data])
        setNewTitle('') 
        setNewDescription('') 
      })
      window.location.reload()      
    }  
  }

  return(
    <>    
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <Button variant="outline">Crear nota</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Guardar nota</DialogTitle>
          <DialogDescription>
            Haga clic en Guardar cuando haya terminado.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={addNote}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="title" className="text-right">
                Titulo
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Ej. Crear una nueva tarea"       
                className="col-span-3"
                onChange={(e) => setNewTitle(e.currentTarget.value)}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="description" className="text-right">
                Descripcion
              </Label>
              <Input
                id="description"
                name="description"  
                placeholder="Ej. Para poder tener tiempo libre"
                className="col-span-3"
                onChange={(e) => setNewDescription(e.currentTarget.value)}
              />              
            </div>            
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button type="submit">Guardar</Button>
            </div>
          </div>
        </form>       
      </DialogContent>
    </Dialog>
    </>
  )
}

export default CreateNote;