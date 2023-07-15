const elp = {
  fod: "2",
  loo: 10,
};

console.log("elp:", elp);

const updatedElp = {
  ...elp,
  newElp: 202,
  fod: 60,
};

console.log("elp", updatedElp);
