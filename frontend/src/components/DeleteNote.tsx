
import { useContext } from "react"

// Dialog Shadcn/ui
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// Context
import { NoteContext } from "../Context/noteContext"

interface Props {
  id: string
}

const DeleteNote: React.FC<Props> = ({id}) => { 
  const createNoteContext = useContext(NoteContext)
  if (!createNoteContext) return null;
  const { setNotes } = createNoteContext

  const deleteNote = (id: string) => {
    fetch(`http://localhost:4000/api/notes/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      setNotes( values => { 
        return values.filter(item => item.id !== id) 
      });
    })     
    window.location.reload() 
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
          <Button variant="destructive">Eliminar</Button>
        </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Está completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
          Esta acción no se puede deshacer. Esto borrará permanentemente tu nota y se eliminará de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => deleteNote(id)}>Eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteNote