import React from 'react'


const requireLogin = (to, from, next) => {
    if(localStorage.getItem('token')){
        next()
    }else {
        // next({props: "asdasdasd", redirect: '/login'})
        next.redirect('/login')
        next.props({ads:'asdas'})
    }
};

export default requireLogin;
