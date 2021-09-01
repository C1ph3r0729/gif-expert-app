import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("<AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the text box", () => {
    const input = wrapper.find("input");
    const value = "Rick and Morty";
    input.simulate("change", { target: { value } });
  });

  test("should not post the information", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call the setCategories and clear the text box", () => {
    const input = wrapper.find("input");

    input.simulate("change", { target: { value: "Rick and Morty" } });
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    // expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).toBe("");
  });
});
