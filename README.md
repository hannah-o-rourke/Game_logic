# The Founder's Dinner

A time-travel logic puzzle set in Oxford's Bodleian Library.

The library lies in ruins. A scrap of a page blames two men, Mr A and Mr B, for building an engine that destroyed it. You travel back in time in humble jobs and change who meets whom: you lay the place cards at a college dinner, or set the timetable for a conference. Every change ripples forward. Back in the present, the books on the shelves (diaries, letters, reports, acknowledgements) show what your last change did.

## Play

Open `index.html` in a browser. It is one self-contained file, with no build step and no dependencies.

You walk around three places: the ruined (or rebuilt) Bodleian in the present, a college in 1887, and the Assembly Rooms in Bath in 1888. Use the arrow keys or WASD to walk and E or Space to talk, read or use things. On a phone, tap where you want to go, or tap a person or object.

- **Present:** read the shelves in each building and the boxes in the College Archive. Ask Miss Harker, the archivist, for hints. The lectern in the Old Schools Quadrangle holds the fragment, and that is where you travel from.
- **1887:** talk to the guests in the Senior Common Room, then lay the place cards on the Master's table in the Hall. Wind the kitchen clock to go home without changing anything.
- **1888:** talk to the speakers around the Assembly Rooms, then write the programme at the clerk's desk.

Progress is saved in your browser, and the casebook lets you restore any earlier timeline.

## Chapter one

1. **The Founder's Dinner, 1887.** Six guests sit along one side of a table. Neighbours talk, and Mrs Ellery introduces whoever sits either side of her.
2. **British Association, Bath, 1888.** This chapter unlocks once Mr A and Mr B no longer meet at the dinner. You arrange six talks into three sessions and two rooms.

Spoilers, rules and answers are in [PUZZLES.md](PUZZLES.md).

## Checking the puzzles

After changing any rule, pairing or character, run:

```
node tools/check-puzzles.js
```

It tries every possible seating and timetable and lists the ones that save the library. It exits with an error if the game can no longer be finished.

## Layout

- `index.html` contains the whole game. The first script (`id="logic"`) holds the rules and data: characters, dangerous pairs, books and hints. The second holds the maps (ASCII tile grids with a legend), the people you can talk to, the walking engine and the screens.
- `tools/check-puzzles.js` is the solvability checker.
- `PUZZLES.md` holds the design notes and answers.

Design draft: https://claude.ai/code/artifact/02bcde43-227e-4f6c-90c7-126fb8370ac5
