(function(){
    var noteModel = new NoteModel("test 1");
    var noteModelList = new NoteModelList();
    noteModelList.add(noteModel);

    assert.isTrue("A new note is stored in the array", noteModelList.seeStoredNotes()[0] === noteModel);
})();
