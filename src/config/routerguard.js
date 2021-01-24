export default requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};
