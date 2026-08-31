import { Notes } from "@/constants/notes";
import { notes } from "@/constants/notesData";
import { createContext, useContext, useState } from "react";

const initialNotes = notes;

const NotesContext = createContext<any>(null);

export function NotesProvider({ children }: { children: React.ReactNode }) {
  const [notes, setNotes] = useState<Notes[]>(initialNotes);

  const togglePinned = (id: number) => {
    setNotes((curNote) =>
      curNote?.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note,
      ),
    );
  };

  const addNote = (note: Notes) => {
    setNotes((prev) => [...prev, note]);
  };
  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const editNote = (updatedNote: Notes) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, setNotes, togglePinned, addNote, deleteNote, editNote }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
