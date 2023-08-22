# DOM-and-Events-Studio

This project is a simple shuttle flight simulator built using HTML, CSS, and JavaScript. It allows users to simulate a shuttle's takeoff, flight, and landing.

## Table of Contents
- [Requirements](#requirements)
- [Usage](#usage)
- [Bonus Mission](#bonus-mission)
- [Contributing](#contributing)
- [License](#license)

## Requirements
Ensure that all elements have loaded before attaching event handlers by using the window load event. When the "Take off" button is clicked:

- A window confirm will ask the user to "Confirm that the shuttle is ready for takeoff." If confirmed, proceed to the following steps.
- The flight status changes to "Shuttle in flight."
- The background color of the shuttle flight screen changes from green to blue.
- The shuttle height increases by 10,000 miles.

When the "Land" button is clicked:

- A window alert informs the user that "The shuttle is landing. Landing gear engaged."
- The flight status changes to "The shuttle has landed."
- The background color of the shuttle flight screen changes from blue to green.
- The shuttle height goes down to 0.

When the "Abort Mission" button is clicked:

- A window confirm asks the user to "Confirm that you want to abort the mission." If confirmed, proceed to the following steps.
- The flight status changes to "Mission aborted."
- The background color of the shuttle flight screen changes from blue to green.
- The shuttle height goes to 0.

When the "Up", "Down", "Right", and "Left" buttons are clicked:

- The rocket image moves 10px in the direction of the clicked button.
- If the "Up" or "Down" buttons were clicked, the shuttle height increases or decreases by 10,000 miles.

## Usage
1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Interact with the simulator using the provided buttons.

## Bonus Mission
If you have additional time and interest, you can tackle the following bonus tasks:

- Prevent the rocket from flying off the background.
- Return the rocket to its original position when it has landed or the mission was aborted.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.
