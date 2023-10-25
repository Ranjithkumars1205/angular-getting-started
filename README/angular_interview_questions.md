Latest notes updating angular getting stared repo

1.  Html vs Html 5 and both syntax -- https://www.geeksforgeeks.org/difference-between-html-and-html5/

Older version of HTML are less mobile-friendly. HTML5 language is more mobile-friendly.

Allows JavaScript to run in background. This is possible due to JS Web worker API in HTML5.

Doctype declaration is quite simple and easy. (<!DOCTYPE html><html></html>)

Character encoding is simple and easy.

nav, footer, header are available in html 5

Charset in html - web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world!

It didn’t support audio and video without the use of flash player support.
It supports audio and video controls with the use of <audio> and <video> tags.
It uses cookies to store temporary data. It uses SQL databases and application cache to store offline data.
Does not allow JavaScript to run in browser. Allows JavaScript to run in background. This is possible due to JS Web worker API in HTML5.
Vector graphics is possible in HTML with the help of various technologies such as VML, Silver-light, Flash, etc. Vector graphics is additionally an integral a part of HTML5 like SVG and canvas.
It does not allow drag and drop effects. It allows drag and drop effects.
Not possible to draw shapes like circle, rectangle, triangle etc. HTML5 allows to draw shapes like circle, rectangle, triangle etc.
It works with all old browsers. It supported by all new browser like Firefox, Mozilla, Chrome, Safari, etc.
Older version of HTML are less mobile-friendly. HTML5 language is more mobile-friendly.
Doctype declaration is too long and complicated. Doctype declaration is quite simple and easy.
Elements like nav, header were not present. New element for web structure like nav, header, footer etc.
Character encoding is long and complicated. Character encoding is simple and easy.
It is almost impossible to get true GeoLocation of user with the help of browser. One can track the GeoLocation of a user easily by using JS GeoLocation API.
It can not handle inaccurate syntax. It is capable of handling inaccurate syntax.
Attributes like charset, async and ping are absent in HTML. Attributes of charset, async and ping are a part of HTML 5.

2. semantic html https://www.w3schools.com/html/html5_semantic_elements.asp

Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.

Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content.

<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>

5. pseudo classes https://www.w3schools.com/css/css_pseudo_classes.asp

Style an element when a user mouses over it - Hover, active
Style visited and unvisited links differently - visited, link (Unvisited)
Style an element when it gets focus - focus

6. is there padding in span tag and how to apply padding in span and span is inline block or inline - answer as inline

vertical margin will not work for span . because it is inline element ( vertial margin not work in inline) - ref: https://stackoverflow.com/questions/11700985/margin-top-not-working-for-span-element

block, inline block, inline - https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1

inline - it can't apply width and height and always start with same line
block - new line and it applied width and height

https://css-tricks.com/css-modules-part-1-need/

7. css vs css 3 https://www.onlineinterviewquestions.com/difference-between-css-and-css3/

# CSS CSS3

1 CSS does not supports media queries. CSS3 supports media queries for responsive web design.
2 Cannot split into varied modules Can be easily split into varied modules (This approach is designed to fix the problem of the global scope in CSS.)
3 Does not supported by all new browsers. CSS3 is supported by all new browsers
4 It has old and standard colors. Supports RGBA, HSLA, HSL and gradient colors.

8. position all property or elements  
   absolute - It will adjust top left right calulation from outer most parent element (starting from the screen)

relative - It will adjust the top left right calculation from original position (inner most parent element) .. i mean nearest sibling element

static - every element has a static position by default, so the element will stick to the normal page flow. So if there is a left/right/top/bottom/z-index set then there will be no effect on that element.

fixed - it is similar to absolute .. however this value is unaffected by scrolling (Eg: once you scroll applied, it continues to stick to the bottom of the page:)

sticky - the element becomes sticky and remains at a fixed position 50px top of the screen.

9. static vs inherit http://stanford.edu/group/csp/cs03/week5/text6.html

Inheritance is like inheriting from the base class AND Static belongs to the Class and not Object

Inherit positioning explicitly sets the value to that of the parent (if the parent is position:absolute, the child will be position:absolute; if the parent is position:fixed, the child will be position:fixed).

https://www.yorku.ca/nmw/datt1939f19/week03/css_relVSabsVSfixed.html

10. box model

The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

11. box sizing

Here, the full width is 300px(should be have), no matter what! Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
box-sizing: content-box; - If you apply padding/margin to the child element which has content-box. it goes out from the parent element..
in case you want to avoid that child element goes out from parent element box model, apply box-sizing: border-box; instead of box-sizing: content-box or remove box-sizing: content-box;.

12. angularjs vs angular 2
    https://www.monocubed.com/blog/difference-between-angular-and-angularjs/
    https://www.ngdevelop.tech/angular/history/

https://www.quora.com/What-are-Angular-8-new-features-and-improvements

angular 12 features:
nullish coalescing (??)
Ivy Everywhere. .
Implementing stricter type checking for reactive forms.
Update our e2e testing strategy
Typescript 4.2
Deprecating support for IE12

Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript

13. angular 2 vs 4 vs 7

14. Decorator

- It is typescript feature.
- It will enhance your classes
  So, how does angular compiler that compiles your code and transform it into scripts that is ready to be run in browser? This happens because of decorators.
  In a simple terms, decorators allows you to attach meta data with the type script class using which angular knows whether that class is a component or directive or module or etc
  If you use decorator (@Component and @NgModule)in class, angular knows whether that class is a component or directive or module or etc.

15. is it possible for building apk in angular - no

16. what is anchor tag

The <a> tag defines a hyperlink, which is used to link from one page to another

#footer {
clear: both; --> https://css-tricks.com/almanac/properties/c/clear/ - the element will move down below the floated element ||
Do not allow floating elements on the left or the right side of a specified footer element:
}

17. transform in css - The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.

18. what is flex in css - can enable to adjust like flexible.

19. How to make one object in centre using design - display: flex; justify-content: centre;

margin: auto;
width: 70% //

20. angular vs ionic

21. ionic 3 vs ionic 4

22. what is ionic

23. Ionic is open source sdk for mobile app development on build on angular framework with using css

Ionic is hybrid app development framework

create cross platform applications

It can developing the ones deploy across different platform

we often use observables when retrieving data using HTTP.

24. what is pipe in observable - easy to read ... If you use pipe , much easy to read. it .. A Pipeable Operator is a function that takes an Observable as its input and returns another Observable

Asynchronous (NO WAITING)does not wait for a task to get finished. It moves to next task.

## "This is one way of handling an async request". But what happens when we want to again request to the server for data after the success of the first request? What if we want to make a third request after that successful second request? Horrible!

At this point, our code will become messy and less readable. This is called ‘callback hell’. To overcome it, promises came around. They offer a better way of handling an async request t
hat improves code readability. Let’s understand a bit more.

function dataProducer(){
return ‘Hi Observable’;
return ‘Am I understandable?’ // not a executable code.
}

var observable = Rx.Observable.create((observer: any) =>{

observer.next(‘Hi Observable’);
observer.next( ‘Am I understandable?’ );

})

observable.subscribe((data)=>{
console.log(data);  
})

Output :
‘Hi Observable’
‘Am I understandable?’

Subscriptions to observables are quite similar to calling a function.
But where observables are different is in their ability to return multiple values called streams (a stream is a sequence of data over time).

you can say observables are simply a function that are able to give multiple values over time, either synchronously or asynchronously.
https://www.freecodecamp.org/news/what-are-observables-how-they-are-different-from-promises/

Realtime example for promise vs observable - https://www.c-sharpcorner.com/article/what-is-the-difference-between-observable-and-promise-with-example-in-angular-8/

Must read - https://blog.bitsrc.io/promises-vs-observables-674f4bc8ca5e - must check multicast vs unicast
https://www.thinktecture.com/en/angular/promises-vs-observables/

---

## Promises are unicast - this is wrong, which means promises will be executed only once, even if we call then() multiple times. (One resolve for multiple then method, next resolve will be happened check example 279)

Multicast: check 279 example

Observable (Unicast) vs Subject (Multicast) ? - Each subscribed Observer owns an independent of the Observable

Let's see an example of observable (What is meant by unicast)

import { Observable } from "rxjs";

var i = 1;
var observable = new Observable(observer => {
try {
observer.next(i);
observer.next(i + 1);

    observer.complete();
    i += 1;

}
catch (err) {
observer.error(err);
}
});

var subscriber1 = observable.subscribe({
next(val) {
console.log(`Observer1: ` + val);
}
});

var subscriber2 = observable.subscribe({
next(val) {
console.log(`Observer2: ` + val);
}
});

// output
Observer1: 1
Observer1: 2
Observer2: 2
Observer2: 3

You can see that in about example I subscribed to the observable "two times but the first subscription does not get the updated value of observable".
That is each subscribed Observer owns an independent of the Observable.

---

Let's see an example of observable (What is meant by multicast)

import { Subject } from "rxjs";
var subject = new Subject<number>();
var subscriber1 = subject.subscribe({
next(value) {
console.log(`subscriber1: ` + value);
}
});
subject.next(2);
var subscriber2 = subject.subscribe({
next(value) {
console.log(`subscriber2: ` + value);
}
});
subject.next(3);
// output
// subscriber1: 2
// subscriber1: 3
// subscriber2: 3

In the above example, you can see that each time we update the value of the subject, both subscribers get triggered and execute the
individual's callback functions.

---

below example will clear our doubts:

---

import { Observable } from 'rxjs';

/****\*\***** Promise ******\*\*******/
const prom = new Promise((resolve, \_reject) => {
//only this value will be resolved
resolve(1);

//once value is resolved, that's the end,we can't resolve multiple values, so below resolve() will be ignored
resolve(2);
resolve(3);
});

prom.then((value) => {
console.log('resolved promise value - ', value);
});

prom.then((value) => {
console.log('resolved promise value - ', value);
});

/****\*\*\*\***** Observable ****\*\*\*****/
const obs = new Observable((subscriber) => {
//multiple values can be emitted
subscriber.next(1);
subscriber.next(2);
subscriber.next(3);
subscriber.next(4);
setTimeout(() => {
subscriber.next(5);

}, 2000)
});

obs.subscribe((value) => {
console.log('value emitted from obs - ', value);
});

obs.subscribe((value) => {
console.log('value emitted from obs - ', value);
});

---

You could tend to use Observables everywhere.

The three types of values that an observable can deliver to the subscriber are:

observer.next(‘hii’);//this can be multiple (more than one)

observer.error(‘error occurs’) // this call whenever any error occus.

Observer.complete(‘completion of delivery of all values’) /

Observable handle multiple value over time .. promisc handle single value

**Observables are cancelable
**You can cancel observables by unsubscribing it using the unsubscribe method whereas promises don’t have such a feature.

Best example is Youtube

\*\*Observables provide many operators - There are many operators like map, forEach, filter etc.

25. what is observable - Observable c

26. callack vs promise vs observable vs async await

In callback function is argument itself the function

calling the function within function

promise -> mainly came for deep nesting callback
it is made available in js libraries
cleanly tell then after then calling back every function,
great for deeper layer of nesting,
it can handle one value,
you send http request you get response resolve the promise you done

Observable ->
It is not javascript libraries.
it is made available in Rxjs libraries
it can handle streams of data there you are wrap and observable around the click listener you listen the every new click
and emit a new value on every new click that's not possible like this with promises

https://itnext.io/javascript-promises-vs-rxjs-observables-de5309583ca2#aebe

27. what is http - It was designed for communication between web browsers and web servers and application-layer protocol for transmitting hypermedia documents, such as HTML

28. how to link css file in html
 <link> element to link to an external CSS file
 To use an external style sheet, add a link to it in the <head> section of each HTML page:
 <head>
  <link rel="stylesheet" href="styles.css">
</head>

29. classes vs id -
used to identify one single element in our HTML vs a Class can be used to identify more than one HTML element.
<div id="one">first text for one</div>
<div id="one">second text for one</div>

var ids = document.getElementById('one');
Expand snippet
ids contain only first div element. So even if there are multiple elements with the same id, the document object will return only first match.
https://stackoverflow.com/questions/5611963/can-multiple-different-html-elements-have-the-same-id-if-theyre-different-eleme#:~:text=ids%20contain%20only%20first%20div,will%20return%20only%20first%20match.

30. What is iframes - An HTML iframe is used to display a web page within a web page.

31. angular life cycle hook - https://codecraft.tv/courses/angular/components/lifecycle-hooks/

ngDoCheck and ngOnChanges should not be implemented together on the same component.
constructor
This is invoked when Angular creates a component or directive by calling new on the class.

ngOnChanges
Remember that ngOnChanges is specific to bound inputs on the component. This means if you don't have any @Input properties on a child,
ngOnChanges will never get called. ngOnChanges is specific to @Input properties on a child component.
Invoked every time there is a change in one of th input properties of the component.
When should you use ngOnChanges?
Use ngOnChanges whenever you want to detect changes from a variable decorated by @Input. Remember that only changes from the parent component
will trigger this function.
ngOnChanges simply adds the benefit of tracking those changes with previous and current value.
More information and demo - https://www.stackchief.com/blog/ngOnChanges%20Example%20%7C%20Angular

ngOnInit
Invoked when given component has been initialized.
This hook is only called once after the first ngOnChanges
executes after data-bound properties are displayed and input properties are set.
ngOnInit() will still execute regardless of whether or not implements OnInit is included in the class definition.
When should you use ngOnInit?
Use ngOnInit() whenever you want to execute code when the component is FIRST initialized. Remember that ngOnInit() only fires once after data-bound properties
are set. This means ngOnInit() will execute if you refresh your browser or first initialize a component but not when other events occur.

ngDoCheck
Invoked when the change detector of the given component is invoked. It allows us to implement our own change detection algorithm for the given component.
ngDoCheck() is called whenever change detection is run.

ngAfterContentInit
Invoked after Angular performs any content projection into the component’s view

ngAfterContentChecked
Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.
In the above example, ngAfterContentChecked() gets called after ngDoCheck.
ngAfterContentChecked() will also get called anytime the clickMe() function is triggered.

ngAfterContentChecked can be useful if you want to implement additional initialization tasks after  
Angular has fully initialized the component/directive's content.

ngAfterViewInit
Invoked when the component’s view has been fully initialized.
ngAfterViewInit() is called after all child components are initialized and checked.
ngAfterViewInit is useful when you want to call a lifecycle hook after all child components have been initialized and checked.

ngAfterViewChecked
Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.
ngAfterViewChecked() is called after every subsequent ngAfterContentChecked.
ngAfterViewChecked is useful when you want to call a lifecycle hook after all child components have been initialized and checked.

ngOnDestroy
This method will be invoked just before Angular destroys the component.
Use this hook to unsubscribe observables and detach event handlers to avoid memory leaks.

32. how many ways to share the data in angular -

service - no relational component
router state - 9 ways to share - https://www.turing.com/kb/9-ways-to-pass-through-angular-routerstate
@input and @output - relational component
@ViewChild
localstorage
session storage
indexedDb

33. tell me about ur project

34. after before in css - pseudo elements
    before -Insert some text before the content of each <p> element
    after -Insert some text after the content of each <p> element

35. npm start vs ng serve
    npm start - npm start will run ng serve.
    npm start will run whatever you have defined for the start command of the scripts object in your package.json file.

package.json - inside has script object, root directory and dependencies information like that versions, devDependencies, platforms object

angular.json - can configure "workspace configuration" and project-specific configuration defaults for build and development tools provided by the Angular CLI

It has default configuration of environment, build configuration and angular cli command configuration for example: serve, lint, test,

36. what is new in angular version and its features - angular 12

37. what is angular 11 features - lazy loading support for named outlet, resolve guards can able to generate in angular cli, updated HMR (Hot Module Replacement) support, automatic inlining of fonts, improved
    reporting and logging while compiling, ESlint, Typescript 4.0 supported, webpack 5, updated language service with ivy engine, removed IE 9, 10 and mobile support completely

If you want to update angular latest version use - ng update @angular/cli @angular/core

38. ng-container vs ngClass vs ng-template vs ng-content

ng-content is used to display children in a template. https://www.geeksforgeeks.org/ng-content-in-angular/ (Put it in child component and content to be loaded in parent component as your wish for different from each parent)
ng-template allows you to group some content that is "not rendered directly" but can be used in other places of your template or you code. for eg: <ng-template #loader></ng-template>
<ng-container> doesn't interfere with styles or layout because Angular doesn't put it in the DOM.
ng-container is used as a non-rendered container to avoid having to add a span or a div, and

40. object and array inbuild methods -

object methods - for in ( used for iterating the keys) , delete keywords.

array methods - for of (used for iterating the index value), push , pop(The pop() method removes the last element from an array),
shift() method removes the first array element, unshift() "add" a new element to an array (at the beginning),

primitive and non-primitive:
Primitive data types: The primitive data types include boolean, number and string.

Non-primitive data types: The non-primitive data types include Objects and Arrays.

The fundamental difference between primitives and non-primitives is that primitives are immutable and non-primitives are mutable.

Primitive - it will compare by values of two variable ..
For Example:
var number1 = 5;
var number2 = 5;
number1 === number 2; // true

Non-Primitive - It will compare by reference not values .
var obj1 = { 'cat': 'playful' };
var obj2 = { 'cat': 'playful' };
obj1 === obj2; // false

var arr1 = [ 1, 2, 3, 4, 5 ]; // 123
var arr2 = [ 1, 2, 3, 4, 5 ]; // memory 124

arr1 === arr2; // false

---

Two objects are only strictly equal if they refer to the same underlying object

var obj3 = { 'car' : 'purple' }
var obj4 = obj3;
obj3 === obj4; // true

---

var obj1 = {a: 2, b: 3}

obj2 = obj1
obj2.a = 3
console.log(obj1.a) // as 3 becoz , it will stored in same memory location for both variable ..

let vs var -

let - it is block scope and let variables are scoped to the immediate enclosing block denoted by { }

'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo' is replaced.

let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared

41. how to get ionic storage

what is prototype - All JavaScript objects inherit properties and methods from a prototype.

https://www.w3schools.com/js/js_object_prototypes.asp

Lazy loading:

If you have more feature module in our application and some feature module ""not need for initially"", that time we can use lazy loading.
a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
Create the feature with the CLI, using the --route flag.

Achievement - Web socket java print, duplicate tab using jquery

Reducing bundle size check with GTmetrix (65 to 71 for 100%), replacing heavy package into light weigh package, image, lazy loading,

enough to load viewport data from api - whenever scrolling only .. not singleshot
dont use nested div .. becoz it will increasing computation for avoiding jarking..

ssr, aot and service worker (not loading,it will loaded immediately per sec) -
we can store asset in cache using service worker.

SSR - renders Angular applications on the serve -- https://angular.io/guide/universal

purpose and benefit for ssr:
Performance benefit for our customers
Consistent SEO performance - angular not done ssr - Servers can do all the hard work so that your user's devices don't have to. The other big winner with this approach is Search Engine Optimization (SEO).
When search engines crawl your website, all the contents of your page will come in on that first load. SEO works better with SSR
domain as amazon

ngZone - we can run outside and inside angular zone.. we can normally everything run in ngZone.. change detection not detected when using ngZone
If you use third party, It would be run on outside ngZone .. that time we should use ngZOne..
NgZone enables us to explicitly run certain code outside Angular's Zone
ngZone donot want to use in our app.. set noop in configuration
mainly for performance
Run this code inside Angular's Zone and perform change detection
this.zone.run

If you dont want to detect checkdetection when performance asynchronous operation.. you should use ngZone.runOutsideAngular()

If you want run third pardy function inside of ngZone .. you can use ngZone.run() {
}

difficulty - overriding angular material class (mat-tab-header)

View Encapsulation in Angular defines how the styles defined in the template affect the other parts of the application

In Angular, a component's styles can be encapsulated within the component's host element so that they don't affect the rest of the application
ViewCapsulation - it want to reflected with nested or child component.. emulated , none and ShadowDom

Styles in an Angular App, "can be defined at a global level or they can be defined at the component level".

emulated - Style will be scoped to the component. It will be normal component like that

none -

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
encapsulation: ViewEncapsulation.None
})
export class AppComponent {
title = 'parent component';
}
you will find h1 style has applied to both components

native (shadowDom) (Both)- parent css class affect to child component also and encapsulation (scoped)

onPush - Only one time invoked life cycle hook. Since the change detection strategy is updated to OnPush, the component will not refresh/re-render, if the parent component’s property updates.
In the above code since we do not have any @Input property getting updated, the component will not re-render and this would be more performant.

Use the CheckOnce strategy, meaning that automatic change detection is deactivated until reactivated by setting the strategy to Default (CheckAlways)

Improve performace by minimizing change detection cycles.
Component only checked when:

1.  @Input proerties changes,
2.  Event emits,
3.  A bound Observable emits in the template using async pipe

OnPush change detection instructs Angular to run change detection for a component subtree only when:

this. errorMessgae = err; // when api call.. so we should convert it to observable and binding that observable using the async pipe..
It can improve display performance..

ChangeDetectRef.markForCheck -- after used onpush,

polling - thread which is continuous checking .. it's like web socket

Flex-layout

performance - async pipe, trackby , lazyloading, preloading, find with webpack analyzer package, make sharedModule

do you know about preloading strategy? https://blog.bitsrc.io/preloading-strategies-boost-up-angular-app-loading-time-ffb19da63155

Loading modules asynchronously in the background is called preloading modules. This technique should be used with lazy loading.

preload applied only within lazy loading feature module.

two types:
preloadingAllmodule
customepreloadingmodule - return func() and of(null)

what is service and directive

An Angular service is a singleton - which means it is instantiated only ONCE
If you need to share data between components then you can use a service.

Dependency Injection - @Injectable() - allows a class receive dependencies from another class.
Most of the time in Angular, dependency injection is done by injecting a service class into a component or module class.
Angular's DI framework provides dependencies to a class upon instantiation.
You can use Angular DI to increase flexibility and modularity in your applications.
Dependency injection is the ability to add the functionality of components at runtime

Dependency injection (DI), is an important application design pattern in which a class asks for dependencies
from external sources rather than creating them itself. Angular comes with its own dependency injection framework
for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on
other services throughout your application.

directive -
three types:
structural directive - directives that change the DOM layout by adding and removing DOM elements. *ngIf, *ngFor
attribute directive - directives that change the appearance or behavior of an element, component, or another directive.
custom directive or components - directives with a template. This type of directive is the most common directive type.
Examples - barcode scan directive, debounce directive, disable element directive,

which will be run first - https://stackoverflow.com/questions/51691628/which-file-runs-first-in-an-angular-4-app-when-i-run-the-app
angular.json -> angular-cli configuration file main.ts -> Angular module bootstrap application file. Set the entry module for your application.
app.module.ts -> Based upon your entry module, it configures which component will load first from that module and what others dependency modules,
components, pipes, services.

trackBy - Angular re-render only those items that have changed, rather than reloading the entire list of items.

how to delete object's key and get object length? delete keyword and for in with manual count or Object.keys(obj).length

geolocation track - last

---

ecma 6 features - http://es6-features.org/#RegularExpressionStickyMatching - block scope variable (let), string interpolation ( `${a}`), const, set,
spread operator - // used for clone the values
rest operator - Rest parameter syntax will create an array from an indefinite number of values
function f (x, y, ...a) {
return (x + y) \* a.length (as changed array ["hello", true, 7])
}
f(1, 2, "hello", true, 7) === 9 , spread operator - var other = [ 1, 2, ...params ] like clone , for of, promise, arrow function, export import.

If you want to merge multiple argument into an array use 'Rest Operator' like below,

const toArray = (...arg) => {
return arg
}

---

destructing: Destructuring is used to create varibles from array items or object properties
Which is used to create variable of each and every index items in the array

[a, b, ...rest] = [10, 20, 30, 40, 50]; If type is array, it will be creating as array
[a, b, ...rest] = [10, 20, 30, 40, 50];

and also used for destructuring the properties of the object or the element of the array
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40} If type is object, it will be creating as object

## IF YOU WANT MORE INFORMATION ABOUT SPEAD OPEATOR GO TO LAST

ngRx -NgRx is a framework for building reactive applications in Angular. GO TO BELOW

whole application is stored in an object tree within a single store.

Boostrap 3 vs boostrap 4 and tell me class of the boostrap - justify-content-centre, row , col
boostrap 4 - xl is avaiable in b4 only, rem (used for font-size), scss support

how to order the one object(content) in html (ans : order in flex) parent:{display: flex;} child: {order: 3}

typescript api call - In order to make the API call, we will use the browsers fetch API, which returns a Promise type. - fetch('/users.json')
// the JSON body is taken from the response
.then(res => res.json())

typescript 2.1 features

how to set object type in a variable - using interface

how to set array type in a variable - Array<number> (Generic array type), number[], hero[], Observable<Hero[]>

viewChild
view child - @ViewChild and @ViewChildren decorators in Angular provide access to "child elements in the view DOM" by setting up view queries
View queries are set before the ngAfterViewInit callback is called.
A template reference variable as a string (e.g. query <my-component #cmp></my-component> with @ViewChild('cmp'))
Any provider defined in the child component tree of the current component (e.g. @ViewChild(SomeService) someService: SomeService)
Any provider defined through a string token (e.g. @ViewChild('someToken') someTokenVal: any)
A TemplateRef (e.g. query <ng-template></ng-template> with @ViewChild(TemplateRef) template;)

If you wish to gain access to a DOM element, directive or component from a parent component class then you rely on Angular 7 ViewChild. Read more about Angular 7 ViewChild.

What { static: true } does?
Having static set to true will result in telling angular that we need to get the reference to that target element as soon as the component is created, however this means that
we are going to get the reference
before our element had a chance to bind the inputs and init it's view.

viewChildren - Use to get the QueryList of elements or directives from the view DOM

https://dev.to/danielpdev/how-to-use-viewchild-decorator-in-angular-9-i0

web worker - A web worker is a JavaScript running in the background, without affecting the performance of the page.

repeated and non-repeated item in the array

function repeatedAndNonRepeatedItemInArr() {
const a = [3, 6, 1, 6, 8, 3, 9, 2, 5, 2, 8];
const repeatedNum = a.filter((item, i) => {
// console.log(item, i, +(a.indexOf(item) !== i));
return (a.indexOf(item) !== i)
});
// console.log(repeatedNum);
const nonRepeatedNum = a.filter((item, i) => {
// console.log(a.indexOf(item), a.lastIndexOf(item));
return (a.indexOf(item) === a.lastIndexOf(item))
});
// console.log(nonRepeatedNum);
}
repeatedAndNonRepeatedItemInArr();

duplicate letter count in a string without using predefined function

Webpack:
it is build automation tool.
it is doing all the script and style set combine them into bundle and then minimized those bundle
vendor.bundle - they set all third-party libraries
Whenever u made any changes in any files like html, script.. webpack automatically refresh
your bundle and recompiled your application.

Routing :
Routing is a core feature in Angular. This feature is useful in building SPA (Single Page Application) with multiple views
Routing in Angular helps us navigate from one view to another
allows client side navigation and routing between the various components.
if you want to create routing file using angular cli - use --routing
--routing=false - it will skip the routing file
After configuring the routes, the next step is to decide how to navigate
https://www.techiediaries.com/routing-angular-router/

https://stackoverflow.com/questions/45279191/ionic-3-component-vs-page

Utility typechecking - all properties of Type set to some instruction - partial<type>, readOnly<type>, omit<>, exclude, extract

Subject -  
 Subjects as purely a way to both pull and push values using streams
A Subject is both an Observable and an Observer that allows values to be multicasted to many Observers
you can subscribe to a Subject to pull values from its stream
You can pass data to the subject created using the next() method or you can feed values to the stream by calling the method next()
send only upcoming value and doesn't hold a value

BehaviourSubject -
A BehaviorSubject holds one value. When it is subscribed it emits the value immediately;
it will also replay the current value whenever an observer subscribes to it.
Sends one previous value and upcoming values;

BehaviorSubject can be created with initial value: new Rx.BehaviorSubject(1)
You can get current value synchronously by subject.value;
BehaviorSubject is the best for 90% of the cases to store current value comparing to other Subject types;
var subject = new Rx.BehaviorSubject(0); // 0 is the initial value
subject.next(0);

subject.subscribe({
next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
next: (v) => console.log('observerB: ' + v)
});

subject.next(3);
console.log('Value async:', subject.value); // Access subject value synchronously
/\*
Console output:
observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3
Value async: 3

ReplaySubject - Sends all previous values and last values

var subject = new Rx.ReplaySubject(3); // buffer 3 values for new subscribers

subject.subscribe({
next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
next: (v) => console.log('observerB: ' + v)
});

subject.next(5);

/\*
Console output:
observerA: 1
observerA: 2
observerA: 3
observerA: 4
observerB: 2
observerB: 3
observerB: 4
observerA: 5
observerB: 5

AsyncSubject

Sends one latest value when the stream will close

var subject = new Rx.AsyncSubject();

subject.subscribe({
next: (v) => console.log('observerA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
next: (v) => console.log('observerB: ' + v)
});

subject.next(5);
subject.complete();

/\*
Console output:
observerA: 5
observerB: 5

rxjs - RxJS is a library for composing asynchronous and event-based programs by using observable sequences

null is an assigned value.
It means nothing.
undefined typically means a variable has been declared but not defined yet

NAN(a)

indexOf(index)

transpiling
constructor vs ngOnInit
Constructor is used to create new instance of a class ...
The ngOnInit is called after the constructor is executed.
In constructor Angular initializes and resolves all class members so in ngOnInit you can
initialize work and logic of the component. ngOnInit guarantees that your bindings are
readily available.
[data binding in angular -
Event binding allows you to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.
property binding - Property binding in Angular helps you set values for properties of HTML elements or directives (component). - Two way data binding , one way binding
[src] [ngClass] <app-item-detail [childItem]="parentItem"></app-item-detail>

httpclient module

In Angular, a module is a mechanism to group components, directives, pipes and services that are
related, in such a way that can be combined with other modules to create an application.
sharedModule

camera

div - for dividing the content

span - <span> tag is an inline container used to mark up a part of a text, or a part of a document.

for in vs for of

metadata in html - Metadata is used by browsers (how to display content or reload page), search engines (keywords),

metadata in angular - metadata is the information of the class behaviour

JavaScript
Whatever code is written in JavaScript can be converted to TypeScript by changing the extension from .js to .ts.
Typescript?
TypeScript Code is converted into Plain JavaScript Code
TypeScript code can be run on any browser, devices or in any operating system. TypeScipt is not specific to any Virtual-machine etc
TypeScript supports JS libraries

JavaScript vs TypeScipt
TypesScript is known as Object oriented programming language whereas JavaScript is a scripting language.
TypeScript has a feature known as Static typing but JavaScript does not have this feature.
TypeScript gives support for modules whereas JavaScript does not support modules.
TypeScript has Interface but JavaScript does not have Interface.
finally typescript transpile into javascript
TypeScript compiler can compile the .ts files into ES3,ES4 and ES5 also.

Is there multiple inherentence in ts? Using interface it will possible - https://codeburst.io/multiple-inheritance-with-typescript-mixins-d92d01198907

How to do method overloading in ts?

What is Async and await? https://javascript.info/async-await

Services workers in angular? - turning an application into a Progressive Web App (also known as a PWA). it is supports PWA
a service worker is a script that runs in the web browser and manages caching for an application.
it make our web application downloadable and installable, just like a native mobile application.

Ngif vs hidden directive?

ngIf will comment out the data if the expression is false. This way the data are not even loaded, causing HTML to load faster.

[hidden] will load the data and mark them with the hidden HTML attribute. This way data are loaded even if they are not visible.

display:none vs \*ngIf="false" ?

display:none - DOM elements will be exists still once you applied display: none and It is hidden and takes no space.

\*ngIf="false" - DOM elements won't be exists.

Is nice to use JQuery in Angular?

reactive form vs template-driven form: https://www.pluralsight.com/guides/difference-between-template-driven-and-reactive-forms-angular

Template-driven forms make use of the "FormsModule", while reactive forms are based on "ReactiveFormsModule".
Template-driven forms are asynchronous in nature, whereas Reactive forms are mostly synchronous.
In a template-driven approach, most of the logic is driven from the template, whereas in reactive-driven approach,
the logic resides mainly in the component or typescript code. Let us get started by generating a component and then we'll update our form code.
reactiveforms everything performs in ts only

EsLint - ESLint is a JavaScript linter that enables you to enforce a set of style, formatting, and coding standards for your codebase

array.some - it will return boolean .. while first index iterating, value return as true. then not iterating next one .. looping stopped automatically

change detection -

https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs

forkJoin - The forkJoin() operator allows us to "take a list of Observables and execute them in "parallel"".
Once every Observable in the list emits a value, the forkJoin will emit a single Observable value containing a
list of all the resolved values from the Observables in the list.

MergeMap - This creates a nested Observable in an Observable.
we use the mergeMap also known as flatMap to map/iterate over the Observable values

https://ultimatecourses.com/blog/intro-to-angular-http-interceptors
interceptor - Interceptors allow us to intercept incoming or outgoing HTTP requests using the HttpClient

    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
    HttpInterceptor interface

    next.handle

Handling HTTP Headers - we can call the clone method to modify the request object and return a new copy - httpRequest.clone({ setHeaders: { API_KEY } }).
HTTP Response Formatting
HTTP Error Handling - RetryInterceptor

life cycle hooks

decorator - @Injectable() for service

sharing components - it is used for sharing directive componet, pipe over another component

commonModule - It imports the CommonModule because the module's component needs common directives.

coremodule - payment service, alertservice, loader service

sharing data

viewChild

dependency injection

token in application - Your Angular app can talk to a backend that produces a token. The Angular app can then pass that token in an Authorization header to the backend to prove
they’re authenticated. The backend should verify the JWT and grant access based on its validity.

it is for authentication purpose .. will make fully private route..
passing token into header .. generated from backend

behaviourSubject

transpilation typescript

directives

rxjs operators

observable

subject

data binding

interpolation

pipe

custom pipe in angular - image pipe, search pipe, multi language pipe

ngContainer

ngContent

ngTemplate

Bootrapping component in angular - Every application has at least one Angular module,
the root module that you bootstrap to launch the application is called as bootstrapping module
it can able to see in main.ts

AOT - Faster rendering With AOT, the browser downloads a pre-compiled version of the application. it can render the application immediately,
without waiting to compile the app first

ng serve --aot

just-in-time (JIT) compiler. -
JIT vs AOT:
slower than aot .. need to compile the application when the running the application first time.
it download the compiler and comiple the application before the displaying AOT : it doesn't want to download the compiler already compiles the code when building the application
aot :half of the bundle size willbe reduce compare to jit

JIT: ng serve , ng build AOT: ng serve --aot, ng build --aot, ng build --produces

scss vs sass -
https://dev.to/timothyrobards/the-main-features-of-sass-47k2
https://epsi-rns.gitlab.io/frontend/2019/06/21/sass-loop-spacing-class/
SaSS dont need parenthesis and semicolon but SCSS need parenthesis(Bracket{})
SCSS is full of advanced features.

@import "framework/bootstrap";
SASS allows us to use nested syntax

Scss has variable support using $ symbol
Instead of repeating #ff0000 many times in your CSS file, in SCSS, we can just set $red: #ff0000 once and use it as many times as we want.
SASS adds the feature of @import which lets you import your customized SCSS files.Example:@import "my theme";
can enable to perform inheritance using @extend
You might be familiar with the reference symbol, which allows you to reference a parent element as such:
.block {
&.red {
color: red;
}
Partials nesting . inside .
Interpolation
@ directive

@mixin directive lets you create CSS code that is to be "reused throughout" the website.
Mixins accept arguments.

@mixin bordered($color, $width) {
border: $width solid $color;
}
The @include directive is used to include a mixin.
.myArticle {
@include bordered(blue, 1px); // Call mixin with two values
}

.myNotes {
@include bordered(red, 2px); // Call mixin with two values
}
@extend is used in SASS to inherit(share) the properties from one selector to another.
The @extend directive is useful if you have almost identically styled elements that only differ in some small details
.button-basic {
border: none;
padding: 15px 30px;
text-align: center;
font-size: 16px;
cursor: pointer;
}

.button-report {
@extend .button-basic;
background-color: red;
}

angular material - dialog box

how to override angular material classes - ng-deep

what are the things required for responsive design?

text align right vs float right

encapsulation

:host

how to add third party package in your application -

:host - The use of the special \_nghost-c0 will ensure that those styles are scope only to the app-root element, because app-root gets added that property at runtime:

:host - this is used for specific selector (<app-heroes>) style alone .. it can applied for all the elements (all the inputs inside the components( <app-heroes>))

---

Scss compare to css what are the advanced features there? -

class 1 has some set of style .. i want to recreate those set of styles in class 2 - https://stackoverflow.com/questions/9560170/including-another-class-in-scss
use @extend or @mixin @include
what are the simple things for creating responsive web page

text-align: left vs float: left

we have two divs .. one has content and another with image

for desktop need to align text in the left side and image in the right side
for mobile view, image at the top and text will be below to the image - flex-direction: reverse

how to share data between two component which is the non-relation to each other .. how to achieve this

have you implemented routing in your application?

some router we will used forRoot and some we will used forChild .. when will used forChild and forRoot
forRoot creates a module that contains all the directives, the given routes, and the router service itself. forChild creates a module that contains all the directives and
the given routes, but does not include the router service.

how will you pass the data and how will retrieve the data in routing - 4 ways

using routes array "data" property like path component, get activatedroute.data

set routerLink or this.router.navigate(['form', '0001']), and get ActivatedRoute.params

set query params , get ActivatedRoute.queryParams

how to use one same component in two module - sharedModule

In the template, product list - need to check whether the product is available or not

have to used any custom directive

have to used any custom pipe

when trying to fetch the data to server with endpoint without subscribe -- Is it possible?

how to include third party libraries in application

Have you used jquery in applicaion

Have you used rxjs operators?

How to override angular material dialog content - ngdeep

unit testing service - stub

cdk in angular - The Component Dev Kit (CDK) is a set of behavior primitives for building UI components.
Accessibility. Utilities for screen readers, focus and more. Bidirectionality. Utilities to respond to changes in LTR/RTL layout direction

how to make responsive using boostrap -
basic setup:

 <meta name=”viewport” content=”width=device-width, initial-scale=1.0">  media queries

- meta tag that tells the browser to set the width of the website according to the device width
- It also set scaling to 1 which equates to default website
  we tell the browser that we are going to build a responsive website

link Bootstrap libraries:
install boostrap using npm i boostrap --save

  <link rel=”stylesheet” href=”css/bootstrap.css”>
<link rel=”stylesheet” href=”css/bootstrap-responsive.css”> or set the path in styles of the script in angular.json
  
  
  How to make responsive website using angular material
  Angular Material all layout - https://material.io/design/layout/responsive-layout-grid.html#whiteframes
  
   BreakpointObserver utility of the Layout package   
   mat-grid-list is a two-dimensional list view that arranges cells into grid-based layout
   
   For Normal Html Css responsive:
   viewport setup 
   media queries
   
   
   there are two type of layout available in bootstrap.
   1.Fluid Layout (.container-fluid) - Fluid layout has 100% width.
   2.Fixed Layout (.container) - its means max-width changes at each breakpoint - Fluid layout continuously resizes 
   as you change the width of your window/browser by any amount, leaving no extra empty space on the sides ever Hence it is named as “fluid layout”.
   
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)  
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

5)What function you can use to wrap a page content
container

6)grid system in Bootstrap:
By using the grid system, we can make up to 12 columns across a page.

There are different classes that have been defined for this for the UI purpose.
8)css box model
9)css position
10)pseudo classes
11)pseudo elaments
12)block level elements - div tag main tag table tag footer tag
13)inline elements - span label input
14)semantic elements -
15)non semantic elements
16)how css can add: using link tag
Inline style - by using the style attribute inside HTML elements.
Internal - by using a <style> element in the <head> section.
External - by using a <link> element to link to an external CSS file.
17)life cycle hooks
18)decorator
19)attributes
20)behaviour subject
21)observable
22)diff b/w observable and promise
23)reactive form and template driven form
24)ng-template
25)ng-container
26)ng-content
27)diff b/w JS and Angular
28)Authguard and its types
There are five different types of guards

CanActivate - a CanActivate guard that prevents unauthorized users from accessing the admin feature area.
CanActivateChild - You can also protect child routes with the CanActivateChild guard
it runs before any child route is activated.
CanDeactivate - handling unsaved changes
CanLoad- The canActivate guard still allows the component for a given route to be activated (but not navigated to).
If we wanted to prevent activation altogether, we could use the canLoad guard.
  
 PreloadAllModules strategy does not preload some couple of feature which is protected by a canLoad is blocked it.
The CanLoad Guard prevents the loading of the Lazy Loaded Module. We generally use this guard when we do not want to unauthorized user to
navigate to any of the routes of the module and also stop then even see the source code of the module.

            The Angular provides canActivate Guard, which prevents unauthorized user from accessing the route. But it does not stop the module from being
    		downloaded. The user can use the chrome developer console to see the source code. The CanLoad Guard prevents the module from being downloaded.

    		Actually,CanLoad protects a module to be loaded but once module is loaded then CanLoad guard will do nothing.
    		Suppose we have protected a module loading using CanLoad guard for unauthenticated user. When user is logged-in then that module will be applicable
    		to be loaded and we will be able to navigate children paths configured by that module. But when user is logged-out, still user will be able to
    		navigate those children paths because module is already loaded. In this case if we want to protect children paths from unauthorized users,
    		we also need to use CanActivate guard.
    need to read once - https://stackoverflow.com/questions/42026045/difference-between-angulars-canload-and-canactivate#:~:text=The%20CanLoad%20Guard%20prevents%20the,source%20code%20of%20the%20module.

Resolver - Resolver acts like middleware, which can be executed before a component is loaded
Resolve guard is used in the scenario when we want to ensure whether there is data available or not before navigating to any route.
If there is no data then it has no meaning to navigate there. It means we have to resolve data before navigating to that route.
29)lazy loading
30)service
31)how many ways we can share data between components
32)interceptor
33)viewchild
34)routing
35)load children
36)data binding
37)angular 11 features
38)diff b/w components and directives
39)component in angular
40)diff b/w hostlistener and hostbinding
@HostListener() function decorator allows you to handle events of the host element in the directive class.
@HostBinding() function decorator allows you to set the properties of the host element from the directive class.
@HostBinding('style.border') border: string;
@HostListener('mouseover') onMouseOver() {
this.border = '5px solid green';
}
41)angular.json
project-specific configuration defaults for build and development tools provided by the Angular CLI.
42)package.json
Package.json file take care of all those dependencies and the modules need by your project.
for versioning your app as this file give information to npm that allows it to identify the project as well as handle the project’s dependencies.
43)self intro
44)about current project

reactive forms vs template-driven forms

ng update

router outlet - used to display the dynamic component view
router links - used to navigate one component to another using component path

Wildcard route - does not match any route while routing , angular goes to wild route . it is path as '\*\*'
Eg: pagenot found

Angular Ivy is a new rendering engine for Angular. You can choose to opt in a preview version of Ivy from Angular version 9.
Generated code that is easier to read and debug at runtime
Faster re-build time
Improved payload size
Improved template type checking

TestBed is an api for writing unit tests for Angular applications
easier way to create components, handle injection, test asynchronous behaviour and interact with our application.
Protractor is an end-to-end test framework for Angular

FormBuilder is used for easily creating instances of a FormControl, FormGroup, or FormArray

Visited ng-touched ng-untouched
Value has changed ng-dirty ng-pristine
Value is valid ng-valid ng-invalid

this.myform.reset();

How do you get the current route? console.log(this.router.url);

What is the benefit of Automatic Inlining of Fonts?
During compile time, Angular CLI will download and inline the fonts that your application is using \
this performance update speed up the first contentful paint(FCP) and this feature is enabled by default
in apps built with version 11.

The describe(string, function) function defines what we call a Test Suite, a collection of individual Test Specs.
The it(string, function) function defines an individual Test Spec, this contains one or more Test Expectations.
The expect(actual) expression is what we call an Expectation. In conjunction with a Matcher it describes an expected piece of behaviour in the application.

ngZone

set in ecma6 - you enable to create object like array with new keyword .. it has some properties similar like array properties.. For example: filter() has() clear()

modelviewController: - pattern which separates an application into three main logical components: the model, the view, and the controller.
Each of these components are built to handle specific development aspects of an application
model - For example, a Customer object will retrieve the customer information from the database, manipulate it and update it data back to the database or use it to render data.
View - For example, the Customer view will include all the UI components such as text boxes, dropdowns, etc. that the final user interacts with.
Controller - For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the
Customer Model. The same controller will be used to view the Customer data.

how to performance -

what are the difficulty facing - (overriding css class - mat-tab-header),

1000 of data - viewControl - infinityscroll and Virtual Scrolling available in angular cdk and pagination and

1000 of data rendering directive - repeated directive (used in ngFor for loop the data)

changeDetection

reactive form module benefit

performance

changeDetection.onPush - only once

changeDetectionRef.markasChecked

bubbling and capturing
events “bubble” from the inner element up through parents like a bubble in the water.

capturing - from outer element like start from html body form div

closure - A function in JavaScript has access to any variables defined in the outer scope.

function outerFunction(arg) {
var variableInOuterFunction = arg;

    function bar() {
        console.log(variableInOuterFunction); // Access a variable from the outer scope
    }

    // Call the local function to demonstrate that it has access to arg
    bar();

}

outerFunction("hello closure");

fis

how to handle authentication in angular - o-auth, google

how to set authentication in angular

---

map - creates a new array populated with the results

filter - return new array with matched values and does not change the original array.

object length

directive

behaviour

module

data sharing

dependency injection

promise and observable

data binding and types

custom pipe - filtering checks and image pipe and search pipe and multilanguage pipe, check status pipe

dynamic component creation possible for angular - https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d

state management in angular - https://stackoverflow.com/questions/52471796/what-is-state-management-in-angular-and-why-should-i-use-it

http interceptor

how can we secure routing in angular - route Guard

runtime exception - A runtime error is an error that occurs during the running of the program .. undefined error, type error ... overcome or handle with try catch
what is prefix in angular.json

polyfills - deprecated some feature in html and css.. fallback to that one and overcome or resolved that features ..

checkPalindrome - https://www.programiz.com/javascript/examples/palindrome

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';

}

// take input
const string = prompt('Enter a string: ');

ngOnChanges

https://update.angular.io/?v=7.0-11.0

    https://regex101.com/r/tQ8yW2/1

structure of angular application

---

Javascript:

If you want to create a variable in js, use var, let, const

const person = {
name: "Max",
age: 26,
greet: () => {
console.log("Hi , I am " + this.name)
// name will be undefined because, arrow func inside not global
// object use function or bind() or greet() { console.log("Hi , I am " + this.name) } inside of arrow func
// becoz, it will referring the greet method alone ..not referring person object anymore
}
}

---

arrow function sometimes called as named function

just one line of code
no function keyword
no return keyword
no curly braces {}

It’s much shorter!

2. Single parameter
   x => 42 || (x) => 42

In the ES5 example, .bind(this) is required to help pass the this context into the function. Otherwise, by default this would be undefined.

// ES5
var obj = {
id: 42,
counter: function counter() {
setTimeout(function() {
console.log(this.id);
}.bind(this), 1000);
}
};

ES6 arrow functions can’t be bound to a this keyword, so it will lexically go up a scope, and use the value of "this" in the scope in which it was defined.

creating variable to call the function

---

array.map -> not returning old array but able to transform new VALUE AS ANY TYPE with old array
// modifying data not stored in old pointer address

---

array.push("new") - new element stored in array address .. not created new one.

copiedArray = array.slice() - used to copy(clone) the array
(New One) Spread operator - [...array] - used to copy the content of the array or object

copiedPerson = {...person} // for your information - person variable as above

---

NGRX:

whole application is stored in an object tree within a single store

When you are building an Angular app usually you have the state (Component) split and handled in multiple services.
As your app growth keeping track of your state changes starts to get messy and hard to debug and maintain.
Having a single source of truth resolves this problem since the state is handled only in one object and
in one place, so debugging or adding changes becomes way easier

By avoiding to update the state from different places

CORE BUILDING:
action : two properties - type payload
reducer : going to analyze the action (usually using a switch statement)

Reducers are pure functions accepting two arguments, the previous state and an Action. When an Action
is dispatched ngrx goes through all the reducers passing as arguments the previous state and the Action,
in the order that the reducers where created, until it finds a case for that action.
---------\_\_
If an effect gets triggered by dispatching an action is because some side effects are going to happen
before calling the reducer.
Then is going to perform a side-effect, usually getting or sending data to an API.

Selector - the state tree can become quite a big object
what if we need to apply some logic to that slice before using the data in the components.
There is where selectors take action.

style isolation - Here is another scenario: how many times did we try to use a third-party component, add it to our application
just to find out that the component is completely broken due to styling issues?

state management means state data maintained in store..

ngRx store

action - whatever action for example, login logout and signin action

side effect like a listener

reducer - it will hold initial value which will be called in .StoreModule.forFeature(stateFeatureName.ACTIVE_APP ( state key), fromActiveApp.reducer),
EffectsModule.forRoot(effects),
forRoot - called initilly when application launched
forFeature - like lazy loading feature in angular

selector - just for selecting values from state

Once dispatch with action which is unique key

## Ssr -

https://www.angularminds.com/blog/article/mvc-vs-mvp-mvvm.html

mvc - one way data binding - ng-model

model - data from REST server, data from local storage, user's data - It typically notifies its observers about any change that has occurred.

view - HTML Representation, CSS rendering, img/audio/video rendering - The view presents the model’s data to the customer/user on which they can perform some actions.
It communicates with the controller and at times interacts with the model.

controller - directive, component, service - It is the decision-maker and exists between the view and the model.
The controller updates the View whenever the model changes.

MVVM - two way binding - [(ngModel)]

model

viewModel - The ViewModel is ideally a model for the View of the app.
It is responsible for coordinating the view's interactions with any model classes that are required.
view

---

Security:

1. inner html sanitized against cross-site scripting attacks
2. encrypt the local storage data when we are going to store it
3. restrict inspect mode
4. CSP - (Content Security Policy)
5. XSS attack

how to destroy service -> I will be destroy after angular destroys the module.

Design Pattern?

Unit Testing -

e2e -

HTML5 -

CSS3 & SCSS -

-------------\\

property binding

ngAfterViewInit - ngAfterViewInit() is called after all child components are initialized and checked.

suppose we want to updated data from child component when we update count value from 0 to 1 by click event in the button, to the parent component where we have viewChildren
ngAfterViewChecked - we can get child component updated data from parent by viewChildren in the ngAfterViewChecked.

ngAfterViewInit() is called once after ngAfterContentChecked

propety binding

Authentication and authorization

Authentication verifies the identity of a user or service, and authorization determines their access rights.

Authentication (Login, Registration) is the process matching the visitor of a web application with the pre-defined set of user identity in the system. In other word,
it is the process of recognizing the user’s identity. Authentication is very important process in the system with respect to security.
https://www.tutorialspoint.com/angular8/angular8_authentication_and_authorization.htm#:~:text=In%20other%20word%2C%20it%20is,certain%20resource%20in%20the%20system.

Authorization is the process of giving permission to the user to access certain resource in the system.
Only the authenticated user can be "authorised" to access a resource. - auth guard
https://www.bezkoder.com/angular-14-jwt-auth/

HttpRequestInterceptor implements HttpInterceptor. We’re gonna add withCredentials: true to make browser include
Cookie on the Request header (HttpOnly Cookie).

auth guard

directive vs pipes

impure and pure pipe
@Pipe({
name: 'myPipe',
pure: false  
})
Impure pipes execute every time angular detects any changes regardless of the change in the input value.

structure (ngIF)and attribute (ngClass, ngStyle) directive

var let const

data shared date btw parent child

mock service

diff btw css vs scss file

reactive and template form

validate.required - reactive form

## where you implement rxjs operation in your project? debounceTime, api call,

---

agile methodology -
What are the 6 steps in Agile project management?
Project planning. ...
Product roadmap creation. ...
Release planning. ...
Sprint planning. ...
Daily stand-ups. ...
Sprint review and retrospective.

Grooming is an open discussion between the development team and product owner. The user stories are discussed to help the team gain a better understanding of the functionality that is needed to fulfill a story.

A spike story in Agile is a user story that needs more information so the team can estimate how long the story will take to complete

Product Backlog refinement (Grooming) meeting - (Stories)

sprint backlog (Tasks)

sprint planning

daily scrum

sprint review

sprint retropective - The team reflects on how everything went and then decides what changes they want to make in the next iteration.

## Grooming - Add new user stories based on newly discovered requirements. Remove user stories which are no longer required for the product. Fine-tune estimates of user stories

mock json -

how you implement routing

angular 14

standalone component sit outside of any module and can be used directly without being integrated into particular module.. it is speed up lots of process.
cmd: ng g @angular/core:standalone - it wont make 100% standalone.. we should do some changes as it required

They allow developers to create Angular components without using NgModules. This can simplify the development process and make code more modular and reusable.

standalone: true in component or pipe

imports: [
NgIf, courseCardComponent, CourseImageComponent, CommonModule
] - using this imports array in component to add required dependencies and components

ctrl + o - it will remove unused import automatically.

lazy loading and explain about how to implement that?

how to implement http service in unit testing?

httpTestingController = TestBed.get(HttpTestingController);
afterEach(() => {
httpTestingController.verify();
});
req.flush(mockDog);
https://levelup.gitconnected.com/test-angular-components-and-services-with-http-mocks-e143d90fa27d

## how to get large word in the array?

Longest word -

Input: "fun&!! time"
Output: time

a.split(' ').reduce((acc, curr) => {
acc = acc.replace(/[^a-zA-z0-9]/g, '');
curr = curr.replace(/[^a-zA-z0-9]/g, '');  
 return acc.length >= curr.length ? acc : curr;}
)

//acc.length >= curr.length - above condition for same words means return first wo rd from the string

First Factorial:

---

function factorial(n){
let answer = 1;
if (n == 0 || n == 1){
return answer;
}
else if(n > 1){
for(var i = n; i >= 1; i--){
answer = answer \* i;
}
return answer;
}
else{
return "number has to be positive."
}  
}
let n = 4;
answer = factorial(n)
console.log("Factorial of " + n + " : " + answer);

find small number in the array - Math.min(...array)

event looping - setTimeout, setInterval

how to render two router-outlet at the same time - named outlet
