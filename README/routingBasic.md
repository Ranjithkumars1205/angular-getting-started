ng g c products/product-detail --flat

--flat - no folder

we need to add the path to the desired component name, so product/product-detail following our naming convention

RouterModule:

Register the router service
Declares the router directives
Exposes configured routes

In this demo,  we configure the basic routes for our application.
In the index.html ->
the first step to set up routing is to define a base element in the head tag of the index.html.
Notice that the angular CLI already did that for us here
  <base href="/"> -> this element tells the router how to compose the navigation URLs.
this element tells the router how to compose the navigation URLs
Since the app folder is the application root, we'll set the href for the base tag to /.

Navigation the application routes:
1. Menu option, link, image or button that activates a route
2. Typing the Url in the address bar / Bootmark
3. The browser's forward or back buttons

Passing parameters to a Route
ActivatedRoute - To get the parameter from the URL, we use the activatedRoute service provided by router.

Snapshot : Read the parameter one time
this.route.snapshot.paramMap.get('id);

Observable: Read emitted parameters as they change
this.route.paramMap.subscribe(
  params => console.log(params.get('id)) - id - specified string is the route parameter name (in the router array)
)

ActivatedRoute - instance of the activated route

if the component needs to redraw parameters as they change, we use the paramMap observable. Recall from earlier in this course that an Observable is a collection of items that occur over time.
we subscribe to the observable to receive notification every time the parameters change.

product?.productName - ? - Safe navigation operator will not work with ngModel
so better always use *ngIf instead.

Activating a Route with Code
router.navigation

Protecting Routes with Guards:
1. Limit access to a route.
2. Restrict access to only certain users.
3. Require confirmation before navigating away.

CanActivate - Guard navigation to a route
CanDeactivate - Guard navigation from a route
Resolve - Pre-fetch data before activating a route
CanLoad - Prevent asychronous routing

we'll build a guard that prevents navigation to the product detail route, unless a specific condition is true.

ng g g products/product-detail

Declarations Array:
1. Every component, directive and pipe we create must belong to one and only on angular module.
2. Only declare components, directives and pipes.
3. All declared components, directives  and pipes are private by default
They are only accessible to other components, directives and pipes declared in the same module. (We should export these, let's see in exports)


Exports Array:
we can share an Angular module's components, directives, and pipes with other modules. we can export any of this module's components, directives and pipes so they can be pulled in when another module when imports this
module using the imports array. we can also reexport system angular modules such as FormsModule, 

importing a module does NOT provide access to its imported modules like formsModule, just comment out sharedModule exports array formModule.

Feature module:
basic application features - such as welcomeComponent
product features - productComponent
shared features - starComponent

ng g m products/product --flat -m app 
m - -> to pull the functionality  