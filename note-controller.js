(function(exports) {
  function NoteController(noteModelList) {
    noteModelList.add("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteModelList);
  };

  NoteController.prototype.insert = function() {
    element = document.getElementById("app");
    element.innerHTML = this.noteListView.getHTML();
  }

  exports.NoteController = NoteController;
})(this);
