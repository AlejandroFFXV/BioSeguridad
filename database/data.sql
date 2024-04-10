CREATE TABLE faces (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(155) NOT NULL,
    promediox FLOAT NOT NULL,
    promedioy FLOAT NOT NULL,
    promedioz FLOAT NOT NULL,
    coords VARCHAR(1500) NOT NULL,
    url_img VARCHAR(255) NOT NULL
);

CREATE TABLE support (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(155) NOT NULL,
    email VARCHAR(120) NOT NULL
);

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(155) NOT NULL,
    url_img VARCHAR(255) NOT NULL
);