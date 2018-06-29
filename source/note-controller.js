(function(exports) {
  function NoteController(noteModelList) {
    this.noteModelList = noteModelList;
    this.noteListView = new NoteListView(noteModelList);
  };

  NoteController.prototype.insert = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.getHTML();
  }

  NoteController.prototype.getView = function(id){
    var noteModel = this.noteModelList.findNoteById(id);
    var singleView = new SingleView(noteModel);
    return singleView.getHTML();
  }

  exports.NoteController = NoteController;
})(this);
