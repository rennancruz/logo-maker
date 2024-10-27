const { CircleShape, TriangleShape, SquareShape } = require("./shapes");

test("CircleShape rendering", () => {
  const circle = new CircleShape();
  circle.applyColor("green");
  expect(circle.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="green" />'
  );
});

test("TriangleShape rendering", () => {
  const triangle = new TriangleShape();
  triangle.applyColor("blue");
  expect(triangle.render()).toEqual(
    '<polygon points="150,18 244,182 56,182" fill="blue" />'
  );
});

test("SquareShape rendering", () => {
  const square = new SquareShape();
  square.applyColor("yellow");
  expect(square.render()).toEqual(
    '<rect x="75" y="25" width="150" height="150" fill="yellow" />'
  );
});
