import Encounter from '../shr/encounter/Encounter';

class FluxEncounter {
    constructor(json) {
        this._encounter = Encounter.fromJSON(json);
    }

    get timePeriod() {
        return this._encounter.timePeriod;
    }

    toJSON() {
        return this._encounter.toJSON();
    }
}

export default FluxEncounter;