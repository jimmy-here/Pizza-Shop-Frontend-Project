import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'royalblue' }} className="text-white py-4 shadow">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="me-3">
          <span role="img" aria-label="pizza" className="fs-1">🍕</span>
        </div>
        <div className="text-center">
          <h1 className="display-4 fw-bold">Pizza Shop</h1>
          <p className="fst-italic text-light">&ldquo;The best slice in town!&rdquo;</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
