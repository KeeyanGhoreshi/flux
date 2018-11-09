import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../../json-helper';
import PartOf from './PartOf';
import EntityOrRole from './EntityOrRole';
import Role from './Role';
import Entity from './Entity';
import Patient from './Patient';
import ActiveFlag from './ActiveFlag';
import ActiveFlagAsaCodeableConcept from './ActiveFlagAsaCodeableConcept';
import ExternalHealthRecord from './ExternalHealthRecord';
import AccessTime from './AccessTime';
import Person from './Person';
import Practitioner from './Practitioner';
import Affiliation from './Affiliation';
import NationalProviderIdentifier from './NationalProviderIdentifier';
import Qualification from './Qualification';
import RelatedPerson from './RelatedPerson';
import PatientOrPractitioner from './PatientOrPractitioner';
import PatientOrPractitionerOrRelatedPerson from './PatientOrPractitionerOrRelatedPerson';
import PractitionerOrRelatedPerson from './PractitionerOrRelatedPerson';
import Group from './Group';
import Actual from './Actual';
import GroupCharacteristic from './GroupCharacteristic';
import GroupCharacteristicCode from './GroupCharacteristicCode';
import GroupCharacteristicValue from './GroupCharacteristicValue';
import ExcludeFlag from './ExcludeFlag';
import Member from './Member';
import Facility from './Facility';
import FacilityName from './FacilityName';
import MobileFacility from './MobileFacility';
import ManagingOrganization from './ManagingOrganization';
import Substance from './Substance';
import Ingredient from './Ingredient';
import IsActiveIngredient from './IsActiveIngredient';
import IngredientAmount from './IngredientAmount';
import Package from './Package';
import Medication from './Medication';
import DoseForm from './DoseForm';
import Brand from './Brand';
import BrandName from './BrandName';
import OverTheCounter from './OverTheCounter';
import MedicationIngredient from './MedicationIngredient';
import Manufacturer from './Manufacturer';
import LotNumber from './LotNumber';
import ExpirationDate from './ExpirationDate';
import PlaceOfBirth from './PlaceOfBirth';
import MultipleBirth from './MultipleBirth';
import MultipleBirthOrder from './MultipleBirthOrder';
import BirthSex from './BirthSex';
import Race from './Race';
import RaceDetail from './RaceDetail';
import Ethnicity from './Ethnicity';
import EthnicityDetail from './EthnicityDetail';
import MothersMaidenName from './MothersMaidenName';
import FathersName from './FathersName';
import SocialSecurityNumber from './SocialSecurityNumber';
import DriversLicenseNumber from './DriversLicenseNumber';
import StateOfIssue from './StateOfIssue';
import PassportNumber from './PassportNumber';
import CountryOfIssue from './CountryOfIssue';
import MedicalInterpreterNeeded from './MedicalInterpreterNeeded';
import MaritalStatus from './MaritalStatus';
import AnonymizedFlag from './AnonymizedFlag';
import FictionalPersonFlag from './FictionalPersonFlag';
import DateOfBirth from './DateOfBirth';
import AdministrativeGender from './AdministrativeGender';
import Headshot from './Headshot';
import LanguageUsed from './LanguageUsed';
import SpokenLanguageProficiency from './SpokenLanguageProficiency';
import WrittenLanguageProficiency from './WrittenLanguageProficiency';
import LanguageQualifier from './LanguageQualifier';
import Deceased from './Deceased';
import DateOfDeath from './DateOfDeath';
import AgeAtDeath from './AgeAtDeath';
import Organization from './Organization';
import OrganizationName from './OrganizationName';
import OrganizationAlias from './OrganizationAlias';
import OrganizationIdentifier from './OrganizationIdentifier';
import Location from './Location';
import Device from './Device';
import DeviceUdi from './DeviceUdi';
import VendorModelNumber from './VendorModelNumber';
import ManufacturerName from './ManufacturerName';
import ManufactureDate from './ManufactureDate';
import Url from './Url';
import SpecimenStatus from './SpecimenStatus';
import Specimen from './Specimen';
import CollectionSource from './CollectionSource';
import CollectionTime from './CollectionTime';
import CollectionMethod from './CollectionMethod';
import CollectionSite from './CollectionSite';
import AccessionIdentifier from './AccessionIdentifier';
import SourceSpecimen from './SourceSpecimen';
import HandlingRisk from './HandlingRisk';
import SpecialHandling from './SpecialHandling';
import SpecimenTreatment from './SpecimenTreatment';
import SpecimenContainer from './SpecimenContainer';
import Capacity from './Capacity';
import SpecimenQuantity from './SpecimenQuantity';
import Additive from './Additive';
import SequenceNumber from './SequenceNumber';

/**
 * Generated object factory for the shr.entity namespace.
 */
export default class ShrEntityObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.entity') {
      throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'PartOf': return PartOf.fromJSON(json);
    case 'EntityOrRole': return EntityOrRole.fromJSON(json);
    case 'Role': return Role.fromJSON(json);
    case 'Entity': return Entity.fromJSON(json);
    case 'Patient': return Patient.fromJSON(json);
    case 'ActiveFlag': return ActiveFlag.fromJSON(json);
    case 'ActiveFlagAsaCodeableConcept': return ActiveFlagAsaCodeableConcept.fromJSON(json);
    case 'ExternalHealthRecord': return ExternalHealthRecord.fromJSON(json);
    case 'AccessTime': return AccessTime.fromJSON(json);
    case 'Person': return Person.fromJSON(json);
    case 'Practitioner': return Practitioner.fromJSON(json);
    case 'Affiliation': return Affiliation.fromJSON(json);
    case 'NationalProviderIdentifier': return NationalProviderIdentifier.fromJSON(json);
    case 'Qualification': return Qualification.fromJSON(json);
    case 'RelatedPerson': return RelatedPerson.fromJSON(json);
    case 'PatientOrPractitioner': return PatientOrPractitioner.fromJSON(json);
    case 'PatientOrPractitionerOrRelatedPerson': return PatientOrPractitionerOrRelatedPerson.fromJSON(json);
    case 'PractitionerOrRelatedPerson': return PractitionerOrRelatedPerson.fromJSON(json);
    case 'Group': return Group.fromJSON(json);
    case 'Actual': return Actual.fromJSON(json);
    case 'GroupCharacteristic': return GroupCharacteristic.fromJSON(json);
    case 'GroupCharacteristicCode': return GroupCharacteristicCode.fromJSON(json);
    case 'GroupCharacteristicValue': return GroupCharacteristicValue.fromJSON(json);
    case 'ExcludeFlag': return ExcludeFlag.fromJSON(json);
    case 'Member': return Member.fromJSON(json);
    case 'Facility': return Facility.fromJSON(json);
    case 'FacilityName': return FacilityName.fromJSON(json);
    case 'MobileFacility': return MobileFacility.fromJSON(json);
    case 'ManagingOrganization': return ManagingOrganization.fromJSON(json);
    case 'Substance': return Substance.fromJSON(json);
    case 'Ingredient': return Ingredient.fromJSON(json);
    case 'IsActiveIngredient': return IsActiveIngredient.fromJSON(json);
    case 'IngredientAmount': return IngredientAmount.fromJSON(json);
    case 'Package': return Package.fromJSON(json);
    case 'Medication': return Medication.fromJSON(json);
    case 'DoseForm': return DoseForm.fromJSON(json);
    case 'Brand': return Brand.fromJSON(json);
    case 'BrandName': return BrandName.fromJSON(json);
    case 'OverTheCounter': return OverTheCounter.fromJSON(json);
    case 'MedicationIngredient': return MedicationIngredient.fromJSON(json);
    case 'Manufacturer': return Manufacturer.fromJSON(json);
    case 'LotNumber': return LotNumber.fromJSON(json);
    case 'ExpirationDate': return ExpirationDate.fromJSON(json);
    case 'PlaceOfBirth': return PlaceOfBirth.fromJSON(json);
    case 'MultipleBirth': return MultipleBirth.fromJSON(json);
    case 'MultipleBirthOrder': return MultipleBirthOrder.fromJSON(json);
    case 'BirthSex': return BirthSex.fromJSON(json);
    case 'Race': return Race.fromJSON(json);
    case 'RaceDetail': return RaceDetail.fromJSON(json);
    case 'Ethnicity': return Ethnicity.fromJSON(json);
    case 'EthnicityDetail': return EthnicityDetail.fromJSON(json);
    case 'MothersMaidenName': return MothersMaidenName.fromJSON(json);
    case 'FathersName': return FathersName.fromJSON(json);
    case 'SocialSecurityNumber': return SocialSecurityNumber.fromJSON(json);
    case 'DriversLicenseNumber': return DriversLicenseNumber.fromJSON(json);
    case 'StateOfIssue': return StateOfIssue.fromJSON(json);
    case 'PassportNumber': return PassportNumber.fromJSON(json);
    case 'CountryOfIssue': return CountryOfIssue.fromJSON(json);
    case 'MedicalInterpreterNeeded': return MedicalInterpreterNeeded.fromJSON(json);
    case 'MaritalStatus': return MaritalStatus.fromJSON(json);
    case 'AnonymizedFlag': return AnonymizedFlag.fromJSON(json);
    case 'FictionalPersonFlag': return FictionalPersonFlag.fromJSON(json);
    case 'DateOfBirth': return DateOfBirth.fromJSON(json);
    case 'AdministrativeGender': return AdministrativeGender.fromJSON(json);
    case 'Headshot': return Headshot.fromJSON(json);
    case 'LanguageUsed': return LanguageUsed.fromJSON(json);
    case 'SpokenLanguageProficiency': return SpokenLanguageProficiency.fromJSON(json);
    case 'WrittenLanguageProficiency': return WrittenLanguageProficiency.fromJSON(json);
    case 'LanguageQualifier': return LanguageQualifier.fromJSON(json);
    case 'Deceased': return Deceased.fromJSON(json);
    case 'DateOfDeath': return DateOfDeath.fromJSON(json);
    case 'AgeAtDeath': return AgeAtDeath.fromJSON(json);
    case 'Organization': return Organization.fromJSON(json);
    case 'OrganizationName': return OrganizationName.fromJSON(json);
    case 'OrganizationAlias': return OrganizationAlias.fromJSON(json);
    case 'OrganizationIdentifier': return OrganizationIdentifier.fromJSON(json);
    case 'Location': return Location.fromJSON(json);
    case 'Device': return Device.fromJSON(json);
    case 'DeviceUdi': return DeviceUdi.fromJSON(json);
    case 'VendorModelNumber': return VendorModelNumber.fromJSON(json);
    case 'ManufacturerName': return ManufacturerName.fromJSON(json);
    case 'ManufactureDate': return ManufactureDate.fromJSON(json);
    case 'Url': return Url.fromJSON(json);
    case 'SpecimenStatus': return SpecimenStatus.fromJSON(json);
    case 'Specimen': return Specimen.fromJSON(json);
    case 'CollectionSource': return CollectionSource.fromJSON(json);
    case 'CollectionTime': return CollectionTime.fromJSON(json);
    case 'CollectionMethod': return CollectionMethod.fromJSON(json);
    case 'CollectionSite': return CollectionSite.fromJSON(json);
    case 'AccessionIdentifier': return AccessionIdentifier.fromJSON(json);
    case 'SourceSpecimen': return SourceSpecimen.fromJSON(json);
    case 'HandlingRisk': return HandlingRisk.fromJSON(json);
    case 'SpecialHandling': return SpecialHandling.fromJSON(json);
    case 'SpecimenTreatment': return SpecimenTreatment.fromJSON(json);
    case 'SpecimenContainer': return SpecimenContainer.fromJSON(json);
    case 'Capacity': return Capacity.fromJSON(json);
    case 'SpecimenQuantity': return SpecimenQuantity.fromJSON(json);
    case 'Additive': return Additive.fromJSON(json);
    case 'SequenceNumber': return SequenceNumber.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'shr.entity') {
      throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'PartOf': return PartOf.fromFHIR(fhir, asExtension);
    case 'EntityOrRole': return EntityOrRole.fromFHIR(fhir, asExtension);
    case 'Role': return Role.fromFHIR(fhir, asExtension);
    case 'Entity': return Entity.fromFHIR(fhir, asExtension);
    case 'Patient': return Patient.fromFHIR(fhir, asExtension);
    case 'ActiveFlag': return ActiveFlag.fromFHIR(fhir, asExtension);
    case 'ActiveFlagAsaCodeableConcept': return ActiveFlagAsaCodeableConcept.fromFHIR(fhir, asExtension);
    case 'ExternalHealthRecord': return ExternalHealthRecord.fromFHIR(fhir, asExtension);
    case 'AccessTime': return AccessTime.fromFHIR(fhir, asExtension);
    case 'Person': return Person.fromFHIR(fhir, asExtension);
    case 'Practitioner': return Practitioner.fromFHIR(fhir, asExtension);
    case 'Affiliation': return Affiliation.fromFHIR(fhir, asExtension);
    case 'NationalProviderIdentifier': return NationalProviderIdentifier.fromFHIR(fhir, asExtension);
    case 'Qualification': return Qualification.fromFHIR(fhir, asExtension);
    case 'RelatedPerson': return RelatedPerson.fromFHIR(fhir, asExtension);
    case 'PatientOrPractitioner': return PatientOrPractitioner.fromFHIR(fhir, asExtension);
    case 'PatientOrPractitionerOrRelatedPerson': return PatientOrPractitionerOrRelatedPerson.fromFHIR(fhir, asExtension);
    case 'PractitionerOrRelatedPerson': return PractitionerOrRelatedPerson.fromFHIR(fhir, asExtension);
    case 'Group': return Group.fromFHIR(fhir, asExtension);
    case 'Actual': return Actual.fromFHIR(fhir, asExtension);
    case 'GroupCharacteristic': return GroupCharacteristic.fromFHIR(fhir, asExtension);
    case 'GroupCharacteristicCode': return GroupCharacteristicCode.fromFHIR(fhir, asExtension);
    case 'GroupCharacteristicValue': return GroupCharacteristicValue.fromFHIR(fhir, asExtension);
    case 'ExcludeFlag': return ExcludeFlag.fromFHIR(fhir, asExtension);
    case 'Member': return Member.fromFHIR(fhir, asExtension);
    case 'Facility': return Facility.fromFHIR(fhir, asExtension);
    case 'FacilityName': return FacilityName.fromFHIR(fhir, asExtension);
    case 'MobileFacility': return MobileFacility.fromFHIR(fhir, asExtension);
    case 'ManagingOrganization': return ManagingOrganization.fromFHIR(fhir, asExtension);
    case 'Substance': return Substance.fromFHIR(fhir, asExtension);
    case 'Ingredient': return Ingredient.fromFHIR(fhir, asExtension);
    case 'IsActiveIngredient': return IsActiveIngredient.fromFHIR(fhir, asExtension);
    case 'IngredientAmount': return IngredientAmount.fromFHIR(fhir, asExtension);
    case 'Package': return Package.fromFHIR(fhir, asExtension);
    case 'Medication': return Medication.fromFHIR(fhir, asExtension);
    case 'DoseForm': return DoseForm.fromFHIR(fhir, asExtension);
    case 'Brand': return Brand.fromFHIR(fhir, asExtension);
    case 'BrandName': return BrandName.fromFHIR(fhir, asExtension);
    case 'OverTheCounter': return OverTheCounter.fromFHIR(fhir, asExtension);
    case 'MedicationIngredient': return MedicationIngredient.fromFHIR(fhir, asExtension);
    case 'Manufacturer': return Manufacturer.fromFHIR(fhir, asExtension);
    case 'LotNumber': return LotNumber.fromFHIR(fhir, asExtension);
    case 'ExpirationDate': return ExpirationDate.fromFHIR(fhir, asExtension);
    case 'PlaceOfBirth': return PlaceOfBirth.fromFHIR(fhir, asExtension);
    case 'MultipleBirth': return MultipleBirth.fromFHIR(fhir, asExtension);
    case 'MultipleBirthOrder': return MultipleBirthOrder.fromFHIR(fhir, asExtension);
    case 'BirthSex': return BirthSex.fromFHIR(fhir, asExtension);
    case 'Race': return Race.fromFHIR(fhir, asExtension);
    case 'RaceDetail': return RaceDetail.fromFHIR(fhir, asExtension);
    case 'Ethnicity': return Ethnicity.fromFHIR(fhir, asExtension);
    case 'EthnicityDetail': return EthnicityDetail.fromFHIR(fhir, asExtension);
    case 'MothersMaidenName': return MothersMaidenName.fromFHIR(fhir, asExtension);
    case 'FathersName': return FathersName.fromFHIR(fhir, asExtension);
    case 'SocialSecurityNumber': return SocialSecurityNumber.fromFHIR(fhir, asExtension);
    case 'DriversLicenseNumber': return DriversLicenseNumber.fromFHIR(fhir, asExtension);
    case 'StateOfIssue': return StateOfIssue.fromFHIR(fhir, asExtension);
    case 'PassportNumber': return PassportNumber.fromFHIR(fhir, asExtension);
    case 'CountryOfIssue': return CountryOfIssue.fromFHIR(fhir, asExtension);
    case 'MedicalInterpreterNeeded': return MedicalInterpreterNeeded.fromFHIR(fhir, asExtension);
    case 'MaritalStatus': return MaritalStatus.fromFHIR(fhir, asExtension);
    case 'AnonymizedFlag': return AnonymizedFlag.fromFHIR(fhir, asExtension);
    case 'FictionalPersonFlag': return FictionalPersonFlag.fromFHIR(fhir, asExtension);
    case 'DateOfBirth': return DateOfBirth.fromFHIR(fhir, asExtension);
    case 'AdministrativeGender': return AdministrativeGender.fromFHIR(fhir, asExtension);
    case 'Headshot': return Headshot.fromFHIR(fhir, asExtension);
    case 'LanguageUsed': return LanguageUsed.fromFHIR(fhir, asExtension);
    case 'SpokenLanguageProficiency': return SpokenLanguageProficiency.fromFHIR(fhir, asExtension);
    case 'WrittenLanguageProficiency': return WrittenLanguageProficiency.fromFHIR(fhir, asExtension);
    case 'LanguageQualifier': return LanguageQualifier.fromFHIR(fhir, asExtension);
    case 'Deceased': return Deceased.fromFHIR(fhir, asExtension);
    case 'DateOfDeath': return DateOfDeath.fromFHIR(fhir, asExtension);
    case 'AgeAtDeath': return AgeAtDeath.fromFHIR(fhir, asExtension);
    case 'Organization': return Organization.fromFHIR(fhir, asExtension);
    case 'OrganizationName': return OrganizationName.fromFHIR(fhir, asExtension);
    case 'OrganizationAlias': return OrganizationAlias.fromFHIR(fhir, asExtension);
    case 'OrganizationIdentifier': return OrganizationIdentifier.fromFHIR(fhir, asExtension);
    case 'Location': return Location.fromFHIR(fhir, asExtension);
    case 'Device': return Device.fromFHIR(fhir, asExtension);
    case 'DeviceUdi': return DeviceUdi.fromFHIR(fhir, asExtension);
    case 'VendorModelNumber': return VendorModelNumber.fromFHIR(fhir, asExtension);
    case 'ManufacturerName': return ManufacturerName.fromFHIR(fhir, asExtension);
    case 'ManufactureDate': return ManufactureDate.fromFHIR(fhir, asExtension);
    case 'Url': return Url.fromFHIR(fhir, asExtension);
    case 'SpecimenStatus': return SpecimenStatus.fromFHIR(fhir, asExtension);
    case 'Specimen': return Specimen.fromFHIR(fhir, asExtension);
    case 'CollectionSource': return CollectionSource.fromFHIR(fhir, asExtension);
    case 'CollectionTime': return CollectionTime.fromFHIR(fhir, asExtension);
    case 'CollectionMethod': return CollectionMethod.fromFHIR(fhir, asExtension);
    case 'CollectionSite': return CollectionSite.fromFHIR(fhir, asExtension);
    case 'AccessionIdentifier': return AccessionIdentifier.fromFHIR(fhir, asExtension);
    case 'SourceSpecimen': return SourceSpecimen.fromFHIR(fhir, asExtension);
    case 'HandlingRisk': return HandlingRisk.fromFHIR(fhir, asExtension);
    case 'SpecialHandling': return SpecialHandling.fromFHIR(fhir, asExtension);
    case 'SpecimenTreatment': return SpecimenTreatment.fromFHIR(fhir, asExtension);
    case 'SpecimenContainer': return SpecimenContainer.fromFHIR(fhir, asExtension);
    case 'Capacity': return Capacity.fromFHIR(fhir, asExtension);
    case 'SpecimenQuantity': return SpecimenQuantity.fromFHIR(fhir, asExtension);
    case 'Additive': return Additive.fromFHIR(fhir, asExtension);
    case 'SequenceNumber': return SequenceNumber.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
    }
  }
}
