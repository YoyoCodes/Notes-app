(function(exports){
  function NoteListView(NoteModelList) {
    this.notesList = NoteModelList;
  };

  NoteListView.prototype.getHTML = function(){
    var htmlstring = "<ul>"
    for (let i in this.notesList.seeStoredNotes()){
      htmlstring = htmlstring +
                    "<li><div>" +
                    this.notesList.seeStoredNotes()[i].read() +
                    "</div></li>"
    }
    htmlstring = htmlstring + "</ul>"
    return htmlstring;
  };
  exports.NoteListView = NoteListView;
})(this);
