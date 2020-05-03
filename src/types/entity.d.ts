declare function Entity<TFunction extends Function>(
    target: TFunction,
): TFunction | void

declare function Field(target: Object, propertyKey: string | symbol): void

declare function Required(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number,
): void

declare function Route<T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> | void
