# React Formik Application

This project is a **React-based Form Application** built to solidify the understanding of React form handling by utilizing the **Formik**. The app includes two forms: **Sign Up** and **Login**, developed using **React** and **Formik** with **TypeScript** for form handling and **Yup** for validation. The app demonstrates clean coding principles, enhanced user experience (UX), and modern web development practices.

---


## 🖼️ Screenshot

![Image alt](https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik/blob/1f15fd79f30c234cc964fd97eca856b230405d36/Login%20SignUp%20Form%20Design.gif)
![Image alt](https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik/blob/main/React%20Formik%20Error%20Login%20Form%20SS%20.png?raw=true)
![Image alt](https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik/blob/main/React%20Formik%20Login%20Form%20SS.png?raw=true
)
![Image alt](https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik/blob/main/React%20Formik%20SignUp%20ss.png?raw=true)
---


## **Features**
1. **Sign Up Form**:
   - Allows users to create an account.
   - Validates user inputs using Formik and Yup.
   - Provides success feedback upon successful account creation.

2. **Login Form**:
   - Allows users to log in using their credentials.
   - Validates inputs against stored credentials.
   - Ensures users must sign up first before logging in.
   - Shows success feedback upon successful login.

3. **User-Friendly Design**:
   - Simple and clean UI designed without third-party libraries (e.g., Material-UI).
   

4. **Form Validation**:
   - Utilizes **Formik** for form management.
   - Utilizes **Yup** for schema validation.

5. Additional Bonus Features :
   - Displays appropriate error messages for invalid credentials or missing accounts.
   - Displays a password strength indicator (Weak, Medium, Strong) during SignUp.
   - Implemented a "Remember Me" checkbox for the Login form and save the email to local storage.

---

## **Tech Stack**:
   - **React**
   - **TypeScript** 
   - **Formik** : for form handling and Management
   - **LocalStorage** : for persistent data handling
   - **Yup** : Schema-based validation for better UX and validation logic.

---

## **Design Choices**
### 1. **Formik for Form Handling**
Formik was chosen to simplify form state management and validation. Paired with Yup, it provides a powerful, declarative way to define and enforce form validation rules.

### 2. **Password Strength Indicator**
Implemented using regular expressions to evaluate the strength of the password:
   - **Weak**: Fewer than 6 characters or no special characters.
   - **Medium**: Includes uppercase, lowercase, and numbers but lacks special characters or length.
   - **Strong**: A combination of uppercase, lowercase, numbers, special characters, and at least 8 characters in length.

### 3. **Clean and Minimal UI**
The design focuses on simplicity and user clarity:
   - Toggle buttons for switching between Login and Sign Up.
   - Responsive layout for optimal usability across devices.
   - Semantic HTML for accessibility.

### 4. **Validation Rules**
Validation ensures:
   - Email follows a proper format.
   - Password is required and meets strength criteria.
   - User credentials are stored locally for validation during login.

### 5. **Error and Success Messaging**
The app provides clear feedback:
   - Errors for invalid email/password or missing accounts.
   - Success messages for both Login and Sign Up events.

---

## **How to Run the Project**

### **Prerequisites (📥 Installation) **
- Node.js installed on your system.
- npm or yarn as the package manager.

Clone the repository and set up the environment:

   ```bash
   git clone https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik.git
   cd react-formik-app
   npm install
   ```

## 🚀 Running the Application

Once the dependencies are installed, run the development server:

   ```bash
   npm start
   ``` 
   Open your browser and visit:
   [http://localhost:3000](http://localhost:3000)

---

## 🖌️ How It Works

### Sign-Up Page
1. Input your **name**, **email**, **password**.
2. Password strength is indicated in real-time (Weak, Medium, Strong).
3. Upon successful submission, the form resets and displays a success message.

### Login Page
1. Input **email** and **password** into the respective fields.
2. Toggle the **"Remember Me"** checkbox to save the email using `localStorage`.
3. Submit the form to log in.

---

## 🤝 Contributing

We welcome contributions! If you find any issues or want to add new features, feel free to fork this repository and submit a **pull request**.

---

## 🛡️ License

This project is licensed under the **MIT License**. You’re free to use and distribute it with attribution.

---

🔗 Repository URL: [[Sign-Up & Login with Formik Repository]((https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik.git))](https://github.com/akhileshavhad/React-SignUp-Login-Form-App-with-Formik.git)

Let me know if you’d like additional changes! 😊
