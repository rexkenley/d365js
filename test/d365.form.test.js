import FormTypes from "./../src/d365.form";

describe("FormTypes", () => {
  test("FormTypes Enumeration", () => {
    expect(FormTypes.Undefined).toEqual(0);
    expect(FormTypes.Create).toEqual(1);
    expect(FormTypes.Update).toEqual(2);
    expect(FormTypes["Read Only"]).toEqual(3);
    expect(FormTypes.Disabled).toEqual(4);
    expect(FormTypes["Bulk Edit"]).toEqual(6);
    expect(FormTypes.Error).toEqual(undefined);
  });

  test("FormTypes Call", () => {
    expect(FormTypes(0)).toEqual("Undefined");
    expect(FormTypes(1)).toEqual("Create");
    expect(FormTypes(2)).toEqual("Update");
    expect(FormTypes(3)).toEqual("Read Only");
    expect(FormTypes(4)).toEqual("Disabled");
    expect(FormTypes(6)).toEqual("Bulk Edit");
    expect(FormTypes(5)).toEqual(undefined);
  });
});
