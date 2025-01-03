DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS managements;
DROP TABLE IF EXISTS DetailUserInfo;
DROP TABLE IF EXISTS children;
DROP TABLE IF EXISTS parents;

CREATE TABLE DetailUserInfo (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(2048)   
);

CREATE TABLE parents (
    parent_id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    dob DATE,
    role VARCHAR(255),

    DetailID INT, 
    FOREIGN KEY (DetailID) REFERENCES DetailUserInfo(id)
);

CREATE TABLE children (
    child_id SERIAL PRIMARY KEY,
    login_code VARCHAR(255),
    name VARCHAR(255),
    dob DATE,
    sex VARCHAR(1),
    role VARCHAR(255),
    balance DECIMAL(10, 2),
    DetailID INT,
    FOREIGN KEY (DetailID) REFERENCES DetailUserInfo(id)
);

CREATE TABLE managements (
    management_id SERIAL PRIMARY KEY,
    parent_id INT NOT NULL,
    child_id INT NOT NULL,
    FOREIGN KEY (parent_id) REFERENCES parents(parent_id),
    FOREIGN KEY (child_id) REFERENCES children(child_id)
);

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    management_id INT NOT NULL,
    type VARCHAR(255),
    name VARCHAR(255),
    description TEXT,
    reward DECIMAL(10, 2),
    due_date DATE,
    status VARCHAR(255),
    FOREIGN KEY (management_id) REFERENCES managements(management_id)
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    image_url VARCHAR(255),
    stock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE cart_items (
    cart_item_id SERIAL PRIMARY KEY,
    child_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (child_id) REFERENCES children(child_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    management_id INT NOT NULL,
    item_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date DATE,
    status VARCHAR(255),
    FOREIGN KEY (management_id) REFERENCES managements(management_id),
    FOREIGN KEY (item_id) REFERENCES items(item_id)
);

CREATE TABLE transactions (
    transaction_id SERIAL PRIMARY KEY,
    management_id INT NOT NULL,
    item_id INT,
    amount DECIMAL(10, 2),
    direction VARCHAR(255),
    transaction_date DATE,
    type VARCHAR(255),
    status VARCHAR(255),
    content TEXT,
    FOREIGN KEY (management_id) REFERENCES managements(management_id)
);
