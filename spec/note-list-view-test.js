(function(){
  var note1 = new NoteModel("test 1");
  var note2 = new NoteModel("**20characterstest**-----");
  var noteList = new NoteModelList();

  noteList.add(note1);
  noteList.add(note2);

  var noteListView = new NoteListView(noteList);

  assert.isTrue("A note view for the the list is created",
  noteListView.getHTML() === "<ul><li><div id='0'>test 1</div></li><li><div id='1'>**20characterstest**</div></li></ul>");
})();
