import './styles.css';
import CardCar from 'assets/images/car-card.png';
import Button from 'components/Button';

const ProductCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-image">
        <img src={CardCar} alt="" />
      </div>
      <div className="card-text">
        <h2>Audi Supra TT</h2>
        <div className="text-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
        </div>
      </div>
      <Button btnText={'Comprar'} />
    </div>
  );
};

export default ProductCard;
