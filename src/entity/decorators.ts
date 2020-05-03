import 'reflect-metadata'

export const Entity: ClassDecorator = <TFunction extends Function>(
    target: TFunction,
): TFunction | void => {
    console.log('Entity Decorator::target is:', target)
}

export const Field: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol,
): void => {
    console.log('Field Decorator::target is:', target)
    console.log('Field Decorator::property key:', propertyKey)
}

export const Required: ParameterDecorator = (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
): void => {
    console.log('Required Decorator::target is:', target)
    console.log('Required Decorator::property key is:', propertyKey)
    console.log('Required Decorator::parameter index:', parameterIndex)
}

export const Route: MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void => {
    console.log('Route Decorator::target is:', target)
    console.log('Route Decorator::property key:', propertyKey)
    console.log('Route Decorator::descriptor:', descriptor)

    return descriptor
}
