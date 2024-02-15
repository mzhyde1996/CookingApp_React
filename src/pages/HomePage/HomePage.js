import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import Footer from '../../components/Footer/Footer';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const HomePage = () => {
  return (
    <>
      <div className='intro'>
        <Header/>
        <Slide easing="ease" className="slideshow">
          <div className="each-slide">
            <img src={require('../../assets/images/img1.jpg')} alt="Food 1" className="slide-image" />
          </div>
          <div className="each-slide">
            <img src={require('../../assets/images/img2.jpg')} alt="Food 2" className="slide-image" />
          </div>
          <div className="each-slide">
            <img src={require('../../assets/images/img3.jpg')} alt="Food 3" className="slide-image" />
          </div>
          <div className="each-slide">
            <img src={require('../../assets/images/img4.jpg')} alt="Food 3" className="slide-image" />
          </div>
          <div className="each-slide">
            <img src={require('../../assets/images/img5.jpg')} alt="Food 3" className="slide-image" />
          </div>
        </Slide>
        <div className='cursive'>
          <h2>
            Introduction
          </h2>
          <div>
          <p>
          Welcome to Recipe Roulette, the ultimate solution to all your cooking woes! Do you find yourself constantly struggling to come up with meal
           ideas or wondering what to do with the random ingredients you have on hand? Then Recipe Roulette is just what you need!
          <br></br>
          </p>
          <p>
          Our website offers an easy and fun way to discover new recipes that you can make with the ingredients you already have in your kitchen. 
          With just a few clicks, you can access a wide range of delicious recipes that you might never have thought of otherwise.
          <br></br>
          </p>
          <p>
          Our platform is designed to make your life easier and more exciting by taking the guesswork out of meal planning. 
          Instead of spending hours browsing through cookbooks or scrolling through endless recipe websites, 
          you can simply input your ingredients into Recipe Roulette and let our algorithm do the rest. 
          Who knows, you might discover a new family favorite!
          <br></br>
          </p>
          <p>
          And the best part is, Recipe Roulette is constantly updating its database with new and exciting recipes, 
          so you'll never run out of inspiration. From classic dishes to exotic flavors, our recipes are sure 
          to delight your taste buds and satisfy your cravings.
          <br></br>
          </p>
          <p>
          So why not give Recipe Roulette a spin today? It's free, easy to use, and most importantly, 
          it takes the stress out of meal planning. Simply enter your ingredients, hit the button, and let the magic begin! 
          </p>
          <br></br>
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default HomePage;

