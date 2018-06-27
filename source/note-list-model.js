(function(exports){
  function NoteModelList() {
    this.notes = [];
  };

  NoteModelList.prototype.add = function(text) {
    var note = new NoteModel(text)
    this.notes.push(note);
  };

  NoteModelList.prototype.seeStoredNotes = function() {
    return this.notes;
  };

  exports.NoteModelList = NoteModelList;
})(this);
