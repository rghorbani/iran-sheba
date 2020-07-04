/* eslint-disable no-undef */
var Sheba = require("../dist/index");

test("Sheba validate expect to be falsy", () => {
  expect(Sheba.isValid("IR01234567890123456789")).toBeFalsy();
  expect(Sheba.isValid("IR012345678901234567890123456789")).toBeFalsy();
  expect(Sheba.isValid("IR01234567890123456789")).toBeFalsy();
  expect(Sheba.isValid("IR012345678901234567890123")).toBeFalsy();
  expect(Sheba.isValid("820540102680020817909002")).toBeFalsy();
});

test("Sheba validate expect to be truthy", () => {
  expect(Sheba.isValid("IR820540102680020817909002")).toBeTruthy();
});

test("Sheba recognize", () => {
  expect(Sheba.recognize("IR820540102680020817909002").name).toEqual(
    "Parsian Bank"
  );

  expect(Sheba.recognize("IR82054010268002081790900")).toBeFalsy();
});
