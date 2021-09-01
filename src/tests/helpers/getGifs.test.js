import { getGifs } from "../../helpers/getGifs";

describe("Test in getGifs", () => {
  test("should bring 10 elements", async () => {
    const gifs = await getGifs("Rick and Morty");

    expect(gifs.length).toBe(10);
  });

  test("should bring an empty array", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
