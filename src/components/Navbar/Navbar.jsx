import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../store/categorySlice';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='container'>
          <div className='navbar-top flex flex-between'>
            <Link className='navbar-brand' to='/'>
              <span className='text-regal-gold'>AY</span>
              <span className='text-gold'>Store</span>
            </Link>
            <form action='' className='navbar-search flex'>
              <input type='text' placeholder='Search here ...' />
              <button className='navbar-search-btn' type='submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>
            <div className='navbar-btns'>
              <Link className='add-to-cart-btn flex' to='/cart'>
                <span className='btn-ico'>
                  <i className='fas fa-shopping-cart'></i>
                </span>
                <div className='btn-txt fw-5'>
                  cart <span className='cart-count-value'>0</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='navbar-bottom bg-regal-blue'>
          <div className='container flex flex-between'>
            <ul
              className={`nav-links flex ${
                isSidebarOpen ? 'show-nav-links' : ''
              }`}>
              <button
                className='navbar-hide-btn text-white'
                type='button'
                onClick={() => setIsSidebarOpen(false)}>
                <i className='fas fa-times'></i>
              </button>

              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    className='nav-link text-white'
                    to={`/category/${category.id}`}
                    onClick={() => setIsSidebarOpen(false)}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className='navbar-show-btn text-gold'
              type='button'
              onClick={() => setIsSidebarOpen(true)}>
              <i className='fas fa-bars'></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
