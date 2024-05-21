import React, { useState, useEffect } from 'react';
import instance from '../../services/configAxios';

function Test() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await instance.get('/categories');
                setCategories(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading categories: {error.message}</div>;

    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.category_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test;