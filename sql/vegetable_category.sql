CREATE TABLE IF NOT EXISTS vegetable_category(
  id SERIAL,
  key VARCHAR(32) UNIQUE,
  label VARCHAR(32),
  PRIMARY KEY(id)
);

INSERT INTO vegetable_category (key, label)
VALUES
('winter_vegetable', 'Winter Vegetable'),
('summer_vegetable', 'Summer Vegetable'), 
('greens', 'Greens'),
('squash', 'Squash'), 
('root', 'Root'), 
('fungi', 'Fungi'), 
('aromatic', 'Aromatic'), 
('legume', 'Legume'), 
('other', 'Other'); 
