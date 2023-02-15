import { getCardsList } from "./index";

describe("Pexeles", () => {
  it("should work", async () => {
    const result = await getCardsList(1, 1);
    expect(result);
  });
});
