CREATE TABLE IF NOT EXISTS vegetable(
  id SERIAL,
  key VARCHAR(32) UNIQUE,
  label VARCHAR(32),
  scientific_name VARCHAR(32),
  category INTEGER, 
  FOREIGN KEY (category) REFERENCES vegetable_category(id)
    ON DELETE SET NULL,
  PRIMARY KEY(id)
);

INSERT INTO vegetable (key, label, scientific_name, category)
VALUES
  ('arugula_raab', 'Arugula Raab', 'Eruca sativa', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('arugula', 'Arugula', '', (SELECT id FROM vegetable_category WHERE key='winter_vegetable') ),
  ('asparagus', 'Asparagus', 'Asparagus officinalis', (SELECT id FROM vegetable_category WHERE key='other')),
  ('beet', 'Beets', 'Beta vulgaris', (SELECT id FROM vegetable_category WHERE key='root')),
  ('bell_pepper', 'Bell Peppers', 'Capsicum annuum', (SELECT id FROM vegetable_category WHERE key='summer_vegetable')),
  ('broccoli', 'Broccoli', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('brussels_sprout', 'Brussels Sprouts', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('cabbage', 'Cabbage', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('carrot', 'Carrots', 'Daucus carota', (SELECT id FROM vegetable_category WHERE key='root')),
  ('cauliflower', 'Cauliflower', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('celery', 'Celery', 'Apium graveolens', (SELECT id FROM vegetable_category WHERE key='other')),
  ('chanterelle', 'Chanterelle', 'Cantharellus', (SELECT id FROM vegetable_category WHERE key='fungi')),
  ('corn', 'Corn', 'Zea mays', (SELECT id FROM vegetable_category WHERE key='summer_vegetable')),
  ('cucumber', 'Cucumbers', 'Cucumis sativus', (SELECT id FROM vegetable_category WHERE key='summer_vegetable')),
  ('eggplant', 'Eggplant', 'Solanum melongena', (SELECT id FROM vegetable_category WHERE key='summer_vegetable')),
  ('fava_bean', 'Fava Beans', 'Vicia faba', (SELECT id FROM vegetable_category WHERE key='legume')),
  ('garlic', 'Garlic', 'Allium sativum', (SELECT id FROM vegetable_category WHERE key='aromatic')),
  ('green_bean', 'Grean Bean', 'Phaseolus vulgaris', (SELECT id FROM vegetable_category WHERE key='legume')),
  ('kale_raab', 'Kale Raab', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('kale', 'Kale', 'Brassicas oleracea', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('king_bolete', 'King Bolete (Porcini)', 'Boletus', (SELECT id FROM vegetable_category WHERE key='fungi')),
  ('leek', 'Leek', 'Allium ampeloprasum', (SELECT id FROM vegetable_category WHERE key='aromatic')),
  ('lettuce', 'Lettuce', 'Lactuca sativa', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('melon', 'Melons', 'Cucumis melo', (SELECT id FROM vegetable_category WHERE key='other')),
  ('morel', 'Morel', 'Morchella', (SELECT id FROM vegetable_category WHERE key='fungi')),
  ('nettles', 'Nettles', 'Urtica Dioica', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('onion', 'Onion', 'Allium cepa', (SELECT id FROM vegetable_category WHERE key='aromatic')),
  ('parsley', 'Parsley', 'Petroselinum crispum', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('parsnip', 'Parsnip', 'Pastinaca sativa', (SELECT id FROM vegetable_category WHERE key='root')),
  ('pea', 'Peas', 'Pisum sativum', (SELECT id FROM vegetable_category WHERE key='legume')),
  ('pea_shoot', 'Pea Shoots', 'Pisum sativum', (SELECT id FROM vegetable_category WHERE key='legume')),
  ('potato', 'Potatoes', 'Solanum tuberosum', (SELECT id FROM vegetable_category WHERE key='root')),
  ('radish', 'Radish', 'Raphanus raphanistrum', (SELECT id FROM vegetable_category WHERE key='root')),
  ('sorrel', 'Sorrel', 'Rumex acetosa', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('spinach', 'Spinach', 'Spinacia oleracea', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('summer_squash', 'Summer Squash', 'Cucurbits pepo', (SELECT id FROM vegetable_category WHERE key='squash')),
  ('sweet_potato', 'Sweet Potato', 'Ipomoea batatas', (SELECT id FROM vegetable_category WHERE key='winter_vegetable')),
  ('swiss_chard', 'Swiss Chard', 'Beta vulgaris', (SELECT id FROM vegetable_category WHERE key='greens')),
  ('tomato', 'Tomatoes', 'Brassica rapa', (SELECT id FROM vegetable_category WHERE key='summer_vegetable')),
  ('turnip', 'Turnip', 'Brassica rapa', (SELECT id FROM vegetable_category WHERE key='root')),
  ('winter_squash', 'Winter Squash', 'Cucurbits', (SELECT id FROM vegetable_category WHERE key='squash'));
