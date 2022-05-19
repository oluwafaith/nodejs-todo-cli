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
  command: "add",
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
    id: {
      describe: "delete title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    controller.deleteTodo(argv.id);
  },
});


yargs.command({
  command: "complete",
  builder: {
    id: {
      describe: "update title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function (argv) {
    controller.updateTodo(argv.id);
  },
});

yargs.parse();
