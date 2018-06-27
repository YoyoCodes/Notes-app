(function(){
    var noteModel = new NoteModel("test 1");
    var noteModelList = new NoteModelList();
    noteModelList.add(noteModel);
    var note = JSON.stringify(noteModelList.notes[0]["text"]);

    assert.isTrue("A new note is stored in the array", noteModelList.seeStoredNotes()[0]['text'] === noteModel);
})();
