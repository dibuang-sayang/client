const requireLogin = (to, from, next) => {
  
  
  if (localStorage.getItem('token')) {
    console.log(to.location.pathname);
    next();
  } else {
    // next({props: "asdasdasd", redirect: '/login'})
    next.redirect('/login');
  }
};

export default requireLogin;
