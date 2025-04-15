// routes/homeRoutes.js
const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const isAuth = require("../middleware/isAuth");

// Route: /home/
router.get("/home", isAuth, homeController.getHomePage);

// Route: /home/search?q=

router.get('/search-json', isAuth, homeController.searchUsersAndPostsJSON);

const getConnectedUsers = async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id).populate('connections');
    res.render('home', { connectedUsers: currentUser.connections });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

module.exports = router;
