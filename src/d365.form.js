/** @module "d365.form.js" */

function fr(value) {
  return Object.keys(this).find(k => this[k] === value);
}

/** @type {{}} */
const ftValues = {
    Undefined: 0,
    Create: 1,
    Update: 2,
    "Read Only": 3,
    Disabled: 4,
    "Bulk Edit": 6
  },
  /** @type {{}} */
  smValues = {
    Save: 1,
    "Save and Close": 2,
    Deactivate: 5,
    Reactivate: 6,
    Send: 7,
    Disqualify: 15,
    Qualify: 16,
    Assign: 47,
    "Save as Completed": 58,
    "Save and New": 59,
    "Auto Save": 70
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
 * @property {number} [Read Only] - 3 **
 * @property {number} Disabled - 4
 * @property {number} [Bulk Edit] - 6 **
 *
 * ** Not really optional but only way to keep property name together
 */
let FormTypes = fr.bind(ftValues); // eslint-disable-line
Object.assign(FormTypes, ftValues);

/**
 * An function that contains the save mode values.
 *
 * e.g. SaveMode(1) => Save, SaveMode.Save => 1
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/save-event-arguments/getsavemode}
 * @function SaveMode
 * @param {number} value - the numerical value of save mode
 * @return {string} - the name of save mode
 * @property {number} Save - 1
 * @property {number} [Save and Close] - 2 **
 * @property {number} Deactivate - 5
 * @property {number} Reactivate - 6
 * @property {number} Send - 7
 * @property {number} Disqualify - 15
 * @property {number} Qualify - 16
 * @property {number} Assign - 47
 * @property {number} [Save as Completed] - 58 **
 * @property {number} [Save and New] - 59 **
 * @property {number} [Auto Save] - 70 **
 *
 * ** Not really optional but only way to keep property name together
 */

let SaveMode = fr.bind(smValues); // eslint-disable-line
Object.assign(SaveMode, smValues);

export { FormTypes, SaveMode };

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
  try {
    attributes.forEach(a => {
      const current = formContext.getControl(a);

      if (
        ["standard", "iframe"].some(
          type => type === current.getControlType()
        ) &&
        current.getDisabled() !== value
      )
        current.setDisabled(value);
    });
  } catch (ex) {
    console && console.error(ex.message || ex);
  }
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
  try {
    attributes.forEach(a => {
      let current = formContext.ui.tabs.get(a); // tab

      if (current && current.getVisible() !== value) {
        current.setVisible(value);
        return;
      }

      current = formContext.getControl(a); // attributes or iframes

      if (
        ["standard", "iframe"].some(
          type => type === current.getControlType()
        ) &&
        current.getVisible() !== value
      )
        current.setVisible(value);
    });
  } catch (ex) {
    console && console.error(ex.message || ex);
  }
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
  try {
    tabs.forEach(t => {
      const current = formContext.ui.tabs.get(t); // tab

      if (current) current.setDisplayState(expanded ? "expanded" : "collapsed");
    });
  } catch (ex) {
    console && console.error(ex.message || ex);
  }
}

/**
 * A function that will set the submit mode of attributes based on a attribute list.
 *
 * e.g. setSubmitMode(formContext, "always", "name", "telephone1", "websiteurl")
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setsubmitmode}
 * @function setSubmitMode
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {string} mode - (always, never, dirty) sets whether data from the attribute will be submitted when the record is saved.
 * @param {Array.<string>} attributes - list of attributes to set
 * @return void
 */
export function setSubmitMode(formContext, mode, ...attributes) {
  try {
    const modes = ["always", "never", "dirty"];

    if (modes.every(m => m !== mode)) return;

    attributes.forEach(a => {
      const attribute = formContext.getAttribute(a);
      attribute && attribute.setSubmitMode(mode);
    });
  } catch (ex) {
    console && console.error(ex.message || ex);
  }
}

/**
 * A function that will set the requried level of attributes based on a attribute list.
 *
 * e.g. setSubmitMode(formContext, "always", "name", "telephone1", "websiteurl")
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/attributes/setrequiredlevel}
 * @function setRequiredLevel
 * @param {{}} formContext - a reference to the form or an item on the form depending on where the method was called.
 * @param {string} requirementLevel - (none, required, recommended) sets whether data is required or recommended for the attribute before the record can be saved.
 * @param {Array.<string>} attributes - list of attributes to set
 * @return void
 */
export function setRequiredLevel(formContext, requirementLevel, ...attributes) {
  try {
    const requirementLevels = ["none", "required", "recommended"];

    if (requirementLevels.every(rl => rl !== requirementLevel)) return;

    attributes.forEach(a => {
      const attribute = formContext.getAttribute(a);
      attribute && attribute.setRequiredLevel(requirementLevel);
    });
  } catch (ex) {
    console && console.error(ex.message || ex);
  }
}
