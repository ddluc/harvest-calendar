CREATE TABLE IF NOT EXISTS month (
  id INTEGER NOT NULL,
  label VARCHAR(32),
  key CHAR(3) UNIQUE,
  season INTEGER [],
  PRIMARY KEY (id)
);

INSERT INTO month (id, label, key, season)
VALUES
  (1, 'January', 'JAN', ARRAY[4]),
  (2, 'February', 'FEB', ARRAY[4]),
  (3, 'March', 'MAR', ARRAY[4,1]),
  (4, 'April', 'APR', ARRAY[1]),
  (5, 'May', 'MAY', ARRAY[1]),
  (6, 'June', 'JUN', ARRAY[1, 2]),
  (7, 'July', 'JUL', ARRAY[2]),
  (8, 'August', 'AUG', ARRAY[2]),
  (9, 'September', 'SEP', ARRAY[2,3]),
  (10, 'October', 'OCT', ARRAY[3]),
  (11, 'November', 'NOV', ARRAY[3]),
  (12, 'December','DEC', ARRAY[3,4]);
