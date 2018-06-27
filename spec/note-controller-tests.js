// (function(){
//
//   var noteListViewDouble = { getHTML: function() { console.log(5) } };
//
//   function NoteListViewDouble () {
//     this.getHTMLCallCount = 0;
//   };
//
//   NoteListViewDouble.prototype = {
//     getHTML: function() {
//     this.getHTMLCallCount++;
//     console.log(this.getHTMLCallCount);
//     }
//   };
//
//   var noteController = new NoteController(noteListViewDouble);
//
//   assert.isTrue("A new note appears in the view",
//   noteListViewDouble.this.getHTMLCallCount !== 1)
// })();
