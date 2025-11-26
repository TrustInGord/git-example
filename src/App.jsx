import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Notes from './Notes.jsx'
import MenuButton from './MenuButton.jsx'


function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "title", priority: "low", category: "Personal", description: "Problem?" },
    { id: 2, title: "title", priority: "medium", category: "Work", description: "Problem?" }
  ]);

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const addNote = (newNote) => {
    const noteWithId = { ...newNote, id: Date.now() };
    setNotes([...notes, noteWithId]);
  };

  return (
    <>
      <Header />

      <div className="notes-container">
        {notes.map(note => (
          <Notes key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
        ))}
      </div>
      <MenuButton onAddNote={addNote} />
      <Footer />
    </>
  )
}

export default App


//
/*
xBackground added to body or html

Header Creation using SVG file
  xTop left icon with text in vertical middle
  xgreen bottom border
  Thicker bottom green

Create annotate card (Notes)
  type of annotate (personal/work) (Drop down list)
  Name of task (Input from user text)
  Colored icon on priority (green, yellow, red)
  Description of task (Input from user text)
  Button to delete the note

Annotate board (Section -> article)
  flex wrap (max 3 notes per row)

Add a new note button
  Asks for...
    xTitle (text)
    xPriority (low (green color), medium (yellow color), high (red color))
    xCategory (Personal/Work/Family)
    xDescription (text)
    xEnter Note Button (Submits)
    xExit button (Top right corner)
    xevent.preventDefault() Stops the page from refreshing when the button is clicked

Form Validation
  -Title cannot be empty
  -Description cannot be empty

Field should light up when active / tabbed to
Used the default
  event.preventDefault()

Delete Note
  -Pop-up question
  -Add "Confirm you want to delte note 'title name" with category 'category'
  -Button cancel
  -Button Delete Note
  Style:
    -Dark green background
    -Light green border
    -Rounded corners
    -Rest of background opacity 50% 




Font

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


// <weight>: Use a value from 100 to 900
// <uniquifier>: Use a unique and descriptive class name
Css
.montserrat-<uniquifier> {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}

Logo

Warning Icons

<svg
  xmlns="http://www.w3.org/2000/svg"
  height="24px"
  viewBox="0 0 24 24"
  width="24px"
  fill="#F97816"
>
  <path d="M0 0h24v24H0z" fill="none" />
  <path
    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  />
</svg>

  */