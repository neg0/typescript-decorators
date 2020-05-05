import 'reflect-metadata'

const requiredMetadataKey = Symbol("Required");

export const Entity: ClassDecorator = <T extends Function>(
    target: T,
): T | void => {
    console.log('Entity Decorator::target is:', target)
}

export const Field: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol,
): void => {
    Reflect.metadata(Symbol("format"), propertyKey)
    console.log('Field Decorator::target is:', target)
    console.log('Field Decorator::property key:', propertyKey)
}

export const Required: ParameterDecorator = (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
): void => {
    const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || []
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(
        requiredMetadataKey,
        existingRequiredParameters,
        target,
        propertyKey
    );
}

export const Route: MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void => {
    // let requiredParameters: number[] = Reflect.getOwnMetadata(
    //     requiredMetadataKey,
    //     target,
    //     propertyKey
    // );

    console.log('Route Decorator::target is:', target)
    console.log('Route Decorator::property key:', propertyKey)
    console.log('Route Decorator::descriptor:', descriptor)

    return descriptor
}
