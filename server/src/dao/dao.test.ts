import { getCardsList, searchCards } from "./index";

describe("Pexeles", () => {
  it("should have list", async () => {
    const result = await getCardsList(1, 1);
    expect(result).toHaveProperty("photos");
    expect(result).toHaveProperty("page");
    expect(result).toHaveProperty("per_page");
  });
  it("should work search", async () => {
    const result = await searchCards("lisa", 1, 1);
    expect(result).toHaveProperty("photos");
    expect(result).toHaveProperty("page");
    expect(result).toHaveProperty("per_page");
  });
});
