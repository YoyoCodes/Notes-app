(function(exports){
  function testReturnsHTMLString(){
  var noteModel1 = new NoteModel("test 1");
  var noteModel2 = new NoteModel("test 2");
  var noteModelList = new NoteModelList();
  var noteListView = new NoteListView();

  noteModelList.add(noteModel1);
  noteModelList.add(noteModel2);

  var noteListView = new NoteListView(noteModelList);
  if(noteListView.getHTML() !== "<ul><li><div>test 1</div></li><li><div>test 2</div></li></ul>") {
      throw new Error("Incorrect HTML string output");
    }
  };
testReturnsHTMLString();
})(this);
