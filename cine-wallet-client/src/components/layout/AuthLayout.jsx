const AuthLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        relative
        overflow-hidden
      "
    >

      {/* Background */}
      <div className="absolute inset-0 bg-[#060816]" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;