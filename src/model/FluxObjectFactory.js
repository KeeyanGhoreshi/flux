import { getNamespaceAndName } from './json-helper';
import ObjectFactory from './ObjectFactory';
import FluxBaseObjectFactory from './base/FluxBaseObjectFactory';
import FluxResearchObjectFactory from './research/FluxResearchObjectFactory';
import FluxAdverseObjectFactory from './adverse/FluxAdverseObjectFactory';

/*
 *  FluxObjectFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class FluxObjectFactory {
    static createInstance(json, type) {
        const { namespace } = getNamespaceAndName(json, type);
        switch (namespace) {
            case 'shr.adverse': return FluxAdverseObjectFactory.createInstance(json, type);
            case 'shr.base': return FluxBaseObjectFactory.createInstance(json, type);
            case 'shr.research': return FluxResearchObjectFactory.createInstance(json, type);
            default: return ObjectFactory.createInstance(json, type);
        }
    }
}