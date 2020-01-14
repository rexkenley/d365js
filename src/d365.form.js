/** @module "d365.form.js" */

function fr(value) {
  return Object.keys(this).find(k => this[k] === value);
}

let values = {
    Undefined: 0,
    Create: 1,
    Update: 2,
    "Read Only": 3,
    Disabled: 4,
    "Bulk Edit": 6
  },
  FormTypes = fr.bind(values);
Object.assign(FormTypes, values);

/**
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui/getformtype}
 * @exports "d365.form.js"
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
export default FormTypes;
