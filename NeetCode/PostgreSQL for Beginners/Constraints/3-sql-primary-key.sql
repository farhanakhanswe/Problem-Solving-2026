CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT
);

CREATE TABLE videos (
    id INTEGER PRIMARY KEY,
    title TEXT,
    owner_id INTEGER
);
