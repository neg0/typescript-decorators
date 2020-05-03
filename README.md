# TypeScript/ES8+ Decorators
A Decorator is a special kind of declaration that can be attached to a class declaration, 
method, accessor, property, or parameter. Decorators use the form `@expression`, where expression 
must evaluate to a function that will be called at runtime with information about the decorated 
declaration.

Decorators are relevant to both horizontal and vertical architectures, but can be particularly 
valuable in the context of vertical architectures. Decorators can be used to take care of 
cross-cutting concerns such as logging, authorization, or validation. When used correctly, this 
aspect-oriented style of programming can minimize the code required to satisfy these shared 
responsibilities.

TypeScript's decorators can be used for aspect-oriented programming (AOP) and meta-programming, 
but we’ll start with AOP as it provides a solid example of a real-world use of decorators. There 
are four major Decorator Types currently defined in TypeScript:

* __ClassDecorator__
* __PropertyDecorator__
* __MethodDecorator__
* __ParameterDecorator__

The fifth decorator could be called _Configurable_ that accepts arguments and that you could utilise any of four major decorators above to create a configurable decorator.


### References
* [Decorators - _TypeScript Handbook_](https://www.typescriptlang.org/docs/handbook/decorators.html)
* [JavaScript Decorators](https://github.com/tc39/proposal-decorators)
* [Decorators proposal - _Stage 2 Draft / February 7, 2019_](https://tc39.es/proposal-decorators/)

#### Further reading
* [Decorate your code with TypeScript decorators](https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4)
* [A Gentle Introduction to TypeScript Decorators](https://medium.com/iqoqo-engineering/understand-typescript-decorators-in-5-minutes-26ffc6189082)
* [TypeScript - Class Decorators](https://www.logicbig.com/tutorials/misc/typescript/class-decorators.html)
* [TypeScript Decorators Examples](https://gist.github.com/remojansen/16c661a7afd68e22ac6e)
* 