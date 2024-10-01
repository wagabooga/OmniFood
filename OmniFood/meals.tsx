
const Meals = () => {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">Omnifood AI chooses from 5,000+ recipes</h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="meal">
          <img src="/src/pages/OmniFood/img/meals/meal-1.jpg" className="meal-img" alt="Japanese Gyozas" width={300} height={200} />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegetarian">Vegetarian</span>
            </div>
            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <i className="meal-icon flame-outline"></i>
                <span><strong>650</strong> calories</span>
              </li>
              <li className="meal-attribute">
                <i className="meal-icon restaurant-outline"></i>
                <span>NutriScore &reg; <strong>74</strong></span>
              </li>
              <li className="meal-attribute">
                <i className="meal-icon star-outline"></i>
                <span><strong>4.9</strong> rating (537)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="meal">
          <img src="/src/pages/OmniFood/img/meals/meal-2.jpg" className="meal-img" alt="Avocado Salad" width={300} height={200} />
          <div className="meal-content">
            <div className="meal-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">Paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <i className="meal-icon flame-outline"></i>
                <span><strong>400</strong> calories</span>
              </li>
              <li className="meal-attribute">
                <i className="meal-icon restaurant-outline"></i>
                <span>NutriScore &reg; <strong>92</strong></span>
              </li>
              <li className="meal-attribute">
                <i className="meal-icon star-outline"></i>
                <span><strong>4.8</strong> rating (441)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <i className="list-icon checkmark-outline"></i>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container all-recipes">
        <a href="#" className="link">See all recipes &rarr;</a>
      </div>
    </section>
  );
};

export default Meals;
