(function(exports) {
  function testNoteCanBeReturned() {
    var note = new Note();

    if (note.text === "") {
      throw new Error("The stored note is empty");
    }

    if (note.text !== "My favourite language is JavaScript") {
      throw new Error("The stored note is not the expected one");
    }
  };

testNoteCanBeReturned();
})(this);
