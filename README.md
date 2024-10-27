# Logo Generator

A Node.js application that generates custom SVG logos based on user inputs. Users can specify the shape, colors, and text for the logo, which is then saved as a unique SVG file in the `generated-logos` folder.


https://github.com/user-attachments/assets/1be795a5-46fd-4023-8ef8-1a1e6b8930ca


## Features

- Supports three shapes: Circle, Triangle, and Square.
- Allows customization of shape color, text color, and logo text.
- Saves each generated logo with a unique filename to avoid overwrites.

## Setup

1. **Clone the repository** to your local machine:
   ```bash
   git clone git@github.com:rennancruz/logo-maker.git
   ```
1. **Navigate to the project folder:**

   ```bash
   cd logo-generator
   ```

1. **Install dependencies using npm:**

   ```bash
   npm install
   ```

## Usage

1. **Run the application:**

   ```bash
   node index.js
   ```

1. **Follow the prompts to enter:**

   - Up to three characters for the logo text
   - Text color
   - Shape (Circle, Triangle, or Square)
   - Shape color

1. **Generated logo files** will be saved as SVGs in the `generated-logos` folder with a unique filename.

## Example

A sample generated SVG file might look like this:

```xml
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="blue" />
    <text x="150" y="110" font-size="40" text-anchor="middle" fill="white">ABC</text>
</svg>
```

## Dependencies

- Node.js – Required to run the application.
- inquirer – For interactive command-line input.

## License

This project is licensed under the MIT License.
