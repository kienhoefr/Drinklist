--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------
DROP TRIGGER beverage_txn_trg_on_insert;
CREATE TRIGGER beverage_txn_trg_on_insert
  AFTER INSERT
  ON beverage_transactions
  FOR EACH ROW
  WHEN (SELECT value
        FROM flags
        WHERE key = 'noTriggers') = 0
BEGIN
  -- Create cash transaction
  INSERT INTO cash_transactions (user_from, amount, user_to, reason, timestamp, beverage_txn)
  VALUES (new.user, new.money, 0, 'BTXN #' || new.id, new.timestamp, new.id);
  UPDATE beverage_transactions SET cash_txn = LAST_INSERT_ROWID() WHERE id = new.id;

  -- Adjust stock
  UPDATE beverages SET stock = stock - new.units WHERE id = new.beverage;
END;

DROP TRIGGER beverage_txn_trg_on_delete;
CREATE TRIGGER beverage_txn_trg_on_delete
  AFTER DELETE
  ON beverage_transactions
  FOR EACH ROW
  WHEN (SELECT value
        FROM flags
        WHERE key = 'noTriggers') = 0
BEGIN
  -- Delete cash transaction
  DELETE FROM cash_transactions WHERE id = old.cash_txn;

  -- Adjust stock
  UPDATE beverages SET stock = stock + old.units WHERE id = old.beverage;
END;
--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------
-- nothing to do here
