/**
 * @module account.form
 */

/**
 * Account Form On Load
 * https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/clientapi-form-context
 * @param {{}} executionContext
 */
export function formOnLoad(executionContext) {
  const formContext = executionContext.getFormContext(),
    formType = formContext.ui.getFormType();
}
