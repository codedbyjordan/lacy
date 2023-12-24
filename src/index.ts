import { parse } from "./parse";

const templateFile = Bun.file("playground/hello-world.lacy");

let templateFileContents = await templateFile.text();

const data: Record<string, any> = {
  name: "Lacy",
  items: ["Jordan", "Lina", "Lacy"],
};

console.log(parse(templateFileContents, data));
