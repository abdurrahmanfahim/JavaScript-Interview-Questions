const questionsDataV2 = [
  {
    id: 1,
    title: "What is the difference between var, let, and const?",
    content: `
      <p><mark>01. var</mark></p>
      <ul>
        <li>Function scope এ থাকে, block scope follow করে না।</li>
        <li>Re-declare করা যায়। (একই variable আবার declare করা যায়)</li>
        <li>Hoisting হয় এবং <code>undefined</code> দিয়ে initialize হয়।</li>
      </ul>
      <p><mark>02. let</mark></p>
      <ul>
        <li>Block scope এ থাকে।</li>
        <li>একই Block এর মধ্যে Re-declare করা যায় না।</li>
        <li>Value Re-assign করা যায়, এমনকি শুরুতে value assign না করলেও হয়।</li>
        <li>Hoisting হয়, তবে temporal dead zone (TDZ) এ থাকে।</li>
      </ul>
      <p><mark>03. const</mark></p>
      <ul>
        <li>Block scope এ থাকে।</li>
        <li>একই Block এর মধ্যে Re-declare করা যায় না।</li>
        <li>Declaration এর সময়ই value assign করে দিতে হয়।</li>
        <li>Primitive value Re-assign করা যায় না।</li>
        <li>তবে const দিয়ে declare করা object/array এর ভিতরের value change করা যায়, শুধু reassign করা যায় না।</li>
        <li>Hoisting হয়।</li>
      </ul>
      <p><strong>মনে রাখার টিপস:</strong> const = "box টা fix, কিন্তু box এর ভিতরের জিনিস নাড়াচাড়া করা যায়"</p>
    `,
    difficulty: "Easy",
    tags: ["Variables", "JavaScript Basics"],
  },
  {
    id: 2,
    title: "What is hoisting?",
    content: `
      <p>Hoisting হলো JavaScript এর একটা behavior যেখানে variable এবং function declaration গুলো memory তে function বা scope এর শুরুতে(উপরে) নিয়ে যায়।</p>
      <ul>
        <li>var hoist হয় এবং <code>undefined</code> দিয়ে initialize হয়। তাই declare এর আগেই access করলে undefined পাওয়া যায়।</li>
        <li><code>let</code> এবং <code>const</code> hoist হয়, কিন্তু temporal dead zone (TDZ) থাকে—declare এর আগে access করলে ReferenceError দেয়।</li>
        <li>Function declaration hoist হয় পুরো function body সহ—তাই declare এর আগেও call করা যায়।</li>
        <li>Function expression এবং arrow function variable হিসেবে hoist হয়, body সহ না — তাই declare এর আগে call করলে error।</li>
      </ul>
      <p><strong>মনে রাখার টিপস:</strong></p>
      <ul>
        <li>Function declaration = পুরোটা উঠে যায় ✅</li>
        <li>Function expression/arrow = শুধু নাম উঠে, body না ❌</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Hoisting", "JavaScript Basics"],
  },
  {
    id: 3,
    title: "What is the temporal dead zone?",
    content: `
      <p>Temporal Dead Zone (TDZ) হলো block scope এর ওই সময়, যখন <code>let</code> বা <code>const</code> দিয়ে declare করা variable কে access করা যায় না। Declare করার আগে access করলে ReferenceError হয়।</p>
      <i>TDZ মানে "exist করে কিন্তু ব্যবহার করা নিষিদ্ধ" অবস্থা।</i>
      <ol>
        <li>TDZ শুরু হয় variable এর block এ enter করা থেকে, আর শেষ হয় declaration/initialization হওয়ার পর।</li>
        <li>এটা mainly <code>let</code> আর <code>const</code> এর জন্য applicable—<code>var</code> এর জন্য TDZ নেই।</li>
      </ol>
      
      <h3>Example</h3>
      <pre><code>{
  // TDZ শুরু
  console.log(a); // ❌ ReferenceError
  let a = 10;
  // TDZ শেষ
}</code></pre>
    `,
    difficulty: "Medium",
    tags: ["TDZ", "JavaScript Basics"],
  },
  {
    id: 4,
    title: "Explain closures with an example",
    content: `
      <p>Closure হলো এমন একটা function, যেটা তার parent function এর scope এর variable কে access করতে পারে—এমনকি parent function execution শেষ হয়ে গেলেও।</p>
      <ol>
        <li>সহজ ভাবে: inner function can "remember" variables of outer function।</li>
        <li>JavaScript এ functions are first-class citizens, তাই closure possible।</li>
      </ol>
      <h3>Example</h3>
      <pre><code>function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Closure = function + তার আশেপাশের variables এর "memory"</p>
    `,
    difficulty: "Medium",
    tags: ["Closures", "Functions"],
  },
  {
    id: 5,
    title: "What are higher-order functions?",
    content: `
      <p>Higher-Order Functions (HOF) হলো এমন function, যেটা—</p>
      <ol>
        <li>Function কে argument হিসেবে নিতে পারে, বা</li>
        <li>Function কে return করতে পারে</li>
      </ol>
      <p>JavaScript এ functions first-class citizens, তাই higher-order function easily use করা যায়।</p>
      <p>HOF mainly callback, <code>map</code>, <code>filter</code>, <code>reduce</code>, etc. এর জন্য use হয়।</p>
      <h3>Example</h3>
      <pre><code>// Function as argument
const numbers = [1, 2, 3];
numbers.map(num => num * 2); // [2, 4, 6]

// Function returning function
function multiplier(factor) {
  return (num) => num * factor;
}
const double = multiplier(2);
double(5); // 10</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Functions", "HOF"],
  },
  {
    id: 6,
    title: "Explain the call stack",
    content: `
      <p>Call Stack হলো JavaScript এর execution context manage করার memory structure, যেটা <strong>Last In First Out (LIFO)</strong> principle follow করে।</p>
      <p>JavaScript single-threaded, তাই এক সময় এ একটা কাজই করতে পারে।</p>
      <ul>
        <li>Function call করলে সেটা stack এর উপর <strong>push</strong> হয়</li>
        <li>Function execution শেষ হলে stack থেকে <strong>pop</strong> হয়</li>
        <li>অনেক বেশি nested function call হলে "Maximum call stack size exceeded" error আসে (Stack Overflow)।</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function first() {
  second();
  console.log("First");
}
function second() {
  console.log("Second");
}
first();
// Stack: [first] → [first, second] → [first] → []</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Call Stack", "Execution Context"],
  },
  {
    id: 7,
    title: "What is an event loop?",
    content: `
      <p>Event Loop হলো JavaScript এর mechanism, যেটা asynchronous code handle করে, কারণ JavaScript single-threaded।</p>
      <p>JavaScript এক সময় এ একটা task execute করে, কিন্তু non-blocking I/O support করে async operation এর জন্য।</p>
      <p>Call Stack, Web APIs, Callback Queue, এবং Event Loop—মিলে async tasks manage করে।</p>
      <h3>কিভাবে কাজ করে:</h3>
      <ol>
        <li>Call Stack empty কিনা check করে</li>
        <li>Empty হলে Microtask Queue থেকে tasks নেয়</li>
        <li>তারপর Macrotask Queue থেকে tasks নেয়</li>
        <li>এই cycle বারবার repeat হয়</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 8,
    title: "Explain microtask and macrotask queue",
    content: `
      <p>Microtask এবং Macrotask Queue হলো JavaScript এর event loop এর asynchronous task manage করার mechanism।</p>
      <h3>1) Macrotask (Task Queue)</h3>
      <p>Major async task গুলো macrotask queue তে রাখা হয়।</p>
      <p><strong>Examples:</strong> <code>setTimeout</code>, <code>setInterval</code>, I/O operations, UI rendering</p>
      <h3>2) Microtask (Priority Queue)</h3>
      <p>High-priority task গুলো microtask queue তে রাখা হয়।</p>
      <p><strong>Examples:</strong> <code>Promise.then/catch/finally</code>, <code>queueMicrotask</code>, <code>MutationObserver</code></p>
      <h3>Execution Order:</h3>
      <ol>
        <li>Call Stack empty হলে সব Microtasks আগে execute হয়</li>
        <li>তারপর একটা Macrotask execute হয়</li>
        <li>আবার সব Microtasks... এভাবে চলতে থাকে</li>
      </ol>
      <p><strong>মনে রাখার টিপস:</strong> Microtask = VIP Queue (আগে যাবে), Macrotask = Normal Queue</p>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 9,
    title: "What is debounce?",
    content: `
      <p>Debounce হলো একটা technique, যা frequent function call কে limit করে—মানে last event এর পর নির্দিষ্ট সময় wait করে তারপর function call করে।</p>
      <p><strong>Use case:</strong> <code>resize</code>, <code>input/search</code> events — যেখানে user action শেষ হওয়ার পর function call করতে চাই।</p>
      <p><strong>Note:</strong> scroll এর জন্য সাধারণত throttle বেশি উপযুক্ত।</p>
      <h3>Example</h3>
      <pre><code>function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Debounce = "চুপ হলে কাজ করবো" (typing শেষে search)</p>
    `,
    difficulty: "Medium",
    tags: ["Performance", "Optimization"],
  },
  {
    id: 10,
    title: "What is throttling?",
    content: `
      <p>Throttling হলো একটা technique, যা function কে নির্দিষ্ট interval এ মাত্র execute করতে দেয়—মানে frequent call হলেও certain time পর পর call হবে।</p>
      <h3>Debounce vs Throttle</h3>
      <ul>
        <li><strong>Debounce</strong> → last event এর পর function execute হয় (typing শেষে search)</li>
        <li><strong>Throttle</strong> → specified interval এ regularly execute হয় (scroll এ position check)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Throttle = "নিয়মিত বিরতিতে কাজ করবো" (প্রতি 1 সেকেন্ডে scroll position check)</p>
    `,
    difficulty: "Medium",
    tags: ["Performance", "Optimization"],
  },
  {
    id: 11,
    title: "What is currying?",
    content: `
      <p>Currying হলো একটা functional programming technique যেখানে একটা function কে multiple single-argument function এ convert করা হয়।</p>
      <ul>
        <li>Original function যে multiple argument নেবে, currying এর মাধ্যমে প্রত্যেক argument আলাদা call এর মাধ্যমে pass করা যায়।</li>
        <li>Benefits: code reusability, partial application, functional composition easy হয়।</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Normal function
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
curriedAdd(1)(2)(3); // 6

// Arrow function version
const curriedAdd = a => b => c => a + b + c;</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Currying = একটা function কে step by step arguments নেওয়ার chain এ convert করা</p>
    `,
    difficulty: "Medium",
    tags: ["Functions", "Functional Programming"],
  },
  {
    id: 12,
    title: "What is a pure function?",
    content: `
      <p>Pure Function হলো এমন একটা function যা:</p>
      <ol>
        <li>Same input দিলে সব সময় same output দেয়</li>
        <li>External state change করে না, বা কোনো side effect produce করে না
          <ul>
            <li>Side effect = variable modify করা, file write করা, database update করা, DOM modify করা, console.log করা etc.</li>
          </ul>
        </li>
      </ol>
      <h3>Example</h3>
      <pre><code>// ✅ Pure function
function add(a, b) {
  return a + b;
}

// ❌ Impure function (external state change)
let total = 0;
function addToTotal(num) {
  total += num; // side effect
  return total;
}</code></pre>
      <p><strong>Benefits:</strong> Predictable, testable, cacheable (memoization), parallelizable</p>
      <p><strong>মনে রাখার টিপস:</strong> Pure = "বাইরে কিছু ছোঁয় না, ভিতরে কিছু পাল্টায় না"</p>
    `,
    difficulty: "Medium",
    tags: ["Functions", "Functional Programming"],
  },
  {
    id: 13,
    title: "What is immutability?",
    content: `
      <p>Immutability হলো data change করা যায় না এর concept।</p>
      <ul>
        <li>JavaScript এ primitive types (number, string, boolean) by default immutable।</li>
        <li>Objects and arrays mutable, কিন্তু immutable approach use করে original data change না করে new copy create করা হয়।</li>
        <li><code>Object.freeze()</code> দিয়ে object immutable করা যায়, তবে এটা shallow — nested object এখনও mutable থাকে।</li>
        <li>Benefits: predictable state, easier debugging, functional programming friendly।</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// ❌ Mutable approach
const user = { name: "John" };
user.name = "Jane"; // original change

// ✅ Immutable approach
const user = { name: "John" };
const newUser = { ...user, name: "Jane" }; // new copy

// Object.freeze()
const frozen = Object.freeze({ a: 1, nested: { b: 2 } });
frozen.a = 10; // ❌ Silent fail
frozen.nested.b = 20; // ✅ Works! (shallow freeze)</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Immutable = "পুরানোটা রাখো, নতুন copy বানাও"</p>
    `,
    difficulty: "Medium",
    tags: ["Immutability", "Functional Programming"],
  },
  {
    id: 14,
    title: "Explain this keyword",
    content: `
      <p><code>this</code> keyword এর value depend করে function কিভাবে call হচ্ছে:</p>
      <ol>
        <li><strong>Global context:</strong> <code>window</code> (browser) / <code>global</code> (Node)</li>
        <li><strong>Object method:</strong> যে object call করছে, সেই object</li>
        <li><strong>Arrow function:</strong> নিজের <code>this</code> নেই — parent scope এর <code>this</code> নেয় (lexical)</li>
        <li><strong>Constructor (new):</strong> newly created object</li>
        <li><strong>call/apply/bind:</strong> explicitly যেটা pass করা হয়</li>
        <li><strong>Strict mode এ regular function:</strong> <code>undefined</code></li>
      </ol>
      <h3>Example</h3>
      <pre><code>const obj = {
  name: "John",
  regular: function() {
    console.log(this.name); // "John" (obj call করছে)
  },
  arrow: () => {
    console.log(this.name); // undefined (lexical this)
  }
};

// call/apply/bind
function greet() {
  console.log(this.name);
}
greet.call({ name: "Jane" }); // "Jane"</code></pre>
      <p><strong>মনে রাখার সূত্র:</strong> "কে ডাকছে, সে-ই this" (arrow function ছাড়া)</p>
    `,
    difficulty: "Medium",
    tags: ["this", "JavaScript Basics"],
  },
  {
    id: 15,
    title: "What are IIFEs?",
    content: `
      <p>IIFE মানে Immediately Invoked Function Expression।</p>
      <ul>
        <li>এটা হলো একটা function যা declare হবার সাথে সাথে execute হয়।</li>
        <li>Mainly variable scope protect করার জন্য use হয়, যাতে global scope pollute না হয়।</li>
      </ul>
      <h3>Syntax</h3>
      <pre><code>// Traditional
(function() {
  var privateVar = "I'm private";
  console.log(privateVar);
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// With parameters
(function(name) {
  console.log("Hello", name);
})("John");</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Module pattern (ES6 modules আসার আগে)</li>
        <li>Private variables create করা</li>
        <li>Global namespace pollution avoid করা</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["IIFE", "Functions"],
  },
  {
    id: 16,
    title: "What is a prototype?",
    content: `
      <p>Prototype হলো JavaScript এর inheritance mechanism, যেখানে একটা object অন্য object থেকে properties ও methods inherit করতে পারে।</p>
      <ul>
        <li>প্রত্যেক JavaScript object এর সাথে একটা prototype link থাকে।</li>
        <li>Object এর property বা method access করতে গেলে JS prototype chain এ search করে।</li>
        <li>এটা memory efficiency এর জন্য useful, কারণ method গুলো object এ বারবার create না করে, prototype এ share করা হয়।</li>
      </ul>
      <h3>prototype vs __proto__</h3>
      <ul>
        <li><code>prototype</code> → constructor function এর property (ছাঁচ)</li>
        <li><code>__proto__</code> → object instance এর internal link যা parent কে point করে (চেইন)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hello, " + this.name;
};

const john = new Person("John");
john.greet(); // "Hello, John"

// Chain
john.__proto__ === Person.prototype // true
Person.prototype.__proto__ === Object.prototype // true</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Prototype", "Inheritance"],
  },
  {
    id: 17,
    title: "What is prototypal inheritance?",
    content: `
      <p>Prototypal Inheritance হলো JavaScript এর inheritance system, যা একটা object অন্য object এর properties and methods use করতে পারে।</p>
      <ul>
        <li>JavaScript এ class-based inheritance নাই originally, object গুলো prototype chain এর মাধ্যমে inherit হয়।</li>
        <li>যদি একটা object property না পায়, JS prototype chain এ search করে parent object এর property খুঁজে বের করে।</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const animal = {
  eat: function() {
    console.log("Eating...");
  }
};

const dog = Object.create(animal);
dog.bark = function() {
  console.log("Barking...");
};

dog.eat();  // "Eating..." (inherited)
dog.bark(); // "Barking..." (own)

// ES6 class (syntactic sugar)
class Animal {
  eat() { console.log("Eating..."); }
}
class Dog extends Animal {
  bark() { console.log("Barking..."); }
}</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> Prototypal Inheritance = "নিজে না পেলে বাবার কাছ থেকে খুঁজে নাও"</p>
    `,
    difficulty: "Medium",
    tags: ["Prototype", "Inheritance"],
  },
  {
    id: 18,
    title: "What is strict mode?",
    content: `
      <p>Strict Mode হলো JavaScript এর একটা feature যা code কে stricter rules follow করতে বলে।</p>
      <ul>
        <li>এটা errors detect করতে help করে, unsafe actions block করে, and performance improve করতে পারে।</li>
        <li>Strict mode use করতে code এর শুরুতে <code>"use strict";</code> লিখতে হয়।</li>
      </ul>
      <h3>Features / Restrictions:</h3>
      <ol>
        <li>Undeclared variables use করলে error দেয়</li>
        <li>Deleting variables, functions, or objects forbidden</li>
        <li>Duplicate parameter names error দেয়</li>
        <li>Regular function এ <code>this</code> = <code>undefined</code> (global object না)</li>
        <li><code>eval</code>, <code>arguments</code> কে variable name হিসেবে assign করা যায় না (তবে use করা যায়)</li>
        <li><code>with</code> statement ব্যবহার করা যায় না</li>
      </ol>
      <h3>Example</h3>
      <pre><code>"use strict";

x = 10; // ❌ ReferenceError: x is not defined

function test() {
  console.log(this); // undefined (not window)
}

var eval = 5; // ❌ SyntaxError</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Strict Mode", "JavaScript Basics"],
  },
  {
    id: 19,
    title: "What is the difference between == and ===",
    content: `
      <p>JavaScript এ == and === এর major difference হলো type coercion।</p>
      <ol>
        <li>== (Equality Operator)
          <ul>
            <li>Value check করে, type check করে না</li>
            <li>দরকার পড়লে type convert করে compare করে</li>
          </ul>
        </li>
        <li>=== (Strict Equality Operator)
          <ul>
            <li>Value and type দুটোই check করে</li>
            <li>Type mismatch হলে false return করে, কোনো type conversion হয় না</li>
          </ul>
        </li>
      </ol>
      <h3>Example</h3>
      <pre><code>// == (loose equality)
5 == "5"      // true (string → number)
0 == false    // true
null == undefined // true

// === (strict equality)
5 === "5"     // false
0 === false   // false
null === undefined // false</code></pre>
      <p><strong>Best practice:</strong> Always use <code>===</code> to avoid unexpected bugs</p>
    `,
    difficulty: "Medium",
    tags: ["Operators", "JavaScript Basics"],
  },
  {
    id: 20,
    title: "What is type coercion?",
    content: `
      <p>Type Coercion হলো JavaScript এর automatic type conversion process, যেখানে এক type এর value automatically অন্য type এ convert হয় যাতে operation execute করা যায়।</p>
      <ul>
        <li>JavaScript এ dynamically typed language, তাই type coercion normal।</li>
        <li>Coercion দুই ধরনের হয়:</li>
      </ul>
      <ol>
        <li><strong>Implicit Coercion</strong> (automatic)
          <ul>
            <li>JavaScript automatic type convert করে</li>
          </ul>
        </li>
        <li><strong>Explicit Coercion</strong> (manual)
          <ul>
            <li>Developer manually type convert করে</li>
          </ul>
        </li>
      </ol>
      <h3>Example</h3>
      <pre><code>// Implicit Coercion
"5" + 3       // "53" (number → string)
"5" - 3       // 2 (string → number)
true + 1      // 2 (boolean → number)
!!"hello"     // true (string → boolean)

// Explicit Coercion
Number("5")   // 5
String(123)   // "123"
Boolean(0)    // false</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Type Coercion", "JavaScript Basics"],
  },
  {
    id: 21,
    title: "What are promises?",
    content: `
      <p>Promise হলো JavaScript এর একটা asynchronous operation handle করার mechanism, যা future এ কোনো value return করবে বলে promise করে।</p>
      <ul>
        <li>Promise মানে: "এই কাজটা future এ একটা result দেবে – success হতে পারে, fail ও হতে পারে।"</li>
        <li>এটা callbacks এর চেয়ে cleaner, readable, and maintainable solution।</li>
      </ul>
      <h3>Promise এর ৩টা state:</h3>
      <ol>
        <li><strong>Pending</strong> → কাজ চলছে</li>
        <li><strong>Fulfilled</strong> → কাজ successful, resolve() call</li>
        <li><strong>Rejected</strong> → কাজ fail, reject() call</li>
      </ol>
      <p><strong>Important:</strong> একবার settled (fulfilled/rejected) হলে আর state change হয় না।</p>
      <h3>Example</h3>
      <pre><code>const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data fetched!");
    } else {
      reject("Error occurred!");
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done!"));</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 22,
    title: "What is async/await?",
    content: `
      <p>async/await হলো JavaScript এর Promises কে easy & readable ভাবে handle করার syntax।</p>
      <p>এটা asynchronous code কে synchronous এর মতো দেখায়, তাই code অনেক clean হয়।</p>
      <h3>Key Points:</h3>
      <ol>
        <li><strong>async</strong>
          <ul>
            <li>যেকোনো function এর আগে <code>async</code> দিলে সেটা automatically promise return করে।</li>
            <li>তার ভিতরে <code>await</code> use করা যায়।</li>
          </ul>
        </li>
        <li><strong>await</strong>
          <ul>
            <li><code>await</code> promise resolve হওয়ার জন্য wait করে।</li>
            <li>Function এর execution pause করে, কিন্তু main thread free করে দেয় — তাই অন্য কাজ চলতে পারে।</li>
            <li><code>await</code> শুধু <code>async</code> function এর ভিতরে ব্যবহার করা যায়।</li>
          </ul>
        </li>
      </ol>
      <h3>Example</h3>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();</code></pre>
      <h3>Benefits:</h3>
      <ul>
        <li>Code readable & clean</li>
        <li>Nested .then() avoid</li>
        <li>Error handling easy with try/catch</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async/Await", "Promises"],
  },
  {
    id: 23,
    title: "Explain callback hell",
    content: `
      <p><strong>Callback Hell</strong> হলো JavaScript এ অনেক nested <code>callback</code> use করার জন্য code যখন complex, unreadable, আর maintain করা difficult হয়ে যায়। এটা mainly asynchronous code handle করতে গিয়ে হয়।</p>
      <h3>কেন হয়?</h3>
      <ol>
        <li>একটা <code>async</code> task শেষ হলে তার ভেতরে আবার আরেকটা <code>async</code> task</li>
        <li>তার ভেতরে আরও একটা...</li>
        <li>এভাবে <strong>pyramid/staircase</strong> মতো nested structure হয়, যেটাকে বলে <strong>"Pyramid of Doom"</strong></li>
      </ol>
      <h3>Example</h3>
      <pre><code>// ❌ Callback Hell
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});</code></pre>
      <h3>Solution:</h3>
      <ol>
        <li><strong>Promises</strong> → .then() chain</li>
        <li><strong>async/await</strong> → most clean</li>
        <li><strong>Modular Functions</strong> → named functions use করা</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Callbacks", "Async"],
  },
  {
    id: 24,
    title: "What is Promise chaining?",
    content: `
      <p>Promise Chaining হলো একটা promise resolve হওয়ার পর তার result use করে next promise call করা—এভাবে serial ভাবে multiple asynchronous operation execute করা।</p>
      <p>1st async → 2nd async → 3rd async …</p>
      <p>Each step <code>.then()</code> এর মাধ্যমে chain হয়ে যায়।</p>
      <h3>Example</h3>
      <pre><code>fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch('/api/posts/' + user.id))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));</code></pre>
      <h3>Benefits</h3>
      <ol>
        <li>Readable flow</li>
        <li>Error handling easy (single <code>.catch()</code>)</li>
        <li>Callback hell avoid</li>
        <li>Serial async operation control easy</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 25,
    title: "What is Promise.all()?",
    content: `
      <p>Promise.all() হলো JavaScript এর method, যা একটি promise array নিয়ে সব promise কে parallel এ চালায়।</p>
      <ul>
        <li>সব promise resolve হলে → results array return করে</li>
        <li>একটাও reject হলে → immediately reject করে</li>
      </ul>
      <h3>Important:</h3>
      <p>একটা reject হলে Promise.all() immediately reject করে, তবে বাকি promises background এ চলতে থাকে — শুধু result ignore হয়। (JS এ native promise cancellation নেই)</p>
      <h3>Example</h3>
      <pre><code>const p1 = fetch('/api/users');
const p2 = fetch('/api/posts');
const p3 = fetch('/api/comments');

Promise.all([p1, p2, p3])
  .then(([users, posts, comments]) => {
    console.log("All done!");
  })
  .catch(error => {
    console.log("At least one failed:", error);
  });</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>একসাথে multiple API call</li>
        <li>Parallel data fetching</li>
      </ul>
      <p><strong>মনে রাখার টিপস:</strong> Promise.all() = "সবাই পাশ করলে পাশ, একজন ফেল করলে সবাই ফেল"</p>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 26,
    title: "What is Promise.race()?",
    content: `
      <p><code>Promise.race()</code> হলো JavaScript এর method, যা multiple promises এর মধ্যে যে promise সবার আগে <strong>settle</strong> হয় (resolve বা reject), তার result return করে।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>যে promise first complete হবে → ওটাই winner</li>
        <li>বাকি promises এর result wait করে না</li>
        <li>First settled = resolve OR reject</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const fast = new Promise(resolve => 
  setTimeout(() => resolve("Fast!"), 100)
);
const slow = new Promise(resolve => 
  setTimeout(() => resolve("Slow!"), 500)
);

Promise.race([fast, slow])
  .then(result => console.log(result)); // "Fast!"

// Timeout pattern
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Timeout!"), 3000)
);

Promise.race([fetch('/api/data'), timeout])
  .catch(err => console.log(err)); // "Timeout!" if API slow</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Timeout system implement করতে</li>
        <li>Multiple sources এ race করা</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 27,
    title: "What is Promise.any()?",
    content: `
      <p><code>Promise.any()</code> হলো JavaScript এর method, যা multiple promises এর মধ্যে যে promise <strong>প্রথম successful (resolve)</strong> হয়, তার result return করে।</p>
      <ul>
        <li>একটা promise resolve হলেই → Promise.any() success return করে</li>
        <li>সবগুলো promise fail করলে → <code>AggregateError</code> throw করে</li>
      </ul>
      <h3>Promise.race() vs Promise.any()</h3>
      <ul>
        <li><code>race()</code> → first settled (resolve OR reject)</li>
        <li><code>any()</code> → first resolved (only success)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const p1 = Promise.reject("Error 1");
const p2 = new Promise(resolve => setTimeout(() => resolve("Success!"), 100));
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // "Success!"
  .catch(err => console.log(err)); // AggregateError if all fail</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Multiple fallback API requests</li>
        <li>যেকোনো একটা success হলেই চলবে</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 28,
    title: "What is Promise.allSettled()?",
    content: `
      <p><code>Promise.allSettled()</code> হলো JavaScript এর method, যা সব promise <strong>settle</strong> (resolve বা reject) হওয়ার পর result return করে।</p>
      <ul>
        <li>কোন promise success আর কোন fail — সব details পাওয়া যায়</li>
        <li>একটা fail করলেও reject হয় না — full report return করে</li>
      </ul>
      <h3>Promise.all() vs Promise.allSettled()</h3>
      <ul>
        <li><code>all()</code> → একটা fail করলে সব fail</li>
        <li><code>allSettled()</code> → সবার result চাই, fail হোক বা success</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success 3");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));

// Output:
// [
//   { status: "fulfilled", value: "Success 1" },
//   { status: "rejected", reason: "Error 2" },
//   { status: "fulfilled", value: "Success 3" }
// ]</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>সব tasks এর final status দরকার হলে</li>
        <li>Logging, monitoring, cleanup tasks</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 29,
    title: "What is the event loop model for async JS?",
    content: `
      <p>JavaScript single-threaded হওয়া সত্ত্বেও async task handle করতে পারে Event Loop Model এর কারণে।</p>
      <h3>Components:</h3>
      <ol>
        <li><strong>Call Stack</strong> → synchronous code execute হয়</li>
        <li><strong>Web APIs</strong> → async tasks (setTimeout, fetch) browser handle করে</li>
        <li><strong>Callback/Task Queue (Macrotask)</strong> → setTimeout, setInterval এর callbacks</li>
        <li><strong>Microtask Queue</strong> → Promise callbacks (higher priority)</li>
        <li><strong>Event Loop</strong> → coordinator, queues থেকে stack এ push করে</li>
      </ol>
      <h3>Execution Order:</h3>
      <ol>
        <li>Call Stack এর সব synchronous code আগে</li>
        <li>Stack empty হলে → সব Microtasks (Promises)</li>
        <li>তারপর একটা Macrotask (setTimeout)</li>
        <li>আবার সব Microtasks... loop চলতে থাকে</li>
      </ol>
      <h3>Example</h3>
      <pre><code>console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// (sync → microtask → macrotask)</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 30,
    title: "Why is JavaScript single-threaded?",
    content: `
      <p>JavaScript মূলত browser এর simple scripting এর জন্য তৈরি হয়েছিল (Brendan Eich, 10 দিনে)। Multi-threading এর complexity avoid করতে single-threaded রাখা হয়।</p>
      <h3>কারণসমূহ:</h3>
      <ol>
        <li><strong>DOM manipulation safe রাখার জন্য</strong>
          <ul>
            <li>Multiple threads একসাথে DOM access করলে race condition, inconsistent UI হতে পারতো</li>
          </ul>
        </li>
        <li><strong>Event-driven architecture এর সাথে best fit</strong>
          <ul>
            <li>Event loop, callback queue — single-thread এ predictably manage করা যায়</li>
          </ul>
        </li>
        <li><strong>Simplicity & Safety</strong>
          <ul>
            <li>Multi-threaded environment এ shared memory, deadlocks, race conditions handle করা complex</li>
          </ul>
        </li>
      </ol>
      <h3>কিন্তু সম্পূর্ণ single-threaded না:</h3>
      <ul>
        <li>V8 engine internally multiple threads use করে (garbage collection, compilation)</li>
        <li>Browser এর Web APIs, Workers, Rendering engine multi-threaded</li>
        <li>শুধু <strong>JS code execution</strong> single thread এ হয়</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["JavaScript Basics", "Event Loop"],
  },
  {
    id: 31,
    title: "What is a Web Worker?",
    content: `
      <p>Web Worker হলো JavaScript এর background thread, যা main thread block না করে heavy computation handle করে।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Background thread এ execute হয়</li>
        <li>Main thread / UI block করে না</li>
        <li>DOM এ direct access নেই</li>
        <li><code>postMessage()</code> & <code>onmessage</code> দিয়ে communication</li>
      </ul>
      <h3>Types of Workers:</h3>
      <ul>
        <li><strong>Dedicated Worker</strong> → single script এর জন্য</li>
        <li><strong>Shared Worker</strong> → multiple tabs share করতে পারে</li>
        <li><strong>Service Worker</strong> → offline caching, push notifications</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: 1000000 });
worker.onmessage = (e) => {
  console.log("Result:", e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = heavyCalculation(e.data);
  self.postMessage(result);
};</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Heavy calculations, data processing</li>
        <li>Large file parsing</li>
        <li>Image/video processing</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Web Workers", "Performance"],
  },
  {
    id: 32,
    title: "What is an async iterator?",
    content: `
      <p>Async Iterator হলো JavaScript এর special object, যা asynchronous data stream কে step-by-step iterate করতে দেয়।</p>
      <ul>
        <li>Async iterator এর <code>next()</code> method <code>Promise</code> return করে</li>
        <li><code>for await...of</code> loop দিয়ে easy iteration</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Async Generator
async function* asyncGenerator() {
  yield await fetch('/api/1').then(r => r.json());
  yield await fetch('/api/2').then(r => r.json());
  yield await fetch('/api/3').then(r => r.json());
}

// Consuming
async function consume() {
  for await (const data of asyncGenerator()) {
    console.log(data);
  }
}

consume();</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Streaming APIs (reading large files)</li>
        <li>Pagination (fetch data page by page)</li>
        <li>Real-time data streams</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async", "Iterators"],
  },
  {
    id: 33,
    title: "What is fetch API?",
    content: `
      <p>Fetch API হলো JavaScript এর modern way to make HTTP requests, যা XMLHttpRequest (XHR) এর replacement।</p>
      <h3>Key Features:</h3>
      <ol>
        <li>Promise-based → async/await এর সাথে easy use</li>
        <li>Cleaner syntax → XHR এর চেয়ে readable</li>
        <li>Built-in JSON support</li>
        <li>Request/Response objects provide করে</li>
      </ol>
      <h3>⚠️ Common Gotcha (Important!):</h3>
      <ul>
        <li><code>fetch()</code> HTTP error (404, 500) এ reject করে না — শুধু network failure এ reject করে।</li>
        <li>Error check করতে <code>response.ok</code> বা <code>response.status</code> দেখতে হয়।</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Basic usage
fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> fetch() শুধু network fail এ কাঁদে, 404/500 এ চুপ থাকে — নিজে check করতে হবে!</p>
    `,
    difficulty: "Medium",
    tags: ["Fetch", "HTTP", "Async"],
  },
  {
    id: 34,
    title: "What is XMLHTTPRequest?",
    content: `
      <p>XMLHttpRequest (XHR) হলো JavaScript এর old-school API, যা web browser থেকে server এ HTTP request পাঠাতে & response receive করতে use হয়।</p>
      <p>AJAX এর main component ছিল XHR। Fetch API আসার আগে এটাই standard ছিল।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>HTTP request পাঠায় (GET, POST, PUT, DELETE)</li>
        <li>Async বা sync request support করে</li>
        <li><code>readyState</code> & <code>status</code> check করতে হয়</li>
        <li>Callback-based → nested callbacks এ callback hell হতে পারে</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

xhr.send();</code></pre>
      <h3>XHR vs Fetch:</h3>
      <ul>
        <li>XHR = callback-based, verbose</li>
        <li>Fetch = promise-based, cleaner</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["XHR", "HTTP", "Async"],
  },
  {
    id: 35,
    title: "What is the difference between sync and async code?",
    content: `
      <p><strong>Synchronous (Sync)</strong> vs <strong>Asynchronous (Async)</strong> code এর difference mainly execution order & blocking behavior এর ওপর depend করে।</p>
      <h3>1) Synchronous Code (Sync)</h3>
      <ul>
        <li>Code <strong>line by line</strong> execute হয়</li>
        <li>একটা কাজ শেষ হওয়ার পর next কাজ start</li>
        <li><strong>Blocking</strong> → long task হলে UI freeze হয়</li>
      </ul>
      <h3>2) Asynchronous Code (Async)</h3>
      <ul>
        <li>Code immediately next line এ jump করে</li>
        <li>Long running task background এ run করে</li>
        <li><strong>Non-blocking</strong> → UI responsive থাকে</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Sync - blocking
console.log("1");
console.log("2"); // waits for 1
console.log("3"); // waits for 2

// Async - non-blocking
console.log("1");
setTimeout(() => console.log("2"), 1000); // goes to background
console.log("3"); // doesn't wait

// Output: 1, 3, 2</code></pre>
      <h3>Summary:</h3>
      <ul>
        <li><strong>Sync</strong> = sequential, blocking, immediate result</li>
        <li><strong>Async</strong> = parallel, non-blocking, future result</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async", "JavaScript Basics"],
  },
  {
    id: 36,
    title: "What are arrow functions?",
    content: `
      <p>Arrow Functions হলো JavaScript এর concise syntax function লেখার জন্য, ES6 এ introduce হয়েছে।</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Concise syntax → one-liner possible</li>
        <li>Own <code>this</code> নেই → parent context এর <code>this</code> use করে (lexical)</li>
        <li>Own <code>arguments</code> object নেই (rest operator <code>...args</code> use করা যায়)</li>
        <li>Constructor হিসেবে use করা যায় না (<code>new</code> দিয়ে call করা যায় না)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello!";

// Multi-line (needs braces & return)
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};</code></pre>
      <h3>When NOT to use:</h3>
      <ul>
        <li>Object methods (this binding issue)</li>
        <li>Event handlers (if you need <code>this</code> to be the element)</li>
        <li>Constructors</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Arrow Functions", "ES6"],
  },
  {
    id: 37,
    title: "What is destructuring?",
    content: `
      <p>Destructuring হলো JavaScript এর syntax, যা object বা array এর value easily variable এ assign করতে use হয়।</p>
      <h3>Array Destructuring</h3>
      <pre><code>const [a, b, c] = [1, 2, 3];
console.log(a); // 1

// Skip elements
const [first, , third] = [1, 2, 3];

// Default values
const [x = 10, y = 20] = [5];
console.log(x, y); // 5, 20

// Rest
const [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]</code></pre>
      <h3>Object Destructuring</h3>
      <pre><code>const { name, age } = { name: "John", age: 30 };

// Rename
const { name: userName } = { name: "John" };

// Default values
const { city = "Unknown" } = {};

// Nested
const { address: { street } } = { address: { street: "Main St" } };</code></pre>
      <h3>Function Parameters</h3>
      <pre><code>function greet({ name, age }) {
  console.log(\`\${name} is \${age}\`);
}
greet({ name: "John", age: 30 });</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Destructuring", "ES6"],
  },
  {
    id: 38,
    title: "What is spread operator?",
    content: `
      <p>Spread Operator (<code>...</code>) হলো JavaScript এর syntax, যা iterable (array, object) কে expand / copy / merge করতে use হয়।</p>
      <h3>Array Operations</h3>
      <pre><code>// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // shallow copy

// Merge arrays
const merged = [...arr1, ...arr2];

// Add elements
const newArr = [0, ...arr1, 4];</code></pre>
      <h3>Object Operations</h3>
      <pre><code>// Copy object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

// Merge objects
const merged = { ...obj1, ...obj2 };

// Override properties
const updated = { ...obj1, b: 10 };</code></pre>
      <h3>Function Arguments</h3>
      <pre><code>const numbers = [1, 2, 3];
Math.max(...numbers); // 3</code></pre>
      <h3>Important:</h3>
      <ul>
        <li>Spread করলে <strong>shallow copy</strong> হয় (nested objects still reference)</li>
        <li>Deep copy করতে হলে <code>structuredClone(obj)</code> বা <code>JSON.parse(JSON.stringify(obj))</code> use করতে হয়</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Spread Operator", "ES6"],
  },
  {
    id: 39,
    title: "What is rest operator?",
    content: `
      <p>Rest Operator (<code>...</code>) হলো JavaScript এর syntax, যা <strong>remaining values</strong> কে collect করতে use হয়।</p>
      <h3>Spread vs Rest (same syntax <code>...</code>)</h3>
      <ul>
        <li><strong>Spread</strong> → expand করে (unpacking)</li>
        <li><strong>Rest</strong> → collect করে (packing)</li>
      </ul>
      <h3>Function Parameters</h3>
      <pre><code>function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Combined with regular params
function greet(greeting, ...names) {
  names.forEach(name => console.log(\`\${greeting}, \${name}\`));
}
greet("Hello", "John", "Jane", "Bob");</code></pre>
      <h3>Array Destructuring</h3>
      <pre><code>const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]</code></pre>
      <h3>Object Destructuring</h3>
      <pre><code>const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }</code></pre>
      <p><strong>Note:</strong> Rest must be the last element</p>
    `,
    difficulty: "Medium",
    tags: ["Rest Operator", "ES6"],
  },
  {
    id: 40,
    title: "What is template literal?",
    content: `
      <p>Template Literal হলো JavaScript এর modern string syntax, যা multi-line string & dynamic values easily handle করতে use হয়।</p>
      <ul>
        <li>Backticks (\`) use করা হয়</li>
        <li><code>\${}</code> দিয়ে expression embed করা যায়</li>
      </ul>
      <h3>String Interpolation</h3>
      <pre><code>const name = "John";
const age = 30;

// Old way
const msg1 = "Hello, " + name + "! You are " + age + " years old.";

// Template literal
const msg2 = \`Hello, \${name}! You are \${age} years old.\`;</code></pre>
      <h3>Multi-line Strings</h3>
      <pre><code>const html = \`
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
\`;</code></pre>
      <h3>Expression Evaluation</h3>
      <pre><code>const a = 10, b = 20;
console.log(\`Sum: \${a + b}\`); // Sum: 30
console.log(\`Is adult: \${age >= 18 ? 'Yes' : 'No'}\`);</code></pre>
      <h3>Tagged Templates</h3>
      <pre><code>function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => 
    \`\${result}\${str}<mark>\${values[i] || ''}</mark>\`, '');
}

highlight\`Hello \${name}, you are \${age}\`;</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Template Literals", "ES6"],
  },
  {
    id: 41,
    title: "What are ES modules?",
    content: `
      <p>ES Modules (ESM) হলো JavaScript এর official module system, যা code কে আলাদা file এ divide করতে এবং <code>import</code>/<code>export</code> দিয়ে reuse করতে use হয়।</p>
      <h3>Key Features:</h3>
      <ul>
        <li>File-level scope — global pollution নেই</li>
        <li>Static structure — compile time এ import/export resolve হয়</li>
        <li>Named & default export support</li>
        <li>Browser & Node.js এ native support</li>
      </ul>
      <h3>Export</h3>
      <pre><code>// Named exports
export const PI = 3.14;
export function add(a, b) { return a + b; }

// Or export at end
const name = "John";
function greet() { }
export { name, greet };

// Default export
export default function() { }</code></pre>
      <h3>Import</h3>
      <pre><code>// Named imports
import { PI, add } from './math.js';

// Rename
import { add as sum } from './math.js';

// Import all
import * as math from './math.js';

// Default import
import myFunction from './module.js';

// Mixed
import React, { useState, useEffect } from 'react';</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "ES6"],
  },
  {
    id: 42,
    title: "What is default export?",
    content: `
      <p>Default Export হলো ES6 module system এর feature, যা module থেকে একটা main value/function/class export করতে use হয়।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>একটা module এ শুধু <strong>একটা</strong> default export থাকতে পারে</li>
        <li>Import এর সময় curly braces লাগবে না</li>
        <li>Import এ custom name দেওয়া যায়</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// utils.js - Export
export default function greet(name) {
  return \`Hello, \${name}!\`;
}

// Or
function greet(name) { return \`Hello, \${name}!\`; }
export default greet;

// main.js - Import (any name works)
import greet from './utils.js';
import sayHello from './utils.js'; // same thing, different name
import xyz from './utils.js'; // still works!</code></pre>
      <h3>Default + Named Together</h3>
      <pre><code>// module.js
export default function main() { }
export const helper = () => { };

// import
import main, { helper } from './module.js';</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "Export"],
  },
  {
    id: 43,
    title: "What is named export?",
    content: `
      <p>Named Export হলো ES6 module system এর feature, যা module থেকে একাধিক specific values export করতে use হয়।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>একটা module এ অনেক named exports থাকতে পারে</li>
        <li>Import এ curly braces <code>{}</code> mandatory</li>
        <li>Name exact match করতে হবে (unless alias use করা হয়)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// math.js - Export
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Or export at end
const PI = 3.14159;
const E = 2.71828;
export { PI, E };</code></pre>
      <h3>Import</h3>
      <pre><code>// Specific imports
import { PI, add } from './math.js';

// Rename with alias
import { add as sum, multiply as mul } from './math.js';

// Import all
import * as math from './math.js';
console.log(math.PI);
math.add(1, 2);</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "Export"],
  },
  {
    id: 44,
    title: "What is the difference between map and forEach?",
    content: `
      <p><code>map()</code> vs <code>forEach()</code> — দুটোই array method, কিন্তু use case & return value আলাদা।</p>
      <h3>forEach()</h3>
      <ul>
        <li><strong>Purpose:</strong> array এর প্রতিটা element এর উপর action perform</li>
        <li><strong>Return value:</strong> <code>undefined</code></li>
        <li><strong>Use case:</strong> side effects (logging, DOM update)</li>
      </ul>
      <h3>map()</h3>
      <ul>
        <li><strong>Purpose:</strong> array transform করে <strong>new array</strong> return</li>
        <li><strong>Return value:</strong> new array</li>
        <li><strong>Original array:</strong> unchanged</li>
        <li><strong>Use case:</strong> data transformation</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const numbers = [1, 2, 3];

// forEach - no return, side effect
numbers.forEach(n => console.log(n * 2));
// logs: 2, 4, 6
// returns: undefined

// map - returns new array
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (unchanged)</code></pre>
      <h3>Summary:</h3>
      <ul>
        <li><code>forEach()</code> = iterate + side effect, no return</li>
        <li><code>map()</code> = iterate + transform, returns new array</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Array Methods", "map", "forEach"],
  },
  {
    id: 45,
    title: "What is the difference between map, filter, reduce?",
    content: `
      <p><code>map()</code>, <code>filter()</code>, <code>reduce()</code> — তিনটা array higher-order methods।</p>
      <h3>1) map() — Transform</h3>
      <pre><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8]</code></pre>
      <ul>
        <li>প্রতিটি element transform করে</li>
        <li>Returns: same length এর new array</li>
      </ul>
      <h3>2) filter() — Select</h3>
      <pre><code>const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]</code></pre>
      <ul>
        <li>Condition মিলে যাওয়া elements select করে</li>
        <li>Returns: filtered new array (same or less length)</li>
      </ul>
      <h3>3) reduce() — Aggregate</h3>
      <pre><code>const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 10</code></pre>
      <ul>
        <li>Array কে single value এ reduce করে</li>
        <li>Returns: single value (number, string, object, etc.)</li>
      </ul>
      <h3>Chaining Example</h3>
      <pre><code>const result = [1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 10)          // [20, 40]
  .reduce((a, b) => a + b);  // 60</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Array Methods", "map", "filter", "reduce"],
  },
  {
    id: 46,
    title: "Explain Set and Map",
    content: `
      <p><code>Set</code> এবং <code>Map</code> হলো JavaScript এর built-in collection objects।</p>
      <h3>Set — Unique Values Collection</h3>
      <ul>
        <li>Duplicate value store করতে পারে না</li>
        <li>Insertion order maintain করে</li>
        <li><code>NaN === NaN</code> true ধরা হয় (normal JS এ false)</li>
      </ul>
      <pre><code>const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}

set.add(4);
set.has(2);    // true
set.delete(1);
set.size;      // 3

// NaN handling
set.add(NaN);
set.add(NaN);
console.log(set.size); // NaN counted once!</code></pre>
      <h3>Map — Key-Value Pairs</h3>
      <ul>
        <li>যেকোনো type এর key allowed (object, function, etc.)</li>
        <li>Key order maintain করে</li>
        <li>Object এর চেয়ে better performance for frequent add/remove</li>
      </ul>
      <pre><code>const map = new Map();
map.set('name', 'John');
map.set(1, 'one');
map.set({}, 'object key');

map.get('name');  // 'John'
map.has(1);       // true
map.delete('name');
map.size;         // 2

// Iteration
for (const [key, value] of map) {
  console.log(key, value);
}</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Set", "Map", "Collections"],
  },
  {
    id: 47,
    title: "WeakSet vs WeakMap?",
    content: `
      <p><code>WeakSet</code> এবং <code>WeakMap</code> হলো JavaScript এর special collection objects, যেগুলো garbage collection friendly।</p>
      <h3>Key Difference from Set/Map:</h3>
      <ul>
        <li>শুধু <strong>objects</strong> কে key/value হিসেবে রাখতে পারে (primitives না)</li>
        <li><strong>Weakly held</strong> → object এর আর কোনো reference না থাকলে auto garbage collected</li>
        <li><strong>Not iterable</strong> → forEach, for...of কাজ করে না</li>
        <li><strong>No size property</strong></li>
      </ul>
      <h3>WeakSet</h3>
      <pre><code>const weakSet = new WeakSet();
let obj = { name: "John" };

weakSet.add(obj);
weakSet.has(obj);  // true

obj = null; // এখন object garbage collected হতে পারে</code></pre>
      <h3>WeakMap</h3>
      <pre><code>const weakMap = new WeakMap();
let user = { id: 1 };

weakMap.set(user, "John's data");
weakMap.get(user);  // "John's data"

user = null; // key ও value garbage collected হবে</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>DOM elements এর সাথে data associate করা</li>
        <li>Private data store করা</li>
        <li>Caching (auto cleanup)</li>
      </ul>
      <p><strong>মনে রাখার টিপস:</strong> Weak = "ধরে রাখে না, ছেড়ে দেয়" → memory leak prevent করে</p>
    `,
    difficulty: "Medium",
    tags: ["WeakSet", "WeakMap", "Collections"],
  },
  {
    id: 48,
    title: "What are symbols?",
    content: `
      <p>Symbols হলো JavaScript এর primitive data type, যা unique & immutable identifiers create করতে use হয়।</p>
      <h3>Key Features:</h3>
      <ul>
        <li>প্রতিটি Symbol unique — same description দিলেও equal না</li>
        <li>Object property key হিসেবে use করা যায়</li>
        <li>for...in, Object.keys() এ দেখা যায় না (hidden)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Creating symbols
const sym1 = Symbol();
const sym2 = Symbol("description");
const sym3 = Symbol("description");

console.log(sym2 === sym3); // false (always unique!)

// As object property
const id = Symbol("id");
const user = {
  name: "John",
  [id]: 123
};

console.log(user[id]);      // 123
console.log(Object.keys(user)); // ["name"] (symbol hidden)</code></pre>
      <h3>Well-known Symbols:</h3>
      <pre><code>// Symbol.iterator - makes object iterable
// Symbol.toStringTag - custom toString
// Symbol.hasInstance - instanceof behavior</code></pre>
      <h3>Global Symbol Registry:</h3>
      <pre><code>const globalSym = Symbol.for("shared");
const sameSym = Symbol.for("shared");
console.log(globalSym === sameSym); // true</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Symbols", "ES6"],
  },
  {
    id: 49,
    title: "What is optional chaining?",
    content: `
      <p>Optional Chaining (<code>?.</code>) হলো JavaScript এর syntax, যা nested property access এ error avoid করতে use হয়।</p>
      <ul>
        <li>Property <code>null</code> বা <code>undefined</code> হলে error না দিয়ে <code>undefined</code> return করে</li>
        <li>ES2020 এ introduce হয়েছে</li>
      </ul>
      <h3>Property Access</h3>
      <pre><code>const user = { 
  name: "John",
  address: { city: "NYC" }
};

// Without optional chaining
const zip = user.address && user.address.zip; // undefined

// With optional chaining
const zip = user.address?.zip; // undefined (no error)
const country = user.address?.country?.code; // undefined</code></pre>
      <h3>Function Calls</h3>
      <pre><code>const user = {
  greet: () => "Hello!"
};

user.greet?.();    // "Hello!"
user.goodbye?.();  // undefined (no error)</code></pre>
      <h3>Array Access</h3>
      <pre><code>const arr = [1, 2, 3];
arr?.[0];  // 1

const empty = null;
empty?.[0]; // undefined</code></pre>
      <h3>Combined with Nullish Coalescing</h3>
      <pre><code>const city = user.address?.city ?? "Unknown";
// If city is null/undefined, use "Unknown"</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Optional Chaining", "ES2020"],
  },
  {
    id: 50,
    title: "What is Nullish coalescing?",
    content: `
      <p>Nullish Coalescing (<code>??</code>) হলো JavaScript এর operator, যা <code>null</code> বা <code>undefined</code> হলে default value দেয়।</p>
      <h3>|| vs ?? এর পার্থক্য</h3>
      <ul>
        <li><code>||</code> → সব falsy value (<code>0</code>, <code>""</code>, <code>false</code>, <code>null</code>, <code>undefined</code>) replace করে</li>
        <li><code>??</code> → শুধু <code>null</code>/<code>undefined</code> replace করে, অন্য falsy values রাখে</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const value1 = null ?? "default";    // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";       // 0 (keeps it!)
const value4 = "" ?? "default";      // "" (keeps it!)
const value5 = false ?? "default";   // false (keeps it!)

// Compare with ||
const value6 = 0 || "default";       // "default" (replaces 0!)
const value7 = "" || "default";      // "default" (replaces ""!)</code></pre>
      <h3>Use Case</h3>
      <pre><code>// User settings with valid 0 or empty string
const volume = userSettings.volume ?? 50;  // 0 is valid!
const name = userSettings.name ?? "Guest"; // "" might be valid!</code></pre>
      <p><strong>মনে রাখার টিপস:</strong></p>
      <ul>
        <li><code>||</code> = "falsy হলে বদলাও"</li>
        <li><code>??</code> = "null/undefined হলে বদলাও"</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Nullish Coalescing", "ES2020"],
  },
  {
    id: 51,
    title: "What is DOM?",
    content: `
      <p>DOM (Document Object Model) হলো web page এর programming interface, যা HTML কে tree structure এ represent করে এবং JavaScript দিয়ে manipulate করতে দেয়।</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Browser HTML parse করে DOM tree তৈরি করে</li>
        <li>প্রতিটি HTML element = একটি node/object</li>
        <li>JavaScript দিয়ে dynamically modify করা যায়</li>
      </ul>
      <h3>DOM Tree Structure:</h3>
      <pre><code>document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p</code></pre>
      <h3>Common DOM Methods:</h3>
      <pre><code>// Select elements
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('div');

// Modify content
element.innerHTML = '<b>Bold</b>';
element.textContent = 'Plain text';

// Modify attributes
element.setAttribute('class', 'active');
element.classList.add('highlight');

// Create & append
const div = document.createElement('div');
parent.appendChild(div);</code></pre>
      <h3>Related Concepts:</h3>
      <ul>
        <li><strong>Virtual DOM</strong> → React এর optimization technique</li>
        <li><strong>Shadow DOM</strong> → Web Components এ encapsulation</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["DOM", "Web APIs"],
  },
  {
    id: 52,
    title: "What is the difference between HTMLCollection and NodeList?",
    content: `
      <p><code>HTMLCollection</code> এবং <code>NodeList</code> — দুটোই DOM elements এর list, কিন্তু behavior আলাদা।</p>
      <h3>HTMLCollection</h3>
      <ul>
        <li><strong>Live collection</strong> → DOM change হলে auto update হয়</li>
        <li>Only element nodes (text, comment নেই)</li>
        <li><code>forEach</code> নেই directly</li>
        <li>Methods: <code>getElementsByClassName()</code>, <code>getElementsByTagName()</code></li>
      </ul>
      <h3>NodeList</h3>
      <ul>
        <li><strong>Static (mostly)</strong> → <code>querySelectorAll()</code> এর result</li>
        <li>Live হতে পারে → <code>childNodes</code></li>
        <li>All node types (element, text, comment)</li>
        <li><code>forEach</code> support করে</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// HTMLCollection (live)
const divs = document.getElementsByTagName('div');

// NodeList (static)
const divs2 = document.querySelectorAll('div');

// NodeList has forEach
divs2.forEach(div => console.log(div));

// Convert HTMLCollection to array
const arr = [...divs];
// or
const arr2 = Array.from(divs);</code></pre>
      <h3>Summary:</h3>
      <ul>
        <li><code>HTMLCollection</code> = live, elements only, no forEach</li>
        <li><code>NodeList</code> = usually static, all nodes, has forEach</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["DOM", "HTMLCollection", "NodeList"],
  },
  {
    id: 53,
    title: "What is event bubbling?",
    content: `
      <p>Event Bubbling হলো event propagation method, যেখানে event <strong>child থেকে parent</strong> এর দিকে propagate করে (bottom → top)।</p>
      <h3>Event Propagation এর ৩টি Phase:</h3>
      <ol>
        <li><strong>Capturing</strong> → top থেকে target (নামে)</li>
        <li><strong>Target</strong> → target element এ</li>
        <li><strong>Bubbling</strong> → target থেকে top (ওঠে) ← default</li>
      </ol>
      <h3>Example</h3>
      <pre><code>&lt;div id="grandparent"&gt;
  &lt;div id="parent"&gt;
    &lt;button id="child"&gt;Click&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});

// Click button → Output:
// Child clicked
// Parent clicked
// Grandparent clicked
&lt;/script&gt;</code></pre>
      <h3>Stop Bubbling:</h3>
      <pre><code>element.addEventListener('click', (e) => {
  e.stopPropagation(); // parent এ যাবে না
});

// stopImmediatePropagation() → same element এর বাকি listeners ও stop</code></pre>
      <p><strong>মনে রাখার টিপস:</strong> "নামে (capture) → থামে (target) → ওঠে (bubble)"</p>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Bubbling"],
  },
  {
    id: 54,
    title: "What is event capturing?",
    content: `
      <p>Event Capturing হলো event propagation method, যেখানে event <strong>parent থেকে child</strong> এর দিকে propagate করে (top → bottom)।</p>
      <h3>Event Propagation এর ৩টি Phase:</h3>
      <ol>
        <li><strong>Capturing</strong> → top থেকে target (নামে) ← এই phase</li>
        <li><strong>Target</strong> → target element এ</li>
        <li><strong>Bubbling</strong> → target থেকে top (ওঠে)</li>
      </ol>
      <h3>How to Enable Capturing:</h3>
      <pre><code>// Third parameter = true for capturing
element.addEventListener('click', handler, true);

// Or use options object
element.addEventListener('click', handler, { capture: true });</code></pre>
      <h3>Example</h3>
      <pre><code>document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent (capture)');
}, true);

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent (capture)');
}, true);

document.getElementById('child').addEventListener('click', () => {
  console.log('Child');
});

// Click button → Output:
// Grandparent (capture)
// Parent (capture)
// Child</code></pre>
      <h3>When to Use:</h3>
      <ul>
        <li>Event target এ পৌঁছানোর আগে intercept করতে</li>
        <li>Parent-level validation বা logging</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Capturing"],
  },
  {
    id: 55,
    title: "What is event delegation?",
    content: `
      <p>Event Delegation হলো technique যেখানে parent element এ একটি listener দিয়ে সব child elements এর events handle করা হয়।</p>
      <h3>Why Use It?</h3>
      <ul>
        <li>Performance → অনেক listeners এর বদলে একটা</li>
        <li>Dynamic elements → নতুন child add হলেও কাজ করে</li>
        <li>Memory efficient</li>
      </ul>
      <h3>Example</h3>
      <pre><code>&lt;ul id="list"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;
// ❌ Bad: listener on each li
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => console.log(li.textContent));
});

// ✅ Good: delegation on parent
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});

// Dynamic element also works!
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
document.getElementById('list').appendChild(newLi);
// Click on Item 4 will work!
&lt;/script&gt;</code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li>Event bubbling এর উপর depend করে</li>
        <li><code>e.target</code> দিয়ে actual clicked element পাওয়া যায়</li>
        <li><code>e.currentTarget</code> = listener যে element এ আছে</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Delegation"],
  },
  {
    id: 56,
    title: "How does localStorage work?",
    content: `
      <p>localStorage হলো Web Storage API, যা browser এ key-value data persistently store করে।</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Data string হিসেবে store হয়</li>
        <li>Browser close করলেও data থাকে (persistent)</li>
        <li>~5-10MB per domain</li>
        <li>Same origin policy follow করে</li>
      </ul>
      <h3>Methods:</h3>
      <pre><code>// Set
localStorage.setItem('name', 'John');

// Get
const name = localStorage.getItem('name'); // 'John'

// Remove
localStorage.removeItem('name');

// Clear all
localStorage.clear();

// Get key by index
localStorage.key(0);</code></pre>
      <h3>Store Objects (JSON):</h3>
      <pre><code>const user = { name: 'John', age: 30 };

// Save
localStorage.setItem('user', JSON.stringify(user));

// Retrieve
const stored = JSON.parse(localStorage.getItem('user'));</code></pre>
      <h3>⚠️ Security Warning:</h3>
      <ul>
        <li>localStorage XSS attack এ vulnerable</li>
        <li>Sensitive data (password, auth token) এখানে রাখা <strong>unsafe</strong></li>
        <li>HttpOnly cookies বেশি secure for auth tokens</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["localStorage", "Web Storage"],
  },
  {
    id: 57,
    title: "sessionStorage vs localStorage",
    content: `
      <p><code>sessionStorage</code> এবং <code>localStorage</code> — দুটোই Web Storage API, কিন্তু lifetime আলাদা।</p>
      <h3>localStorage</h3>
      <ul>
        <li><strong>Lifetime:</strong> Persistent → browser close করলেও থাকে</li>
        <li><strong>Scope:</strong> Same origin এ সব tabs share করে</li>
        <li><strong>Use case:</strong> user preferences, theme, long-term data</li>
      </ul>
      <h3>sessionStorage</h3>
      <ul>
        <li><strong>Lifetime:</strong> Tab/session পর্যন্ত → tab close করলে delete</li>
        <li><strong>Scope:</strong> শুধু current tab, new tab এ data নেই</li>
        <li><strong>Use case:</strong> temporary data, form state, tab-specific data</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Same API, different lifetime
sessionStorage.setItem('temp', 'data');
localStorage.setItem('permanent', 'data');

// Close tab:
// sessionStorage.getItem('temp')     → null
// localStorage.getItem('permanent')  → 'data'</code></pre>
      <h3>Summary:</h3>
      <table>
        <tr><th>Feature</th><th>localStorage</th><th>sessionStorage</th></tr>
        <tr><td>Lifetime</td><td>Forever</td><td>Tab close পর্যন্ত</td></tr>
        <tr><td>Tab sharing</td><td>Yes</td><td>No</td></tr>
        <tr><td>Size</td><td>~5-10MB</td><td>~5MB</td></tr>
      </table>
    `,
    difficulty: "Medium",
    tags: ["sessionStorage", "localStorage", "Web Storage"],
  },
  {
    id: 58,
    title: "cookie vs localStorage vs sessionStorage",
    content: `
      <p>তিনটাই client-side storage, কিন্তু purpose, size, lifetime আলাদা।</p>
      <h3>Comparison Table:</h3>
      <table>
        <tr>
          <th>Feature</th>
          <th>Cookie</th>
          <th>localStorage</th>
          <th>sessionStorage</th>
        </tr>
        <tr>
          <td>Size</td>
          <td>~4KB</td>
          <td>~5-10MB</td>
          <td>~5MB</td>
        </tr>
        <tr>
          <td>Lifetime</td>
          <td>Expiry date</td>
          <td>Forever</td>
          <td>Tab close</td>
        </tr>
        <tr>
          <td>Server access</td>
          <td>Yes (auto send)</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Tab sharing</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
      </table>
      <h3>Cookie Important Attributes:</h3>
      <pre><code>document.cookie = "name=John; expires=Fri, 31 Dec 2024; path=/";

// Security attributes
// HttpOnly → JS access block (XSS protection) - server sets this
// Secure   → HTTPS only
// SameSite → CSRF protection (Strict/Lax/None)</code></pre>
      <h3>When to Use:</h3>
      <ul>
        <li><strong>Cookie:</strong> Auth tokens (HttpOnly), server needs data</li>
        <li><strong>localStorage:</strong> User preferences, theme, large client data</li>
        <li><strong>sessionStorage:</strong> Form state, temporary tab data</li>
      </ul>
      <p><strong>Note:</strong> প্রতিটি HTTP request এ cookies automatically server এ যায় → bandwidth concern</p>
    `,
    difficulty: "Medium",
    tags: ["Cookie", "localStorage", "sessionStorage"],
  },
  {
    id: 59,
    title: "What is the difference between innerHTML and textContent?",
    content: `
      <p><code>innerHTML</code> এবং <code>textContent</code> — দুটো DOM property, কিন্তু behavior আলাদা।</p>
      <h3>innerHTML</h3>
      <ul>
        <li>HTML content read/write করে</li>
        <li>HTML tags parse করে render করে</li>
        <li>⚠️ XSS vulnerability থাকতে পারে</li>
      </ul>
      <h3>textContent</h3>
      <ul>
        <li>শুধু plain text read/write করে</li>
        <li>HTML tags কে text হিসেবে দেখায়, render করে না</li>
        <li>Safer, faster</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const div = document.querySelector('div');

// innerHTML - renders HTML
div.innerHTML = '&lt;b&gt;Bold&lt;/b&gt; text';
// Shows: Bold text (with bold)

// textContent - shows as text
div.textContent = '&lt;b&gt;Bold&lt;/b&gt; text';
// Shows: &lt;b&gt;Bold&lt;/b&gt; text (as plain text)

// Reading
// &lt;div&gt;&lt;span&gt;Hello&lt;/span&gt; World&lt;/div&gt;
div.innerHTML;    // "&lt;span&gt;Hello&lt;/span&gt; World"
div.textContent;  // "Hello World"</code></pre>
      <h3>innerText vs textContent:</h3>
      <ul>
        <li><code>innerText</code> → CSS aware (hidden text দেখায় না)</li>
        <li><code>textContent</code> → CSS ignore করে (সব text দেখায়)</li>
      </ul>
      <h3>When to Use:</h3>
      <ul>
        <li><code>innerHTML</code> → HTML render করতে হলে (trusted source থেকে)</li>
        <li><code>textContent</code> → plain text, user input (safer)</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["DOM", "innerHTML", "textContent"],
  },
  {
    id: 60,
    title: "What is reflow and repaint?",
    content: `
      <p>Reflow এবং Repaint হলো browser rendering process এর part।</p>
      <h3>Reflow (Layout)</h3>
      <ul>
        <li>Browser element এর position, size calculate করে</li>
        <li><strong>Expensive operation</strong></li>
        <li>Triggers: width/height change, font change, DOM add/remove</li>
      </ul>
      <h3>Repaint</h3>
      <ul>
        <li>Visual appearance update করে (without layout change)</li>
        <li>Reflow এর চেয়ে lighter</li>
        <li>Triggers: color, background, visibility change</li>
      </ul>
      <h3>Important Relationship:</h3>
      <p><strong>Reflow হলে Repaint ও হয়, কিন্তু Repaint এ Reflow হয় না।</strong></p>
      <h3>Example</h3>
      <pre><code>// ❌ Triggers reflow (expensive)
element.style.width = '100px';
element.style.height = '200px';
element.style.margin = '10px';

// ✅ Triggers only repaint (cheaper)
element.style.color = 'red';
element.style.backgroundColor = 'blue';</code></pre>
      <h3>Optimization Tips:</h3>
      <ul>
        <li>Batch DOM updates</li>
        <li>Use <code>classList</code> instead of multiple style changes</li>
        <li>Use <code>transform</code> & <code>opacity</code> for animations (GPU accelerated)</li>
        <li>Use <code>DocumentFragment</code> for multiple DOM insertions</li>
      </ul>
      <p><strong>মনে রাখার টিপস:</strong></p>
      <ul>
        <li>Reflow = ঘর সাজানো (বড় কাজ)</li>
        <li>Repaint = রং করা (ছোট কাজ)</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Reflow", "Repaint", "Performance"],
  },
  {
    id: 61,
    title: "How does browser rendering work?",
    content: `
      <p>Browser HTML, CSS, JS থেকে visible page তৈরি করে কয়েকটি step এ।</p>
      <h3>Rendering Pipeline:</h3>
      <ol>
        <li><strong>Parse HTML → DOM Tree</strong>
          <ul><li>HTML parse করে Document Object Model তৈরি</li></ul>
        </li>
        <li><strong>Parse CSS → CSSOM Tree</strong>
          <ul><li>CSS parse করে CSS Object Model তৈরি</li></ul>
        </li>
        <li><strong>DOM + CSSOM → Render Tree</strong>
          <ul><li>Visible elements + styles combine</li>
          <li><code>display: none</code> elements excluded</li></ul>
        </li>
        <li><strong>Layout (Reflow)</strong>
          <ul><li>Position & size calculate করে</li></ul>
        </li>
        <li><strong>Paint</strong>
          <ul><li>Pixels draw করে (colors, borders, shadows)</li></ul>
        </li>
        <li><strong>Composite</strong>
          <ul><li>Layers merge করে final image তৈরি</li></ul>
        </li>
      </ol>
      <h3>Visual Flow:</h3>
      <pre><code>HTML → DOM
         ↘
           Render Tree → Layout → Paint → Composite → Screen
         ↗
CSS → CSSOM</code></pre>
      <h3>JavaScript's Role:</h3>
      <ul>
        <li>JS DOM/CSSOM modify করতে পারে</li>
        <li>JS execution rendering block করতে পারে</li>
        <li><code>async</code>/<code>defer</code> script attributes এ non-blocking হয়</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Browser Rendering", "Performance"],
  },
  {
    id: 62,
    title: "What is CORS?",
    content: `
      <p>CORS (Cross-Origin Resource Sharing) হলো security mechanism, যা cross-origin HTTP requests control করে।</p>
      <h3>Same-Origin Policy:</h3>
      <p>By default, browser শুধু same origin (protocol + domain + port) থেকে request allow করে।</p>
      <pre><code>// Same origin
https://example.com/page1
https://example.com/page2

// Different origin (CORS needed)
https://example.com → https://api.example.com
https://example.com → http://example.com (protocol)
https://example.com:3000 → https://example.com:4000 (port)</code></pre>
      <h3>Simple vs Complex Requests:</h3>
      <ul>
        <li><strong>Simple:</strong> GET, POST (basic), HEAD → preflight নেই</li>
        <li><strong>Complex:</strong> PUT, DELETE, custom headers → preflight হয়</li>
      </ul>
      <h3>CORS Headers (Server Response):</h3>
      <pre><code>Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Credentials: true</code></pre>
      <h3>Important Notes:</h3>
      <ul>
        <li>CORS শুধু <strong>browser</strong> enforce করে</li>
        <li>Server-to-server request এ CORS applicable না</li>
        <li>CORS error হলে server headers check করতে হয়</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["CORS", "Security"],
  },
  {
    id: 63,
    title: "What is preflight request?",
    content: `
      <p>Preflight Request হলো CORS এর part, যা browser automatically complex cross-origin request এর আগে send করে।</p>
      <h3>When Preflight Happens:</h3>
      <ul>
        <li>HTTP methods: PUT, DELETE, PATCH</li>
        <li>Custom headers (e.g., <code>Authorization</code>, <code>X-Custom-Header</code>)</li>
        <li>Content-Type: <code>application/json</code> (except form-data)</li>
      </ul>
      <h3>Preflight Flow:</h3>
      <pre><code>1. Browser sends OPTIONS request (preflight)
   → Asks: "Can I send PUT with these headers?"

2. Server responds with allowed methods/headers
   → "Yes, PUT allowed, these headers OK"

3. Browser sends actual request
   → PUT request with data</code></pre>
      <h3>Preflight Request Example:</h3>
      <pre><code>OPTIONS /api/users HTTP/1.1
Origin: https://example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization</code></pre>
      <h3>Server Response:</h3>
      <pre><code>HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 86400  // cache preflight 24 hours</code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li>Browser automatic করে, JS manually করতে পারে না</li>
        <li>OPTIONS method use করে</li>
        <li><code>Access-Control-Max-Age</code> দিয়ে cache করা যায়</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["CORS", "Preflight", "Security"],
  },
  {
    id: 64,
    title: "What is service worker?",
    content: `
      <p>Service Worker হলো JavaScript file যা browser background এ run করে, offline capability ও push notifications handle করে।</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Separate thread এ run করে (non-blocking)</li>
        <li>DOM access নেই</li>
        <li>Network requests intercept করতে পারে</li>
        <li>HTTPS required (localhost ছাড়া)</li>
      </ul>
      <h3>Lifecycle:</h3>
      <pre><code>1. Register → Install → Activate → Running

// Register
navigator.serviceWorker.register('/sw.js');

// sw.js
self.addEventListener('install', (event) => {
  // Cache assets
});

self.addEventListener('activate', (event) => {
  // Clean old caches
});

self.addEventListener('fetch', (event) => {
  // Intercept network requests
});</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li><strong>Offline support</strong> → cache files, serve when offline</li>
        <li><strong>Push notifications</strong></li>
        <li><strong>Background sync</strong></li>
        <li><strong>Cache strategies</strong> (cache-first, network-first)</li>
      </ul>
      <h3>Caching Example:</h3>
      <pre><code>self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Service Worker", "PWA"],
  },
  {
    id: 65,
    title: "What is PWAs?",
    content: `
      <p>PWA (Progressive Web App) হলো web app যা native app এর মতো experience দেয়।</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Installable</strong> → home screen এ add করা যায়</li>
        <li><strong>Offline support</strong> → Service Worker দিয়ে cache</li>
        <li><strong>Push notifications</strong></li>
        <li><strong>Responsive</strong> → সব device এ কাজ করে</li>
        <li><strong>App-like</strong> → full-screen, splash screen</li>
      </ul>
      <h3>Requirements:</h3>
      <ol>
        <li><strong>HTTPS</strong> (secure context)</li>
        <li><strong>Service Worker</strong> (offline + caching)</li>
        <li><strong>Web App Manifest</strong> (metadata for install)</li>
      </ol>
      <h3>manifest.json:</h3>
      <pre><code>{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}</code></pre>
      <h3>Examples:</h3>
      <p>Twitter Lite, Spotify Web, Starbucks, Pinterest</p>
      <h3>Benefits:</h3>
      <ul>
        <li>No app store needed</li>
        <li>Smaller than native apps</li>
        <li>Single codebase</li>
        <li>SEO friendly</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["PWA", "Service Worker"],
  },
  {
    id: 66,
    title: "What is requestAnimationFrame?",
    content: `
      <p><code>requestAnimationFrame</code> হলো browser API যা smooth animation এর জন্য optimized way তে callback execute করে।</p>
      <h3>Why Not setTimeout/setInterval?</h3>
      <ul>
        <li>Fixed interval, browser refresh rate এর সাথে sync না</li>
        <li>Inactive tab এ ও চলতে থাকে (battery waste)</li>
        <li>Janky animations</li>
      </ul>
      <h3>Benefits of requestAnimationFrame:</h3>
      <ul>
        <li>Browser repaint এর সাথে sync (usually 60fps)</li>
        <li>Inactive tab এ pause হয়</li>
        <li>Smoother animations</li>
        <li>Better performance</li>
      </ul>
      <h3>Example:</h3>
      <pre><code>let position = 0;

function animate() {
  position += 2;
  element.style.transform = \`translateX(\${position}px)\`;
  
  if (position < 500) {
    requestAnimationFrame(animate);
  }
}

// Start animation
requestAnimationFrame(animate);

// Cancel animation
const id = requestAnimationFrame(animate);
cancelAnimationFrame(id);</code></pre>
      <h3>With timestamp:</h3>
      <pre><code>function animate(timestamp) {
  // timestamp = time since page load
  const progress = timestamp / 1000; // seconds
  
  element.style.transform = \`translateX(\${progress * 100}px)\`;
  
  if (progress < 5) {
    requestAnimationFrame(animate);
  }
}

requestAnimationFrame(animate);</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Animation", "Performance"],
  },
  {
    id: 67,
    title: "What is lazy loading?",
    content: `
      <p>Lazy Loading হলো performance optimization technique, যা resources প্রয়োজন হলে load করে, initially না।</p>
      <h3>Benefits:</h3>
      <ul>
        <li>Faster initial page load</li>
        <li>Bandwidth save</li>
        <li>Memory efficient</li>
      </ul>
      <h3>Image Lazy Loading:</h3>
      <pre><code>// Native lazy loading (modern browsers)
&lt;img src="image.jpg" loading="lazy" alt="..."&gt;

// Intersection Observer approach
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});</code></pre>
      <h3>React Lazy Loading:</h3>
      <pre><code>import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Images below the fold</li>
        <li>Heavy components (modals, charts)</li>
        <li>Route-based code splitting</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Lazy Loading", "Performance"],
  },
  {
    id: 68,
    title: "Explain browser caching",
    content: `
      <p>Browser Caching হলো technique যা resources locally store করে faster subsequent loads এর জন্য।</p>
      <h3>Cache-Control Header:</h3>
      <pre><code>// Cache for 1 year (static assets)
Cache-Control: max-age=31536000

// No caching
Cache-Control: no-store

// Revalidate every time
Cache-Control: no-cache

// Private (browser only, no CDN)
Cache-Control: private, max-age=3600</code></pre>
      <h3>ETag (Validation):</h3>
      <pre><code>// Server response
ETag: "abc123"

// Next request
If-None-Match: "abc123"

// If unchanged → 304 Not Modified (use cache)</code></pre>
      <h3>Last-Modified:</h3>
      <pre><code>// Server response
Last-Modified: Wed, 01 Jan 2024 00:00:00 GMT

// Next request
If-Modified-Since: Wed, 01 Jan 2024 00:00:00 GMT</code></pre>
      <h3>Caching Strategies:</h3>
      <ul>
        <li><strong>Static assets</strong> (JS, CSS, images) → long max-age + versioning</li>
        <li><strong>HTML</strong> → no-cache or short max-age</li>
        <li><strong>API responses</strong> → depends on data freshness needs</li>
      </ul>
      <h3>Cache Busting:</h3>
      <pre><code>// Add version/hash to filename
&lt;script src="app.abc123.js"&gt;&lt;/script&gt;
&lt;link href="styles.xyz789.css"&gt;</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Caching", "Performance"],
  },
  {
    id: 69,
    title: "What is a memory leak in JavaScript?",
    content: `
      <p>Memory Leak হলো unused memory release না হওয়া, যার ফলে memory usage বাড়তে থাকে এবং performance degrade করে।</p>
      <h3>Common Causes:</h3>
      <ol>
        <li><strong>Global variables</strong>
          <pre><code>function leak() {
  leaked = "I'm global!"; // no var/let/const
}</code></pre>
        </li>
        <li><strong>Forgotten event listeners</strong>
          <pre><code>// ❌ Never removed
element.addEventListener('click', handler);

// ✅ Proper cleanup
element.removeEventListener('click', handler);</code></pre>
        </li>
        <li><strong>Forgotten timers</strong>
          <pre><code>// ❌ Never cleared
setInterval(() => { /* ... */ }, 1000);

// ✅ Clear when done
const id = setInterval(() => {}, 1000);
clearInterval(id);</code></pre>
        </li>
        <li><strong>Detached DOM references</strong>
          <pre><code>const elements = [];
elements.push(document.getElementById('item'));
document.body.removeChild(item);
// item still in memory via elements array!</code></pre>
        </li>
        <li><strong>Closures holding references</strong></li>
        <li><strong>console.log</strong> (DevTools open থাকলে objects GC হয় না)</li>
      </ol>
      <h3>How to Detect:</h3>
      <ul>
        <li>Chrome DevTools → Memory tab</li>
        <li>Heap snapshot comparison</li>
        <li>Performance monitor</li>
      </ul>
      <h3>Prevention:</h3>
      <ul>
        <li>Use <code>let</code>/<code>const</code> instead of <code>var</code></li>
        <li>Always cleanup: <code>removeEventListener</code>, <code>clearInterval</code></li>
        <li>Nullify references when done</li>
        <li>Use WeakMap/WeakSet for object references</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Memory Leak", "Performance"],
  },
];

const questionsDataV2En = [
  {
    id: 1,
    title: "What is the difference between var, let, and const?",
    content: `
      <p><mark>01. var</mark></p>
      <ul>
        <li>Function scoped, not block scoped</li>
        <li>Can be re-declared</li>
        <li>Hoisted with <code>undefined</code> value</li>
      </ul>
      <p><mark>02. let</mark></p>
      <ul>
        <li>Block scoped</li>
        <li>Cannot re-declare in same block</li>
        <li>Can re-assign value</li>
        <li>Hoisted but stays in Temporal Dead Zone (TDZ)</li>
      </ul>
      <p><mark>03. const</mark></p>
      <ul>
        <li>Block scoped</li>
        <li>Cannot re-declare in same block</li>
        <li>Must assign value when declaring</li>
        <li>Cannot re-assign primitive values</li>
        <li>But can modify object/array contents (only reference is fixed)</li>
        <li>Hoisted</li>
      </ul>
      <p><strong>Remember:</strong> const = "box is fixed, but items inside can change"</p>
    `,
    difficulty: "Easy",
    tags: ["Variables", "JavaScript Basics"],
  },
  {
    id: 2,
    title: "What is hoisting?",
    content: `
      <p>Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compile time.</p>
      <ul>
        <li><code>var</code> is hoisted with <code>undefined</code> value — accessing before declaration gives undefined</li>
        <li><code>let</code> and <code>const</code> are hoisted but stay in TDZ — accessing before declaration gives ReferenceError</li>
        <li>Function declarations are hoisted completely — can call before declaration</li>
        <li>Function expressions and arrow functions are hoisted as variables only, not the body — calling before declaration gives error</li>
      </ul>
      <p><strong>Remember:</strong></p>
      <ul>
        <li>Function declaration = fully hoisted ✅</li>
        <li>Function expression/arrow = only name hoisted, not body ❌</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Hoisting", "JavaScript Basics"],
  },
  {
    id: 3,
    title: "What is the temporal dead zone?",
    content: `
      <p>Temporal Dead Zone (TDZ) is the time between entering a block and the actual declaration of <code>let</code> or <code>const</code> variable. During this time, accessing the variable throws ReferenceError.</p>
      <p><em>TDZ means "exists but cannot be used yet"</em></p>
      <ol>
        <li>TDZ starts when entering the block</li>
        <li>TDZ ends after declaration/initialization</li>
        <li>Only applies to <code>let</code> and <code>const</code> — <code>var</code> has no TDZ</li>
      </ol>
      <h3>Example</h3>
      <pre><code>{
  // TDZ starts
  console.log(a); // ❌ ReferenceError
  let a = 10;
  // TDZ ends
}</code></pre>
    `,
    difficulty: "Medium",
    tags: ["TDZ", "JavaScript Basics"],
  },
  {
    id: 4,
    title: "Explain closures with an example",
    content: `
      <p>Closure is a function that remembers variables from its parent scope even after the parent function has finished executing.</p>
      <ol>
        <li>Inner function can access outer function's variables</li>
        <li>This access remains even after outer function returns</li>
      </ol>
      <h3>Example</h3>
      <pre><code>function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3</code></pre>
      <p><strong>Remember:</strong> Closure = function + its surrounding variables' memory</p>
    `,
    difficulty: "Medium",
    tags: ["Closures", "Functions"],
  },
  {
    id: 5,
    title: "What are higher-order functions?",
    content: `
      <p>Higher-Order Functions (HOF) are functions that:</p>
      <ol>
        <li>Take a function as argument, OR</li>
        <li>Return a function</li>
      </ol>
      <p>Common examples: <code>map</code>, <code>filter</code>, <code>reduce</code>, callbacks</p>
      <h3>Example</h3>
      <pre><code>// Function as argument
const numbers = [1, 2, 3];
numbers.map(num => num * 2); // [2, 4, 6]

// Function returning function
function multiplier(factor) {
  return (num) => num * factor;
}
const double = multiplier(2);
double(5); // 10</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Functions", "HOF"],
  },
  {
    id: 6,
    title: "Explain the call stack",
    content: `
      <p>Call Stack is a data structure that tracks function execution using <strong>Last In First Out (LIFO)</strong> principle.</p>
      <p>JavaScript is single-threaded — can do only one thing at a time.</p>
      <ul>
        <li>When function is called → pushed to stack</li>
        <li>When function completes → popped from stack</li>
        <li>Too many nested calls → "Maximum call stack size exceeded" (Stack Overflow)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function first() {
  second();
  console.log("First");
}
function second() {
  console.log("Second");
}
first();
// Stack: [first] → [first, second] → [first] → []</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Call Stack", "Execution Context"],
  },
  {
    id: 7,
    title: "What is an event loop?",
    content: `
      <p>Event Loop is JavaScript's mechanism to handle asynchronous code while being single-threaded.</p>
      <p>It coordinates between Call Stack, Web APIs, and Callback Queue.</p>
      <h3>How it works:</h3>
      <ol>
        <li>Check if Call Stack is empty</li>
        <li>If empty → take tasks from Microtask Queue first</li>
        <li>Then take tasks from Macrotask Queue</li>
        <li>Repeat this cycle</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 8,
    title: "Explain microtask and macrotask queue",
    content: `
      <p>Two queues manage async tasks in JavaScript's event loop.</p>
      <h3>1) Macrotask Queue (Task Queue)</h3>
      <p><strong>Examples:</strong> <code>setTimeout</code>, <code>setInterval</code>, I/O, UI rendering</p>
      <h3>2) Microtask Queue (Higher Priority)</h3>
      <p><strong>Examples:</strong> <code>Promise.then/catch/finally</code>, <code>queueMicrotask</code>, <code>MutationObserver</code></p>
      <h3>Execution Order:</h3>
      <ol>
        <li>All sync code runs first</li>
        <li>All microtasks run (until queue empty)</li>
        <li>One macrotask runs</li>
        <li>All microtasks again... repeat</li>
      </ol>
      <p><strong>Remember:</strong> Microtask = VIP Queue (runs first), Macrotask = Normal Queue</p>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 9,
    title: "What is debounce?",
    content: `
      <p>Debounce limits function calls by waiting for a pause in events — function runs only after user stops triggering events for a specified time.</p>
      <p><strong>Use case:</strong> Search input, window resize — wait until user stops typing/resizing</p>
      <p><strong>Note:</strong> For scroll, throttle is usually better.</p>
      <h3>Example</h3>
      <pre><code>function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

const search = debounce((query) => {
  console.log("Searching:", query);
}, 500);</code></pre>
      <p><strong>Remember:</strong> Debounce = "Wait until quiet, then act"</p>
    `,
    difficulty: "Medium",
    tags: ["Performance", "Optimization"],
  },
  {
    id: 10,
    title: "What is throttling?",
    content: `
      <p>Throttling limits function calls to run at most once per specified time interval — ensures regular execution even during rapid events.</p>
      <h3>Debounce vs Throttle</h3>
      <ul>
        <li><strong>Debounce</strong> → runs after events stop (search after typing)</li>
        <li><strong>Throttle</strong> → runs at regular intervals (scroll position check)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}</code></pre>
      <p><strong>Remember:</strong> Throttle = "Act regularly at intervals"</p>
    `,
    difficulty: "Medium",
    tags: ["Performance", "Optimization"],
  },
  {
    id: 11,
    title: "What is currying?",
    content: `
      <p>Currying transforms a function with multiple arguments into a sequence of functions, each taking one argument.</p>
      <ul>
        <li>Instead of <code>fn(a, b, c)</code>, you call <code>fn(a)(b)(c)</code></li>
        <li>Benefits: reusability, partial application</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Normal function
function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3); // 6

// Curried function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
curriedAdd(1)(2)(3); // 6

// Arrow function version
const curriedAdd = a => b => c => a + b + c;</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Functions", "Functional Programming"],
  },
  {
    id: 12,
    title: "What is a pure function?",
    content: `
      <p>Pure Function has two rules:</p>
      <ol>
        <li>Same input always gives same output</li>
        <li>No side effects (doesn't modify external state)</li>
      </ol>
      <p>Side effects = modifying variables, DOM, database, console.log, etc.</p>
      <h3>Example</h3>
      <pre><code>// ✅ Pure function
function add(a, b) {
  return a + b;
}

// ❌ Impure function
let total = 0;
function addToTotal(num) {
  total += num; // side effect
  return total;
}</code></pre>
      <p><strong>Benefits:</strong> Predictable, testable, cacheable</p>
      <p><strong>Remember:</strong> Pure = "Doesn't touch outside, doesn't change inside"</p>
    `,
    difficulty: "Medium",
    tags: ["Functions", "Functional Programming"],
  },
  {
    id: 13,
    title: "What is immutability?",
    content: `
      <p>Immutability means data cannot be changed after creation — instead, create new copies with changes.</p>
      <ul>
        <li>Primitives (number, string, boolean) are immutable by default</li>
        <li>Objects and arrays are mutable, but we can use immutable patterns</li>
        <li><code>Object.freeze()</code> makes object immutable (shallow only)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// ❌ Mutable approach
const user = { name: "John" };
user.name = "Jane"; // changes original

// ✅ Immutable approach
const user = { name: "John" };
const newUser = { ...user, name: "Jane" }; // new copy

// Object.freeze()
const frozen = Object.freeze({ a: 1, nested: { b: 2 } });
frozen.a = 10; // ❌ fails silently
frozen.nested.b = 20; // ✅ works (shallow freeze)</code></pre>
      <p><strong>Remember:</strong> Immutable = "Keep original, create new copy"</p>
    `,
    difficulty: "Medium",
    tags: ["Immutability", "Functional Programming"],
  },
  {
    id: 14,
    title: "Explain this keyword",
    content: `
      <p><code>this</code> value depends on how function is called:</p>
      <ol>
        <li><strong>Global context:</strong> <code>window</code> (browser) / <code>global</code> (Node)</li>
        <li><strong>Object method:</strong> the object calling the method</li>
        <li><strong>Arrow function:</strong> inherits <code>this</code> from parent scope (lexical)</li>
        <li><strong>Constructor (new):</strong> the newly created object</li>
        <li><strong>call/apply/bind:</strong> explicitly passed value</li>
        <li><strong>Strict mode regular function:</strong> <code>undefined</code></li>
      </ol>
      <h3>Example</h3>
      <pre><code>const obj = {
  name: "John",
  regular: function() {
    console.log(this.name); // "John"
  },
  arrow: () => {
    console.log(this.name); // undefined (lexical)
  }
};

function greet() { console.log(this.name); }
greet.call({ name: "Jane" }); // "Jane"</code></pre>
      <p><strong>Remember:</strong> "Who calls it = this" (except arrow functions)</p>
    `,
    difficulty: "Medium",
    tags: ["this", "JavaScript Basics"],
  },
  {
    id: 15,
    title: "What are IIFEs?",
    content: `
      <p>IIFE = Immediately Invoked Function Expression — a function that runs immediately after being defined.</p>
      <ul>
        <li>Used to protect variable scope</li>
        <li>Avoids polluting global namespace</li>
      </ul>
      <h3>Syntax</h3>
      <pre><code>// Traditional
(function() {
  var privateVar = "I'm private";
  console.log(privateVar);
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// With parameters
(function(name) {
  console.log("Hello", name);
})("John");</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Module pattern (before ES6 modules)</li>
        <li>Creating private variables</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["IIFE", "Functions"],
  },
  {
    id: 16,
    title: "What is a prototype?",
    content: `
      <p>Prototype is JavaScript's inheritance mechanism — objects can inherit properties and methods from other objects.</p>
      <ul>
        <li>Every object has a prototype link</li>
        <li>When property not found, JS searches up the prototype chain</li>
        <li>Memory efficient — shared methods instead of copies</li>
      </ul>
      <h3>prototype vs __proto__</h3>
      <ul>
        <li><code>prototype</code> → property of constructor function (the blueprint)</li>
        <li><code>__proto__</code> → internal link on object instance (the chain)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return "Hello, " + this.name;
};

const john = new Person("John");
john.greet(); // "Hello, John"

john.__proto__ === Person.prototype // true</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Prototype", "Inheritance"],
  },
  {
    id: 17,
    title: "What is prototypal inheritance?",
    content: `
      <p>Prototypal Inheritance allows objects to inherit properties and methods from other objects through the prototype chain.</p>
      <ul>
        <li>JavaScript originally has no class-based inheritance</li>
        <li>Objects inherit directly from other objects</li>
        <li>If property not found, JS searches parent via prototype chain</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const animal = {
  eat: function() { console.log("Eating..."); }
};

const dog = Object.create(animal);
dog.bark = function() { console.log("Barking..."); };

dog.eat();  // "Eating..." (inherited)
dog.bark(); // "Barking..." (own)

// ES6 class (syntactic sugar)
class Animal {
  eat() { console.log("Eating..."); }
}
class Dog extends Animal {
  bark() { console.log("Barking..."); }
}</code></pre>
      <p><strong>Remember:</strong> "If I don't have it, ask my parent"</p>
    `,
    difficulty: "Medium",
    tags: ["Prototype", "Inheritance"],
  },
  {
    id: 18,
    title: "What is strict mode?",
    content: `
      <p>Strict Mode makes JavaScript follow stricter rules — helps catch errors and prevents unsafe actions.</p>
      <p>Enable with <code>"use strict";</code> at top of file or function.</p>
      <h3>Key Restrictions:</h3>
      <ol>
        <li>Undeclared variables throw error</li>
        <li>Cannot delete variables, functions, or objects</li>
        <li>Duplicate parameter names throw error</li>
        <li><code>this</code> in regular function = <code>undefined</code> (not global)</li>
        <li>Cannot use <code>eval</code> or <code>arguments</code> as variable names</li>
        <li><code>with</code> statement not allowed</li>
      </ol>
      <h3>Example</h3>
      <pre><code>"use strict";

x = 10; // ❌ ReferenceError

function test() {
  console.log(this); // undefined
}

var eval = 5; // ❌ SyntaxError</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Strict Mode", "JavaScript Basics"],
  },
  {
    id: 19,
    title: "What is the difference between == and ===",
    content: `
      <p>The main difference is type coercion.</p>
      <h3>== (Loose Equality)</h3>
      <ul>
        <li>Compares values only</li>
        <li>Converts types if needed before comparing</li>
      </ul>
      <h3>=== (Strict Equality)</h3>
      <ul>
        <li>Compares both value AND type</li>
        <li>No type conversion</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// == (loose)
5 == "5"      // true (converts string to number)
0 == false    // true
null == undefined // true

// === (strict)
5 === "5"     // false
0 === false   // false
null === undefined // false</code></pre>
      <p><strong>Best practice:</strong> Always use <code>===</code> to avoid unexpected bugs</p>
    `,
    difficulty: "Medium",
    tags: ["Operators", "JavaScript Basics"],
  },
  {
    id: 20,
    title: "What is type coercion?",
    content: `
      <p>Type Coercion is JavaScript automatically converting one data type to another to complete an operation.</p>
      <h3>Two Types:</h3>
      <ol>
        <li><strong>Implicit</strong> — JavaScript converts automatically</li>
        <li><strong>Explicit</strong> — Developer converts manually</li>
      </ol>
      <h3>Example</h3>
      <pre><code>// Implicit Coercion
"5" + 3       // "53" (number → string)
"5" - 3       // 2 (string → number)
true + 1      // 2 (boolean → number)
!!"hello"     // true (string → boolean)

// Explicit Coercion
Number("5")   // 5
String(123)   // "123"
Boolean(0)    // false</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Type Coercion", "JavaScript Basics"],
  },
  {
    id: 21,
    title: "What are promises?",
    content: `
      <p>Promise represents a future value from an async operation — it will either succeed or fail.</p>
      <h3>Three States:</h3>
      <ol>
        <li><strong>Pending</strong> — operation in progress</li>
        <li><strong>Fulfilled</strong> — operation successful, resolve() called</li>
        <li><strong>Rejected</strong> — operation failed, reject() called</li>
      </ol>
      <p><strong>Important:</strong> Once settled (fulfilled/rejected), state cannot change.</p>
      <h3>Example</h3>
      <pre><code>const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) resolve("Data fetched!");
    else reject("Error occurred!");
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log("Done!"));</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 22,
    title: "What is async/await?",
    content: `
      <p>async/await is cleaner syntax for handling Promises — makes async code look synchronous.</p>
      <h3>Key Points:</h3>
      <ul>
        <li><code>async</code> before function → function returns Promise</li>
        <li><code>await</code> pauses execution until Promise resolves</li>
        <li><code>await</code> only works inside <code>async</code> function</li>
        <li>Pauses function, but doesn't block main thread</li>
      </ul>
      <h3>Example</h3>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      <h3>Benefits:</h3>
      <ul>
        <li>Cleaner, readable code</li>
        <li>Avoids nested .then()</li>
        <li>Easy error handling with try/catch</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async/Await", "Promises"],
  },
  {
    id: 23,
    title: "Explain callback hell",
    content: `
      <p>Callback Hell happens when multiple nested callbacks make code complex, unreadable, and hard to maintain.</p>
      <h3>Why it happens:</h3>
      <p>One async task depends on another, leading to deeply nested structure — called "Pyramid of Doom"</p>
      <h3>Example</h3>
      <pre><code>// ❌ Callback Hell
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});</code></pre>
      <h3>Solutions:</h3>
      <ol>
        <li><strong>Promises</strong> → .then() chain</li>
        <li><strong>async/await</strong> → cleanest solution</li>
        <li><strong>Named functions</strong> → modular approach</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Callbacks", "Async"],
  },
  {
    id: 24,
    title: "What is Promise chaining?",
    content: `
      <p>Promise Chaining connects multiple async operations in sequence — each .then() receives result from previous one.</p>
      <p>Flow: 1st async → 2nd async → 3rd async...</p>
      <h3>Example</h3>
      <pre><code>fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch('/api/posts/' + user.id))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));</code></pre>
      <h3>Benefits:</h3>
      <ol>
        <li>Readable flow</li>
        <li>Single .catch() handles all errors</li>
        <li>Avoids callback hell</li>
      </ol>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 25,
    title: "What is Promise.all()?",
    content: `
      <p>Promise.all() runs multiple promises in parallel and waits for all to complete.</p>
      <ul>
        <li>All resolve → returns array of results</li>
        <li>Any one rejects → immediately rejects</li>
      </ul>
      <h3>Important:</h3>
      <p>If one rejects, Promise.all() rejects immediately, but other promises keep running in background — their results are just ignored.</p>
      <h3>Example</h3>
      <pre><code>const p1 = fetch('/api/users');
const p2 = fetch('/api/posts');
const p3 = fetch('/api/comments');

Promise.all([p1, p2, p3])
  .then(([users, posts, comments]) => {
    console.log("All done!");
  })
  .catch(error => {
    console.log("At least one failed:", error);
  });</code></pre>
      <p><strong>Remember:</strong> "All pass = pass, one fail = all fail"</p>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 26,
    title: "What is Promise.race()?",
    content: `
      <p>Promise.race() returns result of the first promise to settle (resolve OR reject).</p>
      <h3>Key Points:</h3>
      <ul>
        <li>First to complete wins</li>
        <li>Doesn't wait for others</li>
        <li>First settled = resolve OR reject</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const fast = new Promise(resolve => 
  setTimeout(() => resolve("Fast!"), 100)
);
const slow = new Promise(resolve => 
  setTimeout(() => resolve("Slow!"), 500)
);

Promise.race([fast, slow])
  .then(result => console.log(result)); // "Fast!"

// Timeout pattern
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Timeout!"), 3000)
);

Promise.race([fetch('/api/data'), timeout])
  .catch(err => console.log(err));</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Timeout implementation</li>
        <li>Racing multiple sources</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 27,
    title: "What is Promise.any()?",
    content: `
      <p>Promise.any() returns the first promise to resolve successfully — ignores rejections unless all fail.</p>
      <ul>
        <li>First to resolve wins</li>
        <li>All reject → throws AggregateError</li>
      </ul>
      <h3>race() vs any()</h3>
      <ul>
        <li><code>race()</code> → first settled (resolve OR reject)</li>
        <li><code>any()</code> → first resolved (success only)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const p1 = Promise.reject("Error 1");
const p2 = new Promise(resolve => setTimeout(() => resolve("Success!"), 100));
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
  .then(result => console.log(result)) // "Success!"
  .catch(err => console.log(err)); // AggregateError if all fail</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Multiple fallback API requests</li>
        <li>Any one success is enough</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 28,
    title: "What is Promise.allSettled()?",
    content: `
      <p>Promise.allSettled() waits for all promises to settle (resolve or reject) and returns all results.</p>
      <ul>
        <li>Never rejects — always returns full report</li>
        <li>Shows which succeeded and which failed</li>
      </ul>
      <h3>all() vs allSettled()</h3>
      <ul>
        <li><code>all()</code> → one fail = entire fail</li>
        <li><code>allSettled()</code> → get all results regardless</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject("Error 2");
const p3 = Promise.resolve("Success 3");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));

// Output:
// [
//   { status: "fulfilled", value: "Success 1" },
//   { status: "rejected", reason: "Error 2" },
//   { status: "fulfilled", value: "Success 3" }
// ]</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Need final status of all tasks</li>
        <li>Logging, monitoring, cleanup</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Promises", "Async"],
  },
  {
    id: 29,
    title: "What is the event loop model for async JS?",
    content: `
      <p>Event Loop allows single-threaded JavaScript to handle async operations without blocking.</p>
      <h3>Components:</h3>
      <ol>
        <li><strong>Call Stack</strong> — executes sync code</li>
        <li><strong>Web APIs</strong> — browser handles async tasks (setTimeout, fetch)</li>
        <li><strong>Macrotask Queue</strong> — setTimeout, setInterval callbacks</li>
        <li><strong>Microtask Queue</strong> — Promise callbacks (higher priority)</li>
        <li><strong>Event Loop</strong> — coordinator between queues and stack</li>
      </ol>
      <h3>Execution Order:</h3>
      <ol>
        <li>All sync code first</li>
        <li>All microtasks (Promises)</li>
        <li>One macrotask (setTimeout)</li>
        <li>All microtasks again... repeat</li>
      </ol>
      <h3>Example</h3>
      <pre><code>console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// Output: 1, 4, 3, 2</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Event Loop", "Async"],
  },
  {
    id: 30,
    title: "Why is JavaScript single-threaded?",
    content: `
      <p>JavaScript was created for simple browser scripting (Brendan Eich, 10 days). Single-threaded design avoids multi-threading complexity.</p>
      <h3>Reasons:</h3>
      <ol>
        <li><strong>DOM Safety</strong> — Multiple threads accessing DOM would cause race conditions and UI inconsistencies</li>
        <li><strong>Event-driven architecture</strong> — Event loop and callback queue work better with single thread</li>
        <li><strong>Simplicity & Safety</strong> — No deadlocks, race conditions, shared memory issues</li>
      </ol>
      <h3>But not completely single-threaded:</h3>
      <ul>
        <li>V8 engine uses multiple threads internally (garbage collection, compilation)</li>
        <li>Browser Web APIs, Workers, Rendering are multi-threaded</li>
        <li>Only <strong>JS code execution</strong> is single-threaded</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["JavaScript Basics", "Event Loop"],
  },
  {
    id: 31,
    title: "What is a Web Worker?",
    content: `
      <p>Web Worker is a background thread that runs heavy computations without blocking the main UI thread.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Runs in background thread</li>
        <li>Doesn't block main thread/UI</li>
        <li>No direct DOM access</li>
        <li>Communicates via <code>postMessage()</code> and <code>onmessage</code></li>
      </ul>
      <h3>Types:</h3>
      <ul>
        <li><strong>Dedicated Worker</strong> — for single script</li>
        <li><strong>Shared Worker</strong> — shared across tabs</li>
        <li><strong>Service Worker</strong> — offline caching, push notifications</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// main.js
const worker = new Worker('worker.js');
worker.postMessage({ data: 1000000 });
worker.onmessage = (e) => console.log("Result:", e.data);

// worker.js
self.onmessage = (e) => {
  const result = heavyCalculation(e.data);
  self.postMessage(result);
};</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Heavy calculations</li>
        <li>Large file parsing</li>
        <li>Image/video processing</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Web Workers", "Performance"],
  },
  {
    id: 32,
    title: "What is an async iterator?",
    content: `
      <p>Async Iterator allows step-by-step iteration over async data streams — <code>next()</code> returns a Promise.</p>
      <ul>
        <li>Use <code>for await...of</code> loop for easy iteration</li>
        <li>Good for streaming data</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Async Generator
async function* asyncGenerator() {
  yield await fetch('/api/1').then(r => r.json());
  yield await fetch('/api/2').then(r => r.json());
  yield await fetch('/api/3').then(r => r.json());
}

// Consuming
async function consume() {
  for await (const data of asyncGenerator()) {
    console.log(data);
  }
}
consume();</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Streaming APIs</li>
        <li>Pagination (fetch page by page)</li>
        <li>Real-time data streams</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async", "Iterators"],
  },
  {
    id: 33,
    title: "What is fetch API?",
    content: `
      <p>Fetch API is the modern way to make HTTP requests — Promise-based replacement for XMLHttpRequest.</p>
      <h3>Key Features:</h3>
      <ol>
        <li>Promise-based — works great with async/await</li>
        <li>Cleaner syntax than XHR</li>
        <li>Built-in JSON support</li>
      </ol>
      <h3>⚠️ Important Gotcha:</h3>
      <ul>
        <li><code>fetch()</code> does NOT reject on HTTP errors (404, 500)</li>
        <li>Only rejects on network failure</li>
        <li>Check <code>response.ok</code> or <code>response.status</code> manually</li>
      </ul>
      <h3>Example</h3>
      <pre><code>fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John' })
});</code></pre>
      <p><strong>Remember:</strong> fetch only cries on network fail, stays silent on 404/500!</p>
    `,
    difficulty: "Medium",
    tags: ["Fetch", "HTTP", "Async"],
  },
  {
    id: 34,
    title: "What is XMLHTTPRequest?",
    content: `
      <p>XMLHttpRequest (XHR) is the old API for making HTTP requests from browser — the foundation of AJAX.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Sends HTTP requests (GET, POST, PUT, DELETE)</li>
        <li>Supports async and sync requests</li>
        <li>Requires checking <code>readyState</code> and <code>status</code></li>
        <li>Callback-based — can lead to callback hell</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

xhr.send();</code></pre>
      <h3>XHR vs Fetch:</h3>
      <ul>
        <li>XHR = callback-based, verbose</li>
        <li>Fetch = Promise-based, cleaner</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["XHR", "HTTP", "Async"],
  },
  {
    id: 35,
    title: "What is the difference between sync and async code?",
    content: `
      <h3>Synchronous Code</h3>
      <ul>
        <li>Executes line by line</li>
        <li>Each line waits for previous to complete</li>
        <li><strong>Blocking</strong> — long task freezes UI</li>
      </ul>
      <h3>Asynchronous Code</h3>
      <ul>
        <li>Doesn't wait — moves to next line immediately</li>
        <li>Long tasks run in background</li>
        <li><strong>Non-blocking</strong> — UI stays responsive</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Sync - blocking
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3

// Async - non-blocking
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2</code></pre>
      <h3>Summary:</h3>
      <ul>
        <li><strong>Sync</strong> = sequential, blocking, immediate result</li>
        <li><strong>Async</strong> = parallel, non-blocking, future result</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Async", "JavaScript Basics"],
  },
  {
    id: 36,
    title: "What are arrow functions?",
    content: `
      <p>Arrow Functions provide concise syntax for writing functions — introduced in ES6.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Shorter syntax — one-liners possible</li>
        <li>No own <code>this</code> — uses parent's <code>this</code> (lexical)</li>
        <li>No own <code>arguments</code> object (use rest <code>...args</code>)</li>
        <li>Cannot be used as constructor (no <code>new</code>)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// Traditional
function add(a, b) { return a + b; }

// Arrow
const add = (a, b) => a + b;

// Single parameter
const square = x => x * x;

// No parameters
const greet = () => "Hello!";

// Multi-line
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};</code></pre>
      <h3>When NOT to use:</h3>
      <ul>
        <li>Object methods (this binding issue)</li>
        <li>Event handlers needing <code>this</code> as element</li>
        <li>Constructors</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Arrow Functions", "ES6"],
  },
  {
    id: 37,
    title: "What is destructuring?",
    content: `
      <p>Destructuring extracts values from arrays or objects into separate variables with clean syntax.</p>
      <h3>Array Destructuring</h3>
      <pre><code>const [a, b, c] = [1, 2, 3];

// Skip elements
const [first, , third] = [1, 2, 3];

// Default values
const [x = 10, y = 20] = [5];

// Rest
const [head, ...tail] = [1, 2, 3, 4];</code></pre>
      <h3>Object Destructuring</h3>
      <pre><code>const { name, age } = { name: "John", age: 30 };

// Rename
const { name: userName } = { name: "John" };

// Default values
const { city = "Unknown" } = {};

// Nested
const { address: { street } } = { address: { street: "Main St" } };</code></pre>
      <h3>Function Parameters</h3>
      <pre><code>function greet({ name, age }) {
  console.log(\`\${name} is \${age}\`);
}
greet({ name: "John", age: 30 });</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Destructuring", "ES6"],
  },
  {
    id: 38,
    title: "What is spread operator?",
    content: `
      <p>Spread Operator (<code>...</code>) expands/copies/merges arrays or objects.</p>
      <h3>Array Operations</h3>
      <pre><code>// Copy (shallow)
const arr2 = [...arr1];

// Merge
const merged = [...arr1, ...arr2];

// Add elements
const newArr = [0, ...arr1, 4];</code></pre>
      <h3>Object Operations</h3>
      <pre><code>// Copy
const obj2 = { ...obj1 };

// Merge
const merged = { ...obj1, ...obj2 };

// Override
const updated = { ...obj1, name: "Jane" };</code></pre>
      <h3>Function Arguments</h3>
      <pre><code>const numbers = [1, 2, 3];
Math.max(...numbers); // 3</code></pre>
      <h3>Important:</h3>
      <ul>
        <li>Creates <strong>shallow copy</strong> — nested objects still reference</li>
        <li>For deep copy use <code>structuredClone()</code> or <code>JSON.parse(JSON.stringify())</code></li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Spread Operator", "ES6"],
  },
  {
    id: 39,
    title: "What is rest operator?",
    content: `
      <p>Rest Operator (<code>...</code>) collects remaining values into an array or object.</p>
      <h3>Spread vs Rest (same syntax)</h3>
      <ul>
        <li><strong>Spread</strong> → expands (unpacking)</li>
        <li><strong>Rest</strong> → collects (packing)</li>
      </ul>
      <h3>Function Parameters</h3>
      <pre><code>function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// With regular params
function greet(greeting, ...names) {
  names.forEach(name => console.log(\`\${greeting}, \${name}\`));
}</code></pre>
      <h3>Array Destructuring</h3>
      <pre><code>const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]</code></pre>
      <h3>Object Destructuring</h3>
      <pre><code>const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }</code></pre>
      <p><strong>Note:</strong> Rest must be the last element</p>
    `,
    difficulty: "Medium",
    tags: ["Rest Operator", "ES6"],
  },
  {
    id: 40,
    title: "What is template literal?",
    content: `
      <p>Template Literals use backticks for strings with embedded expressions and multi-line support.</p>
      <ul>
        <li>Use backticks (\`)</li>
        <li>Embed expressions with <code>\${}</code></li>
      </ul>
      <h3>String Interpolation</h3>
      <pre><code>const name = "John";
const age = 30;

// Old way
const msg1 = "Hello, " + name + "! Age: " + age;

// Template literal
const msg2 = \`Hello, \${name}! Age: \${age}\`;</code></pre>
      <h3>Multi-line Strings</h3>
      <pre><code>const html = \`
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
\`;</code></pre>
      <h3>Expression Evaluation</h3>
      <pre><code>console.log(\`Sum: \${10 + 20}\`); // Sum: 30
console.log(\`Adult: \${age >= 18 ? 'Yes' : 'No'}\`);</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Template Literals", "ES6"],
  },
  {
    id: 41,
    title: "What are ES modules?",
    content: `
      <p>ES Modules (ESM) is JavaScript's official module system using <code>import</code> and <code>export</code>.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>File-level scope — no global pollution</li>
        <li>Static structure — resolved at compile time</li>
        <li>Named and default exports supported</li>
        <li>Native browser and Node.js support</li>
      </ul>
      <h3>Export</h3>
      <pre><code>// Named exports
export const PI = 3.14;
export function add(a, b) { return a + b; }

// Default export
export default function() { }</code></pre>
      <h3>Import</h3>
      <pre><code>// Named
import { PI, add } from './math.js';

// Rename
import { add as sum } from './math.js';

// Import all
import * as math from './math.js';

// Default
import myFunction from './module.js';

// Mixed
import React, { useState } from 'react';</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "ES6"],
  },
  {
    id: 42,
    title: "What is default export?",
    content: `
      <p>Default Export exports one main value per module — imported without curly braces.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Only one default export per module</li>
        <li>No curly braces needed when importing</li>
        <li>Can use any name when importing</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// utils.js
export default function greet(name) {
  return \`Hello, \${name}!\`;
}

// main.js - any name works
import greet from './utils.js';
import sayHello from './utils.js';
import xyz from './utils.js';</code></pre>
      <h3>Default + Named Together</h3>
      <pre><code>// module.js
export default function main() { }
export const helper = () => { };

// import
import main, { helper } from './module.js';</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "Export"],
  },
  {
    id: 43,
    title: "What is named export?",
    content: `
      <p>Named Export exports multiple specific values — imported with curly braces and exact names.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Multiple named exports per module</li>
        <li>Curly braces required when importing</li>
        <li>Names must match (unless using alias)</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }</code></pre>
      <h3>Import</h3>
      <pre><code>// Specific imports
import { PI, add } from './math.js';

// Rename with alias
import { add as sum } from './math.js';

// Import all
import * as math from './math.js';
math.add(1, 2);</code></pre>
    `,
    difficulty: "Medium",
    tags: ["ES Modules", "Export"],
  },
  {
    id: 44,
    title: "What is the difference between map and forEach?",
    content: `
      <p>Both iterate arrays, but have different purposes and return values.</p>
      <h3>forEach()</h3>
      <ul>
        <li>Performs action on each element</li>
        <li>Returns <code>undefined</code></li>
        <li>Use for: side effects (logging, DOM updates)</li>
      </ul>
      <h3>map()</h3>
      <ul>
        <li>Transforms each element into new array</li>
        <li>Returns new array</li>
        <li>Original unchanged</li>
        <li>Use for: data transformation</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const numbers = [1, 2, 3];

// forEach - no return
numbers.forEach(n => console.log(n * 2));
// logs: 2, 4, 6 — returns: undefined

// map - returns new array
const doubled = numbers.map(n => n * 2);
// doubled: [2, 4, 6]</code></pre>
      <h3>Summary:</h3>
      <ul>
        <li><code>forEach</code> = iterate + side effect, no return</li>
        <li><code>map</code> = iterate + transform, returns new array</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Array Methods", "map", "forEach"],
  },
  {
    id: 45,
    title: "What is the difference between map, filter, reduce?",
    content: `
      <h3>map() — Transform</h3>
      <pre><code>const doubled = [1, 2, 3].map(n => n * 2);
// [2, 4, 6]</code></pre>
      <ul>
        <li>Transforms each element</li>
        <li>Returns new array (same length)</li>
      </ul>
      <h3>filter() — Select</h3>
      <pre><code>const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
// [2, 4]</code></pre>
      <ul>
        <li>Keeps elements matching condition</li>
        <li>Returns new array (same or less length)</li>
      </ul>
      <h3>reduce() — Aggregate</h3>
      <pre><code>const sum = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);
// 10</code></pre>
      <ul>
        <li>Combines all elements into single value</li>
        <li>Returns single value (any type)</li>
      </ul>
      <h3>Chaining</h3>
      <pre><code>[1, 2, 3, 4, 5]
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 10)          // [20, 40]
  .reduce((a, b) => a + b);  // 60</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Array Methods", "map", "filter", "reduce"],
  },
  {
    id: 46,
    title: "Explain Set and Map",
    content: `
      <h3>Set — Unique Values</h3>
      <ul>
        <li>Stores only unique values</li>
        <li>Maintains insertion order</li>
        <li>Treats NaN === NaN as true</li>
      </ul>
      <pre><code>const set = new Set([1, 2, 2, 3]);
// Set {1, 2, 3}

set.add(4);
set.has(2);    // true
set.delete(1);
set.size;      // 3</code></pre>
      <h3>Map — Key-Value Pairs</h3>
      <ul>
        <li>Any type as key (objects, functions, etc.)</li>
        <li>Maintains key order</li>
        <li>Better performance for frequent add/remove</li>
      </ul>
      <pre><code>const map = new Map();
map.set('name', 'John');
map.set({}, 'object key');

map.get('name');  // 'John'
map.has('name');  // true
map.delete('name');

for (const [key, value] of map) {
  console.log(key, value);
}</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Set", "Map", "Collections"],
  },
  {
    id: 47,
    title: "WeakSet vs WeakMap?",
    content: `
      <p>WeakSet and WeakMap are garbage-collection-friendly collections.</p>
      <h3>Key Differences from Set/Map:</h3>
      <ul>
        <li>Only objects as keys/values (no primitives)</li>
        <li>Weakly held — auto garbage collected when no other references</li>
        <li>Not iterable — no forEach, for...of</li>
        <li>No size property</li>
      </ul>
      <h3>WeakSet</h3>
      <pre><code>const weakSet = new WeakSet();
let obj = { name: "John" };
weakSet.add(obj);
weakSet.has(obj);  // true
obj = null; // can be garbage collected</code></pre>
      <h3>WeakMap</h3>
      <pre><code>const weakMap = new WeakMap();
let user = { id: 1 };
weakMap.set(user, "data");
weakMap.get(user);  // "data"
user = null; // key and value can be GC'd</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Associating data with DOM elements</li>
        <li>Private data storage</li>
        <li>Caching with auto cleanup</li>
      </ul>
      <p><strong>Remember:</strong> Weak = "doesn't hold on, lets go" → prevents memory leaks</p>
    `,
    difficulty: "Medium",
    tags: ["WeakSet", "WeakMap", "Collections"],
  },
  {
    id: 48,
    title: "What are symbols?",
    content: `
      <p>Symbol is a primitive data type that creates unique, immutable identifiers.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Every Symbol is unique — even with same description</li>
        <li>Can be used as object property keys</li>
        <li>Hidden from for...in, Object.keys()</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (always unique!)

const id = Symbol("id");
const user = {
  name: "John",
  [id]: 123
};

console.log(user[id]);      // 123
console.log(Object.keys(user)); // ["name"] (symbol hidden)</code></pre>
      <h3>Global Symbol Registry</h3>
      <pre><code>const globalSym = Symbol.for("shared");
const sameSym = Symbol.for("shared");
console.log(globalSym === sameSym); // true</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Symbols", "ES6"],
  },
  {
    id: 49,
    title: "What is optional chaining?",
    content: `
      <p>Optional Chaining (<code>?.</code>) safely accesses nested properties — returns undefined instead of throwing error if property is null/undefined.</p>
      <h3>Property Access</h3>
      <pre><code>const user = { address: { city: "NYC" } };

// Without
const zip = user.address && user.address.zip;

// With optional chaining
const zip = user.address?.zip; // undefined
const code = user.address?.country?.code; // undefined</code></pre>
      <h3>Function Calls</h3>
      <pre><code>user.greet?.();    // calls if exists
user.goodbye?.();  // undefined if not</code></pre>
      <h3>Array Access</h3>
      <pre><code>arr?.[0];  // safe array access
null?.[0]; // undefined</code></pre>
      <h3>With Nullish Coalescing</h3>
      <pre><code>const city = user.address?.city ?? "Unknown";</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Optional Chaining", "ES2020"],
  },
  {
    id: 50,
    title: "What is Nullish coalescing?",
    content: `
      <p>Nullish Coalescing (<code>??</code>) provides default value only for null/undefined — not other falsy values.</p>
      <h3>|| vs ??</h3>
      <ul>
        <li><code>||</code> → replaces all falsy values (0, "", false, null, undefined)</li>
        <li><code>??</code> → replaces only null/undefined, keeps other falsy values</li>
      </ul>
      <h3>Example</h3>
      <pre><code>const a = null ?? "default";    // "default"
const b = undefined ?? "default"; // "default"
const c = 0 ?? "default";       // 0 (keeps!)
const d = "" ?? "default";      // "" (keeps!)
const e = false ?? "default";   // false (keeps!)

// Compare with ||
const f = 0 || "default";       // "default" (replaces!)
const g = "" || "default";      // "default" (replaces!)</code></pre>
      <h3>Use Case</h3>
      <pre><code>// 0 and "" might be valid values
const volume = settings.volume ?? 50;
const name = settings.name ?? "Guest";</code></pre>
      <p><strong>Remember:</strong></p>
      <ul>
        <li><code>||</code> = "falsy? replace"</li>
        <li><code>??</code> = "null/undefined? replace"</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Nullish Coalescing", "ES2020"],
  },
  {
    id: 51,
    title: "What is DOM?",
    content: `
      <p>DOM (Document Object Model) is the programming interface for HTML — represents page as a tree of objects that JavaScript can manipulate.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Browser parses HTML into DOM tree</li>
        <li>Each HTML element = node/object</li>
        <li>JavaScript can dynamically modify it</li>
      </ul>
      <h3>DOM Tree</h3>
      <pre><code>document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p</code></pre>
      <h3>Common Methods</h3>
      <pre><code>// Select
document.getElementById('id');
document.querySelector('.class');
document.querySelectorAll('div');

// Modify
element.innerHTML = '<b>Bold</b>';
element.textContent = 'Text';
element.classList.add('active');

// Create
const div = document.createElement('div');
parent.appendChild(div);</code></pre>
      <h3>Related:</h3>
      <ul>
        <li><strong>Virtual DOM</strong> — React's optimization</li>
        <li><strong>Shadow DOM</strong> — Web Components encapsulation</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["DOM", "Web APIs"],
  },
  {
    id: 52,
    title: "What is the difference between HTMLCollection and NodeList?",
    content: `
      <p>Both are lists of DOM elements with different behaviors.</p>
      <h3>HTMLCollection</h3>
      <ul>
        <li><strong>Live</strong> — auto-updates when DOM changes</li>
        <li>Element nodes only</li>
        <li>No forEach directly</li>
        <li>From: getElementsByClassName(), getElementsByTagName()</li>
      </ul>
      <h3>NodeList</h3>
      <ul>
        <li><strong>Usually static</strong> — querySelectorAll() snapshot</li>
        <li>Can be live — childNodes</li>
        <li>All node types (elements, text, comments)</li>
        <li>Has forEach support</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// HTMLCollection (live)
const divs = document.getElementsByTagName('div');

// NodeList (static)
const divs2 = document.querySelectorAll('div');

// NodeList has forEach
divs2.forEach(div => console.log(div));

// Convert to array
const arr = [...divs];
const arr2 = Array.from(divs);</code></pre>
    `,
    difficulty: "Medium",
    tags: ["DOM", "HTMLCollection", "NodeList"],
  },
  {
    id: 53,
    title: "What is event bubbling?",
    content: `
      <p>Event Bubbling is when events propagate from child to parent elements (bottom → top).</p>
      <h3>Event Propagation Phases:</h3>
      <ol>
        <li><strong>Capturing</strong> — top to target (down)</li>
        <li><strong>Target</strong> — at target element</li>
        <li><strong>Bubbling</strong> — target to top (up) ← default</li>
      </ol>
      <h3>Example</h3>
      <pre><code>&lt;div id="grandparent"&gt;
  &lt;div id="parent"&gt;
    &lt;button id="child"&gt;Click&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

child.addEventListener('click', () => console.log('Child'));
parent.addEventListener('click', () => console.log('Parent'));
grandparent.addEventListener('click', () => console.log('Grandparent'));

// Click button → Output:
// Child → Parent → Grandparent</code></pre>
      <h3>Stop Bubbling</h3>
      <pre><code>e.stopPropagation(); // stops going to parent
e.stopImmediatePropagation(); // also stops same-element listeners</code></pre>
      <p><strong>Remember:</strong> "Down (capture) → Stop (target) → Up (bubble)"</p>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Bubbling"],
  },
  {
    id: 54,
    title: "What is event capturing?",
    content: `
      <p>Event Capturing is when events propagate from parent to child elements (top → bottom).</p>
      <h3>Event Propagation Phases:</h3>
      <ol>
        <li><strong>Capturing</strong> — top to target (down) ← this phase</li>
        <li><strong>Target</strong> — at target element</li>
        <li><strong>Bubbling</strong> — target to top (up)</li>
      </ol>
      <h3>Enable Capturing</h3>
      <pre><code>// Third parameter = true
element.addEventListener('click', handler, true);

// Or options object
element.addEventListener('click', handler, { capture: true });</code></pre>
      <h3>Example</h3>
      <pre><code>grandparent.addEventListener('click', () => {
  console.log('Grandparent (capture)');
}, true);
parent.addEventListener('click', () => {
  console.log('Parent (capture)');
}, true);
child.addEventListener('click', () => {
  console.log('Child');
});

// Click button → Output:
// Grandparent (capture) → Parent (capture) → Child</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Intercept event before reaching target</li>
        <li>Parent-level validation/logging</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Capturing"],
  },
  {
    id: 55,
    title: "What is event delegation?",
    content: `
      <p>Event Delegation uses a single parent listener to handle events for all child elements.</p>
      <h3>Benefits:</h3>
      <ul>
        <li>Better performance — fewer listeners</li>
        <li>Works for dynamically added elements</li>
        <li>Memory efficient</li>
      </ul>
      <h3>Example</h3>
      <pre><code>&lt;ul id="list"&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
&lt;/ul&gt;

// ❌ Bad: listener on each li
document.querySelectorAll('li').forEach(li => {
  li.addEventListener('click', () => console.log(li.textContent));
});

// ✅ Good: delegation on parent
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log(e.target.textContent);
  }
});

// Dynamic elements work automatically!
const newLi = document.createElement('li');
list.appendChild(newLi); // click will work!</code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li>Uses event bubbling</li>
        <li><code>e.target</code> = actual clicked element</li>
        <li><code>e.currentTarget</code> = element with listener</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Events", "Event Delegation"],
  },
  {
    id: 56,
    title: "How does localStorage work?",
    content: `
      <p>localStorage stores key-value data persistently in the browser.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Data stored as strings</li>
        <li>Persists after browser close</li>
        <li>~5-10MB per domain</li>
        <li>Same-origin policy</li>
      </ul>
      <h3>Methods</h3>
      <pre><code>localStorage.setItem('name', 'John');
localStorage.getItem('name'); // 'John'
localStorage.removeItem('name');
localStorage.clear();</code></pre>
      <h3>Store Objects (JSON)</h3>
      <pre><code>const user = { name: 'John', age: 30 };

// Save
localStorage.setItem('user', JSON.stringify(user));

// Retrieve
const stored = JSON.parse(localStorage.getItem('user'));</code></pre>
      <h3>⚠️ Security Warning:</h3>
      <ul>
        <li>Vulnerable to XSS attacks</li>
        <li>Don't store sensitive data (passwords, tokens)</li>
        <li>Use HttpOnly cookies for auth tokens</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["localStorage", "Web Storage"],
  },
  {
    id: 57,
    title: "sessionStorage vs localStorage",
    content: `
      <p>Both are Web Storage APIs with different lifetimes.</p>
      <h3>localStorage</h3>
      <ul>
        <li><strong>Lifetime:</strong> Persistent — survives browser close</li>
        <li><strong>Scope:</strong> Shared across all tabs (same origin)</li>
        <li><strong>Use:</strong> User preferences, theme, long-term data</li>
      </ul>
      <h3>sessionStorage</h3>
      <ul>
        <li><strong>Lifetime:</strong> Session only — deleted on tab close</li>
        <li><strong>Scope:</strong> Current tab only</li>
        <li><strong>Use:</strong> Temporary data, form state</li>
      </ul>
      <h3>Example</h3>
      <pre><code>sessionStorage.setItem('temp', 'data');
localStorage.setItem('permanent', 'data');

// After closing tab:
// sessionStorage.getItem('temp') → null
// localStorage.getItem('permanent') → 'data'</code></pre>
      <h3>Summary:</h3>
      <table>
        <tr><th></th><th>localStorage</th><th>sessionStorage</th></tr>
        <tr><td>Lifetime</td><td>Forever</td><td>Tab close</td></tr>
        <tr><td>Tab sharing</td><td>Yes</td><td>No</td></tr>
        <tr><td>Size</td><td>~5-10MB</td><td>~5MB</td></tr>
      </table>
    `,
    difficulty: "Medium",
    tags: ["sessionStorage", "localStorage", "Web Storage"],
  },
  {
    id: 58,
    title: "cookie vs localStorage vs sessionStorage",
    content: `
      <p>Three client-side storage options with different characteristics.</p>
      <h3>Comparison:</h3>
      <table>
        <tr><th></th><th>Cookie</th><th>localStorage</th><th>sessionStorage</th></tr>
        <tr><td>Size</td><td>~4KB</td><td>~5-10MB</td><td>~5MB</td></tr>
        <tr><td>Lifetime</td><td>Expiry date</td><td>Forever</td><td>Tab close</td></tr>
        <tr><td>Server access</td><td>Yes (auto-sent)</td><td>No</td><td>No</td></tr>
        <tr><td>Tab sharing</td><td>Yes</td><td>Yes</td><td>No</td></tr>
      </table>
      <h3>Cookie Security Attributes:</h3>
      <pre><code>// HttpOnly → blocks JS access (XSS protection)
// Secure → HTTPS only
// SameSite → CSRF protection</code></pre>
      <h3>When to Use:</h3>
      <ul>
        <li><strong>Cookie:</strong> Auth tokens (HttpOnly), server needs data</li>
        <li><strong>localStorage:</strong> User preferences, large client data</li>
        <li><strong>sessionStorage:</strong> Form state, temporary tab data</li>
      </ul>
      <p><strong>Note:</strong> Cookies sent with every HTTP request — bandwidth concern</p>
    `,
    difficulty: "Medium",
    tags: ["Cookie", "localStorage", "sessionStorage"],
  },
  {
    id: 59,
    title: "What is the difference between innerHTML and textContent?",
    content: `
      <h3>innerHTML</h3>
      <ul>
        <li>Reads/writes HTML content</li>
        <li>Parses and renders HTML tags</li>
        <li>⚠️ XSS vulnerability risk</li>
      </ul>
      <h3>textContent</h3>
      <ul>
        <li>Reads/writes plain text only</li>
        <li>Shows HTML tags as text, doesn't render</li>
        <li>Safer and faster</li>
      </ul>
      <h3>Example</h3>
      <pre><code>// innerHTML - renders HTML
div.innerHTML = '&lt;b&gt;Bold&lt;/b&gt; text';
// Shows: Bold text (formatted)

// textContent - shows as text
div.textContent = '&lt;b&gt;Bold&lt;/b&gt; text';
// Shows: &lt;b&gt;Bold&lt;/b&gt; text (plain)

// Reading
// &lt;div&gt;&lt;span&gt;Hello&lt;/span&gt; World&lt;/div&gt;
div.innerHTML;    // "&lt;span&gt;Hello&lt;/span&gt; World"
div.textContent;  // "Hello World"</code></pre>
      <h3>innerText vs textContent:</h3>
      <ul>
        <li><code>innerText</code> — CSS aware (hides hidden text)</li>
        <li><code>textContent</code> — ignores CSS (shows all text)</li>
      </ul>
      <h3>When to Use:</h3>
      <ul>
        <li><code>innerHTML</code> — render HTML (trusted source only)</li>
        <li><code>textContent</code> — plain text, user input (safer)</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["DOM", "innerHTML", "textContent"],
  },
  {
    id: 60,
    title: "What is reflow and repaint?",
    content: `
      <p>Both are part of browser rendering process.</p>
      <h3>Reflow (Layout)</h3>
      <ul>
        <li>Browser calculates element position and size</li>
        <li><strong>Expensive operation</strong></li>
        <li>Triggers: width/height, font, DOM add/remove</li>
      </ul>
      <h3>Repaint</h3>
      <ul>
        <li>Updates visual appearance (no layout change)</li>
        <li>Lighter than reflow</li>
        <li>Triggers: color, background, visibility</li>
      </ul>
      <h3>Important:</h3>
      <p><strong>Reflow triggers Repaint, but Repaint doesn't trigger Reflow.</strong></p>
      <h3>Example</h3>
      <pre><code>// ❌ Triggers reflow (expensive)
element.style.width = '100px';
element.style.height = '200px';

// ✅ Triggers only repaint (cheaper)
element.style.color = 'red';
element.style.backgroundColor = 'blue';</code></pre>
      <h3>Optimization:</h3>
      <ul>
        <li>Batch DOM updates</li>
        <li>Use classList instead of multiple style changes</li>
        <li>Use transform & opacity for animations (GPU)</li>
        <li>Use DocumentFragment for multiple insertions</li>
      </ul>
      <p><strong>Remember:</strong> Reflow = rearranging furniture (big), Repaint = painting walls (small)</p>
    `,
    difficulty: "Medium",
    tags: ["Reflow", "Repaint", "Performance"],
  },
  {
    id: 61,
    title: "How does browser rendering work?",
    content: `
      <p>Browser converts HTML, CSS, JS into visible page through several steps.</p>
      <h3>Rendering Pipeline:</h3>
      <ol>
        <li><strong>Parse HTML → DOM Tree</strong>
          <ul><li>HTML becomes Document Object Model</li></ul>
        </li>
        <li><strong>Parse CSS → CSSOM Tree</strong>
          <ul><li>CSS becomes CSS Object Model</li></ul>
        </li>
        <li><strong>DOM + CSSOM → Render Tree</strong>
          <ul><li>Visible elements + styles combined</li>
          <li><code>display: none</code> elements excluded</li></ul>
        </li>
        <li><strong>Layout (Reflow)</strong>
          <ul><li>Calculate position & size</li></ul>
        </li>
        <li><strong>Paint</strong>
          <ul><li>Draw pixels (colors, borders, shadows)</li></ul>
        </li>
        <li><strong>Composite</strong>
          <ul><li>Merge layers into final image</li></ul>
        </li>
      </ol>
      <h3>Flow:</h3>
      <pre><code>HTML → DOM ↘
              → Render Tree → Layout → Paint → Composite → Screen
CSS → CSSOM ↗</code></pre>
      <h3>JavaScript's Role:</h3>
      <ul>
        <li>Can modify DOM/CSSOM</li>
        <li>Can block rendering</li>
        <li><code>async</code>/<code>defer</code> make scripts non-blocking</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Browser Rendering", "Performance"],
  },
  {
    id: 62,
    title: "What is CORS?",
    content: `
      <p>CORS (Cross-Origin Resource Sharing) is a security mechanism controlling cross-origin HTTP requests.</p>
      <h3>Same-Origin Policy:</h3>
      <p>By default, browsers only allow requests to same origin (protocol + domain + port).</p>
      <pre><code>// Same origin
https://example.com/page1
https://example.com/page2

// Different origin (CORS needed)
https://example.com → https://api.example.com
https://example.com → http://example.com
https://example.com:3000 → https://example.com:4000</code></pre>
      <h3>Simple vs Complex Requests:</h3>
      <ul>
        <li><strong>Simple:</strong> GET, POST (basic), HEAD — no preflight</li>
        <li><strong>Complex:</strong> PUT, DELETE, custom headers — preflight required</li>
      </ul>
      <h3>CORS Headers (Server):</h3>
      <pre><code>Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
Access-Control-Allow-Credentials: true</code></pre>
      <h3>Important:</h3>
      <ul>
        <li>CORS is enforced by <strong>browser only</strong></li>
        <li>Server-to-server requests don't have CORS</li>
        <li>CORS error? Check server headers</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["CORS", "Security"],
  },
  {
    id: 63,
    title: "What is preflight request?",
    content: `
      <p>Preflight is an automatic OPTIONS request browser sends before complex cross-origin requests.</p>
      <h3>When Preflight Happens:</h3>
      <ul>
        <li>Methods: PUT, DELETE, PATCH</li>
        <li>Custom headers (Authorization, X-Custom)</li>
        <li>Content-Type: application/json</li>
      </ul>
      <h3>Preflight Flow:</h3>
      <pre><code>1. Browser sends OPTIONS request
   → "Can I send PUT with these headers?"

2. Server responds with allowed methods/headers
   → "Yes, PUT allowed"

3. Browser sends actual request
   → PUT with data</code></pre>
      <h3>Preflight Request:</h3>
      <pre><code>OPTIONS /api/users HTTP/1.1
Origin: https://example.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type</code></pre>
      <h3>Server Response:</h3>
      <pre><code>HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400  // cache 24 hours</code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li>Browser does it automatically</li>
        <li>Uses OPTIONS method</li>
        <li>Can be cached with Max-Age</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["CORS", "Preflight", "Security"],
  },
  {
    id: 64,
    title: "What is service worker?",
    content: `
      <p>Service Worker is a JavaScript file running in background for offline capability and push notifications.</p>
      <h3>Key Features:</h3>
      <ul>
        <li>Runs in separate thread (non-blocking)</li>
        <li>No DOM access</li>
        <li>Can intercept network requests</li>
        <li>Requires HTTPS (except localhost)</li>
      </ul>
      <h3>Lifecycle:</h3>
      <pre><code>Register → Install → Activate → Running

// Register
navigator.serviceWorker.register('/sw.js');

// sw.js
self.addEventListener('install', (event) => {
  // Cache assets
});

self.addEventListener('activate', (event) => {
  // Clean old caches
});

self.addEventListener('fetch', (event) => {
  // Intercept requests
});</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li><strong>Offline support</strong> — cache and serve</li>
        <li><strong>Push notifications</strong></li>
        <li><strong>Background sync</strong></li>
        <li><strong>Caching strategies</strong></li>
      </ul>
      <h3>Caching Example:</h3>
      <pre><code>self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Service Worker", "PWA"],
  },
  {
    id: 65,
    title: "What is PWA?",
    content: `
      <p>PWA (Progressive Web App) is a web app that provides native app-like experience.</p>
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Installable</strong> — add to home screen</li>
        <li><strong>Offline support</strong> — Service Worker caching</li>
        <li><strong>Push notifications</strong></li>
        <li><strong>Responsive</strong> — works on all devices</li>
        <li><strong>App-like</strong> — fullscreen, splash screen</li>
      </ul>
      <h3>Requirements:</h3>
      <ol>
        <li><strong>HTTPS</strong></li>
        <li><strong>Service Worker</strong></li>
        <li><strong>Web App Manifest</strong></li>
      </ol>
      <h3>manifest.json:</h3>
      <pre><code>{
  "name": "My PWA",
  "short_name": "PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192" }
  ]
}</code></pre>
      <h3>Examples:</h3>
      <p>Twitter Lite, Spotify Web, Starbucks, Pinterest</p>
      <h3>Benefits:</h3>
      <ul>
        <li>No app store needed</li>
        <li>Smaller than native apps</li>
        <li>Single codebase</li>
        <li>SEO friendly</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["PWA", "Service Worker"],
  },
  {
    id: 66,
    title: "What is requestAnimationFrame?",
    content: `
      <p>requestAnimationFrame is a browser API for smooth, optimized animations synced with display refresh.</p>
      <h3>Why Not setTimeout/setInterval?</h3>
      <ul>
        <li>Fixed interval, not synced with refresh rate</li>
        <li>Runs in inactive tabs (battery waste)</li>
        <li>Janky animations</li>
      </ul>
      <h3>Benefits:</h3>
      <ul>
        <li>Synced with browser repaint (~60fps)</li>
        <li>Pauses in inactive tabs</li>
        <li>Smoother animations</li>
        <li>Better performance</li>
      </ul>
      <h3>Example:</h3>
      <pre><code>let position = 0;

function animate() {
  position += 2;
  element.style.transform = \`translateX(\${position}px)\`;
  
  if (position < 500) {
    requestAnimationFrame(animate);
  }
}

// Start
requestAnimationFrame(animate);

// Cancel
const id = requestAnimationFrame(animate);
cancelAnimationFrame(id);</code></pre>
      <h3>With Timestamp:</h3>
      <pre><code>function animate(timestamp) {
  const progress = timestamp / 1000; // seconds
  element.style.transform = \`translateX(\${progress * 100}px)\`;
  
  if (progress < 5) {
    requestAnimationFrame(animate);
  }
}</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Animation", "Performance"],
  },
  {
    id: 67,
    title: "What is lazy loading?",
    content: `
      <p>Lazy Loading loads resources only when needed — not initially.</p>
      <h3>Benefits:</h3>
      <ul>
        <li>Faster initial page load</li>
        <li>Saves bandwidth</li>
        <li>Memory efficient</li>
      </ul>
      <h3>Image Lazy Loading:</h3>
      <pre><code>// Native (modern browsers)
&lt;img src="image.jpg" loading="lazy" alt="..."&gt;

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});</code></pre>
      <h3>React Lazy Loading:</h3>
      <pre><code>import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
      <h3>Use Cases:</h3>
      <ul>
        <li>Images below the fold</li>
        <li>Heavy components (modals, charts)</li>
        <li>Route-based code splitting</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Lazy Loading", "Performance"],
  },
  {
    id: 68,
    title: "Explain browser caching",
    content: `
      <p>Browser Caching stores resources locally for faster subsequent loads.</p>
      <h3>Cache-Control Header:</h3>
      <pre><code>// Cache 1 year (static assets)
Cache-Control: max-age=31536000

// No caching
Cache-Control: no-store

// Revalidate every time
Cache-Control: no-cache

// Browser only (no CDN)
Cache-Control: private, max-age=3600</code></pre>
      <h3>ETag (Validation):</h3>
      <pre><code>// Server response
ETag: "abc123"

// Next request
If-None-Match: "abc123"

// Unchanged → 304 Not Modified (use cache)</code></pre>
      <h3>Last-Modified:</h3>
      <pre><code>// Server response
Last-Modified: Wed, 01 Jan 2024 00:00:00 GMT

// Next request
If-Modified-Since: Wed, 01 Jan 2024 00:00:00 GMT</code></pre>
      <h3>Strategies:</h3>
      <ul>
        <li><strong>Static assets</strong> — long max-age + versioning</li>
        <li><strong>HTML</strong> — no-cache or short max-age</li>
        <li><strong>API</strong> — depends on data freshness</li>
      </ul>
      <h3>Cache Busting:</h3>
      <pre><code>&lt;script src="app.abc123.js"&gt;&lt;/script&gt;
&lt;link href="styles.xyz789.css"&gt;</code></pre>
    `,
    difficulty: "Medium",
    tags: ["Caching", "Performance"],
  },
  {
    id: 69,
    title: "What is a memory leak in JavaScript?",
    content: `
      <p>Memory Leak happens when unused memory is not released — causes increasing memory usage and performance issues.</p>
      <h3>Common Causes:</h3>
      <ol>
        <li><strong>Global variables</strong>
          <pre><code>function leak() {
  leaked = "global!"; // missing var/let/const
}</code></pre>
        </li>
        <li><strong>Forgotten event listeners</strong>
          <pre><code>// ❌ Never removed
element.addEventListener('click', handler);

// ✅ Cleanup
element.removeEventListener('click', handler);</code></pre>
        </li>
        <li><strong>Forgotten timers</strong>
          <pre><code>// ❌ Never cleared
setInterval(() => {}, 1000);

// ✅ Clear when done
const id = setInterval(() => {}, 1000);
clearInterval(id);</code></pre>
        </li>
        <li><strong>Detached DOM references</strong>
          <pre><code>const elements = [];
elements.push(document.getElementById('item'));
document.body.removeChild(item);
// item still in memory!</code></pre>
        </li>
        <li><strong>Closures holding references</strong></li>
        <li><strong>console.log</strong> (DevTools open keeps objects)</li>
      </ol>
      <h3>Detection:</h3>
      <ul>
        <li>Chrome DevTools → Memory tab</li>
        <li>Heap snapshot comparison</li>
        <li>Performance monitor</li>
      </ul>
      <h3>Prevention:</h3>
      <ul>
        <li>Use let/const instead of var</li>
        <li>Always cleanup: removeEventListener, clearInterval</li>
        <li>Nullify references when done</li>
        <li>Use WeakMap/WeakSet for object references</li>
      </ul>
    `,
    difficulty: "Medium",
    tags: ["Memory Leak", "Performance"],
  },
];
