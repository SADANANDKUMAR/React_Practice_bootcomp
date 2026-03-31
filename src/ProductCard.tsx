import React, { useState } from 'react';

const ProductCard = ({products}) => {
    const [filter, setFilter] = useState('All');

    // 1. Filter the products based on the button clicked
    const filteredProducts =
        filter === 'All'
            ? products
            : products.filter((p) => p.category === filter);

    return (
        <>
            <div>
                <h1>2. Problem Statement: Product Card</h1>

                <div className='filter-buttons'>
                    <button
                        className={filter === 'All' ? 'active' : ''}
                        onClick={() => setFilter('All')}
                    >
                        Show All
                    </button>

                    <button
                        className={filter === 'Electronics' ? 'active' : ''}
                        onClick={() => setFilter('Electronics')}
                    >
                        Show Electronics
                    </button>

                    <button
                        className={filter === 'Clothing' ? 'active' : ''}
                        onClick={() => setFilter('Clothing')}
                    >
                        Show Clothing
                    </button>
                </div>
            </div>

            {/* 3. Map over the filtered list */}
            {filteredProducts.map((productitems) => (
                <div className='cards' key={productitems.id}>
                    <ul>
                        <li>Name: {productitems.name}</li>
                        <li>Price: {productitems.price}</li>
                        <li>Category: {productitems.category}</li>
                        <li>
                            {productitems.inStock
                                ? '✅ In Stock'
                                : '❌ Out of Stock'}
                        </li>
                    </ul>
                </div>
            ))}
        </>
    );
};

export default ProductCard;
