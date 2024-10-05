QR Code Generator

This project is a QR Code Generator web application that allows users to enter a text or URL, and generate a downloadable QR code. It utilizes HTML, CSS, and JavaScript for the frontend and integrates the QuickChart API to fetch QR codes.

Features

Generate QR Codes: Users can input any text or URL, and the application will generate a QR code for it.

Download QR Codes: Once generated, users can download the QR code as an image , by previewing it by the respective button..


Project Structure

HTML: Structure of the webpage, including a heading, input box, and an output container for the QR code image.

CSS: Styling for the webpage, including background, layout, input, and button design.

JavaScript: Handles fetching QR codes from the QuickChart API and updating the output section with the generated QR code.


Files

index.html: Contains the HTML structure of the page.

style.css: Provides the styling for the web page.

app.js: Contains the JavaScript logic to interact with the QuickChart API and manage the UI.


How to Use

1. Open the index.html file in a web browser.


2. Enter any text or URL in the input box.


3. Click the "Enter" button.


4. The generated QR code will appear in the output section.


5. Click "Preview QR" to preview the QR code image(after which you can download it by long pressing it and then clicking on the 'download image' option).



API Used

QuickChart API: The project uses the QuickChart API to generate QR codes. The API is free and simple to use with no API keys required.


API Endpoint:
https://quickchart.io/qr?text={YOUR_TEXT}

Customization

You can customize the project in the following ways:

Change the background image in the style.css file by updating the background-image property.

Modify the button and text styles by altering the CSS rules.

Use a different QR code API by changing the URL in the fetchQR() function inside the app.js file.


Example

Input: https://www.youtube.com

Output: A QR code that, when scanned, redirects to https://www.youtube.com .


Installation

1. Download or clone the repository.


2. Open index.html in a web browser to start generating QR codes instantly.
