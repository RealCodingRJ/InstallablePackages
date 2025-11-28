import fs from "fs";

export type FileArgs = {
  file: string;
};

function createDependencies<T>(readableFile: FileArgs | string) {
  const readFile = fs.readFileSync(readableFile.toString(), "utf-8");
  return readFile;
}

export default createDependencies;
