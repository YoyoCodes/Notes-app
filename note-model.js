(function(exports) {
  function NoteModel() {
    this.text = "My favourite language is JavaScript";
  };

  NoteModel.prototype.read = function(){
    return this.text;
  };

  exports.NoteModel = NoteModel;
})(this);
