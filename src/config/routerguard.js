const requireLogin = (to, from, next) => {
  if (localStorage.getItem('token')) {
    next();
  } else {
    // next({props: "asdasdasd", redirect: '/login'})
    next.redirect('/login');
  }
};

export default requireLogin;
