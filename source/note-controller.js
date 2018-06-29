(function(exports) {
  function NoteController(noteModelList) {
    this.noteModelList = noteModelList;
    this.noteListView = new NoteListView(noteModelList);
  };

  NoteController.prototype.insert = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.getHTML();
  }

  makeUrlChangeShowNoteForCurrentPage();
  function makeUrlChangeShowNoteForCurrentPage() {
        window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
       return location.hash.split("#")[1];
  };

  function showNote() {
      document
        .getElementById("note")
        .innerHTML = this.noteModelList.findNoteByID(0);
  };

exports.NoteController = NoteController;
})(this);
