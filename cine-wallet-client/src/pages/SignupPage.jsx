import AuthLayout from "../components/layout/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout>

      <div className="glass rounded-[40px] p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold mb-3">
          Create Account
        </h1>

        <p className="text-gray-400 mb-8">
          Join the futuristic movie experience.
        </p>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full glass rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full glass rounded-2xl px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full glass rounded-2xl px-5 py-4 outline-none"
          />

          <button
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            Create Account
          </button>

        </div>

      </div>

    </AuthLayout>
  );
};

export default SignupPage;