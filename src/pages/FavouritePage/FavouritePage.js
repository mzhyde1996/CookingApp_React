import React from 'react';
import './FavouritePage.css';
import Card from 'react-bootstrap/Card';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


const FavouritePage = () => {
  return (
    <>

    <Header/>
    <h1>Favorites</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg" style={{ width: "150px" }} />
            <Card.Body>
              <Card.Title>Omelette</Card.Title>
              
              <ul> Ingredients: 
              <li> Eggs</li>
  <li>Salt</li>
  <li>Pepper</li>
  <li>Butter</li>
  <li>Cheese</li>
  <li>Ham</li>
  <li>Mushrooms</li>
</ul>

              A simple omelette can be a delicious and filling meal. Whisk 2-3 eggs in a bowl and season with salt and pepper. 
              Melt some butter in a non-stick pan and pour in the eggs. Let the eggs cook for a minute or two, 
              then add any fillings you like ( for example cheese, ham or mushrooms). Fold the omelette in half and cook for another 
              minute or two until the filling is hot and the eggs are fully cooked.
         
            
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://www.sidewalkshoes.com/wp-content/uploads/2008/07/20200713-featured-caprese-lrg.jpg" style={{ width: "150px" }}/>
            <Card.Body>
              <Card.Title>Tomato Mozzarella Salad</Card.Title>
          
              <ul> Ingredients: 
              <li> Large tomatoes</li>
  <li>Fresh mozzarella cheese</li>
  <li>Olive oil</li>
  <li>Balsamic vinegar</li>
  <li>Salt</li>
  <li>Pepper</li>
  <li>Fresh Basil</li>
  
</ul>
              This refreshing salad is perfect for a quick lunch or light dinner. Slice a large tomato and fresh mozzarella cheese and arrange them on a plate.
               Drizzle with olive oil and balsamic vinegar and season with salt and pepper. Garnish with fresh basil leaves.
             
        
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top"  src="https://houseofnasheats.com/wp-content/uploads/2021/10/Apple-Strudel-Apfelstrudel-Square-1.jpg" style={{ width: "150px" }} />
            <Card.Body>
              <Card.Title>Apple Strudel</Card.Title>
            
              
              <ul> Ingredients: 
              <li> Apples</li>
  <li>Brown sugar</li>
  <li>Cinnamon</li>
  <li>Salt</li>
  <li>Nutmeg</li>
  <li>Raisins</li>
  <li>Chopped walnuts</li>
  <li>Melted butter</li>
  <li>Flour</li>
  <li>Oil</li>
</ul>
              For a delicious Austrian Apple strudel mix flour and salt in a bowl. 
              Gradually add water and oil stirring until dough forms. Knead the dough for 5-7 minutes, or until it is smooth and elastic. Cover the dough with a damp towel and let rest for 30 minutes. Heat your oven and line baking sheet with parchment paper. 
        Combine sliced apples, brown sugar, cinnamon, nutmeg, salt, raisins and chopped walnuts in a mixing bowl. 
        Stir until the apples are evenly coated.
          
              <div className="read-more-container">
              
      </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}; 



  export default FavouritePage;
