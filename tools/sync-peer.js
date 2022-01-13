const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");
const filePath = resolve("./", "package.json");
const packageJson = JSON.parse(
  readFileSync(filePath).toString()
);
const { peerDependencies, devDependencies } = packageJson;
console.log(peerDependencies);
console.log(devDependencies);
Object.keys(peerDependencies).forEach((item) => {
  if (devDependencies[item] && peerDependencies[item]) {
    packageJson.peerDependencies[item] = devDependencies[item];
  }
});
writeFileSync(filePath,JSON.stringify(packageJson,null,2))
