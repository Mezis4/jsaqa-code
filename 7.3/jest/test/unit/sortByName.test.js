const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });

  test("Books names should not be sorted if identical name", () => {
    const input = [
      "Властелин Колец",
      "Властелин Колец",
      "Властелин Колец",
    ];

    const expected = [
      "Властелин Колец",
      "Властелин Колец",
      "Властелин Колец",
    ];

    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });

  test("Books names should not be sorted if one book", () => {
    const input = [
      "",
      "Властелин Колец"
    ];

    const expected = [
      "",
      "Властелин Колец"
    ];

    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });

  test("Sorting throws exception without params", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });
});
