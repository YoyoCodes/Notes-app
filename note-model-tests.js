(function(exports) {
  function testNoteCanBeReturned() {
    var noteModel = new NoteModel();

    if (noteModel.read() !== "My favourite language is JavaScript") {
      throw new Error("The stored note is not the expected one");
    }
  };

testNoteCanBeReturned();
})(this);
