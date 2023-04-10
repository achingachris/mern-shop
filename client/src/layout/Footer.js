/* eslint-disable jsx-a11y/anchor-is-valid */

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              My Account
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Terms and Conditions
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Source Code
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© {year} MERNSTACH, E</p>
      </footer>
    </div>
  );
};

export default Footer;
