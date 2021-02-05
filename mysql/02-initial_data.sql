USE steplix;

DELETE FROM rates;
DELETE FROM currencies;

INSERT INTO currencies(description, symbol) VALUES ('bitcoin', 'BTC');
INSERT INTO currencies(description, symbol) VALUES ('etherum', 'ETH');
INSERT INTO currencies(description, symbol) VALUES ('cardano', 'ADA');

INSERT INTO rates(id_currency, value, created_at)
    SELECT id, 11924.231233, '2020-09-01 16:23:02' FROM currencies WHERE description = 'bitcoin';

INSERT INTO rates(id_currency, value, created_at)
    SELECT id, 308.313553, '2020-09-01 16:13:51' FROM currencies WHERE description = 'etherum';

INSERT INTO rates(id_currency, value, created_at)
    SELECT id, 0.0990881, '2020-09-01 16:23:40' FROM currencies WHERE description = 'cardano';        