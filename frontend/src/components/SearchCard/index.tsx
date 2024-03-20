import Button from 'components/Button';
import './styles.css';

const SearchCard = () => {
  return (
    <div className="base-card search-container">
      <div className="search-box">
        <div className="text-container">
          <p>Digite sua busca</p>
        </div>
        <div className="btn-container">
          <Button btnText={'Buscar'} />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
