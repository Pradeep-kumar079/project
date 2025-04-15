const express = require("express");
const router = express.Router();
const {
  getRegisterPage,
  registerUser,
  getLoginPage,
  loginUser,
  logoutUser,
  renderLogoutGreeting,
  renderForgotPassword,
  forgotPassword,
  renderResetPassword,
  resetPassword
} = require("../controllers/authController");
const upload = require("../utils/upload")

const isAuth = require("../middleware/isAuth"); // Middleware to check auth

// ===== Register Routes =====
router.get("/register", getRegisterPage);
router.post("/register",registerUser); // use multer middleware

// ===== Login Routes =====
router.get("/login", getLoginPage);
router.post("/login", loginUser);

// ===== Logout Routes =====
router.get("/lgtmsg", isAuth, renderLogoutGreeting);
router.post("/logout", isAuth, logoutUser);

// ===== Password Reset Routes =====
router.get("/forgot-password", renderForgotPassword);
router.post("/forgot-password", forgotPassword);
router.get("/reset-password/:token", renderResetPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
