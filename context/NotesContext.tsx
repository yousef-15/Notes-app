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

  return (
    <NotesContext.Provider value={{ notes, togglePinned }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}
