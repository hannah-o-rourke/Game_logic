// Checks that every puzzle in index.html can still be solved.
// Run: node tools/check-puzzles.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const script = html.match(/<script id="logic">([\s\S]*?)<\/script>/)[1];

// The logic script draws nothing, so it only needs a window to attach to.
const window = {};
const ctx = { window };
vm.createContext(ctx);
vm.runInContext(script, ctx);
const g = window.GameLogic;

const perms = a => a.length <= 1 ? [a] : a.flatMap((x, i) => perms([...a.slice(0, i), ...a.slice(i + 1)]).map(p => [x, ...p]));
const seatings = perms(["B", "C", "D", "E", "F"]).map(p => ["A", ...p]);
const schedules = perms(["C", "D", "H", "Q", "R", "Pl"]).filter(p => p.indexOf("D") % 2 === 0 && p.indexOf("Q") <= 1);

const cleanDinners = seatings.filter(s => {
  const sim = g.simulate({ seats: s, sched: ["Q", "H", "D", "R", "Pl", "C"] });
  return !sim.dm.has("C-D") && ![...sim.lost].some(r => sim.cause[r] === "dinner");
});
const wins = [];
for (const s of cleanDinners) for (const c of schedules) {
  const sim = g.simulate({ seats: s, sched: c });
  if (!sim.engine && sim.lost.size === 0) wins.push([s, c]);
}
const cleanSchedules = [...new Set(wins.map(w => w[1].join(",")))];

console.log(`Dinner: ${cleanDinners.length} of ${seatings.length} seatings work`);
cleanDinners.forEach(s => console.log("  " + s.join(" ")));
console.log(`Bath: ${cleanSchedules.length} of ${schedules.length} valid timetables work`);
cleanSchedules.forEach(c => console.log("  " + c));
if (!wins.length) { console.error("No winning combination: the game cannot be finished."); process.exit(1); }
