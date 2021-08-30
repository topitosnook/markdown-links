const checkRoute = require("../mdFileCheckFunction");

const route0 = "../SCL017-md-link/";
const route1 = "../SCL017-md-lik/";
const route2 = "testing.md";
const route3 = "read.js";

test("properly reads bad route", () => {
  expect(checkRoute(route1)).toBe("La ruta no existe");
});

test("properly reads file not md", () => {
  expect(checkRoute(route3)).toBe("Archivo no es .md");
});
