function Errorpage() {
  return (
    <div className="text-lavender-blue min-h-dvh content-center bg-cover bg-top text-center max-lg:bg-bottom">
      <h1 className="font-bellefair text-5xl font-bold">404</h1>
      <h2 className="font-barlow mb-2 text-2xl">Page Not Found</h2>
      <p className="font-barlow-condensed mb-16 text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="text-2xl transition-colors before:mr-5 before:content-['<'] hover:text-white"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Errorpage;
