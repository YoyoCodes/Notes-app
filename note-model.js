(function(exports) {
  function NoteModel(text) {
    this.text = text;
  };

  NoteModel.prototype.read = function(){
    return this.text;
  };

  exports.NoteModel = NoteModel;
})(this);
