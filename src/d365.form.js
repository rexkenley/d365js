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

export default FormTypes;
