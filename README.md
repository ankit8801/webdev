# Will You Be My Valentine? 💌  
This project is designed to be an interactive webpage to ask someone to be your Valentine.  

## How It Works  
This project consists of a simple webpage with a "Yes" and "No" button. When the user hovers over the "No" button, it moves unpredictably for a few seconds. When clicked, the button cycles through a series of messages, and the "Yes" button gradually grows larger. After a few "No" clicks, the "Yes" button becomes clickable. If the user clicks the "Yes" button, they are redirected to a new page (yes_page.html).  

## Features:  
- **Interactive Buttons**:  
  - The "No" button moves randomly when hovered for 5 seconds.  
  - Clicking "No" cycles through different messages and enlarges the "Yes" button.  
  - After multiple "No" clicks, the "Yes" button becomes clickable.  
- **Responsive Design**: The webpage is designed to work on all screen sizes.  

## How to Use  
### Download the Files:  
Clone this repository or download the `index.html`, `style.css`, `yes_style.css`, `yes_page.html`, and `script.js` files.  

### Open the Project:  
Open the `index.html` file in your web browser.  

## Code Overview  
### Files:  
- `index.html`: The main HTML file that structures the webpage.  
- `style.css`: The CSS file that styles the main webpage.  
- `script.js`: The JavaScript file that handles the button interactions.  
- `yes_page.html`: The "Yes" page that structures the webpage after a successful response.  
- `yes_style.css`: The CSS file that styles the "Yes" webpage.  

### Key Functions:  
- **`handleNoClick()`**: Changes the "No" button text, enlarges the "Yes" button, and enables it after multiple clicks.  
- **`handleYesClick()`**: Redirects the user to `yes_page.html`.  
- **`moveNoButton()`**: Moves the "No" button randomly for the first few seconds when hovered.  

## A Note on Project Credits & Acknowledgment  
This project is inspired by the work of [ivysone](https://github.com/ivysone). The original code provided a great foundation, and I have built upon it by customizing, improving, and adapting it to align with my learning and project goals.  

I appreciate the open-source community and believe in giving due credit to the original creators. This project showcases not only my ability to leverage existing resources but also my capability to modify, enhance, and implement solutions effectively.  

