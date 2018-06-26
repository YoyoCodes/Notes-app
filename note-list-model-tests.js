(function(exports){
  function testListNotesStoredInArray(){
    var noteModel = new NoteModel();
    var noteModelList = new NoteModelList();

    noteModelList.add(noteModel);
    if(!noteModelList.seeStoredNotes().includes(noteModel)) {
      throw new Error("The added note model object was not found in the array");
    }
  };
testListNotesStoredInArray();
})(this);
