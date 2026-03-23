const UserCard = ({users}) => {
    // {name: "John Doe", age: 25, email: "john@example.com", status: true} console data here
    return (
        <>
            <div>
                <h1>1. Problem Statement: User Profile Card</h1>
            </div>

            {users.map((useritems) => (
                <>
                    <div className='cards'>
                        <ul key={useritems.id}>
                            <li>Name: {useritems.name}</li>
                            <li>Email: {useritems.email}</li>
                            <li>Age: {useritems.age}</li>
                            <li>
                                Status:{' '}
                                <span>
                                    {' '}
                                    {useritems.isActive === true
                                        ? '🟢Active'
                                        : '🔴 Inactive'}{' '}
                                </span>
                            </li>
                        </ul>
                    </div>
                </>
            ))}
        </>
    );
};

export default UserCard;
