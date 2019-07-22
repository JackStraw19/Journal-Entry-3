
const journalEntries = [{
    date: "7/18/2019",
    concepts: "innerHTML JS into DOM",
    entry: "Today we began the day with a LE that required us to inject HTML components using JS and innerhtml.",
    mood: "Confused"
},
{
    date: "07/16/2019",
    concepts: "Functions",
    entry: "Today we practiced functions. I (mostly) solved the dollars-cents problem. Still lots of confusion with regards to functions.",
    mood: "Confused"
},
{
    date: "07/12/2019",
    concepts: "JS Objects",
    entry: 'Today we looked into chapter 2 of book 2. We practiced objects and arrays.',
    mood: "Confused"
},
{
    date: "07/11/2019",
    concepts: "Using JS to manipulate the DOM",
    entry: 'Today we looked into Book 2, Chapter 1, Fun with Maniupalting the DOM. We practiced using document.querySelector() and document.querySelectorAll() to target HTML elements in order to add and/or remove classes.',
    mood: "Confused"
},
{
    date: "07/10/2019",
    concepts: "Jimmy Buffet Group Project: Practice using Git, GitHub, html, css, and flexbox.",
    entry: "My group did a celebrity tribute page for Jimmy Buffet. We had to practice pushing and merging on GitHub as well as CSS styling using Flexbox." ,
    mood: "OK"
}]

//    Define the keys and value for a JavaScript object that
  //  represents a journal entry about what you learned today
  

  const journalEntryComponent = document.querySelector(".entryLog")

  const makeJournalEntryComponent = (date, concepts, entry, mood) => {
   return `
   <article class="entry">
   <header>
   <h2 class ="date">${date}</h2>
   <h1 class ="concepts">${concepts}</h1>
   </header>
   <section>${entry}</section>
   <br>
   <section class="mood">${mood}</section>
   <footer>
   </footer>
   </article>
   `
  }

  journalEntries.forEach (entry => {
    const htmlRep = makeJournalEntryComponent(entry.date, entry.concepts, entry.entry, entry.mood)
    journalEntryComponent.innerHTML += htmlRep
  })

  console.log(journalEntries)