var cookie = require('react-cookie');

var user; // the user model

module.exports = {
  /**
   * Fetches the userId for the currently authenticated user.
   * @return {Number|undefined} Returns the current user id, if no current user
   *                            returns undefined.
   */
  getUserId() {
    // The user model is not set. Typically this means that the browser has
    // been refreshed, thus the JS memory being cleared. Try cookies for userId
    if (!user) { // user model not initialized. Check for
      return cookie.load('userId');
    }

    return user.id;
  },

  getUser() {
    return user;
  },

  /**
   * Sets the current user. Currently only storing the userId.
   */
  setUser(userModel) {
    user = userModel;
    cookie.save('userId', user.id);
  },

  // Deletes the current user model, including associated cookie data.
  deleteUser() {
    user = undefined;
    cookie.remove('userId');
  }
};
