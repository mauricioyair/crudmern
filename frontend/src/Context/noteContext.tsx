import  React, { useEffect, useState } from "react"
import { Note, NoteContextType } from "../@types/notes.t"

export const NoteContext = React.createContext<NoteContextType | null >(null)

export const NoteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  
  // Get all note
  const [notes, setNotes] = React.useState<Note[]>([])

  // Create a new note
  const [newtitle, setNewTitle] = useState<string>('')
  const [newdescription, setNewDescription] = useState<string>('')
  const [saveNote, setSaveNote] = useState<Note[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/api/notes', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setNotes(data))     
  }, [])  

  return (
    <NoteContext.Provider value={{
        notes,
        setNotes,
        newtitle,
        setNewTitle,
        newdescription,
        setNewDescription,
        saveNote,
        setSaveNote,
      }}>
      {children}
    </NoteContext.Provider> 
    )
}