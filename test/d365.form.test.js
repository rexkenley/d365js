import { FormTypes, SaveMode } from "./../src/d365.form";

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

describe("SaveMode", () => {
  test("SaveMode Enumeration", () => {
    expect(SaveMode.Save).toEqual(1);
    expect(SaveMode["Save and Close"]).toEqual(2);
    expect(SaveMode.Deactivate).toEqual(5);
    expect(SaveMode.Reactivate).toEqual(6);
    expect(SaveMode.Send).toEqual(7);
    expect(SaveMode.Disqualify).toEqual(15);
    expect(SaveMode.Qualify).toEqual(16);
    expect(SaveMode.Assign).toEqual(47);
    expect(SaveMode["Save as Completed"]).toEqual(58);
    expect(SaveMode["Save and New"]).toEqual(59);
    expect(SaveMode["Auto Save"]).toEqual(70);
    expect(SaveMode.Error).toEqual(undefined);
  });

  test("SaveMode Call", () => {
    expect(SaveMode(1)).toEqual("Save");
    expect(SaveMode(2)).toEqual("Save and Close");
    expect(SaveMode(5)).toEqual("Deactivate");
    expect(SaveMode(6)).toEqual("Reactivate");
    expect(SaveMode(7)).toEqual("Send");
    expect(SaveMode(15)).toEqual("Disqualify");
    expect(SaveMode(16)).toEqual("Qualify");
    expect(SaveMode(47)).toEqual("Assign");
    expect(SaveMode(58)).toEqual("Save as Completed");
    expect(SaveMode(59)).toEqual("Save and New");
    expect(SaveMode(70)).toEqual("Auto Save");
    expect(FormTypes(5)).toEqual(undefined);
  });
});
