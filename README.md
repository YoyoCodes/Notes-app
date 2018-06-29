# Notes-app

## Task:
Build a notes app as a frontend, single page web app.
Write unit tests without using a testing library.
Use the constructor and prototype pattern.

A testing library supplies:
<ul>
<li>Mocking functions to help isolate the part of the code being tested.</li>
<li>Assertion functions that help check that specific things are true.</li>
<li>A standard way to describe what a test or group of tests is doing.</li>
<li>A way to organise tests.</li>
<li>An easy way to run lots of tests.</li>
</ul>

## User stories:
As a programmer<br>
I can see a list of my notes, where each note is abbreviated to the first 20 characters<br>
So I can find the one I want<br>


As a programmer<br>
I can create a new note<br>
So I can record something I need to remember<br>


As a programmer<br>
I can see the full text of an individual note on its own page<br>
So I can see all the information in the note<br>



note = new NoteModel("jen"); notelist = new NoteModelList; notelist.add(note); controller = new NoteController(notelist);
