import { setPropertiesFromJSON } from '../../json-helper';

import CodedFromValueSet from './CodedFromValueSet';

/**
 * Generated class for shr.test.SystemlessCodeConstraintOnValue.
 * @extends CodedFromValueSet
 */
class SystemlessCodeConstraintOnValue extends CodedFromValueSet {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {SystemlessCodeConstraintOnValue} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases coding).
   * @returns {Coding} The shr.core.Coding
   */
  get value() {
    return this._coding;
  }

  /**
   * Set the value (aliases coding).
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   */
  set value(value) {
    this._coding = value;
  }

  /**
   * Set the value (aliases coding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   * @returns {SystemlessCodeConstraintOnValue} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Coding.
   * @returns {Coding} The shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   * @returns {SystemlessCodeConstraintOnValue} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SystemlessCodeConstraintOnValue class.
   * The JSON must be valid against the SystemlessCodeConstraintOnValue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SystemlessCodeConstraintOnValue} An instance of SystemlessCodeConstraintOnValue populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SystemlessCodeConstraintOnValue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SystemlessCodeConstraintOnValue class to a JSON object.
   * The JSON is expected to be valid against the SystemlessCodeConstraintOnValue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/SystemlessCodeConstraintOnValue' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SystemlessCodeConstraintOnValue class to a FHIR object.
   * The FHIR is expected to be valid against the SystemlessCodeConstraintOnValue FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default SystemlessCodeConstraintOnValue;