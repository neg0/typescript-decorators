export const Entity: ClassDecorator = <TFunction extends Function>(
    target: TFunction,
): TFunction | void => {
    console.log('target is:', target)
}

export const Field: PropertyDecorator = (
    target: Object,
    propertyKey: string | symbol,
): void => {
    console.log('target is:', target)
    console.log('property key:', propertyKey)
}

export const Required: ParameterDecorator = (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
): void => {
    console.log('target is:', target)
    console.log('property key is:', propertyKey)
    console.log('parameter index:', parameterIndex)
}

export const Route: MethodDecorator = <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void => {
    console.log('target is:', target)
    console.log('property key:', propertyKey)
    console.log('descriptor:', descriptor)
}