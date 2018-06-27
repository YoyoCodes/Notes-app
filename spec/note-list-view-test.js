(function(){
  var note1 = "test 1";
  var note2 = "test 2";
  var noteList = new NoteModelList();

  noteList.add(note1);
  noteList.add(note2);

  var noteListView = new NoteListView(noteList);

  assert.isTrue("A note view for the the list is created",
  noteListView.getHTML() === "<ul><li><div>" + note1.substring(0, 20) + "</div></li><li><div>" + note2.substring(0, 20) + "</div></li></ul>");
})();
