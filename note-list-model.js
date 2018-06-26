(function(exports){
  function Note() {
    this.notes = [];
  };
  Note.prototype.add = function(note) {
    this.notes.push(note);
  };

  Note.prototype.seeStoredNotes = function() {
    return this.notes;
  };

  exports.Note = Note;
})(this);
