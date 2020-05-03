declare namespace GraphQL {
    type GraphQLScalarTypes = 'Int' | 'Float' | 'String' | 'Boolean' | 'ID'

    interface GraphQLTypeObject {
        query: string
    }

    type GraphQLConfig = {
        type: GraphQLScalarTypes
        name?: string
        exclude?: boolean
    }
}