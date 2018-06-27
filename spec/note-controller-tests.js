(function(){

  function NoteListViewDouble () {
    this.getHTMLCallCount = 0;
  };

  NoteListViewDouble.prototype = {
    getHTML:function() {
    this.getHTMLCallCount++;
    console.log(this.getHTMLCallCount);
    }
  };

  assert.isTrue("A new note appears in the view",
  noteListViewDouble.this.getHTMLCallCount !== 1)
})();
