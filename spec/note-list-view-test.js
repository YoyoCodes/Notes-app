(function(){
  var note1 = new NoteModel("test 1");
  var note2 = new NoteModel("**20characterstest**-----");
  var noteList = new NoteModelList();

  noteList.add(note1);
  noteList.add(note2);

  var noteListView = new NoteListView(noteList);

  assert.isTrue("A note view for the the list is created",
  noteListView.getHTML() === "<ul><li><a href='#notes0'><div id='0'>test 1</div></a></li><li><a href='#notes1'><div id='1'>**20characterstest**</div></a></li></ul>");
})();
