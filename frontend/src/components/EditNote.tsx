import { useState } from "react";

// Dialog Shadcn/ui
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
import { Button } from "@/components/ui/button"

interface Props {
  id: string
  titulo: string
  descripcion: string
}

const EditNote: React.FC<Props> = ({id, titulo, descripcion}) => {
  // Update a note
  const [updateNote, setUpdateNote] = useState({
    titulo,
    descripcion
  })
  const [openDialog, setOpenDialog] = useState(false);  

  const handleUpdateButton = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    updateNoteHandle(id)
    window.location.reload()
  }  

  const updateNoteHandle = (id: string) => {      
    fetch(`http://localhost:4000/api/notes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(updateNote),
    })
    .then(response => response.json())   
  }
  
  return(
    <>
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">Actualizar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Actualizar nota</DialogTitle>
          <DialogDescription>
            Haga clic en Guardar cuando haya terminado.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdateButton}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="titulo" className="text-right">
                Titulo
              </Label>
              <Input
                id="titulo"                              
                name="titulo"                
                defaultValue={titulo}
                className="col-span-3"                         
                onChange={(e) => setUpdateNote({...updateNote, [e.target.name]: e.target.value})}               
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="descripcion" className="text-right">
                Descripcion
              </Label>
              <Input
                id="descripcion"                
                name="descripcion"  
                defaultValue={descripcion}
                className="col-span-3"
                onChange={(e) => setUpdateNote({...updateNote, [e.target.name]: e.target.value})}              
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

export default EditNote;