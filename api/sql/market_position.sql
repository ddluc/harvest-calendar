
CREATE TYPE MARKET_STATUS AS ENUM ('none', 'early', 'peak', 'late', 'storage', 'off');

CREATE TABLE IF NOT EXISTS market_position (
  id SERIAL,
  vegetable VARCHAR(32),
  month CHAR(3),
  segment INTEGER,
  value NUMERIC (6, 2),
  unit VARCHAR(16),
  status MARKET_STATUS,
  PRIMARY KEY (id),
  FOREIGN KEY (vegetable) REFERENCES vegetable(key)
    ON DELETE CASCADE,
  FOREIGN KEY (month) REFERENCES month(key)
      ON DELETE CASCADE
);
