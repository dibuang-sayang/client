import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signUpWithEmailPassword } from '../config/firestore';
import { user } from '../query/index';
import { useMutation } from '@apollo/client';
import Select from 'react-select';
import { currentUserVar } from '../cache';
import { signInWithEmailPassword } from '../config/firestore';
import Swal from 'sweetalert2';

export default function Register() {
  const history = useHistory();
  const [registerNewUser] = useMutation(user.REGISTER_USER, {
    errorPolicy: 'all',
    onCompleted: () => {},
  });

  const [loginUser] = useMutation(user.LOGIN_USER, { errorPolicy: 'all' });

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const roleOption = [
    { value: 'anggota', label: 'Anggota' },
    { value: 'pengepul', label: 'Pengepul' },
    { value: 'pengrajin', label: 'Pengrajin' },
  ];
  const [inputUser, setInputUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChangeInputUser = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickRegisterButton = (e) => {
    e.preventDefault();
    registerNewUser({
      variables: {
        inputUser,
      },
    })
      .then((res) => {
        if (res.data.register) {
          Toast.fire({
            icon: 'success',
            title: 'succes register new account',
          });
          currentUserVar(res.data.register);
          // console.log(res.data, 'ini dataaa');
          signUpWithEmailPassword(inputUser.email, inputUser.password);
          doLogin();
        } else {
          Toast.fire({
            icon: 'error',
            title: res.errors[0].message,
          });
        }
      })
      .catch((err) => {});
  };

  // const redirectRouteHandler = () => {
  //   if(inputUser.role === 'anggota'){
  //     return history.push('/login')
  //   }else

  // }

  const doLogin = () => {
    loginUser({
      variables: {
        email: inputUser.email,
        password: inputUser.password,
      },
    }).then((res) => {
      localStorage.setItem('token', res.data.loginUser.token);
      signInWithEmailPassword(inputUser.email, inputUser.password);
      if (inputUser.role === 'anggota') {
        history.push('/');
      } else {
        history.push('/user/setting');
      }
    });
  };

  const roleChangeHanlder = (e) => {
    setInputUser({
      ...inputUser,
      role: e.value,
    });
  };

  const backgroundImage =
    'https://cdn.discordapp.com/attachments/801791591927775257/802068673464238130/dumpsite.png';

  return (
    <div className="w-full h-screen flex bg-gray-200">
      <img
        src={backgroundImage}
        alt="background"
        className="object-cover object-center h-screen w-6/12"
      />
      <div className="bg-white flex flex-col justify-center items-center w-6/12 shadow-lg">
        <div className="w-3/4 text-left">
          <span>Welcome!</span>
          <h1 className="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Register Your Account
          </h1>
        </div>
        <div className="w-3/4 text-center">
          <form className="w-full" onSubmit={handleClickRegisterButton}>
            <div className="w-full text-left">
              <label htmlFor="firstName">First Name</label>
            </div>
            <input
              type="text"
              name="firstName"
              onChange={handleChangeInputUser}
              value={inputUser.firstName}
              placeholder="Budi"
              autoComplete="off"
              required={true}
              className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            <div className="w-full text-left">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              type="text"
              name="lastName"
              onChange={handleChangeInputUser}
              value={inputUser.lastName}
              placeholder="Anduk"
              autoComplete="off"
              className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            <div className="w-full text-left">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="text"
              name="email"
              placeholder="jonDoe@mail.com"
              onChange={handleChangeInputUser}
              value={inputUser.email}
              autoComplete="off"
              className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            <div className="w-full text-left">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChangeInputUser}
              value={inputUser.password}
              placeholder="password"
              autoComplete="off"
              className="mt-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            <div className="w-full text-left">
              <label htmlFor="roles">Role</label>
            </div>
            <Select
              options={roleOption}
              className="mt-2"
              onChange={(e) => roleChangeHanlder(e)}
            />
            <div className="mt-8 flex flex-col gap-3">
              <button
                className="bg-green-600 w-full py-2 font-custom hover:bg-orange-600 text-white px-3 rounded text-lg focus:outline-none shadow"
                onClick={handleClickRegisterButton}
              >
                Register Now
              </button>
              {/* <button className="flex flex-row gap-3 py-2 justify-center bg-gray-900 w-full font-custom hover:bg-orange-600 text-white px-3 rounded text-lg focus:outline-none shadow">
                <img src={googleLogo} className="w-6 h-6" alt="logo google " />
                or Sign In with Google
              </button> */}
              <Link to="/login" className="w-full text-left">
                <span>
                  Sudah punya akun? <b>Login!</b>
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
