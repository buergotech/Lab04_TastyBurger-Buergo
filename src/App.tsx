import { useState } from "react";
import "./App.css";

import classic from "./assets/classic.jpg";
import cheese from "./assets/cheese.jpg";
import crispy from "./assets/Crispy.jpg";
import doubleC from "./assets/doubleC.jpg";

type Burger = {
  name: string;
  image: string;
  rating: number;
  description: string;
  price: string;
};

const burgers: Burger[] = [
  {
    name: "Crispy Chicken",
    image: crispy,
    rating: 4,
    description:
      "Chicken breast, chili sauce, tomatoes, lettuce",
    price: "₱99.15",
  },
  {
    name: "Ultimate Double Cheese",
    image: doubleC,
    rating: 5,
    description:
      "House patty, cheddar cheese, bacon, onion, mustard",
    price: "₱99.32",
  },
  {
    name: "Ultimate Cheese",
    image: cheese,
    rating: 5,
    description:
      "American cheese, American Patty",
    price: "₱69.15",
  },
  {
    name: "Classic Cheese",
    image: classic,
    rating: 4,
    description:
      "House patty, cheddar cheese, lettuce, tomato, mustard",
    price: "₱99.25",
  },
];

function App() {
  const [selectedBurger, setSelectedBurger] = useState<Burger | null>(null);

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-burger">🍔</div>

          <div className="logo-text">
            <span>TASTY</span>
            <strong>BURGER</strong>
          </div>
        </div>

        <nav className="navbar">
          <a href="#">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#">SHOP</a>
          <a href="#">CONTACT</a>

          <div className="cart">
            🛒
            <span className="cart-number">2</span>
          </div>
        </nav>
      </header>

      {/* INTRODUCTION */}
      <section className="intro">
        <h1>OUR CRAZY BURGERS</h1>

        <p>
          Get ready for a wild ride of flavors! Our crazy burgers are loaded
          with juicy patties, bold toppings, and irresistible sauces, all
          stacked on a perfectly toasted bun. Whether you like it cheesy,
          or extra meaty, we've got a burger that will blow your mind!
        </p>
      </section>

      {/* BURGERS */}
      <section className="burger-container" id="menu">

        {burgers.map((burger) => (
          <div className="burger-card" key={burger.name}>

            <img
              src={burger.image}
              alt={burger.name}
              className="burger-image"
            />

            <div className="card-content">

              <div className="rating-row">

                <div className="stars">
                  {"★".repeat(burger.rating)}
                  <span className="empty-stars">
                    {"★".repeat(5 - burger.rating)}
                  </span>
                </div>

                <button className="heart-button">
                  ♡
                </button>

              </div>

              <h2>{burger.name}</h2>

              <p className="description">
                {burger.description}
              </p>

              <button
                className="price-button"
                onClick={() => setSelectedBurger(burger)}
              >
                {burger.price}
              </button>

            </div>
          </div>
        ))}

      </section>

      {/* MODAL */}
      {selectedBurger && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBurger(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedBurger(null)}
            >
              ×
            </button>

            <img
              src={selectedBurger.image}
              alt={selectedBurger.name}
            />

            <h2>{selectedBurger.name}</h2>

            <div className="modal-stars">
              {"★".repeat(selectedBurger.rating)}
            </div>

            <p>{selectedBurger.description}</p>

            <button className="modal-price">
              {selectedBurger.price}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;