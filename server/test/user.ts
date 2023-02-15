import { getCardsList } from "src/dao";
import test from "ava";

test("check if our pexeles work", async (t) => {
  await getCardsList(1, 1);
  t.pass();
});
