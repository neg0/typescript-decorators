import DecoratorMockEntity from './__mock__/decorator-mock.entity'

describe('Decorators', () => {
    let sut: DecoratorMockEntity

    describe('Route', () => {
        beforeEach(() => {
            sut = new DecoratorMockEntity()
        })

        it('should be instantiable', () => {
            expect(sut).toBeInstanceOf(DecoratorMockEntity)
        })

    })
})
