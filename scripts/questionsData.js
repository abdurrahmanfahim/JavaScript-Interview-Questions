const questionsData = [
  {
    id: 1,
    title: "What is the difference between var, let, and const?",
    content: `
      <p><mark>01. var</mark></p>
      <ul>
        <li>Function scope এ থাকে, block scope follow করে না।</li>
        <li>Re-declare করা যায়। (একই variable আবার declare করা যায়)</li>
        <li>Hoisting হয়। (variable আগেই memory তে থাকে, কিন্তু value assign হয় না)</li>
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
        <li>Value Re-assign করা যায় না।</li>
        <li>Hoisting হয়।</li>
      </ul>
    `,
    difficulty: "Easy",
    tags: ["Variables", "JavaScript Basics"]
  },
  {
    id: 2,
    title: "What is hoisting?",
    content: `
      <p>Hoisting হলো JavaScript এর একটা behavior যেখানে variable এবং function declaration গুলো memory তে function বা scope এর শুরুতে(উপরে) নিয়ে যায়।</p>
      <ul>
        <li>var hoist হয় কিন্তু value assign হয় না। তাই declare এর আগেই access করলে undefined পাওয়া যায়।</li>
        <li><code>let</code> এবং <code>const</code> hoist হয়, কিন্তু temporal dead zone (TDZ) থাকে—declare এর আগে access করলে ReferenceError দেয়।</li>
        <li>Functions (normal function declaration) hoist হয় পুরো function body সহ—তাই declare এর আগেও call করা যায়।</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 3,
    title: "What is the temporal dead zone?",
    content: `
      <p>Temporal Dead Zone (TDZ) হলো block scope এর ওই সময়, যখন <code>let</code> বা <code>const</code> দিয়ে declare করা variable কে access করা যায় না। Declare করার আগে access করলে ReferenceError হয়।</p>
      <i>TDZ মানে “exist করে কিন্তু ব্যবহার করা নিষিদ্ধ” অবস্থা।</i>
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
    `
,
  difficulty: 'Medium',
  tags: []
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
    `
,
  difficulty: 'Medium',
  tags: []
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
    `
,
  difficulty: 'Medium',
  tags: []
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
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 7,
    title: "What is an event loop?",
    content: `
      <p>Event Loop হলো JavaScript এর mechanism, যেটা asynchronous code handle করে, কারণ JavaScript single-threaded।</p>
      <p>JavaScript এক সময় এ একটা task execute করে, কিন্তু non-blocking I/O support করে async operation এর জন্য।</p>
      <p>Call Stack, Web APIs, Callback Queue, এবং Event Loop—মিলে async tasks manage করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 8,
    title: "Explain microtask and macrotask queue",
    content: `
      <p>Microtask এবং Macrotask Queue হলো JavaScript এর event loop এর asynchronous task manage করার mechanism।</p>
      <h3>1) Macrotask (Task)</h3>
      <p>Major async task গুলো macrotask queue তে রাখা হয়।</p>
      <p><strong>Examples:</strong> <code>setTimeout</code>, <code>setInterval</code>, I/O operations</p>
      <h3>2) Microtask</h3>
      <p>High-priority task গুলো microtask queue তে রাখা হয়।</p>
      <p><strong>Examples:</strong> <code>Promise.then</code>, <code>process.nextTick</code></p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 9,
    title: "What is debounce?",
    content: `
      <p>Debounce হলো একটা technique, যা frequent function call কে limit করে—মানে last event এর পর নির্দিষ্ট সময় wait করে তারপর function call করে।</p>
      <p><strong>Use case:</strong> <code>scroll</code>, <code>resize</code>, <code>input</code> events—যেখানে function বারবার call হয়, CPU load বাড়ায়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 10,
    title: "What is throttling?",
    content: `
      <p>Throttling হলো একটা technique, যা function কে নির্দিষ্ট interval এ মাত্র execute করতে দেয়—মানে frequent call হলেও certain time পর পর call হবে।</p>
      <h3>Debounce vs Throttle</h3>
      <ul>
        <li><strong>Debounce</strong> → last event এর পর function execute হয়</li>
        <li><strong>Throttle</strong> → specified interval এ regularly execute হয়</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <p>Currying = একটা function কে nested single-argument functions এ convert করা, যাতে arguments step by step pass করা যায়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
            <li>Side effect = variable modify করা, file write করা, database update করা, DOM modify করা etc.</li>
            <li>Pure function এর কারণে code predictable and testable হয়।</li>
          </ul>
        </li>
      </ol>
      <p>Pure function = same input → same output, no side effect, functional programming এ important concept।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 13,
    title: "What is immutability?",
    content: `
      <p>Immutability হলো data change করা যায় না এর concept।</p>
      <ul>
        <li>JavaScript এ primitive types (number, string, boolean) by default immutable।</li>
        <li>Objects and arrays mutable, কিন্তু immutable approach use করে original data change না করে new copy create করা হয়।</li>
        <li>Benefits: predictable state, easier debugging, functional programming friendly।</li>
      </ul>
      <p>Immutability = original data change না করে, new copy create করে modification। State management এ (React, Redux) এটা খুব important।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 14,
    title: "Explain this keyword",
    content: `
      <p>this keyword হলো JavaScript এর special variable যা current execution context এ function কে reference করে।</p>
      <ul>
        <li>Value of this depend করে function call কিভাবে করা হচ্ছে।</li>
      </ul>
      <p>this = current execution context এর object reference, value call site এর basis এ decide হয়, regular function, object method, constructor, arrow function এর জন্য behavior আলাদা।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <p>IIFE = function যে immediately call হয় declare এর সাথে সাথে, mainly scope protection and encapsulation এর জন্য use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 16,
    title: "What is a prototype?",
    content: `
      <p>Prototype হলো JavaScript এর object এর parent object, যা inheritance provide করে।</p>
      <ul>
        <li>প্রত্যেক JavaScript object এর সাথে prototype object link থাকে।</li>
        <li>Object এর property বা method access করতে গেলে JS prototype chain এ search করে।</li>
        <li>এটা memory efficiency এর জন্য useful, কারণ method গুলো object এ বারবার create না করে, prototype এ share করা হয়।</li>
      </ul>
      <p>Prototype = object এর blueprint, যা methods &amp; properties inheritance এর জন্য share করে, and prototype chain এর মাধ্যমে property search করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <p>Prototypal Inheritance = object এর object কে inherit করে properties &amp; methods share করা, JavaScript এর core inheritance mechanism, class এর alternative।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 18,
    title: "What is strict mode?",
    content: `
      <p>Strict Mode হলো JavaScript এর একটা feature যা code কে stricter rules follow করতে বলে।</p>
      <ul>
        <li>এটা errors detect করতে help করে, unsafe actions block করে, and performance improve করতে পারে।</li>
        <li>Strict mode use করতে code এর শুরুতে "use strict"; লিখতে হয়।</li>
      </ul>
      <p>Features / Benefits:</p>
      <ol>
        <li>Undeclared variables use করলে error দেয়</li>
        <li>Deleting variables, functions, or objects forbidden</li>
        <li>Duplicate parameter names error দেয়</li>
        <li>this in functions undefined হয়, না যে global object refer করে</li>
        <li>Reserved keywords (like eval, arguments) use করতে দেয় না</li>
      </ol>
      <p>Strict Mode = JavaScript এর stricter execution context, যা errors detect করে, unsafe practices block করে, and better performance &amp; maintainable code ensure করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <ul>
        <li>== → value compare, type coercion use করে</li>
        <li>=== → value + type compare, strict equality</li>
        <li>Best practice: always use === to avoid unexpected bugs</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
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
        <li>Implicit Coercion (automatic)
          <ul>
            <li>JavaScript automatic type convert করে</li>
          </ul>
        </li>
        <li>Explicit Coercion (manual)
          <ul>
            <li>Developer manually type convert করে</li>
          </ul>
        </li>
      </ol>
      <p>Type Coercion = value এর type automatic or manually convert করা যাতে expression or operation সঠিকভাবে execute হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <p>Promise এর ৩টা state:</p>
      <ol>
        <li>Pending → কাজ চলছে</li>
        <li>Fulfilled → কাজ successful, resolve() call</li>
        <li>Rejected → কাজ fail, reject() call</li>
      </ol>
      <p>Why Promises?</p>
      <ul>
        <li>Callback hell avoid করে</li>
        <li>Error handling easy</li>
        <li>.then(), .catch(), .finally() use করে control clean রাখা যায়</li>
        <li>async/await Promise এর উপরে build</li>
      </ul>
      <p>Promise = asynchronous result এর একটা container, যা future এ success or failure return করে, and JS asynchronous code কে clean, structured, error-handled করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 22,
    title: "What is async/await?",
    content: `
      <p>async/await হলো JavaScript এর Promises কে easy &amp; readable ভাবে handle করার syntax।</p>
      <p>এটা asynchronous code কে synchronous এর মতো দেখায়, তাই code অনেক clean হয়।</p>
      <ol>
        <li>async
          <ul>
            <li>যেকোনো function এর আগে async দিলে সেটা automatically promise return করে।</li>
            <li>তার ভিতরে await use করা যায়।</li>
          </ul>
        </li>
        <li>await
          <ul>
            <li>await promise resolve হওয়ার জন্য wait করে।</li>
            <li>Execution থামিয়ে রাখে, কিন্তু main thread block করে না।</li>
          </ul>
        </li>
      </ol>
      <p>Benefits:</p>
      <ul>
        <li>Code readable &amp; clean</li>
        <li>Nested .then() → avoid</li>
        <li>Error handling easy with try/catch</li>
        <li>Debugging smooth</li>
      </ul>
      <p>async/await = Promises এর উপর একটা syntactic sugar, যা asynchronous code কে serial, readable &amp; maintainable করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
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
      <h3>Solution:</h3>
      <ol>
        <li><strong>Promises</strong></li>
        <li><strong>async/await</strong></li>
        <li><strong>Modular Functions</strong></li>
      </ol>
      
      <p><strong>Callback Hell</strong> = deeply nested callbacks এর জন্য code যখন messy, unreadable, maintain করা impossible হয়ে যায়। Solution হলো <strong>Promises</strong> and <strong>async/await</strong>।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 24,
    title: "What is Promise chaining?",
    content: `
      <p>Promise Chaining হলো একটা promise resolve হওয়ার পর তার result use করে next promise call করা—এভাবে serial ভাবে multiple asynchronous operation execute করা।</p>
      <p><strong>Means:</strong></p>
      <p>1st async → 2nd async → 3rd async …</p>
      <p>Each step <code>.then()</code> এর মাধ্যমে chain হয়ে যায়।</p>
      <h3>Benefits</h3>
      <ol>
        <li>Readable flow</li>
        <li>Error handling easy (single <code>.catch()</code> use করতে পারো)</li>
        <li>Callback hell avoid করা যায়</li>
        <li>Serial async operation control easy</li>
      </ol>
      <p><strong>Promise Chaining</strong> = multiple asynchronous task কে sequence এ run করা using <code>.then()</code>, যাতে code clean &amp; manageable হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 25,
    title: "What is Promise.all()?",
    content: `
      <p>Promise.all() হলো JavaScript-এর একটি Promise উপযোগী মেথড, যা একটি <strong>প্রমিস তালিকা</strong> নিয়ে কাজ করে। এটি সমস্ত promise-কে <strong>পারালালভাবে</strong> (একই সময়ে) চলায়, এবং:</p>
      <ul>
        <li><strong>যদি সমস্ত promise সাফল্যপূর্ণভাবে resolve হয়</strong>, তাহলে একটি নতুন promise ফেরত দেয়—যার মধ্যে সমস্ত <strong>result</strong> একটি <strong>এরে</strong>এ থাকে।</li>
        <li><strong>যদি কোনোটা প্রমিস রিজেক্ট হয়</strong>, তাহলে Promise.all() তা <strong>তাৎক্ষণিকভাবে রিজেক্ট</strong> করে বের হয়।</li>
      </ul>
      
      <h3>Use Cases:</h3>
      <ol>
        <li><strong>একইসাথে একাধিক API call</strong> চলানো (পারফর্ম্যান্স বাড়ানো)</li>
        <li>বিভিন্ন সোর্স থেকে ডেটা লোড করার সময় <strong>প্যারালেল রান</strong> করা</li>
      </ol>
      
      <h3>Key Points:</h3>
      <ol>
        <li><strong>সমস্ত promise পারালালভাবে চলে</strong>।</li>
        <li><strong>একটা রিজেক্টেই সমস্ত রিজেক্ট হয়</strong> (প্রথম রিজেক্ট হওয়ার পরে অন্যান্যদের রিজলট চেক হয় না)।</li>
        <li>ফলাফল <strong>এরে</strong>এ দেয় (প্রতিটি রিজলটের ক্রম বজায় থাকে)।</li>
      </ol>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 26,
    title: "What is Promise.race()?",
    content: `
      <p><code>Promise.race()</code> হলো JavaScript এর একটা method, যা multiple promises এর মধ্যে যে promise সবার আগে <strong>settle</strong> হয় (resolve বা reject), তার result return করে।</p>
      <h3>Meaning</h3>
      <ul>
        <li>যে promise first complete হবে → ওটাই winner</li>
        <li>বাকি promises এর result wait করে না</li>
      </ul>
      <h3>Important Note</h3>
      <ul>
        <li>First settled promise return করে</li>
        <li>Settled = resolve OR reject</li>
        <li>যদি first promise reject হয় → পুরো race reject হয়</li>
      </ul>
      <h3>Use Cases</h3>
      <ol>
        <li>Timeout system implement করতে</li>
        <li>Slow API এর against fallback API use করতে</li>
        <li>Performance optimization</li>
      </ol>
      <p><strong>Promise.race()</strong> = multiple promises এর মধ্যে যে first complete হবে, তার result return করে, বাকি গুলো ignore।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 27,
    title: "What is Promise.any()?",
    content: `
      <p><code>Promise.any()</code> হলো JavaScript এর একটা method, যা multiple promises এর মধ্যে যে promise <strong>প্রথম successful (resolve)</strong> হয়, তার result return করে।</p>
      <ul>
        <li>একটা promise resolve হলেই → <code>Promise.any()</code> success return করে</li>
        <li>যদি সবগুলো promise fail করে → <code>AggregateError</code> throw করে</li>
      </ul>
      <h3>Use Cases</h3>
      <ol>
        <li>Multiple fallback API requests এ—যে API first succeed করে</li>
        <li>Speed optimization এর জন্য redundant requests</li>
        <li>Network race conditions handle করতে</li>
      </ol>
      <p><strong>Promise.any()</strong> = first successful promise কে return করে; সব fail হলে <code>AggregateError</code> দেয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 28,
    title: "What is Promise.allSettled()?",
    content: `
      <p><code>Promise.allSettled()</code> হলো JavaScript এর একটা method, যা multiple promises কে একসাথে run করে এবং সব promise <strong>settle</strong> (resolve or reject) হওয়ার পর result return করে।</p>
      <ul>
        <li>👉 কোন promise fail করলো আর কোন success হলো — সব details return করে</li>
        <li>👉 একটা fail করলেও full result return করে — reject হয় না</li>
      </ul>
      <h3>Key Points</h3>
      <ul>
        <li>Resolved &amp; Rejected — দুইটা result ই return হবে</li>
        <li>কোনো একটা reject হলেও পুরো promise reject করবে না</li>
        <li>Always full settled report দেয়</li>
      </ul>
      <h3>Use Cases</h3>
      <ul>
        <li>যদি সব tasks এর final status দরকার হয়</li>
        <li>API call mixture → কোন API fail করলো দেখার জন্য</li>
        <li>Cleanup tasks, logging, monitoring</li>
      </ul>
      <p><strong>Promise.allSettled()</strong> = সব promise complete হওয়ার পর success &amp; failure এর full report return করে, একটা fail হলেও reject করে না।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 29,
    title: "What is the event loop model for async JS?",
    content: `
      <p>Async JavaScript এর <strong>Event Loop Model</strong> হলো একটা mechanism, যা JavaScript কে single-threaded হয়েও asynchronous task handle করতে দেয়।</p>
      <p>JavaScript একটা single-threaded language—মানে এক সময় একটাই কাজ চলতে পারে। কিন্তু async কাজ (API call, timer, file read) যেন block না করে, তাই event loop model use হয়।</p>
      
      <h2>Event Loop Model Flow (Step-by-Step)</h2>
      <h3>1) Call Stack</h3>
      <ul>
        <li>Synchronously code এখানে execute হয়</li>
        <li>Function call হলে stack এ <strong>push</strong> হয়</li>
        <li>Function execution শেষ হলে <strong>pop</strong> হয়</li>
      </ul>
      <h3>2) Web APIs / Browser APIs</h3>
      <ul>
        <li><code>setTimeout</code>, <code>fetch</code>, DOM events—এগুলো browser handle করে, তাই JS call stack block হয় না</li>
        <li>Async task গুলো এখানে run হয় এবং result ready হলে পরের queue তে যায়</li>
      </ul>
      <h3>3) Callback Queue / Task Queue (Macrotask Queue)</h3>
      <ul>
        <li>Timer (<code>setTimeout</code>) এবং DOM events এর callback এখানে queue তে wait করে</li>
        <li>Call stack empty হলে event loop এই queue থেকে callback নিয়ে call stack এ <strong>push</strong> করে</li>
      </ul>
      <h3>4) Microtask Queue (Promise Queue)</h3>
      <ul>
        <li>Promise callbacks (<code>.then()</code>, <code>catch()</code>, <code>finally()</code>) এখানে যায়</li>
        <li><strong>Highest priority</strong></li>
        <li>Call stack empty হলে <strong>আগে microtask queue execute হয়</strong>, তারপর macrotask queue</li>
      </ul>
      <h3>5) Event Loop (Coordinator)</h3>
      <p>Event loop continuously check করে—</p>
      <ol>
        <li><strong>Call stack empty কি না</strong></li>
        <li>Empty হলে → <strong>microtask queue</strong> থেকে callbacks stack এ push করে (এবং queue empty না হওয়া পর্যন্ত চালায়)</li>
        <li>Microtask শেষ হলে → <strong>macrotask queue</strong> থেকে next callback stack এ push করে</li>
        <li>এই cycle বারবার repeat হয়—এভাবেই async flow চলতে থাকে</li>
      </ol>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 30,
    title: "Why is JavaScript single-threaded?",
    content: `
      <h3>1) DOM manipulation safe রাখার জন্য</h3>
      <p>Browser এর DOM যদি multiple thread একসাথে access করত, তাহলে—</p>
      <ul>
        <li>race condition</li>
        <li>inconsistent UI</li>
        <li>crashes</li>
      </ul>
      <p>হতে পারত। তাই JavaScript কে মূলত single-threaded রাখা হয়েছে, যাতে একসময় একটাই action DOM এ apply হয়।</p>
      
      <h3>2) Event-driven architecture এর সাথে best fit</h3>
      <p>JavaScript এর async system চলে যেমন—</p>
      <ul>
        <li>Event loop</li>
        <li>Callback queue</li>
        <li>Microtask queue</li>
      </ul>
      <p>এগুলো single-thread হলে বেশি predictably এবং efficiently manage করা যায়।</p>
      
      <h3>3) Safety &amp; security</h3>
      <p>Multi-threaded environment এ shared memory ঠিকভাবে manage না করলে security risk বাড়ে।</p>
      <p>Single-thread = কম risk (shared state কম, concurrency bug কম)।</p>
      
      <h2>JavaScript কি শুধু single-threaded?</h2>
      <p>Not exactly.</p>
      <p>Browser-এর ভিতরে (behind the scenes) অনেক কিছুই multiple threads use করে, যেমন—</p>
      <ul>
        <li>Web APIs</li>
        <li>Workers</li>
        <li>Rendering engine</li>
      </ul>
      <p>কিন্তু <strong>JavaScript engine (V8)</strong> এর main execution thread একটাই।</p>
      <p><strong>Summary:</strong> JS code single-threaded, কিন্তু browser internally multi-thread use করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 31,
    title: "What is a Web Worker?",
    content: `
      <p>Web Worker হলো JavaScript এর একটা background thread, যা main thread block না করে heavy computation / async task handle করে।</p>
      <p>Normally JavaScript single-threaded, তাই main thread এ heavy computation UI freeze করতে পারে। Web Worker use করলে UI responsive থাকে এবং code parallel এ run হয়।</p>
      
      <h3>Key Points</h3>
      <ol>
        <li>Web Worker background thread এ execute হয়</li>
        <li>Main thread block করে না</li>
        <li>DOM এ direct access নেই → <code>postMessage()</code> &amp; <code>onmessage</code> দিয়ে communication করতে হয়</li>
        <li>Mostly heavy calculations, data processing, large loops এর জন্য use হয়</li>
      </ol>
      
      <h3>Benefits</h3>
      <ul>
        <li>Main thread এর UI responsive থাকে</li>
        <li>Heavy computation parallel execution হয়</li>
        <li>UI freezing avoid করা যায়</li>
      </ul>
      
      <p><strong>Web Worker</strong> = JS এর background thread, main thread কে block না করে heavy tasks execute করে, UI smooth রাখতে help করে; DOM direct access করতে পারে না—message passing দিয়ে communicate করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 32,
    title: "What is an async iterator?",
    content: `
      <p>Async Iterator হলো JavaScript এর একটা special object, যা asynchronous data stream কে step-by-step iterate করতে দেয়।</p>
      <p>Normally iterators synchronous data iterate করে (<code>for...of</code>)। Async iterators asynchronous data (API streams, file reads, large datasets) iterate করতে <code>for await...of</code> loop use করে।</p>
      
      <h3>Key Points</h3>
      <ol>
        <li>Async iterator এর <code>next()</code> method <code>Promise</code> return করে</li>
        <li>Data async ভাবে fetch / generate করা হয়</li>
        <li><code>for await...of</code> loop দিয়ে easy iteration possible</li>
      </ol>
      
      <h3>Use Cases</h3>
      <ol>
        <li>Streaming APIs (like reading large files, network streams)</li>
        <li>Lazy fetching data asynchronously</li>
        <li>Non-blocking iteration</li>
      </ol>
      
      <p><strong>Async Iterator</strong> = JS এর iterator যা asynchronous data step-by-step yield করে; <code>for await...of</code> loop দিয়ে consume করা যায়; mostly streaming / async sequences handle করার জন্য।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 33,
    title: "What is fetch API?",
    content: `
      <p>Fetch API হলো JavaScript এর modern way to make HTTP requests, যা XMLHttpRequest (XHR) এর replacement।</p>
      <p>এটা Promise-based, cleaner syntax, এবং modern browsers এ native support আছে।</p>
      <h3>Key Features</h3>
      <ol>
        <li>Promise-based → async/await এর সাথে easy use</li>
        <li>Cleaner syntax → XHR এর চেয়ে readable</li>
        <li>Built-in JSON support</li>
        <li>Request/Response objects provide করে</li>
        <li>Streaming support</li>
      </ol>
      <h3>Benefits over XHR</h3>
      <ul>
        <li>Promise-based → callback hell avoid</li>
        <li>Better error handling</li>
        <li>More flexible &amp; powerful</li>
        <li>Modern, standard approach</li>
      </ul>
      <p><strong>Fetch API</strong> = JS এর modern HTTP request method, Promise-based, clean syntax, XHR replacement—modern web development এ standard approach।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 34,
    title: "What is XMLHTTPRequest?",
    content: `
      <p>XMLHttpRequest (XHR) হলো JavaScript এর old-school API, যা web browser থেকে server এ HTTP request পাঠাতে &amp; response receive করতে use হয়।</p>
      <p>AJAX এর main component ছিল XHR। Fetch API আসার আগে server থেকে data asynchronously load করার জন্য এটা ছিল most common method।</p>
      
      <h3>Key Points</h3>
      <ol>
        <li>Browser এ HTTP request পাঠায় (<code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code>)</li>
        <li>Asynchronous বা synchronous request support করে (sync use avoid করা উচিত)</li>
        <li>Response handle করতে <code>readyState</code> &amp; <code>status</code> check করতে হয়</li>
        <li>JSON, XML, plain text handle করা যায়</li>
      </ol>
      
      <h3>Limitations of XHR</h3>
      <ol>
        <li>Callback-based → nested callbacks এ easily callback hell হয়</li>
        <li>Less readable &amp; maintainable code</li>
        <li>Modern <code>fetch</code> API better, promise-based</li>
      </ol>
      
      <p><strong>XMLHttpRequest (XHR)</strong> = JS এর classic way to make HTTP requests, AJAX এর core, but callback-based, less readable—now mostly replaced by Fetch API।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 35,
    title: "What is the difference between sync and async code?",
    content: `
      <p>JavaScript এ <strong>synchronous (sync)</strong> vs <strong>asynchronous (async)</strong> code এর difference mainly <strong>execution order</strong> &amp; <strong>blocking behavior</strong> এর ওপর depend করে।</p>
      
      <h3>1) Synchronous Code (Sync)</h3>
      <ul>
        <li>Code <strong>line by line</strong> execute হয়</li>
        <li>একটা কাজ শেষ হওয়ার পর next কাজ start হয়</li>
        <li><strong>Blocking nature</strong> → long task হলে UI freeze / block হয়</li>
      </ul>
      
      <h3>2) Asynchronous Code (Async)</h3>
      <ul>
        <li>Code immediately next line এ jump করে, long running task background এ run করে</li>
        <li><strong>Non-blocking</strong> → UI responsive থাকে</li>
        <li>Callbacks, Promises, <code>async/await</code>, <code>setTimeout</code>, <code>fetch</code> → async task</li>
      </ul>
      
      <h3>Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Sync</th>
            <th>Async</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style='text-align: center; padding-right: 10px;' >Execution</td>
            <td style='text-align: center; padding-right: 10px;' >Sequential</td>
            <td style='text-align: center; padding-right: 10px;' >Parallel / background</td>
          </tr>
          <tr>
            <td style='padding-right: 10px;' >Blocking</td>
            <td style='text-align: center; padding-right: 10px;' >Yes</td>
            <td style='text-align: center; padding-right: 10px;' >No</td>
          </tr>
          <tr>
            <td>Result</td>
            <td>Immediate</td>
            <td>Future এ পাওয়া যায়</td>
          </tr>
        </tbody>
      </table>
      
      <p><strong>Sync</strong> = sequential, blocking</p>
      <p><strong>Async</strong> = parallel, non-blocking, future এ result</p>
      <p>JS mainly single-threaded, so async code <strong>event loop</strong> &amp; <strong>callback/microtask queue</strong> দিয়ে handle হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 36,
    title: "What are arrow functions?",
    content: `
      <p>Arrow Functions হলো JavaScript এর একটা concise syntax function লেখার জন্য, যা ES6 এ introduce করা হয়।</p>
      <ul>
        <li>Traditional <code>function</code> keyword এর alternative</li>
        <li><code>this</code> binding lexical → parent scope এর <code>this</code> maintain করে</li>
        <li>Code shorter &amp; cleaner হয়</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Concise syntax → one-liner expression possible</li>
        <li>Own <code>this</code> নেই → parent context এর <code>this</code> use করে</li>
        <li>Own <code>arguments</code> object নেই (need হলে rest operator <code>...args</code> use করা যায়)</li>
        <li>Callbacks, short functions, <code>map</code>/<code>filter</code>/<code>reduce</code> এর জন্য best</li>
      </ol>
      
      <p><strong>Arrow Functions</strong> = ES6 এর shorter, cleaner function syntax, lexical <code>this</code> maintain করে—mainly callbacks &amp; array methods এ use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 37,
    title: "What is destructuring?",
    content: `
      <p>Destructuring হলো JavaScript এর একটা syntax, যা object বা array এর value easily variable এ assign করতে use হয়।</p>
      <p>Traditional approach এ variable assign করতে অনেক line লাগতো। Destructuring দিয়ে short &amp; readable code লেখা যায়।</p>
      <h3>Benefits</h3>
      <ol>
        <li>Code concise &amp; readable</li>
        <li>Arrays &amp; objects থেকে easy variable assignment</li>
        <li>Function arguments এ directly use করা যায়</li>
      </ol>
      <p><strong>Destructuring</strong> = JS syntax যা array/object এর values কে easily variable এ extract করতে দেয়—code readable &amp; maintainable করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 38,
    title: "What is spread operator?",
    content: `
      <p>Spread Operator (<code>...</code>) হলো JavaScript এর একটা syntax, যা iterable (array, object) কে expand / copy / merge করতে use হয়।</p>
      <ul>
        <li>Mostly array/object copy, merge, function arguments এর জন্য use হয়</li>
        <li>ES6 এ introduce করা হয়</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Expands iterable</li>
        <li>Shallow copy create করে (nested objects still reference থাকে)</li>
        <li>Merge &amp; append arrays/objects easily</li>
        <li>Function arguments pass করতে convenient</li>
      </ol>
      
      <p><strong>Spread Operator (</strong><code><strong>...</strong></code><strong>)</strong> = JS syntax যা array / object কে expand, merge, copy করতে দেয়—readable &amp; concise code এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 39,
    title: "What is rest operator?",
    content: `
      <p>Rest Operator (<code>...</code>) হলো JavaScript এর একটা syntax, যা function arguments বা array/object destructuring এ <strong>remaining values</strong> কে collect করতে use হয়।</p>
      <h3>Spread vs Rest (same syntax <code>...</code>)</h3>
      <ul>
        <li><strong>Spread</strong> → expand করে</li>
        <li><strong>Rest</strong> → collect করে</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Function arguments collect করতে use হয়</li>
        <li>Array/Object এ remaining elements collect করতে use হয়</li>
        <li>Syntax spread এর মতোই, কিন্তু context অনুযায়ী behavior change হয়</li>
      </ol>
      
      <p><strong>Rest Operator (</strong><code><strong>...</strong></code><strong>)</strong> = JS syntax যা remaining elements/arguments কে collect করে array বা object এ—mainly variable arguments &amp; destructuring এর জন্য use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 40,
    title: "What is template literal?",
    content: `
      <p>Template Literal হলো JavaScript এর একটা modern string syntax, যা multi-line string &amp; dynamic values easily handle করতে use হয়।</p>
      <ul>
        <li>ES6 এ introduce করা হয়</li>
        <li>Traditional string এ <code>+</code> দিয়ে variable concatenate করতে হয়, কিন্তু template literal এ <code>\${}</code> use করা হয়</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Dynamic values interpolation easy</li>
        <li>Multi-line strings support করে</li>
        <li>Expression evaluation support করে</li>
      </ol>
      
      <p><strong>Template Literal</strong> = modern JS string syntax, যা <code>\${}</code> দিয়ে variable/expression embed করতে দেয়, multi-line strings handle করে—readable &amp; concise code এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 41,
    title: "What are ES modules?",
    content: `
      <p>ES Modules (ECMAScript Modules) হলো JavaScript এর official module system, যা code কে আলাদা file/module এ divide করতে use হয়, এবং <code>import</code>/<code>export</code> দিয়ে reuse করা যায়।</p>
      <ul>
        <li>ES6 এ introduce করা হয়</li>
        <li>Traditional JS এ module handle করতে CommonJS / AMD use করা হতো</li>
        <li>Modern JS এ browser &amp; Node.js এর modern versions এ native support আছে</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>File-level scope — globally pollute করে না</li>
        <li>Static structure — compile time এ <code>import</code>/<code>export</code> resolve হয়</li>
        <li>Named &amp; default export—দুইটাই support করে</li>
        <li>Browser &amp; Node.js modern versions এ fully supported</li>
      </ol>
      
      <h3>Benefits</h3>
      <ul>
        <li>Code modular &amp; maintainable হয়</li>
        <li>Reusability &amp; separation of concerns easy</li>
        <li>Modern bundlers (Webpack, Vite) easily optimize করে</li>
      </ul>
      
      <p><strong>ES Modules (ESM)</strong> = JS এর native module system, যা <code>import</code>/<code>export</code> দিয়ে code organize, reuse &amp; maintainable করতে help করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 42,
    title: "What is default export?",
    content: `
      <p>Default Export হলো ES6 module system এর একটা feature, যা একটা module থেকে একটা main value/function/class export করতে use হয়।</p>
      <ul>
        <li>একটা module এ শুধু একটা default export থাকতে পারে</li>
        <li>Import এর সময় curly braces লাগবে না</li>
        <li>Mostly main functionality / primary export এর জন্য use হয়</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>একটা module এ শুধু একটা default export possible</li>
        <li>Import এর সময় custom name দেওয়া যায়</li>
        <li>Named export এর সাথে combine করা যায়</li>
      </ol>
      
      <p><strong>Default Export</strong> = module এর primary value/function export; import এর সময় custom name use করা যায়; curly braces লাগে না; mostly main functionality represent করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 43,
    title: "What is named export?",
    content: `
      <p>Named Export হলো ES6 module system এর একটা feature, যা module থেকে একাধিক variable, function বা class export করতে use হয়।</p>
      <ul>
        <li>একটা module এ অনেক named export থাকতে পারে</li>
        <li>Import এর সময় curly braces <code>{}</code> use করতে হয়</li>
        <li>Exported name exact same থাকতে হবে (unless alias use করা হয়)</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Multiple named exports possible</li>
        <li>Import এর সময় curly braces <code>{}</code> mandatory</li>
        <li>Name match করতে হবে, optional alias use করা যায়</li>
        <li>Utility functions, constants, multiple components এর জন্য useful</li>
      </ol>
      
      <p><strong>Named Export</strong> = module এর multiple specific exports; import এর সময় curly braces দিয়ে access করা হয়; alias use করে name customize করা যায়; mostly helper functions/constants এর জন্য use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 44,
    title: "What is the difference between map and forEach?",
    content: `
      <p><code>map()</code> vs <code>forEach()</code> — দুটোই array method, কিন্তু use case &amp; return value আলাদা।</p>
      
      <h3>1) <code>forEach()</code></h3>
      <ul>
        <li><strong>Purpose:</strong> array এর প্রতিটা element এর উপর action perform করতে</li>
        <li><strong>Return value:</strong> <code>undefined</code></li>
        <li><strong>Mutation:</strong> array কে modify করতে পারে (original array change হতে পারে)</li>
      </ul>
      
      <h3>2) <code>map()</code></h3>
      <ul>
        <li><strong>Purpose:</strong> array এর প্রতিটা element transform করে <strong>new array</strong> return করে</li>
        <li><strong>Return value:</strong> new array</li>
        <li><strong>Original array:</strong> unchanged থাকে</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>forEach()</code> = iterate + side effect, no return</li>
        <li><code>map()</code> = iterate + transform, returns new array</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 45,
    title: "What is the difference between map, filter, reduce?",
    content: `
      <p><code>map()</code>, <code>filter()</code>, <code>reduce()</code> — তিনটা array higher-order methods, কিন্তু use case &amp; return value আলাদা।</p>
      
      <h3>1) <code>map()</code></h3>
      <ul>
        <li><strong>Purpose:</strong> array এর প্রতিটা element কে transform করে new array return করে</li>
        <li><strong>Original array:</strong> unchanged</li>
        <li><strong>Return value:</strong> new array</li>
      </ul>
      
      <h3>2) <code>filter()</code></h3>
      <ul>
        <li><strong>Purpose:</strong> array এর মধ্যে certain condition match করা elements select করে return করে</li>
        <li><strong>Original array:</strong> unchanged</li>
        <li><strong>Return value:</strong> new array</li>
      </ul>
      
      <h3>3) <code>reduce()</code></h3>
      <ul>
        <li><strong>Purpose:</strong> array কে aggregate করে single value তে convert করে</li>
        <li><strong>Original array:</strong> unchanged</li>
        <li><strong>Return value:</strong> single value (number, string, object, etc.)</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>map()</code> → element transform, array return</li>
        <li><code>filter()</code> → element select, array return</li>
        <li><code>reduce()</code> → array aggregate, single value return</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 46,
    title: "Explain Set and Map",
    content: `
      <p><code>Set</code> এবং <code>Map</code> হলো JavaScript এর built-in collection objects, কিন্তু দুটির purpose &amp; behavior আলাদা।</p>
      
      <h3>1) <code>Set</code></h3>
      <ul>
        <li><strong>Definition:</strong> unique values এর collection</li>
        <li><strong>Key Feature:</strong> duplicate value store করতে পারে না</li>
        <li><strong>Order:</strong> insertion order maintain করে</li>
        <li><strong>Use case:</strong> unique values store করা &amp; quick lookup</li>
      </ul>
      
      <h3>2) <code>Map</code></h3>
      <ul>
        <li><strong>Definition:</strong> key-value pairs এর collection</li>
        <li><strong>Key Feature:</strong> যেকোনো type এর key allowed (string, object, function, etc.)</li>
        <li><strong>Order:</strong> insertion order maintain করে</li>
        <li><strong>Use case:</strong> dictionary / lookup table</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>Set</code> = unique values collection, duplicates ignore করে</li>
        <li><code>Map</code> = key-value pair collection, key unique, যেকোনো type এর key allowed</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 47,
    title: "WeakSet vs WeakMap?",
    content: `
      <p><code>WeakSet</code> এবং <code>WeakMap</code> হলো JavaScript এর special collection objects, যেগুলো garbage collection friendly।</p>
      <p>Normal <code>Set</code>/<code>Map</code> strong references রাখে, কিন্তু <code>WeakSet</code>/<code>WeakMap</code> এ object reference lose হলে automatically memory free হয়ে যেতে পারে। Mainly memory management &amp; temporary storage এর জন্য use হয়।</p>
      
      <h3>1) <code>WeakSet</code></h3>
      <ul>
        <li><strong>What it stores:</strong> শুধু objects (primitive type add করা যায় না)</li>
        <li><strong>Uniqueness:</strong> values unique</li>
        <li><strong>Iteration:</strong> not iterable, <code>size</code> property নেই</li>
        <li><strong>GC behavior:</strong> কোনো object এর আর reference না থাকলে garbage collector automatically remove করতে পারে</li>
      </ul>
      
      <h3>2) <code>WeakMap</code></h3>
      <ul>
        <li><strong>What it stores:</strong> key-value pairs</li>
        <li><strong>Key rule:</strong> keys must be objects (primitive key allowed না)</li>
        <li><strong>Values:</strong> anything হতে পারে</li>
        <li><strong>Iteration:</strong> not iterable, <code>size</code> property নেই</li>
        <li><strong>GC behavior:</strong> কোনো key object এর আর reference না থাকলে garbage collector automatically remove করতে পারে</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>WeakSet</code> = unique objects collection, no iteration, auto GC</li>
        <li><code>WeakMap</code> = object-keyed dictionary, no iteration, auto GC</li>
      </ul>
      <p>Mainly temporary storage &amp; memory optimization এর জন্য use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 48,
    title: "What are symbols?",
    content: `
      <p>Symbols হলো JavaScript এর একটা primitive data type, যা unique &amp; immutable identifiers create করতে use হয়।</p>
      <ul>
        <li>ES6 এ introduce করা হয়</li>
        <li>Mainly object property keys এর জন্য use হয়, যাতে name collision না হয়</li>
        <li>Primitive type → like number, string, boolean</li>
      </ul>
      
      <h3>Benefits of Symbols</h3>
      <ol>
        <li>Unique property keys → accidental overwrite prevent করে</li>
        <li>Hidden properties → iteration methods ignore করে</li>
        <li>Well-known symbols define করতে use হয় (like <code>Symbol.iterator</code>)</li>
      </ol>
      
      <p><strong>Symbols</strong> = JS এর unique, immutable primitive, mostly object keys এর জন্য use হয়—name collision prevent &amp; hidden properties এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 49,
    title: "What is optional chaining?",
    content: `
      <p>Optional Chaining (<code>?.</code>) হলো JavaScript এর syntax, যা nested object/property access এর সময় error avoid করতে use হয়।</p>
      <ul>
        <li>ES2020 এ introduce করা হয়</li>
        <li>কোনো property <code>undefined</code> / <code>null</code> হলে error throw করে না—<code>undefined</code> return করে</li>
        <li>Mainly safe property access এর জন্য use হয়</li>
      </ul>
      
      <h3>Key Points</h3>
      <ul>
        <li>Prevent TypeError: Cannot read property</li>
        <li>Safe nested object/property access</li>
        <li>Function calls &amp; array indexes এর সাথে use করা যায়</li>
        <li>Cleaner &amp; readable code</li>
      </ul>
      
      <p><strong>Optional Chaining (</strong><code><strong>?.</strong></code><strong>)</strong> = JS syntax যা <code>undefined</code>/<code>null</code> check করতে help করে, nested property / function call এর সময় error avoid করে—safe &amp; readable code এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 50,
    title: "What is Nullish coalescing?",
    content: `
      <p>Nullish Coalescing (<code>??</code>) হলো JavaScript এর logical operator, যা <code>null</code> বা <code>undefined</code> value handle করতে use হয়।</p>
      <ul>
        <li>ES2020 এ introduce করা হয়</li>
        <li><code>??</code> operator check করে value <code>null</code> বা <code>undefined</code> কি না</li>
        <li><code>null/undefined</code> হলে default value assign হয়</li>
      </ul>
      <h3><code>||</code> থেকে পার্থক্য</h3>
      <ul>
        <li><code>||</code> falsy value (<code>0</code>, <code>""</code>, <code>false</code>) হলেও replace করে</li>
        <li>কিন্তু <code>??</code> শুধু <code>null</code>/<code>undefined</code> replace করে—falsy values preserve করে</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li>Nullish Coalescing = <code>??</code></li>
        <li><code>null</code> / <code>undefined</code> কে default value দিয়ে replace করে</li>
        <li>Falsy values like <code>0</code>, <code>""</code>, <code>false</code> keep করে</li>
        <li>Cleaner default assignment</li>
      </ol>
      
      <p><strong>Nullish Coalescing (</strong><code><strong>??</strong></code><strong>)</strong> = JS operator যা <code>null/undefined</code> কে default value দিয়ে replace করে, falsy values কে preserve করে—safe &amp; readable default assignment এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 51,
    title: "What is DOM?",
    content: `
      <p>DOM (Document Object Model) হলো একটা programming interface, যা web page কে object-এর মতো represent করে—যেটা JavaScript দিয়ে dynamically access &amp; manipulate করা যায়।</p>
      <p>Browser web page কে tree structure তে convert করে → element = node।</p>
      <p>HTML / XML document কে nodes &amp; objects এ represent করে।</p>
      <p>JS / CSS দিয়ে elements modify, add, delete করা possible।</p>
      
      <h3>Key Points</h3>
      <ol>
        <li>DOM = web page structure representation</li>
        <li>Browser create করে → JS &amp; CSS interact করতে পারে</li>
        <li>Node types: element, text, attribute</li>
        <li>Dynamic content update, style change, event handling allow করে</li>
      </ol>
      
      <p><strong>DOM</strong> = web page এর object-based representation, যা JavaScript দিয়ে dynamically manipulate করা যায়—page এর content, structure &amp; style control এর জন্য perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 52,
    title: "What is the difference between HTMLCollection and NodeList?",
    content: `
      <p><code>HTMLCollection</code> এবং <code>NodeList</code>—দুটোই DOM থেকে nodes/elements এর list return করে, কিন্তু behavior &amp; methods আলাদা।</p>
      
      <h3>1) <code>HTMLCollection</code></h3>
      <ul>
        <li><strong>Mostly live collection</strong> → DOM update হলে automatically reflect হয়</li>
        <li><strong>Only element nodes</strong> store করে</li>
        <li><strong>Common access/methods:</strong>
          <ul>
            <li><code>.length</code></li>
            <li>index access <code>[i]</code></li>
            <li><code>.namedItem()</code></li>
          </ul>
        </li>
      </ul>
      
      <h3>2) <code>NodeList</code></h3>
      <ul>
        <li><strong>Live বা static হতে পারে</strong>
          <ul>
            <li>live: e.g., <code>childNodes</code></li>
            <li>static: e.g., <code>querySelectorAll()</code></li>
          </ul>
        </li>
        <li><strong>All node types</strong> store করতে পারে (element, text, comment)</li>
        <li><strong>Common access/methods:</strong>
          <ul>
            <li><code>.length</code></li>
            <li>index <code>[i]</code></li>
            <li>modern JS এ <code>.forEach()</code> support করে</li>
          </ul>
        </li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>HTMLCollection</code> = live, element-only, old-school DOM methods</li>
        <li><code>NodeList</code> = live/static, any node type, modern iteration support</li>
      </ul>
      <p>Modern JS এ usually <code>querySelectorAll()</code> + <code>forEach()</code> বেশি convenient।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 53,
    title: "What is event bubbling?",
    content: `
      <p>Event Bubbling হলো JavaScript এর event propagation method, যা DOM element এর event <strong>child</strong> থেকে <strong>parent</strong> এর দিকে propagate করে — <strong>bottom → top</strong> order এ।</p>
      <ul>
        <li>Event target element থেকে start হয়</li>
        <li>তারপর parent → ancestor elements এ ছড়িয়ে পড়ে</li>
        <li>By default, most events (যেমন <code>click</code>, <code>input</code>, <code>keydown</code>) bubbling করে</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li><strong>Bottom → Top</strong> event flow</li>
        <li>Most events এর default behavior</li>
        <li><code>e.stopPropagation()</code> ব্যবহার করে propagation stop করা যায়</li>
        <li>Event delegation বা parent-level handling এর জন্য useful</li>
      </ol>
      
      <p><strong>Event Bubbling</strong> = JS এর event propagation technique, যা child element থেকে parent এর দিকে যায় — default behavior, যা <code>stopPropagation()</code> দিয়ে control করা যায়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 54,
    title: "What is event capturing?",
    content: `
      <p>Event Capturing হলো JavaScript এর event propagation method, যা DOM element এর event <strong>parent → child</strong> direction এ propagate করে — <strong>top → bottom</strong> order এ।</p>
      <ul>
        <li>Event ancestor element থেকে start হয়</li>
        <li>তারপর target element এ event reach করে</li>
        <li>Event bubbling এর opposite</li>
      </ul>
      
      <h3>Key Points</h3>
      <ol>
        <li><strong>Top → Bottom</strong> event flow</li>
        <li><code>addEventListener</code> এর third argument = <code>true</code> → capturing mode</li>
        <li>By default <code>false</code> → bubbling mode</li>
        <li>Ancestor-level pre-processing এর জন্য useful</li>
      </ol>
      
      <p><strong>Event Capturing</strong> = JS এর event propagation technique, যা parent → child direction এ event propagate করে; bubbling এর opposite; capturing mode <code>addEventListener(..., true)</code> দিয়ে enable করা হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 55,
    title: "What is event delegation?",
    content: `
      <p>Event Delegation হলো JavaScript এর technique, যা একটা parent element এর event handle করে তার child elements এর events manage করতে use হয়।</p>
      <p><strong>Idea:</strong> প্রতিটি child element এ আলাদা listener না দিয়ে, parent এ একটা listener দিয়ে handle করা।</p>
      <p><strong>Benefit:</strong> Performance better, dynamic elements support করে।</p>
      <h3>Key Points</h3>
      <ol>
        <li>Single parent listener → multiple child elements handle</li>
        <li>Dynamic elements support করে</li>
        <li>Event bubbling use করে implement হয়</li>
        <li>Performance friendly → fewer listeners</li>
      </ol>
      <p><strong>Event Delegation</strong> = JS এর technique যা parent listener দিয়ে child elements এর events handle করে, dynamic content support &amp; performance optimized, bubbling এর ওপর depend করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 56,
    title: "How does localStorage work?",
    content: `
      <p>localStorage হলো JavaScript এর Web Storage API এর part, যা client-side data persistently store করতে use হয়।</p>
      <h3>Key Features</h3>
      <p>a. Data key-value pair এ store হয় (both string)</p>
      <p>b. Browser close করলেও data থাকে (persistent)</p>
      <p>c. Max storage ~5-10MB per domain</p>
      <p>d. Synchronous operation (blocking)</p>
      <h3>Key Points</h3>
      <ol>
        <li>String only → object store করতে হলে JSON.stringify use করতে হয়</li>
        <li>Persistent storage → browser close / reopen এর পরও থাকে</li>
        <li>Synchronous API → heavy data store করতে performance issue হতে পারে</li>
      </ol>
      <p><strong>localStorage</strong> = JS client-side persistent key-value storage, string only, browser close হলেও থাকে, object store করতে JSON.stringify/parse use করা লাগে, lightweight data persist করতে perfect।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 57,
    title: "sessionStorage vs localStorage",
    content: `
      <p><code>sessionStorage</code> এবং <code>localStorage</code>—দুটোই Web Storage API এর part, কিন্তু lifetime &amp; scope আলাদা।</p>
      
      <h3>1) <code>localStorage</code></h3>
      <ul>
        <li><strong>Lifetime:</strong> Persistent → browser close/reopen ও থাকে</li>
        <li><strong>Scope:</strong> Same origin/domain এর জন্য accessible</li>
        <li><strong>Storage limit:</strong> ~5–10MB</li>
        <li><strong>Use case:</strong> user preferences, theme, auth token store করতে</li>
      </ul>
      
      <h3>2) <code>sessionStorage</code></h3>
      <ul>
        <li><strong>Lifetime:</strong> tab/session এর জন্য → browser/tab close করলে delete হয়</li>
        <li><strong>Scope:</strong> same tab এর session এ limited, new tab এ data নাই</li>
        <li><strong>Storage limit:</strong> ~5MB</li>
        <li><strong>Use case:</strong> temporary data, form state, tab-specific data</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>localStorage</code> = persistent, browser close/reopen ও থাকে, long-term data</li>
        <li><code>sessionStorage</code> = temporary, tab close এ delete, session-specific data</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 58,
    title: "cookie vs localStorage vs sessionStorage",
    content: `
      <p>Cookie, <code>localStorage</code>, এবং <code>sessionStorage</code>—তিনটাই client-side storage, কিন্তু purpose, lifetime, size, accessibility আলাদা।</p>
      
      <h3>1) Cookie</h3>
      <ul>
        <li><strong>Lifetime:</strong> <code>expires</code> / <code>max-age</code> দিয়ে define করা → persistent বা session</li>
        <li><strong>Size:</strong> ~4KB (small)</li>
        <li><strong>Accessibility:</strong> server &amp; client উভয় accessible (HTTP request এর সাথে send হয়)</li>
        <li><strong>Use case:</strong> authentication token, server-side data sync</li>
      </ul>
      
      <h3>2) <code>localStorage</code></h3>
      <ul>
        <li><strong>Lifetime:</strong> Persistent → browser close/reopen ও থাকে</li>
        <li><strong>Size:</strong> ~5–10MB</li>
        <li><strong>Accessibility:</strong> client-side only, server এ send হয় না</li>
        <li><strong>Use case:</strong> user preferences, theme, long-term client-side storage</li>
      </ul>
      
      <h3>3) <code>sessionStorage</code></h3>
      <ul>
        <li><strong>Lifetime:</strong> tab/session only → tab close করলে delete হয়</li>
        <li><strong>Size:</strong> ~5MB</li>
        <li><strong>Accessibility:</strong> client-side only, server এ send হয় না</li>
        <li><strong>Use case:</strong> temporary data, form state, session-specific storage</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><strong>Cookie</strong> = small, server &amp; client accessible, mostly auth/token</li>
        <li><code><strong>localStorage</strong></code> = large, persistent, client-only, long-term storage</li>
        <li><code><strong>sessionStorage</strong></code> = temporary, tab-specific, client-only, short-term storage</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 59,
    title: "What is the difference between innerHTML and textContent?",
    content: `
      <p><code>innerHTML</code> এবং <code>textContent</code>—দুটো DOM element property, কিন্তু behavior &amp; use case আলাদা।</p>
      
      <h3>1) <code>innerHTML</code></h3>
      <ul>
        <li><strong>Purpose:</strong> element এর HTML content read / write করতে</li>
        <li><strong>Behavior:</strong> HTML parse করে, tags interpret করে</li>
        <li><strong>Use case:</strong> dynamically HTML insert করতে</li>
      </ul>
      
      <h3>2) <code>textContent</code></h3>
      <ul>
        <li><strong>Purpose:</strong> element এর plain text read / write করতে</li>
        <li><strong>Behavior:</strong> tags কে ignore করে, শুধু text handle করে</li>
        <li><strong>Use case:</strong> only text content update / read করতে</li>
      </ul>
      
      <h3>Summary</h3>
      <ul>
        <li><code>innerHTML</code> = HTML + text, tags render, dynamic HTML insert</li>
        <li><code>textContent</code> = plain text, tags ignore, text-only এর জন্য safe &amp; faster</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 60,
    title: "What is reflow and repaint?",
    content: `
      <p>Reflow এবং Repaint হলো browser rendering process এর part, যা DOM update এর পর page কে redraw করে।</p>
      <ul>
        <li><strong>Reflow</strong> = layout calculation</li>
        <li><strong>Repaint</strong> = visual update / style change</li>
      </ul>
      
      <h3>1) Reflow (Layout)</h3>
      <ul>
        <li><strong>Definition:</strong> browser DOM element এর position, size, geometry calculate করে</li>
        <li><strong>Trigger:</strong>
          <ul>
            <li>element add/remove</li>
            <li>dimension / position change (<code>width</code>, <code>height</code>, <code>top</code>, <code>left</code>)</li>
            <li>font change, content change</li>
          </ul>
        </li>
        <li><strong>Performance:</strong> heavy → frequent reflows avoid করা ভালো</li>
      </ul>
      
      <h3>2) Repaint (Paint / Rendering)</h3>
      <ul>
        <li><strong>Definition:</strong> layout change না করে browser visual appearance update করে</li>
        <li><strong>Trigger:</strong>
          <ul>
            <li><code>background-color</code> change</li>
            <li><code>color</code> change</li>
            <li>visibility change (<code>visibility</code>, <code>outline</code>)</li>
          </ul>
        </li>
        <li><strong>Performance:</strong> reflow এর চেয়ে less heavy</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 61,
    title: "How does browser rendering work?",
    content: `
      <p>Browser rendering হলো web page কে HTML, CSS, JS থেকে visible page এ convert করার process। Browser internally multiple steps follow করে, যেটা performance &amp; user experience কে affect করে।</p>
      <h3>1) Parsing HTML → DOM (Document Object Model)</h3>
      <ul>
        <li>Browser HTML read করে DOM tree create করে</li>
        <li>প্রতিটি HTML element = node/object</li>
      </ul>
      <h3>2) Parsing CSS → CSSOM (CSS Object Model)</h3>
      <ul>
        <li>CSS read করে CSSOM tree create করে</li>
        <li>styles, rules, selectors, computed values store করে</li>
      </ul>
      <h3>3) Combine DOM + CSSOM → Render Tree</h3>
      <ul>
        <li>Render tree = visible elements + computed styles</li>
        <li>invisible elements (like <code>display: none</code>) render tree এ থাকে না</li>
      </ul>
      <h3>4) Layout / Reflow</h3>
      <ul>
        <li>Browser position, size, geometry calculate করে</li>
        <li>প্রতিটি node render tree তে exact location determine হয়</li>
      </ul>
      <h3>5) Painting / Repaint</h3>
      <ul>
        <li>Browser pixels draw করে screen এ</li>
        <li>color, text, borders, shadows, background draw হয়</li>
      </ul>
      <h3>6) Compositing</h3>
      <ul>
        <li>Page কে layers এ divide করে GPU use করে</li>
        <li>layers merge করে final screen render করে</li>
      </ul>
      <h3>7) JavaScript Execution</h3>
      <ul>
        <li>JS DOM manipulate করতে পারে → reflow/repaint trigger হতে পারে</li>
        <li>JS &amp; rendering blocking behavior → JS execution complete না হওয়া পর্যন্ত render block হতে পারে</li>
      </ul>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 62,
    title: "What is CORS?",
    content: `
      <p>CORS (Cross-Origin Resource Sharing) হলো একটা security feature, যা browser এ cross-origin HTTP request control করে।</p>
      <p><strong>Origin</strong> = protocol + domain + port এর combination।</p>
      <p>By default, <strong>same-origin policy</strong> → JS শুধু same origin থেকে resource access করতে পারে।</p>
      <p>CORS allow করে different origin থেকে request করতে।</p>
      <h3>Key Points</h3>
      <ol>
        <li>Security mechanism → unauthorized cross-origin access prevent করে</li>
        <li>Server controlled → JS client bypass করতে পারে না</li>
        <li>Browser enforce করে</li>
        <li>Use case: frontend থেকে API request (different domain)</li>
      </ol>
      <p><strong>CORS</strong> = JS/browser এর security feature, যা cross-origin requests control করে; allow/deny করতে server headers use করে; secure client-server communication এর জন্য important।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 63,
    title: "What is preflight request?",
    content: `
      <p>Preflight Request হলো CORS (Cross-Origin Resource Sharing) এর part, যা browser automatically server এ main request এর আগে send করে—complex cross-origin requests এর জন্য।</p>
      <ul>
        <li><strong>Method:</strong> <code>OPTIONS</code></li>
        <li><strong>Purpose:</strong> server check করে allowed methods &amp; headers</li>
        <li>Only browser send করে → client code manually send করতে পারে না</li>
      </ul>
      <h3>Key Points</h3>
      <ol>
        <li>Automatic browser request → JS cannot skip</li>
        <li><code>OPTIONS</code> method → safe, no data modification</li>
        <li>Methods, headers, origin check করে</li>
        <li>Secure cross-origin request ensure করে</li>
      </ol>
      <p><strong>Preflight Request</strong> = browser এর <code>OPTIONS</code> request, যা CORS complex request এর আগে server কে check করে origin/method/header allow করা হয় কিনা—security maintain এর জন্য mandatory।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 64,
    title: "What is service worker?",
    content: `
      <p>Service Worker হলো একটা JavaScript file, যা browser এ background এ run করে—web app এর offline capability, caching, push notification, background sync handle করতে।</p>
      <ul>
        <li>Browser এর separate thread এ run করে → page UI block করে না</li>
        <li>Mainly Progressive Web Apps (PWA) এ use হয়</li>
        <li>Scope: একটা folder/domain এর under available</li>
      </ul>
      <h3>Key Points</h3>
      <ol>
        <li>Runs in background, separate thread</li>
        <li>Does not have DOM access</li>
        <li>Handles offline caching, push, background sync</li>
        <li>Must be served over HTTPS (secure context)</li>
      </ol>
      <p><strong>Service Worker</strong> = JS file যা browser background এ run করে, network requests intercept করে, offline caching, push notifications, background sync handle করে—Progressive Web App এর core technology।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 65,
    title: "What is PWAs?",
    content: `
      <p>PWA (Progressive Web App) হলো এক ধরনের web application, যা web এর flexibility + native app এর features combine করে।</p>
      <ul>
        <li><strong>Progressive:</strong> সব browser এ work করে (old &amp; new)</li>
        <li><strong>Web App:</strong> URL দিয়ে access করা যায়, install optional</li>
        <li><strong>App-like experience:</strong> offline support, push notification, home screen install</li>
      </ul>
      <h3>Key Features</h3>
      <ol>
        <li>Offline support → Service Worker এর মাধ্যমে cache করে</li>
        <li>Installable → home screen এ add করা যায়</li>
        <li>Push notifications → user engagement increase</li>
        <li>Responsive design → mobile, tablet, desktop এ perfect</li>
        <li>Safe &amp; HTTPS → secure context required</li>
      </ol>
      <h3>Example</h3>
      <p>Gmail, Twitter Lite, Flipkart Lite → PWA examples</p>
      <p>URL দিয়ে access, offline mode এ কাজ করে, home screen এ icon থাকে</p>
      <p><strong>PWA</strong> = Progressive Web App, যা web এর convenience + native app এর features provide করে—offline, installable, responsive, fast &amp; secure; modern web development এর একটা important trend।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 66,
    title: "What is requestAnimationFrame?",
    content: `
      <p><code>requestAnimationFrame</code> হলো JavaScript এর browser API, যা efficiently animation run করতে use হয়। এটা next repaint এর আগে callback function execute করে।</p>
      <p><strong>Purpose:</strong> smooth, performant animations</p>
      <p>Browser automatically framerate optimize করে (usually 60fps)।</p>
      <p><strong>Advantage:</strong> <code>setTimeout</code> / <code>setInterval</code> এর চেয়ে less CPU &amp; battery usage।</p>
      <h3>Advantages</h3>
      <ol>
        <li>Browser repaint এর সাথে sync → smoother animation</li>
        <li>Inactive tabs এ pause হয় → CPU save করে</li>
        <li><code>setInterval</code> / <code>setTimeout</code> এর চেয়ে better performance</li>
      </ol>
      <h3>Key Points</h3>
      <ul>
        <li>Callback once per frame</li>
        <li>Works only in browsers</li>
        <li>Frame rate usually 60fps (device এর ওপর depend করে)</li>
        <li><code>cancelAnimationFrame(id)</code> দিয়ে cancel করা যায়</li>
      </ul>
      <p><strong>requestAnimationFrame</strong> = JS API যা browser repaint এর সাথে sync করে callback execute করে, smooth &amp; efficient animation provide করে—performance-friendly, modern web animation এর standard approach।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 67,
    title: "What is lazy loading?",
    content: `
      <p><code>Lazy Loading</code> হলো একটা <strong>performance optimization</strong> technique, যা resource (image, script, component) page load এর সাথে instantly load না করে, প্রয়োজন হলে load করে।</p>
      <p><strong>Purpose:</strong> initial page load <strong>fast</strong> করা, bandwidth &amp; memory save করা।</p>
      <p><strong>Common use:</strong> images, videos, JavaScript modules, React components।</p>
      <h3>Key Points</h3>
      <ol>
        <li>Improves performance → faster initial load</li>
        <li>Saves bandwidth &amp; memory</li>
        <li>Common in modern web apps &amp; PWAs</li>
        <li>Can be applied to images, scripts, components, modules</li>
      </ol>
      <p><strong>Lazy Loading</strong> = resource load delay করা until needed, initial load fast করে, bandwidth &amp; memory save করে—modern web &amp; React apps এ commonly use হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 68,
    title: "Explain browser caching",
    content: `
      <p>Browser Caching হলো একটা performance optimization technique, যা browser কে website resources (HTML, CSS, JS, images) locally store করতে দেয়—যাতে next visit এ same resources network থেকে fetch না করে local copy use করে।</p>
      <p><strong>Purpose:</strong> faster page load, bandwidth save, server load reduce।</p>
      <h3>Benefits</h3>
      <ol>
        <li>Faster load → resources already local</li>
        <li>Bandwidth save → less network request</li>
        <li>Reduced server load → same resources multiple requests এ fetch না করতে হয়</li>
      </ol>
      <h3>Key Points</h3>
      <ul>
        <li>Static resources like images, JS, CSS caching এর জন্য perfect</li>
        <li>Dynamic content usually no-cache বা short expiration</li>
        <li>Modern frameworks &amp; CDNs caching strategies optimize করে</li>
      </ul>
      <p><strong>Browser Caching</strong> = website resources locally store করা; next visit এ cache use করে fast load &amp; bandwidth save; cache headers server control করে; web performance &amp; UX improve করে।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  },
  {
    id: 69,
    title: "What is a memory leak in JavaScript?",
    content: `
      <p>Memory Leak হলো JavaScript এ unused memory release না হওয়া, যার ফলে application এর memory usage continuously বাড়ে এবং performance degrade করে।</p>
      <p>JS automatic garbage collection করে, কিন্তু certain cases এ memory release হয় না। Long-running apps / SPAs এ issue serious হতে পারে।</p>
      <h3>How to Detect</h3>
      <ul>
        <li>Browser DevTools → <strong>Memory</strong> tab / <strong>Heap snapshot</strong></li>
        <li>Time এর সাথে memory growth monitor করা</li>
      </ul>
      <h3>How to Prevent</h3>
      <ol>
        <li><code>var</code> এর বদলে <code>let/const</code> use করা</li>
        <li>intervals / timeouts clear করা</li>
        <li>DOM element delete করার পর তার reference remove করা</li>
        <li>Unnecessary closures avoid করা (যেগুলো big objects hold করে রাখে)</li>
        <li>Chrome DevTools দিয়ে profiling করা</li>
      </ol>
      <p><strong>Memory Leak</strong> = JS এ unused memory release না হওয়া → performance degrade করে; SPAs / long-running apps এ serious problem। Common cause: global variables, detached DOM, uncleaned timers, closures। Detect &amp; prevent করতে DevTools use করতে হয়।</p>
    `
,
  difficulty: 'Medium',
  tags: []
  }
];