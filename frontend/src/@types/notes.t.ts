export interface Note {
  _id: string
  titulo: string
  descripcion: string
  date: Date
  createdAt: Date
  updatedAt: Date
}

export type NoteContextType = {
  notes: Note[]  
  setNotes: (notes: Note[]) => void
  newtitle: string
  setNewTitle: (newtitle: string) => void
  newdescription: string
  setNewDescription: (newdescription: string) => void
  saveNote: Note[]
  setSaveNote: (saveNote: Note[]) => void  
}