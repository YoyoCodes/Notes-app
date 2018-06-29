(function(exports){
  function NoteModelList() {
    this.notes = [];
  };

  NoteModelList.prototype.add = function(noteModel) {
    this.notes.push(noteModel);
  };

  NoteModelList.prototype.seeStoredNotes = function() {
    return this.notes;
  };

  NoteModelList.prototype.findNoteByID = function (id) {
    for (var i=0; i < this.notes.length-1; i++) {
      if (id === i) return (new SingleNoteView(this.notes[i]));
    }
  };

  exports.NoteModelList = NoteModelList;
})(this);
