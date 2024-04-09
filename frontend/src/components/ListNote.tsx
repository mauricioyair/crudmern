import { useContext } from "react";

import { format, register } from "timeago.js"

// Dialog Shadcn/ui
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";

// Context
import { NoteContext } from "../Context/noteContext"

const ListNote = () => {
  const createNoteContext = useContext(NoteContext)
  if (!createNoteContext) return null;
  const { notes } = createNoteContext

  register('es_ES', (_number: number, index: number): [string, string] => [
    ['justo ahora', 'ahora mismo'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'in %s horas'],
    ['hace 1 dia', 'en 1 dia'],
    ['hace %s dias', 'en %s dias'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
  ][index] as [string, string]);


  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">      
        {
          notes.map(({_id, titulo, descripcion, createdAt, updatedAt}) => (               
            <Card key={_id}>
              <CardHeader>
                <CardTitle>{titulo}</CardTitle>
                <CardDescription>                  
                  Fecha de Creado: {format(createdAt, 'es_ES')} <br/>
                  Ultima actualizacion: {format(updatedAt, 'es_ES')}
                  </CardDescription>
              </CardHeader>
              <CardContent>
              {descripcion}            
              </CardContent>
              <CardFooter>
                <EditNote id={_id} titulo={titulo} descripcion={descripcion}/>
                <DeleteNote id={_id}/>
              </CardFooter>
            </Card>          
          ))
        }   
      </div>    
    </>
  )
}

export default ListNote