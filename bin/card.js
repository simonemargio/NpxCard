#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Simone Margio"),
  handle: chalk.cyan("♥"),
  labelWork: chalk.white.bold("       Hey:"),
  work: chalk.white("Software engineering at Accenture Technology Solutions"),

  labelTwitter: chalk.white.bold("   Twitter:"),
  twitter: chalk.cyan("https://twitter.com/wownswos"),

  labelMastodon: chalk.white.bold("  Mastodon:"),
  mastodon: chalk.cyan("https://mastodon.social/@simonemargio"),

  labelGitHub: chalk.white.bold("    GitHub:"),
  github: chalk.cyan("https://github.com/simonemargio"),

  labelblog: chalk.white.bold("       Log:"),
  blog: chalk.cyan("https://simonemargio.dev/log"),

  labelWeb: chalk.white.bold("      Home:"),
  web: chalk.cyan("https://simonemargio.dev"),

  labelCard: chalk.white.bold("      Card:"),
  npx: chalk.white("npx simonemargio"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const mastodon = `${data.labelMastodon}  ${data.mastodon}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const blog = `${data.labelblog}  ${data.blog}`;
const webing = `${data.labelWeb}  ${data.web}`;
// const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  githubing +
  newline +
  mastodon +
  newline +
  blog +
  newline +
  newline +
  webing +
  newline +
  newline;

console.log(chalk.green(boxen(output, options)));
