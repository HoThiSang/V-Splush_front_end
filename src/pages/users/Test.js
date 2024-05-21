import React, { useState, useEffect } from 'react';
import instance from '../../services/configAxios';

function Test(){
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const { data } = await instance.get('/categories');
            setCategories(data.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
        };
    fetchCategories();
  }, []);

  return (
    <div>
        <ul>
         {categories.map((category) => (
          <li key={category.id}>{category.category_name}</li>
        ))}
      </ul> 
    </div>
  )

}

export default Test