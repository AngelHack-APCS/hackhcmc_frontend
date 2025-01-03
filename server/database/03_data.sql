INSERT INTO DetailUserInfo (image_url) VALUES
('url1'),
('url2'),
('url3'),
('url4'),
('url5');


INSERT INTO parents (email, password, name, dob, role, DetailID)
VALUES 
('example1@gmail.com', 'randomhash1', 'Parent One', '1970-01-01', 'parent', 1),
('example2@gmail.com', 'randomhash2', 'Parent Two', '1975-02-02', 'parent', 2),
('example3@gmail.com', 'randomhash3', 'Parent Three', '1980-03-03', 'parent', 3),
('example4@gmail.com', 'randomhash4', 'Parent Four', '1985-04-04', 'parent', 4),
('example5@gmail.com', 'randomhash5', 'Parent Five', '1990-05-05', 'parent', 5);

INSERT INTO children (login_code, name, dob, sex, role, balance, DetailID)
VALUES 
('logincode1', 'Child One', '2010-01-01', 'M', 'child', 100.00, 1),
('logincode2', 'Child Two', '2011-02-02', 'F', 'child', 100.00, 2),
('logincode3', 'Child Three', '2012-03-03', 'M', 'child', 100.00, 3),
('logincode4', 'Child Four', '2013-04-04', 'F', 'child', 100.00, 4),
('logincode5', 'Child Five', '2014-05-05', 'M', 'child', 100.00, 5);

INSERT INTO managements (parent_id, child_id)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);


INSERT INTO cart_items (child_id, item_id, quantity)
VALUES 
(1, 1, 1),
(1, 2, 1),
(2, 3, 1),
(2, 4, 1),
(3, 5, 1),
(3, 6, 1),
(4, 7, 1),
(4, 8, 1),
(5, 9, 1),
(5, 10, 1);


INSERT INTO transactions (management_id, item_id, amount, direction, transaction_date, type, status, content)
VALUES 
(1, NULL, 150.00, 'plus', '2024-01-01', 'transfer', 'completed', 'Transfer to account'),
(1, NULL, 120.00, 'plus', '2024-02-01', 'reward', 'completed', 'Reward for good behavior'),
(1, 1, 180.00, 'minus', '2024-03-01', 'order', 'pending', 'Order item 1'),
(1, NULL, 130.00, 'minus', '2024-04-01', 'transfer', 'completed', 'Transfer to another account'),

(2, NULL, 110.00, 'plus', '2024-01-01', 'transfer', 'completed', 'Transfer to account'),
(2, NULL, 140.00, 'plus', '2024-02-01', 'reward', 'completed', 'Reward for good behavior'),
(2, 2, 160.00, 'minus', '2024-03-01', 'order', 'pending', 'Order item 2'),
(2, NULL, 170.00, 'minus', '2024-04-01', 'transfer', 'completed', 'Transfer to another account'),

(3, NULL, 200.00, 'plus', '2024-01-01', 'transfer', 'completed', 'Transfer to account'),
(3, NULL, 190.00, 'plus', '2024-02-01', 'reward', 'completed', 'Reward for good behavior'),
(3, 3, 180.00, 'minus', '2024-03-01', 'order', 'pending', 'Order item 3'),
(3, NULL, 170.00, 'minus', '2024-04-01', 'transfer', 'completed', 'Transfer to another account'),

(4, NULL, 160.00, 'plus', '2024-01-01', 'transfer', 'completed', 'Transfer to account'),
(4, NULL, 150.00, 'plus', '2024-02-01', 'reward', 'completed', 'Reward for good behavior'),
(4, 4, 140.00, 'minus', '2024-03-01', 'order', 'pending', 'Order item 4'),
(4, NULL, 130.00, 'minus', '2024-04-01', 'transfer', 'completed', 'Transfer to another account'),

(5, NULL, 120.00, 'plus', '2024-01-01', 'transfer', 'completed', 'Transfer to account'),
(5, NULL, 110.00, 'plus', '2024-02-01', 'reward', 'completed', 'Reward for good behavior'),
(5, 5, 100.00, 'minus', '2024-03-01', 'order', 'pending', 'Order item 5'),
(5, NULL, 140.00, 'minus', '2024-04-01', 'transfer', 'completed', 'Transfer to another account');
