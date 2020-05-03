declare namespace GraphQL {
    type GraphQLScalarTypes = 'Int' | 'Float' | 'String' | 'Boolean' | 'ID'

    type GraphQLConfig = {
        type: GraphQLScalarTypes
        schemaVersion: string
        name?: string
        exclude?: boolean
    }
}
