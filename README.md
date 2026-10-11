# The Founder's Dinner

A time-travel logic puzzle set in Oxford's Bodleian Library.

The library lies in ruins. A scrap of a page blames two men, Mr A and Mr B, for building an engine that destroyed it. You travel back in time in humble jobs and change who meets whom: you lay the place cards at a college dinner, or set the timetable for a conference. Every change ripples forward. Back in the present, the books on the shelves (diaries, letters, reports, acknowledgements) show what your last change did.

## Play

Open `index.html` in a browser. It is one self-contained file, with no build step and no dependencies.

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

- `index.html` contains the whole game: data (characters, dangerous pairs, books) at the top of the script, then the simulation, then the screens.
- `tools/check-puzzles.js` is the solvability checker.
- `PUZZLES.md` holds the design notes and answers.

Design draft: https://claude.ai/code/artifact/02bcde43-227e-4f6c-90c7-126fb8370ac5
