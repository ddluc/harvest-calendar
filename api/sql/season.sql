CREATE TABLE IF NOT EXISTS season (
  id INTEGER NOT NULL,
  label VARCHAR (32),
  PRIMARY KEY (id)
);

INSERT INTO season (label, order)
VALUES
  (1, 'Spring'),
  (2, 'Summer'),
  (3, 'Fall'),
  (4, 'Winter');
