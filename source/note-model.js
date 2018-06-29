(function(exports) {
  var id = 0;
  function NoteModel(text) {
    this.text = text;
    this.id = id;
    id++;
  };

  NoteModel.prototype.read = function(){
    return this.text;
  };

  exports.NoteModel = NoteModel;
})(this);
