/** @module "d365.form.js" */

function fr(value) {
  return Object.keys(this).find(k => this[k] === value);
}

/** @type {{}} */
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
 * A function that will set the status of controls based on an attribute or iframe list.
 *
 * e.g. setDisabled(formContext, true, "name", "telephone1", "websiteurl") => Account form Account Name, Phone, Website will be disabled.
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setdisabled}
 * @function setDisabled
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {boolean} value - value to set disabled
 * @param {Array.<string>} attributes - list of attributes or iframes to set
 * @return void
 */
export function setDisabled(formContext, value, ...attributes) {
  attributes.forEach(a => {
    const current = formContext.getControl(a);

    if (["standard", "iframe"].some(type => type === current.getControlType()))
      current.setDisabled(value);
  });
}

/**
 * A function that will set the visibility of controls based on an attribute/iframe/tabs list.
 *
 * e.g. setVisible(formContext, false, "name", "telephone1", "websiteurl") => Account form Account Name, Phone, Website will be invisible.
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/controls/setvisible}
 * @function setVisible
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {boolean} value - value to set visible
 * @param {Array.<string>} attributes - list of attributes/iframes/tabs to set
 * @return void
 */
export function setVisible(formContext, value, ...attributes) {
  attributes.forEach(a => {
    let current = formContext.ui.tabs.get(arg); //tab

    if (current) {
      current.setVisible(value);
      return;
    }

    current = formContext.getControl(a); //attributes or iframes

    if (["standard", "iframe"].some(type => type === current.getControlType()))
      current.setVisible(value);
  });
}

/**
 * A function that will set the display state of tabs based on a tabs list.
 *
 * e.g. setDisplayState(formContext, true, "tab1", "tab2", "tab3") => Account form tab1, tab2, tab3 will expand.
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/formcontext-ui-tabs/setdisplaystate}
 * @function setDisplayState
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {boolean} expanded - value to set expanded or collapsed
 * @param {Array.<string>} tabs - list of tabs to set
 * @return void
 */
export function setDisplayState(formContext, expanded, ...tabs) {
  tabs.forEach(a => {
    let current = formContext.ui.tabs.get(arg); //tab

    if (current) current.setDisplayState(expanded ? "expanded" : "collapsed");
  });
}
