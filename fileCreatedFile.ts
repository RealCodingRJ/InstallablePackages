import { exec } from "child_process";
import createDependencies from "./main";
import { error } from "console";
import { stderr, stdout } from "process";
import fs from "fs";

const linesFile = createDependencies<string>("libsNode.log");
const lines: string[] = linesFile.split(/\r?\n/);

const createInstalledPackages = () => {
  fs.writeFileSync("installedPackakes.log", linesFile.toString(), "utf-8");
};

for (const line of lines) {
  exec(`npm install ${line}`, (error, stdout, stderr) => {
    if (error) {
      console.log("error: " + error.message);
      return;
    }

    if (stderr) {
      console.log("Error: " + stderr);
      return;
    }
    console.log("input: " + stdout);

    createInstalledPackages();
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
}
