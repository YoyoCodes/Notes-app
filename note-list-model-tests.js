(function(exports){
  function testListNotesStoredInArray(){
    var note = new Note();

    if(note.notes !== []) {
      throw new Error("The Note object is not initializing with an empty array")
    }

    note.add("new note");
    if(!note.seeStoredNotes.includes("new note")) {
      throw new Error("The added note was not found in the array")
    }
  }
})(this);
