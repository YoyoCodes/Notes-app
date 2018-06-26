(function(exports) {
  function testNoteCanBeReturned() {
    var noteModel = new NoteModel("test 1");

    if (noteModel.read() !== "test 1") {
      throw new Error("The stored note is not the expected one");
    }
  };

testNoteCanBeReturned();
})(this);
