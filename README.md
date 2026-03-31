
## 🧩 Question: User Profile Card

Build a React component called `UserCard` that displays a user's profile information.

### Requirements:

1. Create a `UserCard` component that accepts the following  **props** :
   * `name` (string) — the user's full name
   * `age` (number) — the user's age
   * `email` (string) — the user's email
   * `isActive` (boolean) — whether the user is active or not
2. Display all the props inside a styled card.
3. If `isActive` is `true`, show a green label  **"Active"** , otherwise show a red label  **"Inactive"** .
4. Use the `UserCard` component **at least 2 times** in your `App` component with different data.

---

### 🖼️ Expected Output (roughly):

```
┌──────────────────────────┐
│  Name:  John Doe         │
│  Age:   25               │
│  Email: john@example.com │
│  Status: 🟢 Active       │
└──────────────────────────┘

┌──────────────────────────┐
│  Name:  Jane Smith       │
│  Age:   30               │
│  Email: jane@example.com │
│  Status: 🔴 Inactive     │
└──────────────────────────┘
```



## 🧩 Question: Product List with Filter

Build a product listing page with a filter button.

### Requirements:

1. Create a `ProductCard` component that accepts these  **props** :
   * `name` (string) — product name
   * `price` (number) — product price
   * `category` (string) — either `"Electronics"` or `"Clothing"`
   * `inStock` (boolean) — whether product is available
2. Display all props in the card. If `inStock` is `false`, show **"Out of Stock"** in red.
3. In `App`, create an **array of at least 5 products** (mix of both categories).
4. Add **two buttons** — `"Show Electronics"` and `"Show Clothing"` — that **filter** and show only that category's products.
5. Add a **`"Show All"`** button to reset the filter.

---

### 🖼️ Expected Output (roughly):

```
[ Show All ]  [ Show Electronics ]  [ Show Clothing ]

┌─────────────────────┐   ┌─────────────────────┐
│ iPhone 15           │   │ Nike Shoes          │
│ Price: ₹79,000      │   │ Price: ₹4,500       │
│ Category: Electronics│  │ Category: Clothing  │
│ ✅ In Stock         │   │ ❌ Out of Stock      │
└─────────────────────┘   └─────────────────────┘
```

---

### 💡 Hint:

This question uses **`useState`** to track which filter/category is selected — you've read about it, now use it! 🙂

Give it a shot and paste your code when ready! 💪


## 🧩 Question: Counter App

Build a simple counter app using  **`useState`** .

### Requirements:

1. Display a **count number** on screen, starting at `0`.
2. Add  **3 buttons** :
   * `"Increment"` → increases count by 1
   * `"Decrement"` → decreases count by 1
   * `"Reset"` → sets count back to `0`
3. **Extra challenge:**
   * If count goes  **below 0** , show the number in **red**
   * If count is  **above 0** , show in **green**
   * If count is  **0** , show in **black**
4. Add a **step input** — user can type a number (e.g. 5) and increment/decrement by that step instead of 1.

---

### 🖼️ Expected Output:

```
        [ - ]  25  [ + ]  
           [ Reset ]

    Step: [  5  ]

    (number is green since > 0)
```

---

### 💡 Concepts used:

* `useState` for count and step
* Conditional styling based on state
* Controlled input (`value` + `onChange`)
