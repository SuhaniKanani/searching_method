import React, { useState } from "react";

const Datatable = () => {
    const initialData = [
        { id: 1, company: "Lenovo", name: "Laptop", category: "Electronics", price: 90000, status: "Paid" },
        { id: 2, company: "Zudio", name: "Shirt", category: "Clothing", price: 390, status: "Unpaid" },
        { id: 3, company: "samsung", name: "Phone", category: "Electronics", price: 69999, status: "Paid" },
        { id: 4, company: "classmate", name: "Book", category: "Stationery", price: 75, status: "Unpaid" },
        { id: 5, company: "Trends", name: "Jeans", category: "Clothing", price: 4150, status: "Paid" },
        { id: 6, company: "Samsung", name: "Laptop", category: "Electronics", price: 80000, status: "Unpaid" },
        { id: 7, company: "Zudio", name: "Shirt", category: "Clothing", price: 1390, status: "Unpaid" },
        { id: 8, company: "Realme", name: "Phone", category: "Electronics", price: 19999, status: "Paid" },
        { id: 9, company: "Apsara", name: "Pencil", category: "Stationery", price: 75, status: "Unpaid" },
        { id: 10, company: "Zudio", name: "Jeans", category: "Clothing", price: 1450, status: "Paid" },
        { id: 11, company: "Realme", name: "Phone", category: "Electronics", price: 83588, status: "Paid" },
        { id: 12, company: "Zudio", name: "Shirt", category: "Clothing", price: 595, status: "Paid" },
        { id: 13, company: "Redmi", name: "Phone", category: "Electronics", price: 66077, status: "Paid" },
        { id: 14, company: "Trends", name: "Jeans", category: "Clothing", price: 299, status: "Paid" },
        { id: 15, company: "Classmate", name: "Book", category: "Stationery", price: 59, status: "Unpaid" },
        { id: 16, company: "Samsung", name: "Laptop", category: "Electronics", price: 86291, status: "Paid" },
        { id: 17, company: "Apple", name: "Laptop", category: "Electonics", price: 13300, status: "Unpaid" },
        { id: 18, company: "Apsara", name: "Book", category: "Stationery", price: 55, status: "Unpaid" },
        { id: 19, company: "Lenovo", name: "Keyboard", category: "Electronics", price: 1430, status: "Paid" },
        { id: 20, company: "Zudio", name: "Kurta", category: "Clothing", price: 659, status: "Unpaid" },
        { id: 21, company: "Apple", name: "Phone", category: "Electronics", price: 37286, status: "Paid" },
        { id: 22, company: "Realme", name: "Phone", category: "Electronics", price: 90103, status: "Paid" },
        { id: 23, company: "Lenovo", name: "Laptop", category: "Electronics", price: 94513, status: "Unpaid" },
        { id: 24, company: "Honda", name: "Activa", category: "Vehicle", price: 85837, status: "Paid" },
        { id: 25, company: "Realme", name: "Phone", category: "Electronics", price: 60265, status: "Unpaid" },
        { id: 26, company: "Hero", name: "Bike", category: "Vehicle", price: 16117, status: "Unpaid" },
        { id: 27, company: "Trens", name: "Jacket", category: "Clothing", price: 616, status: "Paid" },
        { id: 28, company: "Trends", name: "Jeans", category: "Clothing", price: 999, status: "Paid" },
        { id: 29, company: "Classmate", name: "Book", category: "Stationery", price: 59, status: "Paid" },
        { id: 30, company: "Dell", name: "Laptop", category: "Electronics", price: 87314, status: "Unpaid" },
        { id: 31, company: "Realme", name: "Phone", category: "Electronics", price: 34169, status: "Paid" },
        { id: 32, company: "Samsung", name: "Phone", category: "Electronics", price: 647, status: "Unpaid" },
        { id: 33, company: "Trends", name: "Pants", category: "Clothing", price: 800, status: "Unpaid" },
        { id: 34, company: "Classmate", name: "Book", category: "Stationery", price: 100, status: "Paid" },
        { id: 35, company: "Samsung", name: "Phone", category: "Electronics", price: 37704, status: "Paid" },
        { id: 36, company: "Westside", name: "Top", category: "Clothing", price: 960, status: "Unpaid" },
        { id: 37, company: "Dell", name: "Mouse", category: "Electronics", price: 350, status: "Paid" },
        { id: 38, company: "Lenovo", name: "Laptop", category: "Electronics", price: 37066, status: "Unpaid" },
        { id: 39, company: "Shine", name: "Bike", category: "Vehicle", price: 27508, status: "Paid" },
        { id: 40, company: "Zudio", name: "Shirt", category: "Clothing", price: 1350, status: "Unpaid" },
        { id: 41, company: "Samsung", name: "Laptop", category: "Electronics", price: 44781, status: "Paid" },
        { id: 42, company: "Lenovo", name: "Laptop", category: "Electronics", price: 27334, status: "Paid" },
        { id: 43, company: "Trends", name: "Jeans", category: "Clothing", price: 7163, status: "Unpaid" },
        { id: 44, company: "Tata", name: "FoueWheel", category: "Vehicle", price: 99661, status: "Unpaid" },
        { id: 45, company: "Samsung", name: "Phone", category: "Electronics", price: 63558, status: "Paid" },
        { id: 46, company: "Realme", name: "Phone", category: "Electronics", price: 43150, status: "Unpaid" },
        { id: 47, company: "Zudio", name: "Shirt", category: "Clothing", price: 800, status: "Paid" },
        { id: 48, company: "Classmate", name: "Book", category: "Stationery", price: 55, status: "Paid" },
        { id: 49, company: "Lenovo", name: "Laptop", category: "Electronics", price: 75360, status: "Unpaid" },
        { id: 50, company: "Realme", name: "Phone", category: "Electronics", price: 36547, status: "Unpaid" },
        { id: 51, company: "HP", name: "Laptop", category: "Electronics", price: 89547, status: "Unpaid" },
        { id: 52, company: "Tata", name: "Bus", category: "Electronics", price: 500000, status: "paid" },
        { id: 53, company: "Hero", name: "Activa", category: "Vehicle", price: 120225, status: "Unpaid" },
        { id: 54, company: "Westside", name: "Phone", category: "Electronics", price: 42708, status: "Unpaid" },
        { id: 55, company: "Apple", name: "Ipad", category: "Electronics", price: 79741, status: "Unpaid" },
        { id: 56, company: "Canon", name: "Camera", category: "Electronics", price: 65654, status: "Paid" },
        { id: 57, company: "Classmate", name: "Notebook", category: "Stationery", price: 100, status: "Paid" },
        { id: 58, company: "Lenovo", name: "Laptop", category: "Electronics", price: 110659, status: "Paid" },
        { id: 59, company: "Apple", name: "Phone", category: "Electronics", price: 78536, status: "Unpaid" },
        { id: 60, company: "Zudio", name: "Jeans", category: "Clothing", price: 3151, status: "Paid" },
        { id: 61, company: "Realme", name: "Phone", category: "Electronics", price: 68927, status: "Paid" },
        { id: 62, company: "Dell", name: "Laptop", category: "Electronics", price: 95986, status: "Unpaid" },
        { id: 63, company: "Samsung", name: "TV", category: "Electronics", price: 74584, status: "Unpaid" },
        { id: 64, company: "Lenovo", name: "Laptop", category: "Electronics", price: 86425, status: "Paid" },
        { id: 65, company: "Zudio", name: "Shirt", category: "Clothing", price: 850, status: "Unpaid" },
        { id: 66, company: "Trends", name: "Kurta", category: "Clothing", price: 1740, status: "Paid" },
        { id: 67, company: "Apsara", name: "Book", category: "Stationery", price: 75, status: "Paid" },
        { id: 68, company: "HP", name: "Mouse", category: "Electronics", price: 350, status: "Paid" },
        { id: 69, company: "Samsung", name: "Monitor", category: "Electronics", price: 44000, status: "Unpaid" },
        { id: 70, company: "Sony", name: "Speaker", category: "Electronics", price: 12300, status: "Paid" },
        { id: 71, company: "Zudio", name: "Shirt", category: "Clothing", price: 750, status: "Unpaid" },
        { id: 72, company: "Realme", name: "Watch", category: "Electronics", price: 3099, status: "Unpaid" },
        { id: 73, company: "Trends", name: "T-Shirt", category: "Clothing", price: 999, status: "Paid" },
        { id: 74, company: "Classmate", name: "Notebook", category: "Stationery", price: 55, status: "Paid" },
        { id: 75, company: "Apple", name: "Laptop", category: "Electronics", price: 145000, status: "Paid" },
        { id: 76, company: "Redmi", name: "Phone", category: "Electronics", price: 22000, status: "Unpaid" },
        { id: 77, company: "Samsung", name: "Fridge", category: "Electronics", price: 54320, status: "Paid" },
        { id: 78, company: "Tata", name: "Car", category: "Vehicle", price: 520000, status: "Unpaid" },
        { id: 79, company: "HP", name: "Printer", category: "Electronics", price: 8800, status: "Paid" },
        { id: 80, company: "Zudio", name: "Dress", category: "Clothing", price: 1990, status: "Unpaid" },
        { id: 81, company: "Classmate", name: "Sketchbook", category: "Stationery", price: 180, status: "Paid" },
        { id: 82, company: "Dell", name: "Keyboard", category: "Electronics", price: 1850, status: "Unpaid" },
        { id: 83, company: "Hero", name: "Bike", category: "Vehicle", price: 78560, status: "Paid" },
        { id: 84, company: "Honda", name: "Scooty", category: "Vehicle", price: 62500, status: "Unpaid" },
        { id: 85, company: "Sony", name: "Camera", category: "Electronics", price: 47999, status: "Paid" },
        { id: 86, company: "Lenovo", name: "Tablet", category: "Electronics", price: 34000, status: "Unpaid" },
        { id: 87, company: "Trends", name: "Pants", category: "Clothing", price: 1890, status: "Paid" },
        { id: 88, company: "Zudio", name: "Jacket", category: "Clothing", price: 2499, status: "Unpaid" },
        { id: 89, company: "Samsung", name: "Smartwatch", category: "Electronics", price: 12999, status: "Paid" },
        { id: 90, company: "Apple", name: "Ipad", category: "Electronics", price: 57999, status: "Paid" },
        { id: 91, company: "Apsara", name: "Pencil", category: "Stationery", price: 10, status: "Paid" },
        { id: 92, company: "Classmate", name: "Notebook", category: "Stationery", price: 95, status: "Unpaid" },
        { id: 93, company: "Redmi", name: "Charger", category: "Electronics", price: 650, status: "Unpaid" },
        { id: 94, company: "Trends", name: "Kurta", category: "Clothing", price: 2050, status: "Paid" },
        { id: 95, company: "Zudio", name: "Jeans", category: "Clothing", price: 1350, status: "Unpaid" },
        { id: 96, company: "Dell", name: "Laptop", category: "Electronics", price: 67000, status: "Paid" },
        { id: 97, company: "Lenovo", name: "Monitor", category: "Electronics", price: 8900, status: "Unpaid" },
        { id: 98, company: "Sony", name: "Speaker", category: "Electronics", price: 6200, status: "Paid" },
        { id: 99, company: "Zudio", name: "Shirt", category: "Clothing", price: 999, status: "Unpaid" },
        { id: 100, company: "Classmate", name: "Book", category: "Stationery", price: 60, status: "Paid" },
    ];

    const [data, setData] = useState(initialData);
    const [text, setText] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [order, setOrder] = useState("asc");

    const handleStatusChange = (id) => {
        const current = data.find(item => item.id === id);
        const currentStatus = current.status;

        const confirmChange = window.confirm(
            `Current status is "${currentStatus}". Do you want to change it to "${currentStatus === 'Paid' ? 'Unpaid' : 'Paid'}"?`
        );

        if (confirmChange) {
            const updatedData = data.map((item) =>
                item.id === id
                    ? { ...item, status: currentStatus === "Paid" ? "Unpaid" : "Paid" }
                    : item
            );
            setData(updatedData);
        }
    };

    const filteredProducts = data.filter((product) => {
        const searchItem = text.toLowerCase();
        return (
            product.name.toLowerCase().includes(searchItem) ||
            product.category.toLowerCase().includes(searchItem) ||
            product.company.toLowerCase().includes(searchItem)
        );
    })
        .filter((product) =>
            categoryFilter === "all" ? true : product.category === categoryFilter
        )
        .sort((a, b) =>
            order === "asc" ? a.price - b.price : b.price - a.price
        );

    return (
        <div>
            <div
                style={{
                    position: "sticky",
                    top: "0",
                    zIndex: 1000,
                    background: "#fff", 
                    padding: "10px 0",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "20px",
                        alignItems: "center",
                        padding: "0 10px",
                    }}
                >
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Search Here"
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            width: "200px",
                        }}
                    />

                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    >
                        <option value="all">All</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Stationery">Stationery</option>
                        <option value="Vehicle">Vehicle</option>
                    </select>

                    <select
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        style={{
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                    >
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>


            <table
                border="1"
                cellPadding="10"
                style={{ marginTop: "20px", borderCollapse: "collapse", width: "100%" }}
            >
                <thead style={{ background: "#f2f2f2"}}>
                    <tr>
                        <th>ID</th>
                        <th>Company</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price (₹)</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.company}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => handleStatusChange(item.id)}>
                                        {item.status}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No Data Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Datatable;
