import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../../components/Category/Category';
import Slider from '../../components/Slider/Slider';
import {
  fetchCategories,
  fetchProductsByCategory,
} from '../../store/categorySlice';
import './HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { catProductAll: productsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
  }, []);

  return (
    <div className='home-page'>
      <Slider />
      <Category categories={categories} status={categoryStatus} />
    </div>
  );
};

export default HomePage;
