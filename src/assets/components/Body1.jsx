export function Body1() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: 'url("./images/starbucks.jpg")',
        height: "50rem",
      }}
    >
      <div className="ml-60 translate-y-96">
        <div className="mb-5">
          <h1 className="text-4xl font-semibold mb-1.5">FREE COFFEE</h1>
          <h1 className="text-4xl font-semibold mb-1.5">IS A TAP AWAY</h1>
        </div>
        <p className="text-xl mb-10">Join now to start earning Rewards.</p>
        <a
          className="bg-starbucks-green rounded-full pt-1.5 pb-1.5 pl-4 pr-4 font-bold text-white"
          href="#"
        >
          Join now
        </a>
        <p className="text-xl mt-4">
          Or{" "}
          <a href="#" className="underline">
            join in the app
          </a>{" "}
          for the best experience
        </p>
      </div>
    </div>
  );
}
