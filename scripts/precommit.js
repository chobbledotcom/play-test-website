#!/usr/bin/env bun

/**
 * Precommit hook - runs lint and build.
 */

import { run } from "./utils.js";

const verbose = process.argv.includes("--verbose");

const steps = [
  { name: "lint", cmd: ["bun", "run", "lint:fix"] },
  { name: "build", cmd: ["bun", "run", "build"] },
];

console.log(
  verbose
    ? "Running precommit checks (verbose)...\n"
    : "Running precommit checks...",
);

let failed = false;

for (const step of steps) {
  console.log(`Running ${step.name}...`);
  const result = run(step.cmd);
  if (result.exitCode !== 0) {
    console.error(`${step.name} FAILED`);
    failed = true;
    break;
  }
  console.log(`${step.name} passed`);
}

if (failed) {
  console.error("\nPrecommit checks FAILED");
  process.exit(1);
} else {
  console.log("\nAll precommit checks passed");
}
