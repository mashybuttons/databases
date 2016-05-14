-- CREATE DATABASE chat;
-- CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  room_id int (10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (room_id),
  UNIQUE KEY (name)
);

CREATE TABLE users (
  user_id int (10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY (name)
);

CREATE TABLE messages (
  /* Describe your table here.*/

  message_id INT (10) NOT NULL AUTO_INCREMENT,
  message VARCHAR(140) NOT NULL,
  user_id INT(10),
  room_id INT(10),
  PRIMARY KEY (message_id),
  constraint user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
  constraint room_id FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 