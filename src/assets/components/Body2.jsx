import { useState } from "react";
export function Body2() {
  const [activeTab, setActiveTab] = useState(0);
  const favoritesData = [
    {
      title: "Customize your drink",
      description:
        "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.",
      image: "./images/25.webp",
    },
    {
      title:
        "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
      description:
        "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.",
      image: "./images/100.webp",
    },
    {
      title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
      description:
        "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
      image: "./images/200.webp",
    },
    {
      title: "Sandwich, protein box or at-home coffee",
      description:
        "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.",
      image: "./images/300.webp",
    },
    {
      title: "Select Starbucks® merchandise",
      description:
        "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.",
      image: "./images/400.webp",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center mt-36">
          <h1 className="font-semibold text-3xl mb-4">
            Getting started is easy
          </h1>
          <p className="font-medium">
            Earn Stars and get rewarded in a few easy steps.
          </p>
        </div>
        <div className="flex justify-center mt-10 mb-32">
          <div className="w-96 text-center pl-5">
            <img
              src="./images/1.webp"
              className="mt-3 h-12 ml-auto mr-auto mb-10"
            ></img>
            <h2 className="font-semibold text-xl mb-5">Create an account</h2>
            <p>
              To get started,{" "}
              <a href="#" className="underline text-starbucks-green">
                join now
              </a>
              . You can also{" "}
              <a href="#" className="underline text-starbucks-green">
                join in the app
              </a>{" "}
              to get access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>
          <div className="w-96 text-center pl-5">
            <img
              src="./images/2.webp"
              className="mt-3 h-12 ml-auto mr-auto mb-10"
            ></img>
            <h2 className="font-semibold text-xl mb-5">
              Order and pay how you’d like
            </h2>
            <p>
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways.{" "}
              <a href="#" className="underline text-starbucks-green">
                Learn how
              </a>
            </p>
          </div>
          <div className="w-96 text-center pl-5">
            <img
              src="./images/3.webp"
              className="mt-3 h-12 ml-auto mr-auto mb-10"
            ></img>
            <h2 className="font-semibold text-xl mb-5">
              Earn Stars, get Rewards
            </h2>
            <p>
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-starbucks-white1 text-3xl font-semibold text-center pt-12 pb-10">
        <h1 className="">Get your favorites for free</h1>
        <div className="mt-16">
          <button
            className="mr-16"
            onClick={() => {
              setActiveTab((a) => 0);
            }}
          >
            25
            <span aria-hidden="true" className="text-sm text-orange-400">
              ★
            </span>
          </button>
          <button
            className="mr-16"
            onClick={() => {
              setActiveTab((a) => 1);
            }}
          >
            100
            <span aria-hidden="true" className="text-sm text-orange-400">
              ★
            </span>
          </button>
          <button
            className="mr-16"
            onClick={() => {
              setActiveTab((a) => 2);
            }}
          >
            200
            <span aria-hidden="true" className="text-sm text-orange-400">
              ★
            </span>
          </button>
          <button
            className="mr-16"
            onClick={() => {
              setActiveTab((a) => 3);
            }}
          >
            300
            <span aria-hidden="true" className="text-sm text-orange-400">
              ★
            </span>
          </button>
          <button
            className="mr-16"
            onClick={() => {
              setActiveTab((a) => 4);
            }}
          >
            400
            <span aria-hidden="true" className="text-sm text-orange-400">
              ★
            </span>
          </button>
        </div>
      </div>
      <div className="bg-sb-something flex items-center justify-center pb-8 pt-8">
        <img src={favoritesData[activeTab].image} className="h-60"></img>
        <div className="ml-8">
          <h2 className="font-semibold text-2xl mb-5 w-60">
            {favoritesData[activeTab].title}
          </h2>
          <p className="w-60">{favoritesData[activeTab].description}</p>
        </div>
      </div>
    </>
  );
}
