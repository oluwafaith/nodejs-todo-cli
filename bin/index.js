#!/usr/bin/env node
const yargs = require("yargs");

const controller = require("../index.js");

yargs.command({
  command: "list",
  handler: function () {
    controller.getAllTodos();
  },
});

yargs.command({
  command: "create",
  builder: {
    title: {
      describe: "Todo title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    controller.createTodo(argv.title);
  },
});

yargs.command({
  command: "delete",
  builder: {
    title: {
      describe: "delete title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    controller.deleteTodo(argv.title);
  },
});


yargs.command({
  command: "complete",
  builder: {
    title: {
      describe: "update title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    controller.updateTodo(argv.title);
  },
});

yargs.parse();
