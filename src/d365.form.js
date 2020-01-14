/** @module "d365.form.js" */

function fr(value) {
  return Object.keys(this).find(k => this[k] === value);
}

const values = {
  Undefined: 0,
  Create: 1,
  Update: 2,
  "Read Only": 3,
  Disabled: 4,
  "Bulk Edit": 6
};

/**
 * An function that contains the form type values.
 *
 * e.g. FormTypes(1) => Create, FormTypes.Create => 1
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype}
 * @function FormTypes
 * @param {number} value - the numerical value of form type
 * @return {string} - the name of form type
 * @property {number} Undefined - 0
 * @property {number} Create - 1
 * @property {number} Update - 2
 * @property {number} [Read Only] - 3 *Not really optional but only way to keep property name together
 * @property {number} Disabled - 4
 * @property {number} [Bulk Edit] - 6 *Not really optional but only way to keep property name together
 */
let FormTypes = fr.bind(values);
Object.assign(FormTypes, values);

export { FormTypes };

/**
 * A function that will set the status of controls based on an attribute list.
 *
 * e.g. setDisabled(formContext, true, "name", "telephone1", "websiteurl") => Account form Account Name, Phone, Website will be disabled.
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdisabled}
 * @function setDisabled
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {boolean} value - value to set disabled
 * @param {Array.<string>} attributes - list of attributes to set
 * @return void
 */
export function setDisabled(formContext, value, ...attributes) {
  attributes.forEach(a => formContext.getControl(a).setDisabled(value));
}
