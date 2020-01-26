CREATE TABLE IF NOT EXISTS vegetable(
  id SERIAL,
  key VARCHAR(32) UNIQUE,
  label VARCHAR(32),
  PRIMARY KEY(id)
);

INSERT INTO vegetable (key, label)
VALUES
  ('arugula_raab', 'Arugula Raab'),
  ('arugula', 'Arugula'),
  ('asparagus', 'Asparagus'),
  ('beet', 'Beets'),
  ('bell_pepper', 'Bell Peppers'),
  ('broccoli', 'Broccoli'),
  ('brussels_sprout', 'Brussels Sprouts'),
  ('cabbage', 'Cabbage'),
  ('carrot', 'Carrots'),
  ('cauliflower', 'Cauliflower'),
  ('celery', 'Celery'),
  ('chanterelle', 'Chanterelle'),
  ('corn', 'Corn'),
  ('cucumber', 'Cucumbers'),
  ('eggplant', 'Eggplant'),
  ('fava_bean', 'Fava Beans'),
  ('garlic', 'Garlic'),
  ('green_bean', 'Grean Bean'),
  ('kale_raab', 'Kale Raab'),
  ('kale', 'Kale'),
  ('king_bolete', 'King Bolete'),
  ('leek', 'Leek'),
  ('lettuce', 'Lettuce'),
  ('melon', 'Melons'),
  ('morel', 'Morel'),
  ('nettles', 'Nettles'),
  ('onion', 'Onion'),
  ('parsley', 'Parsley'),
  ('parsnip', 'Parsnip'),
  ('pea', 'Peas'),
  ('pea_shoot', 'Pea Shoots'),
  ('potato', 'Potatoes'),
  ('radish', 'Radish'),
  ('sorrel', 'Sorrel'),
  ('spinach', 'Spinach'),
  ('summer_squash', 'Summer Squash'),
  ('sweet_potato', 'Sweet Potato'),
  ('swiss_chard', 'Swiss Chard'),
  ('tomato', 'Tomatoes'),
  ('turnip', 'Turnip'),
  ('winter_squash', 'Winter Squash');
