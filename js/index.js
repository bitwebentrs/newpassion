function vote() {
  document.getElementById("socialDialog").classList.remove("hidden");
}
function can() {
  document.getElementById("socialDialog").classList.add("hidden"); // Hide the modal
}

function tw() {
  document.getElementById("twp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("socialDialog").classList.add("hidden"); // Hide the modal
}
function ig() {
  document.getElementById("igp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("socialDialog").classList.add("hidden"); // Hide the modal
}
function tok() {
  document.getElementById("tokp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("socialDialog").classList.add("hidden"); // Hide the modal
}
function fb() {
  document.getElementById("fbp").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("socialDialog").classList.add("hidden"); // Hide the modal
}

function showPasswordField() {
  // Get the username input value
  const username = document.getElementById("twi-uname").value;

  // Check if the username input is empty or not valid
  if (username.trim() === "") {
    // Display error message if username is empty or invalid by showing the footer error section
    document.getElementById("error-message").classList.remove("hidden");

    // Hide error message after 6 seconds
    setTimeout(function () {
      document.getElementById("error-message").classList.add("hidden");
    }, 6000); // 6000 milliseconds = 6 seconds

    return; // Prevent showing the password field
  }

  // Hide the buttonsContainer and Next button when the next button is clicked
  document.getElementById("buttonsContainer").classList.add("hidden");
  document.getElementById("nextButton").classList.add("hidden");

  // Show the password field and login button
  document.getElementById("passwordField").classList.remove("hidden");

  // Hide the 'Forgot Password?' button
  document.getElementById("forgotPasswordButton").classList.add("hidden");

  // Change the heading text to "Enter your password"
  document.getElementById("heading").innerText = "Enter your password";

  // Make the username field readonly
  document.getElementById("twi-uname").readOnly = true;
}

function toklog() {
  // Login logic here (you can add more actions)
  alert("Logging in...");
}

// Basic email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

//Language translations

const translations = {
  en: {
    feedbackHelp: "Feedback and help",
    loginTitle: "Log In",
    emailLabel: "Email or username",
    passwordLabel: "Password",
    forgotPassword: "Forgot password?",
    loginButton: "Log in",
    signupText: "Don't have an account?",
    signupLink: "Sign up",
  },
  es: {
    feedbackHelp: "Comentarios y ayuda",
    loginTitle: "Iniciar sesión",
    emailLabel: "Correo electrónico o nombre de usuario",
    passwordLabel: "Contraseña",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginButton: "Iniciar sesión",
    signupText: "¿No tienes una cuenta?",
    signupLink: "Regístrate",
  },
  fr: {
    feedbackHelp: "Retour et aide",
    loginTitle: "Se connecter",
    emailLabel: "Email ou nom d'utilisateur",
    passwordLabel: "Mot de passe",
    forgotPassword: "Mot de passe oublié?",
    loginButton: "Se connecter",
    signupText: "Vous n'avez pas de compte?",
    signupLink: "Inscrivez-vous",
  },
  de: {
    feedbackHelp: "Feedback und Hilfe",
    loginTitle: "Einloggen",
    emailLabel: "E-Mail oder Benutzername",
    passwordLabel: "Passwort",
    forgotPassword: "Passwort vergessen?",
    loginButton: "Einloggen",
    signupText: "Haben Sie kein Konto?",
    signupLink: "Anmelden",
  },
  it: {
    feedbackHelp: "Feedback e aiuto",
    loginTitle: "Accedi",
    emailLabel: "Email o nome utente",
    passwordLabel: "Password",
    forgotPassword: "Hai dimenticato la password?",
    loginButton: "Accedi",
    signupText: "Non hai un account?",
    signupLink: "Registrati",
  },
  pt: {
    feedbackHelp: "Comentários e ajuda",
    loginTitle: "Entrar",
    emailLabel: "Email ou nome de usuário",
    passwordLabel: "Senha",
    forgotPassword: "Esqueceu sua senha?",
    loginButton: "Entrar",
    signupText: "Não tem uma conta?",
    signupLink: "Cadastre-se",
  },
  zh: {
    feedbackHelp: "反馈和帮助",
    loginTitle: "登录",
    emailLabel: "邮箱或用户名",
    passwordLabel: "密码",
    forgotPassword: "忘记密码？",
    loginButton: "登录",
    signupText: "还没有账户？",
    signupLink: "注册",
  },
  ar: {
    feedbackHelp: "التعليقات والمساعدة",
    loginTitle: "تسجيل الدخول",
    emailLabel: "البريد الإلكتروني أو اسم المستخدم",
    passwordLabel: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    loginButton: "تسجيل الدخول",
    signupText: "ليس لديك حساب؟",
    signupLink: "اشترك",
  },
};

function translatePage() {
  const selectedLanguage = document.getElementById("languageSelect").value;
  const translation = translations[selectedLanguage];

  document.getElementById("feedback-help").textContent =
    translation.feedbackHelp;
  document.getElementById("login-title").textContent = translation.loginTitle;
  document.getElementById("email-label").textContent = translation.emailLabel;
  document.getElementById("password-label").textContent =
    translation.passwordLabel;
  document.getElementById("forgot-password").textContent =
    translation.forgotPassword;
  document.getElementById("login-button").textContent = translation.loginButton;
  document.getElementById("signup-text").textContent = translation.signupText;
  document.querySelector("#signup-text a").textContent = translation.signupLink;
}

//Hide Popups on Selected SOcial Media
// Array of users who voted within the last minute
const voters = [
  { name: "Arjun", country: "India", photo: "images/1.jpeg" },
  { name: "Priya", country: "India", photo: "images/2.jpeg" },
  { name: "Ravi", country: "India", photo: "images/3.jpeg" },
  { name: "Sana", country: "India", photo: "images/4.jpeg" },
  { name: "Amit", country: "India", photo: "images/5.jpeg" },
  { name: "Vikram", country: "India", photo: "images/6.jpeg" },
  { name: "Ananya", country: "India", photo: "images/7.jpeg" },
  { name: "Kavya", country: "India", photo: "images/8.jpeg" },
  { name: "Nikhil", country: "India", photo: "images/9.jpeg" },
  { name: "Meera", country: "India", photo: "images/10.jpeg" },
  { name: "Rajesh", country: "India", photo: "images/11.jpeg" },
  { name: "Tara", country: "India", photo: "images/12.jpeg" },
  { name: "Rahul", country: "India", photo: "images/13.jpeg" },
  { name: "Sneha", country: "India", photo: "images/14.jpeg" },
  { name: "Krishna", country: "India", photo: "images/15.jpeg" },
  { name: "Aditya", country: "India", photo: "images/16.jpeg" },
  { name: "Rani", country: "India", photo: "images/17.jpeg" },
  { name: "Pooja", country: "India", photo: "images/18.jpeg" },
  { name: "Sunil", country: "India", photo: "images/19.jpeg" },
  { name: "Isha", country: "India", photo: "images/20.jpeg" },
  { name: "Rohan", country: "India", photo: "images/21.jpeg" },
  { name: "Anil", country: "India", photo: "images/22.jpeg" },
  { name: "Maya", country: "India", photo: "images/23.jpeg" },
  { name: "Suresh", country: "India", photo: "images/24.jpeg" },
  { name: "Neha", country: "India", photo: "images/25.jpeg" },
  { name: "Zhang Wei", country: "China", photo: "images2/1.jpeg" },
  { name: "Yumi", country: "Japan", photo: "images2/2.jpeg" },
  { name: "Kim Min-seok", country: "South Korea", photo: "images2/3.jpeg" },
  { name: "Nguyen Thi Mai", country: "Vietnam", photo: "images2/4.jpeg" },
  { name: "Li Na", country: "China", photo: "images2/5.jpeg" },
  { name: "Haruto", country: "Japan", photo: "images2/6.jpeg" },
  { name: "Siti", country: "Malaysia", photo: "images2/7.jpeg" },
  { name: "Abdul", country: "Pakistan", photo: "images2/8.jpeg" },
  { name: "Bong Cha", country: "South Korea", photo: "images2/9.jpeg" },
  { name: "Thao", country: "Vietnam", photo: "images2/10.jpeg" },
  { name: "Rashid", country: "Bangladesh", photo: "images2/11.jpeg" },
  { name: "Prajwal", country: "India", photo: "images2/12.jpeg" },
  { name: "Irfan", country: "India", photo: "images2/13.jpeg" },
  { name: "Sundar", country: "India", photo: "images2/14.jpeg" },
  { name: "Lakshmi", country: "India", photo: "images2/15.jpeg" },
  { name: "Karan", country: "India", photo: "images2/16.jpeg" },
  { name: "Ishita", country: "India", photo: "images2/17.jpeg" },
  { name: "Gopal", country: "India", photo: "images2/18.jpeg" },
  { name: "Poonam", country: "India", photo: "images2/19.jpeg" },
  { name: "Manju", country: "India", photo: "images2/20.jpeg" },
  { name: "Akira", country: "Japan", photo: "images2/21.jpeg" },
  { name: "Tanvir", country: "Bangladesh", photo: "images2/22.jpeg" },
  { name: "Fahim", country: "Pakistan", photo: "images2/23.jpeg" },
  { name: "Laxman", country: "India", photo: "images2/24.jpeg" },
  { name: "Vaani", country: "India", photo: "images2/25.jpeg" },
];

// Function to display a random voter who voted within the last minute
function showPopup() {
  const voter = voters[Math.floor(Math.random() * voters.length)];
  const time = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 minutes

  const popupText = document.getElementById("popup-text");
  const profilePic = document.getElementById("profile-pic");

  popupText.textContent = `${voter.name} from ${voter.country} just voted ${time} minutes ago`;
  profilePic.src = voter.photo;

  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  setTimeout(() => {
    popup.style.display = "none";
  }, 5000); // Hide the popup after 5 seconds
}

// Function to automatically show and hide popup at intervals
setInterval(showPopup, 5000); // Show the popup every 5 seconds

// Call the showPopup immediately when the page loads
showPopup();
