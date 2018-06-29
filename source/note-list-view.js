(function(exports){
  function NoteListView(noteModelList) {
    this.notesList = noteModelList;
  };

  NoteListView.prototype.getHTML = function(){
    var htmlstring = "<ul>"
    for (var i= 0; i < this.notesList.seeStoredNotes().length; i++){
      htmlstring = htmlstring +
                    "<li><a href='#notes//" +
                    i+
                    "'><div id='"+
                    i +
                    "'>" +
                    String(this.notesList.seeStoredNotes()[i].read()).substring(0, 20) +
                    "</div></a></li>"
                    console.log(this.notesList.seeStoredNotes()[i].read());
    }

    htmlstring = htmlstring + "</ul>"
    return htmlstring;
  };
  exports.NoteListView = NoteListView;
})(this);
