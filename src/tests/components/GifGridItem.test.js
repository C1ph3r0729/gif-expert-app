import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("<GifGridItem />", () => {
  const title = "Rick and Morty";
  const url = "https://localhost/rickandmorty.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should display the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a paragraph with the title", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);
  });

  test("should have the image equal to the url and alt of the props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("should have the class animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
    // expect(div.prop("className")).toContain("animate__fadeIn");
  });
});
