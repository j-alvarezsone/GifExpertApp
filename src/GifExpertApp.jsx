import React, { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <br />
      <AddCategory setCategories={setCategories} />
      <br/>
      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
