import fs from "fs";

export type FileArgs = {
  file: string;
};

interface IFileType {
  file: FileArgs;

  createFile(): void;
}

class Data implements IFileType {
  public file: FileArgs;
  constructor(file: FileArgs) {
    this.file = file;
  }

  createFile(): void {
    console.log("Created: " + this.file);
  }
}

function createDependencies<T>(readableFile: IFileType | string) {
  const readFile = fs.readFileSync(readableFile.toString(), "utf-8");

  const fileName = {
    file: readableFile,
  } as unknown as FileArgs;

  const fileArgs = new Data(fileName);
  fileArgs.createFile();

  return fileArgs.file;
}

export default createDependencies;
