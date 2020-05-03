import { Entity, Field, Required } from '../../../src/entity/decorators'

@Entity
export default class DecoratorMockEntity {
    @Field
    public version: string = '1.0.0'

    public doNothing(@Required arg: string): string {
        return arg
    }
}
