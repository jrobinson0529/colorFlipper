# Color Flipper

Color Flipper is a tool that allows a user to do change the background of the page by a click of button.

This application has two modes: Simple and Hex.

### Simple View
- If the application is in simple mode when the user clicks the button, the background color will be chosen by predetermined colors.
  
  ![Simple Demo](SimpleGif.gif)
  
### Hex View

- If the user is in hex mode, the color that will show after the button it pressed will be a completely random hex code color.
  
  ![Hex Demo](HexGif.gif)

## Using Color Flipper

To use Color Flipper, follow these steps:

Naviate do your favorite browser and type in http://jr-colorflipper.netlify.app/ and you are good to go!

## Acceptance Criteria
1. Scenario 1
    - **User story:** As a user, I want to be able to randomly select a color so that the background color of the page can be changed.
    - **Given** the user has navigated to the home page
    - **When** the user clicks on a button that reads "Click Me" in the center of the page
    - **Then** A random color should be chosen from an array of strings. 
    - **And:** The background color of the current page’s body should be changed to the chosen color
1. Scenario 2
    - **User story:** As a user, I want to be able to know exactly what background color has been chosen.
    - **Given** the user has navigated to any page
    - **When** the user wants to see what color is being displayed
    - **Then** above the button the background color’s text representation should be displayed
1. Scenario 3
    - **User story:** As a user, I want to be able to know where they are within the application
    - **Given** the user is on any page
    - **When** the user wants to know what page they are on
    - **Then** the name of the page they are on should be displayed somewhere on the screen.
1. Scenario 4
    - **User story:** As a user, I want to be able to navigate to any other available pages
    - **Given** the user is on any page
    - **When** the user wants to navigate to the hex page, or the simple page
    - **Then** the user should be able to click on a link in the Navbar that will take them to the correct page
1. Scenario 5
    - **User story:** As a user, I want to be able to randomly change the background color of the page to any hex code color.
    - **Given** the user has navigated to the Hex page
    - **When** the user clicks on a button that reads "Click Me" in the center of the page
    - **Then** a random hex code should be created
    - **And** the background color of the current page’s body should be changed to the new color
