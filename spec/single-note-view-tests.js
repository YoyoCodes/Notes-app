(function(){
  var singleNoteView = new SingleNoteView(note = new NoteModel("test1"));
  assert.isTrue("correct HTML string ouput", singleNoteView.getHTML() == "<div>test1</div>");
})();

(function(){
  var singleNoteView = new SingleNoteView(note = new NoteModel("test2"));
  assert.isTrue("correct HTML string ouput", singleNoteView.getHTML() == "<div>test2</div>");
})();
