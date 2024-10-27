// Base shape class
class BaseShape {
  constructor() {
    this.fillColor = "";
  }

  // Method to set color of the shape
  applyColor(color) {
    this.fillColor = color;
  }
}

// Circle class extending BaseShape
class CircleShape extends BaseShape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fillColor}" />`;
  }
}

// Triangle class extending BaseShape
class TriangleShape extends BaseShape {
  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.fillColor}" />`;
  }
}

// Square class extending BaseShape
class SquareShape extends BaseShape {
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.fillColor}" />`;
  }
}

// Exporting classes
module.exports = { CircleShape, TriangleShape, SquareShape };
