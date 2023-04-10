Service:

A class with a focused purpose.
Used for features that:
1. Are independent from any particular component.
2. Provide shared data or logic across component.
3. Encapsulate external interactions.

there are two ways our component can work with this service.

the component can create an instance of the service class and use it like below,
let svc = new myService(); -> it's simple and works!
but the instance is local to the component.
so we can't share data or other resources, and it will be more difficult to mock the service for testing.
that's why we don't normally use this technique when working with services.
Alternatively,
we can register the service with angular. Angular then creates a single instance of the service class, called a singleton, and holds onto it.
specifically, angular provides a built-in injector.
we register our services with the anglar injector - @Injectable()
which maintains a container of created service instances. the injector creates and manages the single instance or singleton of each registered service as requried

the component class defines the service as a dependency.
the angular injector then, provides or injects the service class instance when the component class is instantiated.  this process is called dependency injection.

Dependency Injection:
A coding pattern in which a class receives the instances of objects it needs(called dependencies) from an external source rather than creating them itself.
