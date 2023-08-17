const Homepage = () => {
  return (
    <div className="hero-section">
      <div className="section-one">
      <div className="hero-content">
        <h1>
          All Fast food <span className="orange-text">is</span> <br></br> available at foodle
        </h1>
        <p>
          We Are Just A Click Away When <span className="black-text">You</span> <br></br>Care For Delicious Fast Food
        </p>
        <button className="signup-button">Buy Now</button>
      </div>
      <div className="hero-image">
        <img src="images/Sandwich.png" />
      </div>
      </div>


      <div className="Details">
      <div>
        <h1>Fast Delivery</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      <div>
        <h1>Fresh Food</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      <div>
        <h1>Free Delivery</h1>
        <p>The food will be delivered to <br></br>Your home within 1-2 hrs of<br></br>your ordering </p>
      </div>
      </div>





      
      <div className="section-one">
      <div className="content">
        <h1>
          Best <br></br> Categories
        </h1>
        <p id="words">
          Here are some of our best distributed categories.If you want you can order from here.
        </p>
      </div>
      </div>
      
      
      <div className="container">
    <div className="item">
      <img src="images/chicken.jpg"/>
      <div className="item-name">Chicken Burger</div>
      <button className="order-button">Order Now</button>
    </div>

    <div className="item">
      <img src="images/bread"/>
      <div className="item-name">Chicken Pizza</div>
      <button className="order-button">Order Now</button>
    </div>

    <div className="item">
      <img src="images/fries"/>
      <div className="item-name">French Fries</div>
      <button className="order-button">Order Now</button>
    </div>
  </div>
     
      <div className="section-two">
        <h1>
          Our <span className="orange-text">Regular</span> <br></br> Menu
        </h1>
        <div className="two">
        <p>
          These are our regular Menus.You can<br></br>order anything you like.
        </p>
        <button className="signup-button">See All</button>
        </div>
      </div>

      {/*rows section */}
      <div className="item">
    <img src="images/Sandwich.png"/>
    <div className="item-details">
      <div className="item-name">Item 1</div>
      <div className="item-rating">Rating: 4.5</div>
      <div className="item-price">$10.99</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  <div className="item">
    <img src="images/fries.jpg"/>
    <div className="item-details">
      <div className="item-name">Item 2</div>
      <div className="item-rating">Rating: 4.0</div>
      <div className="item-price">$8.49</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  <div className="item">
    <img src="images/Sandwich"/>
    <div className="item-details">
      <div className="item-name">Item 3</div>
      <div className="item-rating">Rating: 4.8</div>
      <div className="item-price">$12.99</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  <div className="item">
    <img src="images/noodle.jpeg"/>
    <div className="item-details">
      <div className="item-name">Item 1</div>
      <div className="item-rating">Rating: 4.5</div>
      <div className="item-price">$10.99</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  <div className="item">
    <img src="images/chicken.jpg"/>
    <div className="item-details">
      <div className="item-name">Item 2</div>
      <div className="item-rating">Rating: 4.0</div>
      <div className="item-price">$8.49</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  <div className="item">
    <img src="humberger-PhotoRoom.png"/>
    <div className="item-details">
      <div className="item-name">Item 3</div>
      <div className="item-rating">Rating: 4.8</div>
      <div className="item-price">$12.99</div>
      <button className="buy-button">Buy Now</button>
    </div>
  </div>

  {/* third section */}

  <div className="flex-container">
    <div className="image-container">
      <img src="images/noodle.jpeg"/>
    </div>
    <div className="image-container">
      <img src="images/Sandwich.png "/>
      <img src="images/pizza.jpg" />
    </div>
  </div>
     
    </div>
  );
};
export default Homepage;