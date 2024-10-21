
# SARAS AI Institute FAQ

This project, **SARAS AI Institute FAQ**, was developed as part of **SARCathon**, conducted by the **Student Alumni Relations Cell (SARC), IIT Bombay**. The aim of the project is to create a smart FAQ module that intelligently returns relevant FAQ entries based on user queries, providing a seamless and efficient user experience.

## Project Overview

The project is built entirely on a **React frontend** with no backend. The FAQ data is stored directly in a JavaScript file (`faqs.js`), where the original `faqs.json` file was converted into a JavaScript object containing the questionnaire. This structure enables fast and efficient search functionality within the frontend itself.

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ishan13404/SARCathon-24-Ishan.git
   cd saras-ai-smart-faq
   ```

2. **Install dependencies**:

   Ensure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Run the application**:

   After the dependencies are installed, you can start the React app using:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000` by default.

## Features

- **Search Functionality**: Users can input their queries, and the module will return the most relevant FAQ entries based on their input.
- **Efficient Frontend**: Since there is no backend, the entire search process happens client-side, ensuring quick response times.
- **Scalability**: The project is designed to handle a large number of FAQs, with the ability to quickly match user queries to relevant questions.

## Key Technologies Used

- **React.js**: For building the interactive user interface.
- **JavaScript**: For handling FAQ data and logic directly within the frontend.

## Conclusion

This FAQ module was developed with a focus on user experience, performance, and seamless integration. It provides quick, relevant responses to user queries and is designed to scale efficiently.

---

Developed by:  
**Ishan Grover**  
Roll No.: 22B1528  
Indian Institute of Technology Bombay  
Email: 22b1528@iitb.ac.in
