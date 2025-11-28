import { exec } from "child_process";
import createDependencies from "./main";
import { error } from "console";
import { stderr, stdout } from "process";

const linesFile = createDependencies<string>("libsNode.log");

exec(`${linesFile}`, (error, stdout, stderr) => {
  if (error) {
    console.log("error: " + error.message);
    return;
  }

  if (stderr) {
    console.log("Error: " + stderr);
    return;
  }
  console.log("input: " + stdout);
});

exec(`npm init -y`, (error, stdout, stderr) => {
  if (error) {
    console.log("error: " + error.message);
    return;
  }

  if (stderr) {
    console.log("Error: " + stderr);
    return;
  }
  console.log("input: " + stdout);
});
