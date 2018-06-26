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

  exports.NoteModelList = NoteModelList;
})(this);
