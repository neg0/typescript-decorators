export default abstract class Entity {
    @Field
    public schemaVersion: string

    protected constructor() {
        this.schemaVersion = process.env.DEFAULT_SCHEMA || '1.0.0'
    }
}
