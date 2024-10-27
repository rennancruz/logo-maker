const fs = require("fs");
const crypto = require("crypto");
const inquirer = require("inquirer");
const { CircleShape, TriangleShape, SquareShape } = require("./lib/shapes");

const outputFolder = "generated-logos";

// Ensure the output directory exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

async function promptUser() {
  return await inquirer.prompt([
    {
      type: "input",
      name: "logoText",
      message: "Enter up to three characters for the logo:",
      validate: (input) => input.length <= 3 || "Limit is 3 characters.",
    },
    { type: "input", name: "textColor", message: "Text color:" },
    {
      type: "list",
      name: "shapeChoice",
      message: "Choose a shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    { type: "input", name: "shapeColor", message: "Shape color:" },
  ]);
}

async function createLogo() {
  const { logoText, textColor, shapeChoice, shapeColor } = await promptUser();
  const shapes = {
    Circle: CircleShape,
    Triangle: TriangleShape,
    Square: SquareShape,
  };
  const selectedShape = new shapes[shapeChoice]();

  selectedShape.applyColor(shapeColor);

  const textCoords = { y: shapeChoice === "Triangle" ? 130 : 110, x: 150 };
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${selectedShape.render()}
        <text x="${textCoords.x}" y="${
    textCoords.y
  }" font-size="40" text-anchor="middle" fill="${textColor}">
          ${logoText}
        </text>
    </svg>
  `;

  // Generate unique ID for filename
  const uniqueId = crypto.randomUUID();
  const filePath = `${outputFolder}/logo-${uniqueId}.svg`;

  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated logo at ${filePath}`);
}

createLogo();
