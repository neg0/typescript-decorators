import { Entity, Field, Route } from './entity/decorators'

@Entity
export default class Business {
    @Field
    public id: string

    @Field
    public name: string

    @Field
    public email: string

    public constructor(id: string, name: string, email: string) {
        this.id = id
        this.name = name
        this.email = email
    }

    public static toString(): string {
        return '';
    }
}
