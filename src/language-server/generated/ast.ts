/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode } from 'langium';

export interface BoundDefinition extends AstNode {
    readonly $container: EcoreFeature | EcoreReference | ClassCrossReference | ClassReference;
    lowerBound: number
    upperBound: number
}

export const BoundDefinition = 'BoundDefinition';

export function isBoundDefinition(item: unknown): item is BoundDefinition {
    return reflection.isInstance(item, BoundDefinition);
}

export interface ClassCrossReference extends AstNode {
    readonly $container: EcoreReference;
    boundDefinition: BoundDefinition
    classReference: Reference<EcoreClass>
}

export const ClassCrossReference = 'ClassCrossReference';

export function isClassCrossReference(item: unknown): item is ClassCrossReference {
    return reflection.isInstance(item, ClassCrossReference);
}

export interface ClassReference extends AstNode {
    readonly $container: EcoreReference;
    BoundDefinition: BoundDefinition
    classReference: Reference<EcoreClass>
}

export const ClassReference = 'ClassReference';

export function isClassReference(item: unknown): item is ClassReference {
    return reflection.isInstance(item, ClassReference);
}

export interface EcoreClass extends AstNode {
    readonly $container: EcoreModel;
    class: boolean
    features: Array<EcoreFeature>
    instanceTypeName: InstanceTypeName
    interface: boolean
    interfaces: Array<Reference<EcoreClass>>
    name: string
    parentClass?: Reference<EcoreClass>
    references: Array<EcoreReference>
}

export const EcoreClass = 'EcoreClass';

export function isEcoreClass(item: unknown): item is EcoreClass {
    return reflection.isInstance(item, EcoreClass);
}

export interface EcoreDefinition extends AstNode {
    readonly $container: EcoreModel;
    name: string
    properties: string
}

export const EcoreDefinition = 'EcoreDefinition';

export function isEcoreDefinition(item: unknown): item is EcoreDefinition {
    return reflection.isInstance(item, EcoreDefinition);
}

export interface EcoreEnum extends AstNode {
    readonly $container: EcoreModel;
    enumEntry: Array<EcoreEnumEntry>
    instanceTypeName: InstanceTypeName
    name: string
}

export const EcoreEnum = 'EcoreEnum';

export function isEcoreEnum(item: unknown): item is EcoreEnum {
    return reflection.isInstance(item, EcoreEnum);
}

export interface EcoreEnumEntry extends AstNode {
    readonly $container: EcoreEnum;
    name: string
}

export const EcoreEnumEntry = 'EcoreEnumEntry';

export function isEcoreEnumEntry(item: unknown): item is EcoreEnumEntry {
    return reflection.isInstance(item, EcoreEnumEntry);
}

export interface EcoreFeature extends AstNode {
    readonly $container: EcoreClass;
    boundDefinition: BoundDefinition
    featureName: string
    final: boolean
    name: string
    required: boolean
    transient: boolean
    volatile: boolean
}

export const EcoreFeature = 'EcoreFeature';

export function isEcoreFeature(item: unknown): item is EcoreFeature {
    return reflection.isInstance(item, EcoreFeature);
}

export interface EcoreModel extends AstNode {
    ecoreClasses: Array<EcoreClass>
    ecoreDefinitions: Array<EcoreDefinition>
    ecoreEnums: Array<EcoreEnum>
    name: EcoreModelDefinition
    nsUri: NsUriDeclaration
}

export const EcoreModel = 'EcoreModel';

export function isEcoreModel(item: unknown): item is EcoreModel {
    return reflection.isInstance(item, EcoreModel);
}

export interface EcoreModelDefinition extends AstNode {
    readonly $container: EcoreModel;
    name: string
}

export const EcoreModelDefinition = 'EcoreModelDefinition';

export function isEcoreModelDefinition(item: unknown): item is EcoreModelDefinition {
    return reflection.isInstance(item, EcoreModelDefinition);
}

export interface EcoreReference extends AstNode {
    readonly $container: EcoreClass;
    boundDefinition: BoundDefinition
    containmentType: 'Container' | 'Containment'
    featureName: string
    final: boolean
    references: ClassCrossReference | ClassReference
    refers: boolean
    required: boolean
}

export const EcoreReference = 'EcoreReference';

export function isEcoreReference(item: unknown): item is EcoreReference {
    return reflection.isInstance(item, EcoreReference);
}

export interface InstanceTypeName extends AstNode {
    readonly $container: EcoreEnum | EcoreClass;
    name: string
}

export const InstanceTypeName = 'InstanceTypeName';

export function isInstanceTypeName(item: unknown): item is InstanceTypeName {
    return reflection.isInstance(item, InstanceTypeName);
}

export interface NsUriDeclaration extends AstNode {
    readonly $container: EcoreModel;
    name: string
}

export const NsUriDeclaration = 'NsUriDeclaration';

export function isNsUriDeclaration(item: unknown): item is NsUriDeclaration {
    return reflection.isInstance(item, NsUriDeclaration);
}

export type VsCoreAstType = 'BoundDefinition' | 'ClassCrossReference' | 'ClassReference' | 'EcoreClass' | 'EcoreDefinition' | 'EcoreEnum' | 'EcoreEnumEntry' | 'EcoreFeature' | 'EcoreModel' | 'EcoreModelDefinition' | 'EcoreReference' | 'InstanceTypeName' | 'NsUriDeclaration';

export type VsCoreAstReference = 'ClassCrossReference:classReference' | 'ClassReference:classReference' | 'EcoreClass:interfaces' | 'EcoreClass:parentClass';

export class VsCoreAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['BoundDefinition', 'ClassCrossReference', 'ClassReference', 'EcoreClass', 'EcoreDefinition', 'EcoreEnum', 'EcoreEnumEntry', 'EcoreFeature', 'EcoreModel', 'EcoreModelDefinition', 'EcoreReference', 'InstanceTypeName', 'NsUriDeclaration'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: VsCoreAstReference): string {
        switch (referenceId) {
            case 'ClassCrossReference:classReference': {
                return EcoreClass;
            }
            case 'ClassReference:classReference': {
                return EcoreClass;
            }
            case 'EcoreClass:interfaces': {
                return EcoreClass;
            }
            case 'EcoreClass:parentClass': {
                return EcoreClass;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new VsCoreAstReflection();
