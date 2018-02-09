import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Formalism.
 */
class Formalism {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Deserializes JSON data to an instance of the Formalism class.
   * The JSON must be valid against the Formalism JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Formalism} An instance of Formalism populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Formalism();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Formalism;