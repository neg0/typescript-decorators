import { Entity, Field, Required, Route } from '../../../src/entity/decorators'

@Entity
export default class DecoratorMockEntity {
    @Field
    public version: string = '1.0.0'

    @Field
    public name: string = 'MockEntity'

    @Route
    public doNothing(@Required arg: string): string {
        return arg
    }
}
