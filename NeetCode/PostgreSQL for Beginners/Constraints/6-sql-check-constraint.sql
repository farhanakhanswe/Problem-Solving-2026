CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price INTEGER CHECK (price >= 0),
    status TEXT CHECK (status IN ('available', 'out of stock'))
);
