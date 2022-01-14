import { useRouter } from 'next/router';
import Link from 'next/link';
import { navLinks } from '@utils/constants.js';

import { useSelector, useDispatch } from 'react-redux';

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);

  const handleLoginClick = () => {};

  const handleLogoutClick = () => {};

  const handleClick = (e) => {};

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top_nav">
          <Link href="/">
            <a className="logo">
              <img src="/images/pizzaria_logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="nav_section">
          <nav>
            <ul className="nav_ul" onClick={(e) => handleClick(e)}>
              {navLinks.map((link, index) => {
                return (
                  <li className="nav_li" key={index}>
                    <Link href={link.url}>
                      <a>
                        <i className={link.icon}></i>
                        <span>{link.text}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {Object.keys(currentUser || {}).length === 0 ? (
          <div className="login_btn" onClick={handleLoginClick}>
            Login
          </div>
        ) : (
          <div className="login_btn" onClick={handleLogoutClick}>
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
