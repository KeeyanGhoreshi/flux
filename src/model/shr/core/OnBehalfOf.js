import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.OnBehalfOf.
 */
class OnBehalfOf {

  /**
   * Get the choice value; one of: uri, shr.entity.Organization reference.
   * @returns {(uri|Reference)} The choice value; one of: uri, shr.entity.Organization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: uri, shr.entity.Organization reference.
   * This field/value is required.
   * @param {(uri|Reference)} value - The choice value; one of: uri, shr.entity.Organization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: uri, shr.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(uri|Reference)} value - The choice value; one of: uri, shr.entity.Organization reference
   * @returns {OnBehalfOf} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OnBehalfOf class.
   * The JSON must be valid against the OnBehalfOf JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OnBehalfOf} An instance of OnBehalfOf populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OnBehalfOf();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OnBehalfOf class to a JSON object.
   * The JSON is expected to be valid against the OnBehalfOf JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/OnBehalfOf' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the OnBehalfOf class to a FHIR object.
   * The FHIR is expected to be valid against the OnBehalfOf FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-OnBehalfOf-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the OnBehalfOf class.
   * The FHIR must be valid against the OnBehalfOf FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OnBehalfOf} An instance of OnBehalfOf populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new OnBehalfOf();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default OnBehalfOf;
