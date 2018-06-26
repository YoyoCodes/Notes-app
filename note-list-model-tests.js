(function(exports){
  function testListNotesStoredInArray(){
    var note = new Note();

    note.add("new note");
    if(!note.seeStoredNotes().includes("new note")) {
      throw new Error("The added note was not found in the array");
    }
  };
testListNotesStoredInArray();
})(this);
