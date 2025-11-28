import { exec } from "child_process";
import createDependencies from "./main";
import { error } from "console";
import { stderr, stdout } from "process";
import fs from "fs";

const linesFile = createDependencies<string>("libsNode.log");
const lines: string[] = linesFile.split(/\r?\n/);

const createInstallArgs = () => {
  const argsPara = process.argv.slice(2);

  if (argsPara.toString() == "--install") {
    let messageIndexer = linesFile.toString();
    fs.writeFileSync("installedPackakes.log", messageIndexer, "utf-8");
  }
};

const installCreatedPackagesFromArgs = () => {
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
};

createInstallArgs();
installCreatedPackagesFromArgs();
