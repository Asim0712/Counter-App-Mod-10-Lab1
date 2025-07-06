# React Counter with useEffect

## Overview
This project is an advanced counter application built with React that demonstrates the use of useState and useEffect hooks to manage state and side effects. The counter goes beyond basic increment/decrement functionality by implementing features like history tracking, auto-save to localStorage, keyboard interactions, and a reset mechanism.

## Features
### Core Functionality
- Display current count (initialized to 0)
- Increment button (+1)
- Decrement button (-1)

### Advanced Features
- History Tracking
- Maintains an array of all previous count values
- Displays the history of counts to the user

### Auto-Save to LocalStorage
- Automatically saves the current count to localStorage whenever it changes
- Includes proper cleanup to handle potential race conditions

### Keyboard Event Listeners
- Increment count with ArrowUp key
- Decrement count with ArrowDown key
- Proper event listener cleanup on component unmount

### Reset Mechanism
- Resets count to 0
- Clears the count history

### Custom Step Input
- Allows setting a custom increment/decrement step value
- Updates counter operations to use the specified step

## Learning Objectives
- Through this project, you will learn to:
- Manage multiple pieces of state with useState
- Perform side effects with useEffect
- Implement proper cleanup functions to prevent memory leaks
- Handle complex state updates and dependencies
- Build interactive components with keyboard support and persistence

## Usage
- Use the increment/decrement buttons to change the count
- Press ArrowUp/ArrowDown keys for keyboard control
- Set a custom step value in the input field
- View your count history below the counter
- Use the reset button to start over
- The count is automatically saved and will persist between page reloads

## Deployment
- **[GitHub Repo]** [https://github.com/Asim0712/Counter-App-Mod-10-Lab1]
- **[Project link]** ..... 

## Author:  Asim Daud Khan


## Acknowledgments
I really loved working on this project as it helped me to learn about hooks and local storage especially working on React and using the functionalities. I would like to Thank to our Mentors and peers who assisted during our Labs and course.