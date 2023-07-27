import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div className="container-fluid serv mt-5" >
          <div className="services-page">
            <h1 className="page-heading text-center mb-5">Our Services</h1>
            <div className="service">
              <h5>Online Ordering</h5>
              <p>
                Enjoy the convenience of ordering your favorite delicacies
                online. Browse our menu, choose your dishes, and place your
                order from the comfort of your home or office. We offer a wide
                range of delectable options to satisfy your cravings.
              </p>
            </div>
            <div className="service">
              <h5>Fast and Reliable Delivery</h5>
              <p>
                We prioritize delivering your food quickly and reliably. Our
                delivery team ensures that your order reaches you hot and fresh.
                Say goodbye to waiting in long queues – we bring the food to
                you!
              </p>
            </div>
            <div className="service">
              <h5>Special Occasions Catering</h5>
              <p>
                Celebrate your special moments with us! We offer catering
                services for events, parties, and gatherings. From small
                get-togethers to grand celebrations, our expert chefs will
                prepare mouthwatering dishes that will delight your guests.
              </p>
            </div>
            <div className="service">
              <h5>Customizable Menus</h5>
              <p>
                We understand that every taste is unique. Our customizable menus
                allow you to create your perfect meal. Whether you have specific
                dietary requirements or preferences, we've got you covered with
                tailored dishes that suit your needs.
              </p>
            </div>
            <div className="service">
              <h5>Quality Ingredients</h5>
              <p>
                At Lade Delicacies, we believe in serving only the best. We
                source fresh and high-quality ingredients to ensure the most
                flavorful and nutritious dishes for our customers. Your
                satisfaction is our priority!
              </p>
              <p><strong>Thanks for your patronage!</strong></p>
            </div>
          </div>
          </div>

          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
