CREATE TABLE Companies(
  company VARCHAR(25) NOT NULL PRIMARY KEY,
  city VARCHAR(25),
  state VARCHAR(25),
  position VARCHAR(25),
  ordering INT(2),
  years DOUBLE(2, 1)
);


INSERT INTO Companies (company, city, state, position, ordering, years) VALUES ("Bellhapp", "Seattle", "Washington", "Front-End Dev", 2, 0.5);
INSERT INTO Companies (company, city, state, position, ordering, years) VALUES ("SightLine Applications", "Portland", "Oregon", "Software Engineer", 1, 0.2);
INSERT INTO Companies (company, city, state, position, ordering, years) VALUES ("NetSuite", "Austin", "Texas", "Web Dev", 3, 0.0);
