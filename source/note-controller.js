(function(exports) {
  function NoteController(noteModelList) {
    this.noteListView = new NoteListView(noteModelList);
  };

  NoteController.prototype.insert = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.getHTML();
  }

  exports.NoteController = NoteController;
})(this);
