(function(exports){
  function SingleNoteView(noteModel) {
    this.noteModel = noteModel;
  };

  SingleNoteView.prototype.getHTML = function() {
    return `<div>${this.noteModel.text}</div>`;
  };

  exports.SingleNoteView = SingleNoteView;
})(this);
