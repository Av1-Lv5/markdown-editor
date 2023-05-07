import React from "react";

// types
import { Dispatch, SetStateAction } from "react";
import NoteObj from "../types/NoteObj";

type NotesContextType = {
	notes: NoteObj[];
	setNotes: Dispatch<SetStateAction<NoteObj[]>>;
	currentNote: NoteObj;
	setCurrentNote: Dispatch<React.SetStateAction<NoteObj>>;
	currentNoteIndex: number;
};

const NotesContext = React.createContext<NotesContextType>({
	notes: [],
	setNotes: () => {},
	currentNote: {
		id: "0",
		title: "",
		dateCreated: "",
		content: "",
	},
	setCurrentNote: () => {},
	currentNoteIndex: 0,
});

export default NotesContext;
