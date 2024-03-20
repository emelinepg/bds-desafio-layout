import './styles.css';
import HomeCar from 'assets/images/car-home.png';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="card-banner">
            <div className="banner-text">
              <h2>O carro perfeito para você</h2>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
            <div className="banner-image">
              <img src={HomeCar} alt="" />
            </div>
          </div>
          <div className="base-card card-cta">
            <Link to="/catalog">
              <Button btnText={'Ver catálogo'} />
            </Link>
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
