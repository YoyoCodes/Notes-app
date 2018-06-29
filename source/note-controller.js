(function(exports) {
  function NoteController(noteModelList) {
    this.noteListView = new NoteListView(noteModelList);
  };

  NoteController.prototype.insert = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.getHTML();
  }

  function makeUrlChangeShowNoteForCurrentPage() {
        window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
        showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
       return location.hash.split("#")[1];
  };

  function showNote(singleNoteView) {
      document
        .getElementById("note")
        .innerHTML = SingleNoteView;
  };

  exports.NoteController = NoteController;
})(this);
