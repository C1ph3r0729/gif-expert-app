import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("useFetchGifs custom hook", () => {
  test("should return to the initial state", async () => {
    // const category = "Rick and Morty";
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Rick and Morty")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an array of gifs", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Rick and Morty")
    );
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
