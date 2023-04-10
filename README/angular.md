

ng serve -o - here serve will start the local server and -o will open s the URL in our default browser.

Note that angular does not support Internet Explorer, or IE. Use different browser.

Auto Save Option: File -> Preferences -> Settings -> Workspace -> set to Auto Save after Delay

Bootstrapping:
-------------

Bootstrapping - it has come to mean a self-starting process that loads and goes.

we need to tell our angular to load our root component through a process is called bootstrapping. 

1. we first set up the index.html file to host our application. 
2. then we define our root  Angular module to bootstrap our root component.

once installed the bootstrap and font-awesome, import it in style.css ---> @import "~bootstrap/dist/css/bootstrap.min.css";
@import "~font-awesome/css/font-awesome.min.css";


Binding:
communication between the component's class and its template and often involves passing data.

Interpolation is a one-way binding from class property to the template.

Directive:
custom HTML element or attribute used to power up and extend our HTML.
1. custom
2. built-in

structural directive: 
*ngIf -  *ngFor - loop

how is the angular compiler going to find this ngIf directive?
BrowserModule - it exposes the ngIf and ngFor directives.

for..of(like ngFor)  vs for..in - Iterates over iterable objects such as an array


for..in - result: 0,1,2 - iterates over the properties of an object. - here we see each array index 

Data binding:
1. property binding - Component to DOM
2. event binding - DOM to Component

property binding -  [src]="imageUrl" or src={{imageUrl}} (this is interpolation) - Element property

Name conversion:
use showImage instead of canShowImage for flag
use toggleImage instead of showImageHandler 

Two way data binding: [(ngModel)] - banana in a box
formsModule
we often want to display a component property in the template and update that property as the user types 

angular pipes:
Transform bound properties before display..

Interface:
any[] - any will negates the benefits fo strong typing
 To specifies custom types, we can define an inferfaces..\
 Two ways to use an interface:

1. as a type like products: IProduct[] = [];
here IProduct - By some naming convertions, the interface is prefixed with an i.. though many Typerscript developers leave off this prefix.
2. as a feature set -
export interface DoTiming {
    count: number;
    start(index: number): void;
    stop(): void;
}

Encapsulating Component Styles - look at product-list.component.css

Lifecycle hooks:
create -> render -> create and render children -> process changes -> destroy;

A lifecycle hook is an interface we implement to write code when a component lifecycle event occurs.

OnInit: Perform component initialization after angular has initialized the data-bound properties.
and this is a good place to retrieve the data for the template from a back-end service.

Onchanges: perform action after change to input properties.

OnDestroy: perform clean up before angular destroy the component.

