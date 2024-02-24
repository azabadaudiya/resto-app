import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             	Welcome to Foodilicious, your premier destination for delectable dining experiences! 
	     	At Foodilicious, we offer a delightful array of culinary delights crafted with passion and expertise. 
		Whether you're craving savory classics, exotic flavors, or innovative fusion cuisine, our diverse menu has 
		something to tantalize every palate. Immerse yourself in a world of culinary delights as our expert chefs curate 
		each dish with the finest ingredients and utmost care. With our easy online reservation system, securing your spot 
		at our restaurant is just a few clicks away. Join us for an unforgettable dining adventure where exceptional food meets 
		impeccable service in a warm and inviting atmosphere. 
		Indulge your senses and elevate your dining experience at Foodilicious today!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
