import './styles.css';
import ProductCard from 'components/ProductCard';
import SearchCard from 'components/SearchCard';

const Catalog = () => {
  return (
    <>
      <div className="catalog-main">
        <div className="catalog-container">
          <div className="search-card-container">
            <SearchCard />
          </div>
          <div className="container my-4 products-container">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
              <div className="col-sm-6 col-lg-4">
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
