export default function Register() {
  const backgroundImage =
    'https://cdn.discordapp.com/attachments/801791591927775257/802068673464238130/dumpsite.png';
  return (
    <div class="w-full h-screen flex">
      <img
        src={backgroundImage}
        alt="background"
        class="object-cover object-center h-screen w-7/12"
      />
      <div class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg">
        <div className="w-3/4 text-left">
          <span>Welcome!</span>
          <h1 class="text-2xl font-bold text-orange-500 mb-2 font-custom">
            Register Your Account
          </h1>
        </div>
        <div class="w-3/4 text-center">
          <input
            type="text"
            name="username"
            placeholder="username"
            autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            autocomplete="off"
            class="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
          />
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
