import { Required } from '../../../src/entity/decorators'

export default class DecoratorMockEntity {
    public version: string = '1.0.0'

    public name: string = 'MockEntity'

    public doNothing(@Required arg: string): string {
        return arg
    }
}
