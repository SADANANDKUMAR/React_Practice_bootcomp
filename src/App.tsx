import './App.css';

import ProductCard from './ProductCard';
import UserCard from './UserCard';

interface usersType {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}

interface productType {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}
function App() {
    // 1. Problem Statement: User Profile Card
    const users: usersType = [
        {
            id: 1,
            name: 'John Doe',
            age: 25,
            email: 'john@example.com',
            isActive: true,
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 30,
            email: 'jane@example.com',
            isActive: false,
        },
        {
            id: 3,
            name: 'Bob Ray',
            age: 22,
            email: 'bob@example.com',
            isActive: true,
        },
    ];

    // 2. Problem Statement: Product Card

    const products: productType = [
        {
            id: 1,
            name: 'Laptop',
            price: 999.99,
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 2,
            name: 'Headphones',
            price: 199.99,
            category: 'Clothing',
            inStock: false,
        },
        {
            id: 3,
            name: 'Coffee Maker',
            price: 49.99,
            category: 'Home Appliances',
            inStock: true,
        },
    ];

    return (
        <>
            {/* <UserCard users={users} /> */}
            <ProductCard products={products} />
        </>
    );
}

export default App;
