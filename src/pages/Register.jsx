import googleLogo from '../assets/img/google.png';
import { Link } from 'react-router-dom';

export default function Register() {
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
          <h1 class="text-3xl font-bold text-orange-500 mb-2 font-custom">
            Register Your Account
          </h1>
        </div>
        <div class="w-3/4 text-center">
          <div className="w-full text-left">
            <label htmlFor="username">First Name</label>
          </div>
          <input
            type="text"
            name="username"
            placeholder="John"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
          />
          <div className="w-full text-left">
            <label htmlFor="username">Last Name</label>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Doe"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
          />
          <div className="w-full text-left">
            <label htmlFor="username">Email</label>
          </div>
          <input
            type="text"
            name="username"
            placeholder="username"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
          />
          <div className="w-full text-left">
            <label htmlFor="username">Password</label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            class="shadow-md border w-full h-12 px-3 py-2 rounded-md"
          />
          <div className="mt-8 flex flex-col gap-3">
            <button class="bg-green-600 w-full py-2 font-custom hover:bg-orange-600 text-white px-3 rounded text-lg focus:outline-none shadow">
              Register Now
            </button>
            <button class="flex flex-row gap-3 py-2 justify-center bg-gray-900 w-full font-custom hover:bg-orange-600 text-white px-3 rounded text-lg focus:outline-none shadow">
              <img src={googleLogo} className="w-6 h-6" alt="logo google"/>
              or Sign In with Google
            </button>
            <Link to="/login" className="w-full text-left">
              <span>
                Sudah punya akun? <b>Login!</b>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
