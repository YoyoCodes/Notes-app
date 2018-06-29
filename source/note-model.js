(function(exports) {
  var id=0;

  function NoteModel(text) {
    this.id = id;
    this.text = text;
    id++;
  };

  NoteModel.prototype.read = function(){
    return this.text;
  };

  NoteModel.prototype.id = function(){
    return this.id;
  };

  exports.NoteModel = NoteModel;
})(this);
