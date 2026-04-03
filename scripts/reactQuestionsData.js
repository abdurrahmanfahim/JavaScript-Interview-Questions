const reactQuestionsData = [
  {
    id: 1,
    title: "React কী?",
    content: `
<p>React হলো একটি JavaScript library,
								যা user interface (UI) তৈরির জন্য ব্যবহার হয়—বিশেষ করে single-page applications
									(SPA) এর জন্য। এটি component-based architecture ব্যবহার করে এবং
								Virtual DOM এর মাধ্যমে fast rendering নিশ্চিত করে।</p>
						
						
							<h3>Key Points</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Developed by Facebook (Meta)</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Component-based → UI ছোট ছোট reusable parts এ ভাগ করা
									হয়</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Uses Virtual DOM → performance fast হয়</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">One-way data flow → debugging সহজ</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Used for building dynamic &amp; scalable web apps</li>
							</ul>
    `,
  },
  {
    id: 2,
    title: "React কখন ব্যবহার করা হয়?",
    content: `
<p>React ব্যবহার করা হয় fast, scalable এবং maintainable
								user interface তৈরি করার জন্য—বিশেষ করে large single-page applications
									(SPA) এর ক্ষেত্রে।</p>
						
						
							<h3>Key Reasons</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Component-based architecture
									
										<ul>
											<li style="list-style-type:circle">UI ছোট ছোট reusable components এ ভাগ করা যায়</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Virtual DOM
									
										<ul>
											<li style="list-style-type:circle">Real DOM এর বদলে Virtual DOM update করে → rendering fast হয়
											</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">One-way data flow
									
										<ul>
											<li style="list-style-type:circle">Data predictable থাকে → debugging সহজ হয়</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reusable code
									
										<ul>
											<li style="list-style-type:circle">একই component বারবার ব্যবহার করা যায়</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Strong ecosystem &amp; community
									
										<ul>
											<li style="list-style-type:circle">Huge library support, React Router, Redux, etc.</li>
										</ul>
									
								</li>
							</ul>
    `,
  },
  {
    id: 3,
    title: "SPA কী?",
    content: `
<p>SPA (Single Page Application) হলো এমন একটি web
								application যেখানে পুরো page একবার load হয়, এরপর user interaction অনুযায়ী শুধুমাত্র প্রয়োজনীয় অংশ update
								হয়—নতুন করে পুরো page reload হয় না।</p>
						
						
							<h3>Key Points</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Initial load একবারই হয়</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">এরপর সব navigation ও UI update JavaScript দিয়ে dynamically হয়</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Fast user experience → no full page reload</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">React, Angular, Vue দিয়ে SPA তৈরি করা হয়</li>
							</ul>
						
						
							<h3>Example</h3>
						
						
							<p>Facebook, Gmail, YouTube web app — এগুলো SPA</p>
    `,
  },
  {
    id: 4,
    title: "React vs Vanilla JS",
    content: `
<table>
								<thead>
									
										<tr>
											<th>Feature</th>
											<th>React</th>
											<th>Vanilla JavaScript</th>
										</tr>
									
								</thead>
								<tbody>
									
										<tr>
											<td>Architecture</td>
											<td>Component-based</td>
											<td>DOM manipulation based</td>
										</tr>
									
									
										<tr>
											<td>DOM Handling</td>
											<td>Uses Virtual DOM</td>
											<td>Uses Real DOM directly</td>
										</tr>
									
									
										<tr>
											<td>Performance</td>
											<td>Faster for large apps</td>
											<td>Slower when DOM updates are frequent</td>
										</tr>
									
									
										<tr>
											<td>Code Reusability</td>
											<td>High (Reusable components)</td>
											<td>Low (Manual reuse)</td>
										</tr>
									
									
										<tr>
											<td>State Management</td>
											<td>Built-in state &amp; hooks</td>
											<td>Manually manage state</td>
										</tr>
									
									
										<tr>
											<td>Scalability</td>
											<td>Best for large SPA</td>
											<td>Hard to scale</td>
										</tr>
									
									
										<tr>
											<td>Learning Curve</td>
											<td>Moderate</td>
											<td>Easy for small projects</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 5,
    title: "JSX কী?",
    content: `
<p>JSX browser বোঝে না, কারণ JSX হলো JavaScript-এর
								standard syntax না—এটা React-এর একটি syntax extension। Browser শুধু pure JavaScript বোঝে, JSX নয়।</p>
						
						
							<h3>Explanation</h3>
						
						
							<ul>
								<li style="list-style-type:disc">JSX দেখতে HTML-এর মতো হলেও এটা আসলে pure JavaScript code না</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">তাই Babel বা TypeScript JSX কে convert করে নিচের মতো pure JS এ (যেমন
									<code>React.createElement(...)</code>)</li>
							</ul>
    `,
  },
  {
    id: 6,
    title: "Virtual DOM কী?",
    content: `
<p>Virtual DOM হলো JavaScript object tree, যা Real
								DOM-এর lightweight copy হিসেবে কাজ করে। React এই Virtual DOM ব্যবহার করে efficiently UI update করে।</p>
						
						
							<h3>Key Points</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Real DOM manipulate করা slow → তাই React আগে Virtual DOM update করে
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">React নতুন Virtual DOM এবং পুরোনো Virtual DOM compare করে (diffing)
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">যে part change হয়েছে শুধু সেটুকুই Real DOM-এ update করে
									(reconciliation)</li>
							</ul>
    `,
  },
  {
    id: 7,
    title: "Real DOM vs Virtual DOM",
    content: `
<table>
								<thead>
									
										<tr>
											<th>Feature</th>
											<th>Real DOM</th>
											<th>Virtual DOM</th>
										</tr>
									
								</thead>
								<tbody>
									
										<tr>
											<td>Definition</td>
											<td>Browser-এর actual DOM tree</td>
											<td>In-memory lightweight JS object copy</td>
										</tr>
									
									
										<tr>
											<td>Update speed</td>
											<td>Slow – whole DOM reflow/repaint হতে পারে</td>
											<td>Fast – only changed parts update</td>
										</tr>
									
									
										<tr>
											<td>Manipulation</td>
											<td>Directly browser DOM update</td>
											<td>First update Virtual DOM then diff</td>
										</tr>
									
									
										<tr>
											<td>Performance</td>
											<td>Poor for large apps</td>
											<td>Optimized for large SPA</td>
										</tr>
									
									
										<tr>
											<td>Re-render cost</td>
											<td>High</td>
											<td>Low</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 8,
    title: "React Element কী?",
    content: `
<p>React Element হলো একটি plain
								JavaScript object যা UI-এর একটি node-কে
								represent করে। এটি immutable এবং React এই
								element দিয়েই Virtual DOM তৈরি করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Smallest Building Block: React
										element হচ্ছে UIএর সবথেকে ছোট building block।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Immutable: এটি immutable, অর্থাৎ
									একবার তৈরি হওয়ার পর একে আর change করা যায় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">JSX Compilation: JSX আসলে
									React elementএই compile হয়।</li>
							</ul>
    `,
  },
  {
    id: 9,
    title: "React Component কী?",
    content: `
<p>React Component হলো একটি
								reusable JavaScript function বা class, যা UI-এর একটি
								অংশ render করে। Component ব্যবহার করার ফলে UI modular
								এবং maintainable হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Building Block of UI: React component
									হলো UIএর প্রধান building block।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">দুই ধরনের Component:
									
										<ul>
											<li style="list-style-type:circle">Functional Component: এটি
												function-based, সিম্পল এবং এতে Hooks ব্যবহার করা যায়।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">Class Component: এটি
												class-based, যা state এবং lifecycle methods
												ব্যবহার করে।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Props: Component,
									props দিয়ে parent থেকে data receive করতে পারে।</li>
							</ul>
    `,
  },
  {
    id: 10,
    title: "Props কী?",
    content: `
<p>Props (Properties) হলো
								React-এর একটি mechanism যা parent component থেকে
								child component-এ data pass করার জন্য ব্যবহার করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Read-only / Immutable: Props
										read-only বা immutable; অর্থাৎ, একটি child component তার
									পাওয়া data পরিবর্তন করতে পারবে না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Rendering: Props দিয়ে
									dynamic rendering possible হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Function Arguments: Props হলো সাধারণ
									JavaScript function argumentsএর মতো।</li>
							</ul>
    `,
  },
  {
    id: 11,
    title: "Props Immutable কেন?",
    content: `
<p>Props immutable কারণ child
									component-কে parent থেকে data receive করার সময় শুধু
								read-only access দেওয়া হয়, যাতে parent component-এর state
									predictable থাকে এবং UI consistency maintain হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Props read-only: Props read-only
									হওয়ায় child, সরাসরি parent data modify করতে পারে না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">One-way data flow: Immutable propsএর
									মাধ্যমে one-way data flow বজায় থাকে (Parent → Child)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Change: যদি state change করতে
									হয়, তবে callback function বা lifting state up ব্যবহার করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 12,
    title: "Parent to Child Data Pass কীভাবে হয়?",
    content: `
<p>Parent থেকে Child
									component-এ data pass করার জন্য Props ব্যবহার করা হয়।
								Parent component, props হিসেবে key-value pair,
								child component-এ পাঠায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Read-only attributes: Props হলো
									read-only attributes।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Accessing Props: Child component,
									JSXএ props access করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Data: Dynamic data,
									parent থেকে directly pass করা যায়।</li>
							</ul>
    `,
  },
  {
    id: 13,
    title: "Child থেকে Parent-এ Data পাঠানো যায় কীভাবে?",
    content: `
<p>Child থেকে Parent
									component-এ data পাঠানোর জন্য Parent একটি callback
									function, props হিসেবে Child-এ pass করে এবং
								Child সেই function call করে data পাঠায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Function as Props: Propsএর মাধ্যমে
									function pass করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Function Execution: Child, function
										call করে data, Parentএ পাঠায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Unidirectional Flow: এটি unidirectional data
										flow বজায় রাখে।</li>
							</ul>
    `,
  },
  {
    id: 14,
    title: "Default Props কী?",
    content: `
<p>Default props হলো এমন
								props যা React component-এ predefined value হিসেবে
								set করা থাকে, যদি parent component সেই prop pass না
								করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Fallback Mechanism: Parent যদি
									prop provide না করে, তবে default props use হবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Versatility: Functional এবং
									Class components দুটিতেই এটি ব্যবহার করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reliability: এটি component
										reliability এবং fallback behavior improve করে।</li>
							</ul>
    `,
  },
  {
    id: 15,
    title: "Props Drilling কী?",
    content: `
<p>Props drilling হলো একটি
								scenario যেখানে parent component থেকে data pass করতে
								হয় deeply nested child component-এ props chain-এর মাধ্যমে, এবং
								intermediate components শুধুমাত্র data forward করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Unidirectional: Props unidirectional
									হওয়ার কারণে এটি সবসময় top-to-bottom pass হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Deeply Nested Structure: চেইন অনেক বড় হলে অনেকগুলো
									intermediate componentএ অপ্রয়োজনীয়ভাবে props pass করতে হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Complexity: এর ফলে কোডের complexity
									বাড়ে, যা Redux বা Context API দিয়ে solve করা যায়।
								</li>
							</ul>
    `,
  },
  {
    id: 16,
    title: "Component Reusability কী?",
    content: `
<p>Component reusability হলো
								React-এর একটি feature যেখানে একই component বিভিন্ন
								জায়গায় reuse করা যায়; ফলে একই UI logic multiple places-এ
								apply করা সম্ভব হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Modularity: Small, modular, isolated
										components সহজে reuse করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Customization: Props ব্যবহার করে
									component behavior customize করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Efficiency: এটি code duplication কমায়
									(Reduces code duplication) এবং maintainability improve করে।</li>
							</ul>
    `,
  },
  {
    id: 17,
    title: "Controlled vs Uncontrolled Component",
    content: `
<table>
								<tbody>
									
										<tr>
											<td>Feature</td>
											<td>Controlled Component</td>
											<td>Uncontrolled Component</td>
										</tr>
									
									
										<tr>
											<td>Definition</td>
											<td>Form input value, React state দ্বারা নিয়ন্ত্রিত হয়।</td>
											<td>Form input value, DOM নিজেই হ্যান্ডেল করে।</td>
										</tr>
									
									
										<tr>
											<td>Data Flow</td>
											<td>React → input (state drives value)</td>
											<td>DOM ভ্যালু ম্যানেজ করে, React শুধু
												ref দিয়ে রিড করে।</td>
										</tr>
									
									
										<tr>
											<td>Accessing Value</td>
											<td><code>this.state</code> / <code>useState</code> ব্যবহার করে।</td>
											<td><code>ref.current.value</code> ব্যবহার করে।</td>
										</tr>
									
									
										<tr>
											<td>Updates</td>
											<td>OnChange handler থাকা বাধ্যতামূলক।</td>
											<td>কোনো handler ছাড়াই কাজ করা সম্ভব।</td>
										</tr>
									
									
										<tr>
											<td>Validation</td>
											<td>React-এ ভ্যালিডেশন করা অনেক সহজ।</td>
											<td>কিছুটা কঠিন, কারণ সরাসরি DOM access করতে হয়।</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 18,
    title: "Stateless vs Stateful Component",
    content: `
<table>
								<tbody>
									
										<tr>
											<td>Feature</td>
											<td>Stateless Component</td>
											<td>Stateful Component</td>
										</tr>
									
									
										<tr>
											<td>Definition</td>
											<td>যে component তার নিজের কোনো state
													maintain করে না।</td>
											<td>যে component তার নিজের state maintain এবং
												manage করে।</td>
										</tr>
									
									
										<tr>
											<td>State</td>
											<td>এতে কোনো state থাকে না।</td>
											<td>এতে state (class-based) অথবা useState
													(functional) থাকে।</td>
										</tr>
									
									
										<tr>
											<td>Lifecycle</td>
											<td>এটি সিম্পল এবং মূলত শুধু render করার কাজ করে।</td>
											<td>এটি lifecycle methods বা hooks ব্যবহার
												করতে পারে।</td>
										</tr>
									
									
										<tr>
											<td>Re-render</td>
											<td>শুধুমাত্র props change হলে এটি re-render
												হয়।</td>
											<td>State অথবা props change হলে এটি
												re-render হয়।</td>
										</tr>
									
									
										<tr>
											<td>Complexity</td>
											<td>এটি অনেক সহজ এবং সাধারণ।</td>
											<td>এটি তুলনামূলক বেশি complex।</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 19,
    title: "State কী?",
    content: `
<p>State হলো একটি JavaScript
									object যা React component-এর dynamic data বা
								UI-এর current condition represent করে। Component state
									change হলে React automatically UI update করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Mutable &amp; Context-specific: State
										mutable (পরিবর্তনশীল) এবং এটি একটি নির্দিষ্ট componentএর নিজস্ব ডেটা।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Functional Component: এতে useState
										hook দিয়ে state manage করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Class Component: এতে <code>this.state</code> এবং
									<code>this.setState()</code> দিয়ে state manage করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Re-render: State change হলে সংশ্লিষ্ট
									componentটি re-render হয়।</li>
							</ul>
    `,
  },
  {
    id: 20,
    title: "Props vs State",
    content: `
<table>
								<tbody>
									
										<tr>
											<td>Feature</td>
											<td>Props</td>
											<td>State</td>
										</tr>
									
									
										<tr>
											<td>Definition</td>
											<td>Parent থেকে child-এ pass
												করা read-only data।</td>
											<td>Component-এর internal, mutable
													data।</td>
										</tr>
									
									
										<tr>
											<td>Mutability</td>
											<td>Immutable (পরিবর্তনযোগ্য নয়)।</td>
											<td>Mutable (পরিবর্তনযোগ্য)।</td>
										</tr>
									
									
										<tr>
											<td>Who Controls</td>
											<td>Parent component এটি নিয়ন্ত্রণ করে।</td>
											<td>কম্পোনেন্ট নিজেই (Own component) এটি নিয়ন্ত্রণ করে।</td>
										</tr>
									
									
										<tr>
											<td>Re-render</td>
											<td>Props-এর পরিবর্তন re-render trigger করে।
											</td>
											<td>State-এর পরিবর্তন re-render trigger করে।
											</td>
										</tr>
									
									
										<tr>
											<td>Usage</td>
											<td>Parent থেকে dynamic data পাওয়ার জন্য
												ব্যবহৃত হয়।</td>
											<td>কম্পোনেন্টের ভেতরে পরিবর্তনশীল data-র জন্য ব্যবহৃত হয়।
											</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 21,
    title: "setState Async কেন?",
    content: `
<p>setState asynchronous কারণ
								React performance optimize করতে state updates-কে
								batch করে এবং একসাথে process করে, যাতে multiple state
									changes একসাথে re-render trigger করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Batching: Multiple setState calls
									একসাথে batch করা হয়; এতে অপ্রয়োজনীয় re-render কমে এবং
									performance improve হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Immediate Access: setState করার পর
									সরাসরি <code>this.state</code> read করলে immediate update দেখা যায়
									না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Accessing Updated State: Updated state
										access করতে হলে callback function (Class Component-এ) বা useEffect
										hook (Functional Component-এ) ব্যবহার করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 22,
    title: "State সরাসরি Update করা যায় না কেন?",
    content: `
<p>React-এ state directly
									update করা যায় না কারণ direct mutation করলে UI re-render automatic
									trigger হবে না এবং React-এর internal state management
									predictable থাকবে না।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Reconciliation &amp; Virtual DOM: React
										reconciliation এবং Virtual DOM, মূলত setStateএর মাধ্যমে
									state updateএর ওপর নির্ভর করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">UI Inconsistency: সরাসরি <code>this.state = ...</code>
									করলে component re-render হয় না, যার ফলে UI inconsistent হয়ে যেতে
									পারে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Correct Methods: সবসময় class
										componentএ <code>this.setState()</code> এবং functional componentএ
									useState setter ব্যবহার করতে হয়।</li>
							</ul>
    `,
  },
  {
    id: 23,
    title: "React Lifecycle Phases",
    content: `
<p>React Lifecycle Phases হলো একটি
								component-এর জীবনের বিভিন্ন stage যা React manage
								করে, বিশেষ করে Class Components-এর ক্ষেত্রে। এর প্রধান ৩টি ধাপ রয়েছে:</p>
						
						
							<h3>3 Main Phases:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Mounting: যখন একটি component তৈরি হয়ে
									DOMএ insert হয়।
										<ul>
											<li style="list-style-type:circle">Methods: <code>constructor()</code>,
												<code>static getDerivedStateFromProps()</code>, <code>render()</code>,
												<code>componentDidMount()</code></li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Updating: যখন component state বা
									props পরিবর্তনের পর re-render হয়।
										<ul>
											<li style="list-style-type:circle">Methods:
												<code>static getDerivedStateFromProps()</code>, <code>shouldComponentUpdate()</code>,
												<code>render()</code>, <code>getSnapshotBeforeUpdate()</code>, <code>componentDidUpdate()</code>
											</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Unmounting: যখন component DOM থেকে
									remove বা ডিলিট হয়ে যায়।
										<ul>
											<li style="list-style-type:circle">Method: <code>componentWillUnmount()</code>
											</li>
										</ul>
									
								</li>
							</ul>
    `,
  },
  {
    id: 24,
    title: "useEffect কী?",
    content: `
<p>useEffect হলো একটি React
									Hook যা functional component-এ side effects manage করার
								জন্য ব্যবহার হয়, যেমন API call, DOM manipulation,
								subscriptions ইত্যাদি।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Lifecycle Methods Alternative: এটি functional
										componentএ lifecycle methodsএর একটি শক্তিশালী বিকল্প।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Runs After Rendering: প্রতিটি render
									হওয়ার পর এটি নিজে থেকেই রান (run) করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dependency Array: Dependency array
									ব্যবহার করে এটি কখন রান করবে তা নিয়ন্ত্রণ করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Cleanup Function: এটি unmount বা
									dependency changeএর সময় cleanup function support করে।</li>
							</ul>
    `,
  },
  {
    id: 25,
    title: "useEffect Dependency Array",
    content: `
<p>useEffect dependency array হলো একটি
								array যা নির্ধারণ করে কখন effect function-টি execute
								হবে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Empty Array
									<code>[]</code>: Effect শুধু
									mountএর সময় একবার চালায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">No Array: Effect প্রতিটি
									renderএ run হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">With Dependencies
									<code>[dep1, dep2]</code>: Effect শুধু তখন
									run হয় যখন নির্দিষ্ট dependency change হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance Optimization: এটি performance
										optimizationএ সাহায্য করে এবং unnecessary effect execution কমায়।</li>
							</ul>
    `,
  },
  {
    id: 26,
    title: "Hook কী?",
    content: `
<p>Hook হলো React-এর
								special function যা functional component-এ state,
								lifecycle ও অন্যান্য React feature ব্যবহার করতে দেয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Evolution: Hooks আসার আগে এগুলো শুধু
									Class componentএই সম্ভব ছিল।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Naming Convention: Hooks সাধারণত
									<code>use</code> দিয়ে শুরু হয়—যেমন: <code>useState</code>, <code>useEffect</code>,
									<code>useContext</code> ইত্যাদি।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Functionality: Hooks, componentকে
									stateful ও dynamic করে তোলে।</li>
							</ul>
    `,
  },
  {
    id: 27,
    title: "React Hooks কেন Introduce করা হয়েছে?",
    content: `
<p>React Hooks introduce করা হয়েছে
								functional component-এ state ও lifecycle features
								ব্যবহার করার জন্য এবং class component-এর complexity কমানোর জন্য।</p>
						
						
							<h3>Key Reasons:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Class Complexity: Class componentএ
									<code>this</code> বাইন্ডিং (binding) এবং lifecycle methods হ্যান্ডেল
									করা বেশ complex ছিল।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Logic Reuse: আগে কম্পোনেন্টের মধ্যে লজিক
									reuse করা কঠিন ছিল (যেমন: HOC বা Render Props
									ব্যবহার করা বেশ messy হয়ে যেত)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Clean Code: Hooks, functional
										componentকে অনেক বেশি powerful ও cleaner করে তোলে।</li>
							</ul>
    `,
  },
  {
    id: 28,
    title: "useState কী?",
    content: `
<p>useState হলো একটি React
									Hook যা functional component-এ state তৈরি ও
								update করার জন্য ব্যবহার করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Returns an Array: এটি একটি array
									রিটার্ন করে → <code>[state, setStateFunction]</code>।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Re-render: setStateFunction দিয়ে
									state update করলে component re-render হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Async &amp; Batched: State update
										asynchronous এবং batched হতে পারে।</li>
							</ul>
    `,
  },
  {
    id: 29,
    title: "useEffect কীভাবে কাজ করে?",
    content: `
<p>useEffect, component
									render হওয়ার পরে execute হয় এবং এটি dependency array
								অনুযায়ী সিদ্ধান্ত নেয় যে কখন এটি পুনরায় রান (run) করবে। এটি মূলত side
									effects যেমন: API call, event listener,
								timer ইত্যাদি manage করে।</p>
						
						
							<h3>How it works (Step by Step):</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Component Render: প্রথমে componentটি
									স্ক্রিনে রেন্ডার হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Callback Execution: রেন্ডার হওয়ার ঠিক পরেই
									React, useEffect callback ফাংশনটি রান করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dependency Change: যদি dependency
										arrayতে থাকা কোনো ভ্যালু পরিবর্তন হয়, তবে effectটি আবার রান হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Cleanup Phase: যদি cleanup function
									থাকে, তবে নতুন করে effect রান করার আগে অথবা component unmount হওয়ার
									সময় React প্রথমে cleanup রান করে।</li>
							</ul>
    `,
  },
  {
    id: 30,
    title: "useRef কী?",
    content: `
<p>useRef হলো একটি React
									Hook যা component-এর মধ্যে mutable reference তৈরি করতে
								ব্যবহার হয়। এর সবচেয়ে বড় বৈশিষ্ট্য হলো, এর ভ্যালু update হলেও component
									re-render হয় না।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Returns an Object: useRef একটি
									object রিটার্ন করে → <code>{ current: value }</code>।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">No Re-render: এর current value change
									করলে component re-render হয় না, যা পারফরম্যান্সের জন্য সহায়ক।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">DOM Access: এটি মূলত সরাসরি DOM element
										access করতে (যেমন: ইনপুট ফিল্ডে ফোকাস করা) সবচেয়ে বেশি ব্যবহৃত হয়।</li>
							</ul>
    `,
  },
  {
    id: 31,
    title: "useMemo কী?",
    content: `
<p>useMemo হলো একটি React
									Hook যা expensive calculation-এর result memoize করে
								(স্মৃতিতে জমা) রাখে, যাতে dependency change না হলে পুনরায় calculation
								করার প্রয়োজন না হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Performance Optimization: এটি মূলত অ্যাপ্লিকেশনের
									performance improve করার জন্য ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Conditional Re-computation: এটি শুধুমাত্র তখনই
									recompute হয় যখন এর dependency arrayতে থাকা কোনো ভ্যালু
									change হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Efficiency: এটি unnecessary re-render
									এবং heavy calculationএর চাপ কমিয়ে অ্যাপকে দ্রুততর করে।</li>
							</ul>
    `,
  },
  {
    id: 32,
    title: "useCallback কী?",
    content: `
<p>useCallback হলো একটি React
									Hook যা function reference-কে memoize করে (স্মৃতিতে জমা)
								রাখে, যাতে unnecessary re-render বা পুনরায় ফাংশন তৈরি হওয়া (re-creation of
									functions) এড়ানো যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Preventing Re-renders: Child
										componentএ function props হিসেবে পাঠালে অপ্রয়োজনীয়
									re-render হওয়ার সমস্যা কমায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reference Stability: Dependency
										change না হলে এটি একই function reference পুনরায় ব্যবহার
									(reuse) করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance Optimization: এটি মূলত অ্যাপ্লিকেশনের গতি
									বাড়াতে এবং মেমোরি সাশ্রয় করতে performance optimizationএর জন্য ব্যবহার হয়।</li>
							</ul>
    `,
  },
  {
    id: 33,
    title: "Custom Hook কী?",
    content: `
<p>Custom Hook হলো নিজের তৈরি
								React Hook, যা common logic একাধিক component-এ
								reuse বা পুনরায় ব্যবহার করার জন্য তৈরি করা হয়। এটি মূলত জটিল লজিকগুলোকে কম্পোনেন্ট থেকে
								আলাদা করে একটি নির্দিষ্ট ফাংশনে নিয়ে আসে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Naming Convention: এটি অবশ্যই <code>use</code>
									কীওয়ার্ড দিয়ে শুরু হতে হবে—যেমন: <code>useFetch</code>, <code>useAuth</code>,
									<code>useLocalStorage</code> ইত্যাদি।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Internal Hooks: একটি Custom Hookএর
									ভেতরে অন্য সব Standard Hooks (যেমন: <code>useState</code>, <code>useEffect</code>)
									ব্যবহার করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Clean Code: এটি Business logicকে
									UI থেকে আলাদা করে কোডকে অনেক বেশি clean এবং
									organized রাখে।</li>
							</ul>
    `,
  },
  {
    id: 34,
    title: "Hook Rules কী?",
    content: `
<p>React Hooks ব্যবহার করার সময় দুটি
								মূল rule বা নিয়ম অবশ্যই অনুসরণ করতে হয়। এই নিয়মগুলো অমান্য করলে আপনার অ্যাপ্লিকেশনে
								অপ্রত্যাশিত এরর (error) বা বাগ (bug) দেখা দিতে পারে।</p>
						
						
							<h3>১. Only call Hooks at the top
									level</h3>
						
						
							<ul>
								<li style="list-style-type:disc">No Loops/Conditions: কোনো লুপ (Loop),
									কন্ডিশন (Condition) বা নেস্টেড ফাংশনের (Nested function) ভেতরে
									Hook ব্যবহার করা যাবে না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Top Level Call: সবসময় component অথবা
									custom hookএর একদম শুরুর দিকে (top level) এটি কল করতে হবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reason: রিয়্যাক্ট হুকগুলোর অর্ডার (order) বা ক্রম বজায়
									রাখার ওপর নির্ভর করে। যদি কোনো কন্ডিশনের কারণে হুক রান না করে, তবে রিয়্যাক্টের ইন্টারনাল স্টেট
									ম্যানেজমেন্ট এলোমেলো হয়ে যাবে।</li>
							</ul>
						
						
							<h3>২. Only call Hooks from React
									functions</h3>
						
						
							<ul>
								<li style="list-style-type:disc">React Functions Only: হুক শুধুমাত্র React
										functional component অথবা Custom Hookএর ভেতরেই কল করা যাবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">No Normal JS/Classes: সাধারণ JavaScript
										function বা কোনো Classএর ভেতরে হুক ব্যবহার করা যাবে না।</li>
							</ul>
    `,
  },
  {
    id: 35,
    title: "useReducer কী?",
    content: `
<p>useReducer হলো একটি React
									Hook যা complex state logic হ্যান্ডেল করার জন্য ব্যবহার করা হয়। বিশেষ করে
								যখন একটি স্টেটের ওপর ভিত্তি করে অন্য স্টেট পরিবর্তিত হয় (multiple state transitions) বা
								অনেকগুলো dependent updates থাকে, তখন এটি চমৎকার কাজ করে। এটি মূলত
								Redux-এর reducer pattern অনুসরণ করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Centralized Logic: আপনার সব state update
										logic একটি নির্দিষ্ট ফাংশনে (Reducer) জমা থাকে, যা কোডকে গুছিয়ে রাখে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">useState Alternative: যখন state logic
									অনেক বেশি জটিল হয়ে যায়, তখন এটি useStateএর একটি শক্তিশালী বিকল্প হিসেবে কাজ করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Returns [state, dispatch]: এটি একটি
									array রিটার্ন করে যার প্রথমটি বর্তমান state এবং দ্বিতীয়টি হলো
									dispatch ফাংশন (যা দিয়ে অ্যাকশন পাঠানো হয়)।</li>
							</ul>
    `,
  },
  {
    id: 36,
    title: "Re-render কখন হয়?",
    content: `
<p>React component তখন
								re-render হয় যখন তার state বা props পরিবর্তন হয়।
								রেন্ডারিং হলো রিয়্যাক্টের একটি প্রক্রিয়া যেখানে সে ডিসিশন নেয় যে স্ক্রিনে কী দেখাতে হবে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">State Change: যখন <code>useState</code> (Functional)
									বা <code>this.setState()</code> (Class) কল করে কম্পোনেন্টের নিজস্ব ডেটা আপডেট করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Props Change: যখন Parent component
									থেকে Child componentএ নতুন বা পরিবর্তিত props pass করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Parent Re-render: সাধারণত একটি Parent
										component re-render হলে তার ভেতরে থাকা childগুলোও automatically
										re-render হতে পারে (যদি না সেগুলোকে অপ্টিমাইজ করা হয়)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Diffing Algorithm: React সরাসরি পুরো
									DOM পরিবর্তন না করে Diffing algorithm ব্যবহার করে শুধু প্রয়োজনীয়
									অংশটুকু Virtual DOMএ চেক করে আপডেট করে।</li>
							</ul>
    `,
  },
  {
    id: 37,
    title: "React.memo কী?",
    content: `
<p>React.memo হলো একটি
								Higher-Order Component (HOC) যা একটি functional component-কে
								wrap করে রাখে, যাতে সেই component শুধুমাত্র তার props
									change হলেই কেবল re-render হয়। এটি মূলত অ্যাপ্লিকেশনের performance
									optimization-এর জন্য ব্যবহার হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Reduce Re-render: এটি অপ্রয়োজনীয়ভাবে
									functional component re-render হওয়া কমায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Memoization: যদি props unchanged
									থাকে, তবে React আগের render resultটিই পুনরায় ব্যবহার
									(reuse) করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">PureComponent Alternative: এটি class
										componentএর PureComponentএর মতোই কাজ করে।</li>
							</ul>
    `,
  },
  {
    id: 38,
    title: "Key Prop কেন দরকার?",
    content: `
<p>React-এ list
									rendering-এর সময় প্রতিটি element-কে uniquely identify করতে
								Key prop ব্যবহৃত হয়। এটি মূলত Virtual DOM diffing process-কে অনেক বেশি
								efficient বা দক্ষ করে তোলে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Unique Identification: লিস্টের প্রতিটি আইটেম একটি
									নিজস্ব পরিচয় পায়, যা সঠিক re-render নিশ্চিত করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: Key ছাড়া
									React পুরো লিস্টটিকেই অপ্রয়োজনীয়ভাবে পুনরায় রেন্ডার করতে পারে, যা পারফরম্যান্স কমিয়ে
									দেয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Stability: Key সবসময়
									unique এবং stable হওয়া উচিত। Index ব্যবহার করাকে
									একদম শেষ উপায় বা last resort হিসেবে ধরা হয়।</li>
							</ul>
    `,
  },
  {
    id: 39,
    title: "Index as Key কেন Bad Practice?",
    content: `
<p>Index as key bad practice কারণ
								list change হলে React ভুল element update করতে পারে,
								যার ফলে UI bug ও performance issue তৈরি হয়।</p>
						
						
							<h3>Explanation:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Identification: React key দিয়ে
									list item identify করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Index Usage Issues: Index ব্যবহার
									করলে item order change, delete বা insert হলে:<div
										style="display:contents" dir="auto">
										<ul>
											<li style="list-style-type:circle">React ধরে নেয় element একই
												আছে।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">কিন্তু আসলে data change হয়ে যায় →
												wrong DOM reuse।</li>
										</ul>
									
								</li>
							</ul>
    `,
  },
  {
    id: 40,
    title: "Conditional Rendering কী?",
    content: `
<p>Conditional rendering হলো
								React-এ condition অনুযায়ী component বা JSX
									render করা। অর্থাৎ, নির্দিষ্ট condition true হলে এক ধরনের
								UI, false হলে অন্য ধরনের UI দেখানো।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">JavaScript condition (যেমন: <code>if</code>,
									<code>&amp;&amp;</code>, বা <code>ternary operator</code>) ব্যবহার করে JSX render করা
									হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">UI dynamically change করা যায় user
										state অনুযায়ী।</li>
							</ul>
    `,
  },
  {
    id: 41,
    title: "Lazy Loading in React কী?",
    content: `
<p>Lazy loading হলো একটি
								technique যেখানে component বা module তখনই
								load হয় যখন সেটির প্রয়োজন হয় — এর ফলে initial bundle size কমে এবং
								app fast load হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">React.lazy(): এটি দিয়ে component dynamically
										import করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Suspense: এটি fallback UI দেখানোর
									জন্য ব্যবহৃত হয় (যতক্ষণ কম্পোনেন্ট লোড হচ্ছে)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: এটি initial load time
									কমিয়ে অ্যাপের performance improve করে।</li>
							</ul>
    `,
  },
  {
    id: 42,
    title: "Code Splitting কী?",
    content: `
<p>Code splitting হলো এমন একটি
								technique যেখানে large JavaScript bundle-কে ছোট ছোট
								chunks-এ ভাগ করা হয়, যাতে প্রয়োজন অনুযায়ী code load হয় এবং
								initial load time কমে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Load Speed: এটি page load speed
									বৃদ্ধি করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Efficiency: অব্যবহৃত কোড (unused
										code) শুরুতে load হয় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Implementation: এটি React.lazy এবং
									dynamic import ব্যবহার করে করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 43,
    title: "React.Fragment কী?",
    content: `
<p>React.Fragment ব্যবহার করা হয়
								multiple JSX elements wrap করার জন্য, কিন্তু DOM-এ extra
									node না যোগ করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">No Extra Node: এটি DOMএ কোনো অতিরিক্ত
									<code>&lt;div&gt;</code> বা অন্য কোনো এলিমেন্ট তৈরি করে না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Clean HTML: এটি ব্রাউজারে Clean HTML
										structure বজায় রাখে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Shorthand Syntax: এর সংক্ষিপ্ত রূপ হলো
									<code>&lt;&gt; ... &lt;/&gt;</code>।</li>
							</ul>
    `,
  },
  {
    id: 44,
    title: "StrictMode কী?",
    content: `
<p>React.StrictMode হলো একটি
								development-only tool যা React app-এ potential
									problems ও bad practices detect করতে সাহায্য করে। এটি production
									build-এ কোনো effect ফেলে না।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Warnings: এটি deprecated lifecycle
										methods সম্পর্কে warn করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Detection: কোনো unsafe side effects
									থাকলে তা detect করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Double Render: Development মোডে এটি
									component render দুইবার call করে (যাতে সাইড ইফেক্টগুলো ধরা পড়ে)।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Future-proof: এটি future-proof code
									লিখতে এবং রিয়্যাক্টের নতুন ফিচারের সাথে সামঞ্জস্য বজায় রাখতে সাহায্য করে।</li>
							</ul>
    `,
  },
  {
    id: 45,
    title: "Hydration কী?",
    content: `
<p>Hydration হলো Server-Side
									Rendering (SSR) এর পরে browser-এ ইতোমধ্যে rendered HTML-এর
								সাথে React event listeners ও state attach করার
								process।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Fast First Paint: Server সরাসরি
									HTML পাঠায়, ফলে ইউজার দ্রুত কন্টেন্ট দেখতে পায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Interactivity: Browser সেই
									HTMLকে Reactএর মাধ্যমে interactive করে তোলে—একে
									hydration বলে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Static vs Dynamic: Hydration ছাড়া
									পেজটি শুধু static থাকবে, অর্থাৎ বাটনে ক্লিক করলে কোনো কাজ হবে না।</li>
							</ul>
    `,
  },
  {
    id: 46,
    title: "Controlled Form কী?",
    content: `
<p>Controlled form হলো এমন একটি
								React form যেখানে input value সরাসরি React state দিয়ে
								manage করা হয়। অর্থাৎ, form element-এর value সবসময়
								component state-এর সাথে bind বা যুক্ত থাকে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Value Control: Input value সবসময়
									<code>value</code> prop দিয়ে state থেকে নিয়ন্ত্রিত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Update Mechanism: প্রতিবার টাইপ করার সময়
									onChange handler দিয়ে state update করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Predictability: এটি ফর্মের ডেটাকে
									predictable রাখে এবং validation করা সহজ হয়।</li>
							</ul>
    `,
  },
  {
    id: 47,
    title: "onChange কীভাবে কাজ করে?",
    content: `
<p>onChange হলো একটি React
									event handler যা form input বা textarea-এর value
									change হওয়ার সময় trigger হয় এবং সাধারণত state update করার
								জন্য ব্যবহার করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">State Binding: Input valueকে
									React stateএর সাথে bind করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Immediate Execution: User input
									পরিবর্তনের সাথে সাথে সংশ্লিষ্ট function execute হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Controlled Components: এটি মূলত Controlled
										componentsএ ডেটা ফ্লো সচল রাখতে ব্যবহার করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 48,
    title: "Form Validation কীভাবে করা হয়?",
    content: `
<p>React-এ form
									validation করা হয় input value check করে এবং state বা
								error message update করে, যাতে user invalid data submit না করতে পারে।
							</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Controlled Components: Input valuesকে
									stateএ রেখে সেগুলোর ওপর নিয়ন্ত্রণ রাখা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Validation Logic: Validation logic
									সাধারণত onChange বা onSubmit ইভেন্টে implement করা
									হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Feedback: Error messages
									ডাইনামিকভাবে ইউজারকে দেখানো যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Libraries: জটিল ফর্মের ক্ষেত্রে
									Formik বা React Hook Formএর মতো জনপ্রিয় libraries
									ব্যবহার করা যায়।</li>
							</ul>
    `,
  },
  {
    id: 49,
    title: "Synthetic Event কী?",
    content: `
<p>Synthetic Event হলো
								React-এর একটি wrapper যা ব্রাউজারের native events-এর
								ওপর ভিত্তি করে তৈরি। এটি cross-browser compatibility এবং performance
									optimization নিশ্চিত করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">React Events: Reactএর সব ইভেন্টই
									(যেমন: <code>onClick</code>, <code>onChange</code>) মূলত Synthetic Events।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Cross-browser Support: এটি সব ধরনের ব্রাউজারে (Chrome,
									Firefox, Safari ইত্যাদি) একইভাবে কাজ করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Consistent API: এটি সব ব্রাউজারের জন্য একটি
									consistent API প্রদান করে—যেমন: <code>e.preventDefault()</code>,
									<code>e.stopPropagation()</code>।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Event Pooling: পারফরম্যান্স বাড়ানোর জন্য এটি
									অটোমেটিক্যালি event objectকে reuse করে (যা event
										pooling নামে পরিচিত)।</li>
							</ul>
    `,
  },
  {
    id: 50,
    title: "Event Handling in React কী?",
    content: `
<p>React-এ event
									handling হলো user actions (যেমন: click,
								change, submit ইত্যাদি) manage করার
								process, যেখানে events JSX-এ function pass করে
								handle করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">camelCase Naming: ইভেন্টের নামগুলো
									camelCaseএ লিখতে হয় (যেমন: <code>onClick</code>, <code>onChange</code>,
									<code>onSubmit</code>)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Function Passing: Event handler
										functionকে সরাসরি JSXএ pass করা হয় (যেমন:
									<code>{handleClick}</code>)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Synthetic Events: এটি Synthetic
										Events ব্যবহার করে, যা সব ব্রাউজারে (cross-browser support) একইভাবে কাজ
									করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Flexibility: হ্যান্ডলার হিসেবে inline
										function, method, বা arrow function—সবই ব্যবহার করা যায়।
								</li>
							</ul>
    `,
  },
  {
    id: 51,
    title: "preventDefault() কেন ব্যবহার করা হয়?",
    content: `
<p>preventDefault() ব্যবহার করা হয়
								browser-এর default behavior prevent বা বন্ধ করার জন্য, যাতে
								React-এ custom behavior handle করা যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Common Usage: এটি সাধারণত form
										submit, link click, scroll, এবং context menu
										eventsএ ব্যবহার হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Stop Reload: Form submissionএর সময়
									এটি পুরো page reload হওয়া আটকায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Custom Logic: এটি Reactকে
									প্রোগ্রাম্যাটিকভাবে ইভেন্টগুলো হ্যান্ডেল করার সুযোগ দেয় (যেমন: এপিআই কল করা)।</li>
							</ul>
    `,
  },
  {
    id: 52,
    title: "Two-way Binding কী?",
    content: `
<p>Two-way binding হলো এমন একটি
								process যেখানে UI element এবং component state একে
								অপরের সাথে sync থাকে — অর্থাৎ, state change হলে UI
									update হয় এবং UI change হলে state update হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Form Inputs: Reactএ মূলত form
										inputsএর ক্ষেত্রে two-way binding দেখা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Controlled Component: এটি Controlled
										component ব্যবহার করে অর্জন (achieve) করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Synchronization: এর ফলে State ও
									UI সবসময় একে অপরের সাথে synchronized থাকে।</li>
							</ul>
    `,
  },
  {
    id: 53,
    title: "Checkbox Handle কীভাবে করা হয়?",
    content: `
<p>React-এ checkbox
									handle করার জন্য controlled component ব্যবহার করা হয়, যেখানে
								checkbox-এর checked value state দ্বারা control হয় এবং
								onChange event দিয়ে update করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Boolean Value: Checkboxএর ক্ষেত্রে
									মূলত boolean মান ব্যবহার করা হয় এবং এটি <code>checked</code> prop-এর মাধ্যমে
									নিয়ন্ত্রিত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Update: onChange eventএর
									মাধ্যমে state আপডেট করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Multiple Checkboxes: একাধিক checkbox
										handle করার জন্য array of values ব্যবহার করা যেতে পারে।</li>
							</ul>
    `,
  },
  {
    id: 54,
    title: "File Upload কীভাবে করা হয়?",
    content: `
<p>React-এ file
									upload করতে input element-এর <code>type=&quot;file&quot;</code> ব্যবহার করা
								হয় এবং onChange event দিয়ে file capture করে state বা
								FormData-এর মাধ্যমে server-এ পাঠানো হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Input Type: ইনপুট টাইপ অবশ্যই <code>file</code> হতে
									হবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">File Access: <code>e.target.files</code> থেকে ফাইল
									অবজেক্ট অ্যাক্সেস করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Data Transfer: FormData ব্যবহার করে
									সহজেই backendএ ফাইল পাঠানো যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Preview: Controlled component এবং
									<code>URL.createObjectURL()</code> ব্যবহার করে আপলোডের আগে ফাইলের preview দেখা সম্ভব।
								</li>
							</ul>
    `,
  },
  {
    id: 55,
    title: "Multiple Input Handle করার Pattern",
    content: `
<p>React-এ multiple input field
								সুন্দরভাবে হ্যান্ডেল করার জন্য controlled components pattern ব্যবহার করা হয়। এখানে
								আলাদা আলাদা স্টেট না নিয়ে সব ইনপুট ভ্যালু একটি state object-এ রাখা হয় এবং একটি
								generic onChange handler দিয়ে সেগুলো আপডেট করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Single Handler: সব ইনপুটের জন্য একটি মাত্র
									<code>onChange</code> ফাংশন ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Name Attribute: ইনপুটের <code>name</code> অ্যাট্রিবিউট
									ব্যবহার করে স্টেটের কোন <code>key</code> আপডেট হবে তা শনাক্ত করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Update:
									<code>[e.target.name]: e.target.value</code> সিনট্যাক্স ব্যবহার করে ডাইনামিকভাবে স্টেট অবজেক্ট আপডেট
									করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 56,
    title: "React Router কী?",
    content: `
<p>React Router হলো একটি শক্তিশালী
								library যা React application-এ client-side routing
									enable করে। এর মাধ্যমে page reload ছাড়াই বিভিন্ন components
								বা views-এ navigate করা যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">SPA Support: এটি Single Page Application
										(SPA) বিহেভিয়ার সাপোর্ট করে, ফলে অ্যাপটি অনেক ফাস্ট মনে হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Rendering: URL change হলে
									পুরো React app re-render হয় না, শুধুমাত্র যে componentটি সেই
									URLএর সাথে match করে, সেটিই render হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Package: ওয়েব অ্যাপ্লিকেশনের জন্য সাধারণত
									<code>react-router-dom</code> প্যাকেজটি ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Core Components: এটি রাউটিং ম্যানেজ করার জন্য
									<code>&lt;BrowserRouter&gt;</code>, <code>&lt;Routes&gt;</code>, <code>&lt;Route&gt;</code>,
									<code>&lt;Link&gt;</code>, এবং <code>&lt;Navigate&gt;</code>এর মতো প্রয়োজনীয়
									components প্রদান করে।</li>
							</ul>
    `,
  },
  {
    id: 57,
    title: "useParams কী?",
    content: `
<p>useParams হলো একটি React
									Router Hook যা URL path-এর dynamic parameters অ্যাক্সেস
								করতে ব্যবহার করা হয়। এর মাধ্যমে আমরা URL থেকে নির্দিষ্ট কোনো মান (যেমন ID বা Username) সংগ্রহ করে কোডে
								ব্যবহার করতে পারি।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Route Parameters: এটি মূলত functional
										componentsএ route parameters পড়ার জন্য ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Return Value: এটি একটি object রিটার্ন
									করে যেখানে URL-এর সব params কি-ভ্যালু পেয়ার হিসেবে থাকে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dynamic Routes: এটি সাধারণত <code>/user/:id</code> বা
									<code>/product/:slug</code>এর মতো dynamic routesএর ক্ষেত্রে সবচেয়ে বেশি ব্যবহৃত হয়।
								</li>
							</ul>
    `,
  },
  {
    id: 58,
    title: "useNavigate কী?",
    content: `
<p>useNavigate হলো একটি React
									Router Hook যা programmatically route change করতে ব্যবহার হয়। অর্থাৎ, কোনো
								লিঙ্কে ক্লিক করা ছাড়াই user action (যেমন: বাটন ক্লিক বা ফর্ম সাবমিট) বা কোনো নির্দিষ্ট
								logic অনুযায়ী এক পেজ থেকে অন্য পেজে navigation করা যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Programmatic Navigation: এটি functional
										componentএ কোডের মাধ্যমে route change করতে ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Version Update: এটি আগের ভার্সনগুলোর
									<code>history.push</code> বা <code>history.replace</code>এর আধুনিক বিকল্প।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Navigation Control: এটি দিয়ে forward,
									backward (যেমন: <code>Maps(-1)</code>) অথবা বর্তমান রাউটকে replace
									করা সম্ভব।</li>
							</ul>
    `,
  },
  {
    id: 59,
    title: "Protected Route কী?",
    content: `
<p>Protected Route হলো এমন একটি
								route যা শুধুমাত্র authenticated users (লগইন করা ইউজার) অ্যাক্সেস করতে
								পারে। যদি কোনো unauthorized user সেই পেজে যাওয়ার চেষ্টা করে, তবে তাকে অন্য কোনো পেজে বা
								login page-এ redirect করে দেওয়া হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Access Control: ইউজার authenticated
									কি না বা তার নির্দিষ্ট role (যেমন: Admin) আছে কি না, তা চেক করে রাউট কন্ট্রোল করা হয়।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Custom Wrapper: React Routerএ সাধারণত
									একটি custom component wrapper তৈরি করে এই লজিকটি ইমপ্লিমেন্ট করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Security &amp; UX: এটি অ্যাপ্লিকেশনের
									security নিশ্চিত করে এবং ইউজারকে সঠিক ডিরেকশনে পাঠিয়ে UX improve
									করে।</li>
							</ul>
    `,
  },
  {
    id: 60,
    title: "Nested Routing কী?",
    content: `
<p>Nested routing হলো React
									Router-এ একটি route-এর ভেতরে অন্য route define করা। এর
								মাধ্যমে hierarchical বা multi-level UI structure তৈরি করা যায় (যেমন:
								একটি Dashboard পেজের ভেতরে Profile এবং Settings সাব-পেজ থাকা)।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Outlet Component: Parent route-এর ভেতরে যেখানে চাইল্ড
									রাউটগুলো দেখা যাবে, সেখানে <code>&lt;Outlet /&gt;</code> প্লেসহোল্ডার হিসেবে ব্যবহার
									করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Hierarchical Structure: এটি মাল্টি-লেভেল কম্পোনেন্ট
									স্ট্রাকচার তৈরি করতে সাহায্য করে, যা বড় অ্যাপ্লিকেশনের জন্য অত্যন্ত কার্যকর।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Clean URL &amp; Separation: এর ফলে URL স্ট্রাকচার
									পরিষ্কার থাকে এবং কোড বা কম্পোনেন্টগুলো আলাদা ও সুসংগঠিত রাখা সহজ হয়।</li>
							</ul>
    `,
  },
  {
    id: 61,
    title: "Dynamic Routing কী?",
    content: `
<p>Dynamic routing হলো এমন একটি
								ব্যবস্থা যেখানে route structure run-time-এ তৈরি হয় অথবা route
									parameters ব্যবহার করে নির্দিষ্ট component render করা হয়। অর্থাৎ,
								অ্যাপ্লিকেশনের URLs আগে থেকে ফিক্সড না থেকে runtime data অনুযায়ী
								নির্ধারিত হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Route Parameters: ইউআরএল-এ প্যারামিটার ব্যবহার করে
									ডাইনামিক কন্টেন্ট লোড করা যায় (যেমন: <code>/user/:id</code> যেখানে <code>:id</code> যেকোনো ইউজারের
									আইডি হতে পারে)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Parameter Access: React Routerএ
									<code>useParams</code> হুক ব্যবহার করে এই ডাইনামিক প্যারামিটারগুলো কোডে অ্যাক্সেস করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Use Cases: এটি বিশেষ করে User
										Profiles, Product Detail Pages, বা Blog Postsএর মতো
									ফিচারের জন্য অপরিহার্য যেখানে হাজার হাজার পেজের জন্য আলাদা আলাদা রাউট না লিখে একটি ডাইনামিক রাউট
									ব্যবহার করা হয়।</li>
							</ul>
    `,
  },
  {
    id: 62,
    title: "NavLink কী?",
    content: `
<p>NavLink হলো একটি বিশেষ
								React Router component যা navigation link তৈরি করতে ব্যবহৃত হয়। এটি
								সাধারণ <code>&lt;Link&gt;</code>-এর মতোই কাজ করে, তবে এর বিশেষত্ব হলো এটি যখনই বর্তমান
								URL-এর সাথে match করে, তখন এটি অটোমেটিক্যালি একটি active
									class বা styling apply করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Active Styling: এটি লিঙ্কের active
										state শনাক্ত করতে পারে, যা সাধারণ <code>&lt;Link&gt;</code> কম্পোনেন্টে সরাসরি করা যায় না।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Customization: <code>className</code> বা
									<code>style</code> প্রোপার্টির ভেতরে একটি function ব্যবহার করে খুব সহজেই
									active stateকে নিজের মতো customize করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">User Experience: এটি নেভিগেশন মেনুতে ইউজার বর্তমানে
									কোন পেজে আছে তা হাইলাইট করে দেখানোর জন্য সবচেয়ে বেশি কার্যকর।</li>
							</ul>
    `,
  },
  {
    id: 63,
    title: "404 Route কীভাবে Handle করা হয়?",
    content: `
<p>404 route হলো এমন একটি বিশেষ
								route যা তখন render হয় যখন ইউজার এমন কোনো URL access
								করার চেষ্টা করে যা আপনার অ্যাপ্লিকেশনের কোনো existing route-এর সাথে
								match করে না। React Router-এ এটি মূলত একটি catch-all
									route দিয়ে হ্যান্ডেল করা হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Catch-all Path: সব ধরনের unmatched
										URLs ধরার জন্য <code>path=&quot;*&quot;</code> ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Correct Placement: এটি সবসময় সব রাউটের শেষে
										(last route) ডিফাইন করা উচিত, যাতে কোনো ভ্যালিড রাউট মিস না হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">User Experience: ইউজারকে হঠাৎ ব্ল্যাঙ্ক পেজ না দেখিয়ে
									একটি User-friendly “Page Not Found” মেসেজ বা হোমপেজে ফিরে যাওয়ার বাটন দেখানো হয়।</li>
							</ul>
    `,
  },
  {
    id: 64,
    title: "Lifting State Up কী?",
    content: `
<p>Lifting state up হলো একটি
								process যেখানে shared state-কে চাইল্ড কম্পোনেন্ট থেকে সরিয়ে তাদের
								নিকটতম সাধারণ parent component-এ নিয়ে যাওয়া হয়। এর ফলে একাধিক child
									components একই state access করতে এবং update করতে পারে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Data Sharing: যখন দুই বা ততোধিক child
										componentsএর মধ্যে একই ডেটা শেয়ার করার প্রয়োজন হয়, তখন এটি ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Props Passing: প্যারেন্ট কম্পোনেন্ট থেকে সেই
									stateকে propsএর মাধ্যমে চাইল্ড কম্পোনেন্টগুলোতে পাঠানো হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Update: চাইল্ড কম্পোনেন্ট থেকে স্টেট আপডেট করার
									জন্য প্যারেন্ট থেকে একটি callback function প্রপস হিসেবে পাস করা হয়, যা চাইল্ড কল করলে
									প্যারেন্টের স্টেট আপডেট হয়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি গুরুত্বপূর্ণ?</h3>
						
						
							<p>রিয়্যাক্টে ডেটা সবসময়
								uni-directional (একমুখী) প্রবাহিত হয়। যদি দুটি সিবলিং (sibling) কম্পোনেন্টের মধ্যে ডেটা
								আদান-প্রদান করতে হয়, তবে সরাসরি তা করা সম্ভব নয়। তাই স্টেটকে উপরে (Parent-এ) তুলে নিলে সেখান থেকে সবার
								কাছে ডেটা পৌঁছানো সহজ হয়।</p>
    `,
  },
  {
    id: 65,
    title: "Context API কী?",
    content: `
<p>Context API হলো
								React-এর একটি built-in feature যা component tree-এর
								মধ্যে props drilling ছাড়াই global state বা data share
								করতে সাহায্য করে। এটি মূলত এমন ডেটা ম্যানেজ করার জন্য ব্যবহার করা হয় যা অ্যাপ্লিকেশনের অনেকগুলো
								কম্পোনেন্টের প্রয়োজন হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Global Data Sharing: সাধারণত theme
									(dark/light mode), auth status (user login info), এবং language
									(localization) এর মতো ডেটা শেয়ার করার জন্য এটি ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Avoid Props Drilling: এটি ইন্টারমিডিয়েট বা মাঝখানের
									কম্পোনেন্টগুলোর মধ্য দিয়ে বারবার props pass করার ঝামেলা দূর করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Core Concepts: এটি মূলত তিনটি জিনিসের সমন্বয়ে কাজ করে:
									
										<ul>
											<li style="list-style-type:circle"><code>React.createContext()</code>: কনটেক্সট তৈরি করতে।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle"><code>&lt;Provider&gt;</code>: ডেটা বা ভ্যালু সাপ্লাই করতে।
											</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle"><code>useContext()</code>: চাইল্ড কম্পোনেন্ট থেকে সেই ডেটা
												ব্যবহার করতে।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন Context API ব্যবহার করবেন?
							</h3>
						
						
							<p>যখন আপনার অ্যাপ্লিকেশনে ডেটা অনেক গভীরে থাকা কোনো
								কম্পোনেন্টে পাঠাতে হয়, তখন প্রতিটি লেভেলে প্রপস পাস করা বিরক্তিকর এবং কোডকে জটিল করে তোলে।
								Context API সরাসরি প্যারেন্ট থেকে চাইল্ডে ডেটা &quot;টেলিপোর্ট&quot; করার মতো কাজ করে।
							</p>
    `,
  },
  {
    id: 66,
    title: "Context API vs Redux",
    content: `
<p>Context API এবং
								Redux উভয়ই state management-এর জন্য ব্যবহৃত হয়, কিন্তু এদের
								purpose ও scale ভিন্ন।</p>
						
						
							<h3>Context API</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Lightweight: এটি একটি built-in React
										feature।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Best For: মূলত small-to-medium apps
									বা theme, auth, languageএর মতো global
										stateএর জন্য ভালো।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Purpose: সহজ state management এবং
									props drilling এড়ানোর জন্য এটি ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Constraint: এতে কোনো middleware নেই
									এবং এটি শুধুমাত্র basic state update logic সাপোর্ট করে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>Redux</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Scalable: এটি একটি external library,
									যা large appsএর জন্য উপযোগী।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Predictable: এতে একটি centralized
										store থাকে, যা state managementকে predictable করে তোলে।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Middleware Support: এটি Redux Thunk
									বা Sagaর মতো middleware সাপোর্ট করে, যা দিয়ে জটিল async
										operations ম্যানেজ করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Complex Apps: অনেকগুলো modules এবং
									shared state আছে এমন complex appsএর জন্য এটি উপযুক্ত।</li>
							</ul>
    `,
  },
  {
    id: 67,
    title: "Redux কী?",
    content: `
<p>Redux হলো একটি predictable
									state management library যা React বা অন্য JavaScript apps-এ centralized state
									store প্রদান করে। এটি অ্যাপ্লিকেশনের স্টেটকে একটি নির্দিষ্ট নিয়ম বা প্যাটার্নে ম্যানেজ করতে
								সাহায্য করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Single Source of Truth: অ্যাপ্লিকেশনের সব
									state একটি মাত্র কেন্দ্রীয় জায়গায় থাকে, যাকে Store বলা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State is Read-only: স্টেট সরাসরি পরিবর্তন করা যায় না;
									এটি আপডেট করার একমাত্র উপায় হলো actions dispatch করা।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reducers: স্টেট কীভাবে আপডেট হবে তা নির্ধারণ করে
									Pure functions, যেগুলোকে Reducers বলা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Scalability: এটি মূলত complex এবং
									large-scale application state সহজে ম্যানেজ করতে সাহায্য করে।</li>
							</ul>
    `,
  },
  {
    id: 68,
    title: "Redux Flow Explain",
    content: `
<p>Redux-এর flow হলো একটি
								centralized state (store) থেকে ডেটা ম্যানেজ করার একটি সুশৃঙ্খল এবং structured
									pattern, যা স্টেটকে predictable ও maintainable রাখে।</p>
						
						
							<h3>Step-by-Step Flow:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Store: এটি অ্যাপ্লিকেশনের single source of
										truth। পুরো অ্যাপের সব স্টেট এই একটি স্টোরেই জমা থাকে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Action: এটি একটি সাধারণ JavaScript
										object যা নির্দেশ করে যে কী পরিবর্তন করতে হবে। এতে অবশ্যই একটি <code>type</code> প্রপার্টি
									থাকতে হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dispatch: এটি একটি ফাংশন যা actionকে
									স্টোরে পাঠাতে ব্যবহার করা হয়। এটিই স্টেট আপডেট ট্রিগার করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Reducer: এটি একটি pure function যা
									<code>(state, action) =&gt; newState</code> এই ফরম্যাটে কাজ করে। এটি আগের স্টেট এবং বর্তমান অ্যাকশন
									নিয়ে একটি নতুন স্টেট ক্যালকুলেট করে রিটার্ন করে, কিন্তু আগের স্টেটকে সরাসরি পরিবর্তন (mutate) করে না।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Update &amp; Subscriber: Store
									যখন reducerএর মাধ্যমে স্টেট আপডেট করে, তখন যেসব components স্টোরের
									সাথে subscribed থাকে তারা নতুন স্টেট পায় এবং UI re-render হয়।</li>
							</ul>
    `,
  },
  {
    id: 69,
    title: "Reducer কী?",
    content: `
<p>Reducer হলো একটি pure
									function যা Redux store-এর state এবং dispatched
									action অনুযায়ী নতুন state return করে। এটি মূলত স্টেট পরিবর্তনের মূল লজিকটি
								হ্যান্ডেল করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Pure Function: এর কোনো side-effects
									নেই। একই ইনপুটের জন্য এটি সবসময় একই আউটপুট প্রদান করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Arguments: এটি দুটি জিনিস আর্গুমেন্ট হিসেবে গ্রহণ করে:
									বর্তমান state এবং পাঠানো action।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Immutability: এটি সবসময় একটি new
										state রিটার্ন করে এবং কখনোই পুরনো স্টেটকে সরাসরি পরিবর্তন (mutate) করে না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Logic Handler: একটি নির্দিষ্ট
									actionএর বিপরীতে স্টেট কীভাবে পরিবর্তিত হবে, তা রিডিউসারই নির্ধারণ করে।</li>
							</ul>
    `,
  },
  {
    id: 70,
    title: "Store কী?",
    content: `
<p>Store হলো একটি centralized
									object যা পুরো application state ধরে রাখে এবং state access,
								update এবং subscription manage করার জন্য ব্যবহৃত হয়। এটি Redux-এর
								হৃদপিণ্ড হিসেবে কাজ করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Single Source of Truth: অ্যাপ্লিকেশনের সব
									state একটি নির্দিষ্ট এবং কেন্দ্রীয় জায়গায় থাকে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Core Methods: স্টোর মূলত তিনটি প্রধান মেথড প্রদান করে:
									
										<ul>
											<li style="list-style-type:circle">getState(): বর্তমান state
												অ্যাক্সেস করার জন্য।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">dispatch(action): নতুন action
													trigger করে স্টেট আপডেট করার জন্য।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">subscribe(listener): যখনই স্টেটে কোনো পরিবর্তন
												আসে, তখন একটি callback function রান করার জন্য।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Strict Update Path: স্টেট সরাসরি পরিবর্তন করা যায় না;
									এটি শুধুমাত্র dispatch এবং reducerএর মাধ্যমে আপডেট হয়।</li>
							</ul>
    `,
  },
  {
    id: 71,
    title: "Middleware কী?",
    content: `
<p>Middleware হলো একটি
								function যা Redux-এর dispatch process-এর মধ্যে
								execute হয় এবং action process হওয়ার আগে বা পরে custom logic
									add করার সুযোগ দেয়। এটি মূলত অ্যাকশন এবং রিডিউসারের মাঝখানে একটি লেয়ার হিসেবে কাজ করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Action Interception: অ্যাকশন রিডিউসারে পৌঁছানোর আগেই
									এটি সেটিকে ইন্টারসেপ্ট বা বাধা দিতে পারে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use Cases: * Logging: যেমন
									<code>redux-logger</code> ব্যবহার করে স্টেট চেঞ্জ ট্র্যাক করা।
										<ul>
											<li style="list-style-type:circle">Async Operations: <code>redux-thunk</code> বা
												<code>redux-saga</code> ব্যবহার করে API কল বা অন্যান্য অ্যাসিনক্রোনাস কাজ করা।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">Analytics &amp; Error Reporting: কোনো এরর হলে
												তা রিপোর্ট করা বা অ্যানালিটিক্স ডেটা পাঠানো।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Store Enhancement: এটি মূল reducer
										logic পরিবর্তন না করেই স্টোরের ক্ষমতা বৃদ্ধি করে।</li>
							</ul>
    `,
  },
  {
    id: 72,
    title: "API Call কোথায় করা হয়?",
    content: `
<p>React-এ API call
								করা হয় component lifecycle বা side-effect context-এ। সাধারণত
								useEffect hook-এর ভেতরে এটি করা হয়, যাতে কম্পোনেন্ট রেন্ডার হওয়ার পর ডেটা ফেচ (fetch)
								করা যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Functional Components: ডেটা ফেচ করার জন্য
									<code>useEffect</code> hook ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Class Components: এজন্য
									<code>componentDidMount</code> লাইফসাইকেল মেথড ব্যবহার করা হতো।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Update: Async call করার পর
									স্টেট আপডেট করা হয়, যার ফলে UI automatically re-render হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Best Practice: সরাসরি render
										functionএর ভেতরে কখনোই API call করা উচিত নয়, কারণ এতে ইনফিনিট লুপ তৈরি হতে পারে।</li>
							</ul>
    `,
  },
  {
    id: 73,
    title: "Axios vs Fetch",
    content: `
<p>Axios এবং Fetch
								উভয়ই HTTP requests করার জন্য ব্যবহৃত হয়, কিন্তু তাদের মধ্যে কিছু key
									differences আছে।</p>
						
						
							<h3>Fetch API</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Built-in: এটি একটি browser API, তাই
									আলাদা কোনো installationএর প্রয়োজন নেই।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Response Handling: এটি Promise
									রিটার্ন করে এবং রেসপন্স ডেটা পেতে ম্যানুয়ালি <code>.json()</code> কনভার্ট করতে হয়।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Error Handling: শুধুমাত্র network
										errorsএর ক্ষেত্রে এটি <code>catch</code> ট্রিগার করে। HTTP errors (404,
										500) ম্যানুয়ালি চেক করতে হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Simplicity: খুব সাধারণ রিকোয়েস্টের জন্য এটি ভালো, তবে
									ফিচার কম।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>Axios</h3>
						
						
							<ul>
								<li style="list-style-type:disc">External Library: এটি একটি লাইব্রেরি, যা
									npm (<code>npm install axios</code>) বা pnpm দিয়ে ইন্সটল করতে হয়।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Data Access: এটি সরাসরি response data
									রিটার্ন করে (<code>res.data</code>), আলাদা করে JSON কনভার্ট করতে হয় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Automatic Error Handling: যেকোনো HTTP
										error (যেমন 4xx বা 5xx) সরাসরি <code>catch</code> ব্লক ট্রিগার করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Advanced Features: এতে interceptors,
									timeout সেট করা, request cancel করা এবং client-side
										protectionএর মতো শক্তিশালী ফিচার আছে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>একনজরে পার্থক্য</h3>
						
						
							<table>
								<tbody>
									
										<tr>
											<td>বৈশিষ্ট্য</td>
											<td>Fetch API</td>
											<td>Axios</td>
										</tr>
									
									
										<tr>
											<td>Installation</td>
											<td>প্রয়োজন নেই (Native)</td>
											<td><code>pnpm install axios</code></td>
										</tr>
									
									
										<tr>
											<td>JSON Data</td>
											<td><code>.json()</code> করতে হয়</td>
											<td>অটোমেটিক কনভার্ট হয়</td>
										</tr>
									
									
										<tr>
											<td>HTTP Errors</td>
											<td>ম্যানুয়ালি চেক করতে হয়</td>
											<td>অটোমেটিক <code>catch</code> হয়</td>
										</tr>
									
									
										<tr>
											<td>Interceptors</td>
											<td>নেই</td>
											<td>আছে</td>
										</tr>
									
									
										<tr>
											<td>Timeout</td>
											<td>নেই</td>
											<td>আছে</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 74,
    title: "Loading State কীভাবে Handle করা হয়?",
    content: `
<p>React-এ loading
									state ব্যবহার করা হয় যখন কোনো API call বা asynchronous
									operation চলছে। এর মাধ্যমে ইউজারকে UI-তে একটি loading
									indicator দেখিয়ে প্রপার feedback দেওয়া হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">State Variable: সাধারণত <code>isLoading</code> বা
									<code>loading</code> নামে একটি boolean state ডিক্লেয়ার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Start Phase: API call শুরু হওয়ার ঠিক
									আগে <code>loading = true</code> সেট করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">End Phase: API response চলে আসার পর
									(সফল হোক বা ব্যর্থ) <code>loading = false</code> করে দেওয়া হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Conditional Rendering: লজিকের মাধ্যমে স্ক্রিনে
									Spinner, Skeleton Loader বা কোনো message শো করা হয়
									যতক্ষণ স্টেট <code>true</code> থাকে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>ডেটা লোড হতে কয়েক সেকেন্ড সময় লাগতে পারে। এই সময়ে
								স্ক্রিন ফাঁকা না রেখে লোডিং অ্যানিমেশন দেখালে ইউজার বুঝতে পারে যে অ্যাপটি কাজ করছে, যা User
									Experience (UX) উন্নত করে।</p>
    `,
  },
  {
    id: 75,
    title: "Loading State কীভাবে Handle করা হয়?",
    content: `
<p>React-এ loading state ব্যবহার করা
								হয় যখন কোনো API call বা asynchronous operation চলছে। এর মাধ্যমে
								ইউজারকে UI-তে একটি loading indicator দেখিয়ে প্রপার
								feedback দেওয়া হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">State Variable: সাধারণত <code>isLoading</code> বা
									<code>loading</code> নামে একটি boolean state ডিক্লেয়ার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Start Phase: API call শুরু হওয়ার ঠিক
									আগে <code>loading = true</code> সেট করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">End Phase: API response চলে আসার পর
									(সফল হোক বা ব্যর্থ) <code>loading = false</code> করে দেওয়া হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Conditional Rendering: লজিকের মাধ্যমে স্ক্রিনে
									Spinner, Skeleton Loader বা কোনো message শো করা হয়
									যতক্ষণ স্টেট <code>true</code> থাকে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>ডেটা লোড হতে কয়েক সেকেন্ড সময় লাগতে পারে। এই সময়ে
								স্ক্রিন ফাঁকা না রেখে লোডিং অ্যানিমেশন দেখালে ইউজার বুঝতে পারে যে অ্যাপটি কাজ করছে, যা User
									Experience (UX) উন্নত করে।</p>
						
						
							<hr />
						
						
							<p>প্রয়োজনীয় উদাহরণ (Code Snippet):
							</p>
						
						
							
							
							<pre><code style="white-space:pre-wrap;word-break:break-all">const [isLoading, setIsLoading] = useState(false);

const fetchData = async () =&gt; {
  setIsLoading(true); // Start Phase
  try {
    const res = await axios.get(&#x27;/api/data&#x27;);
    setData(res.data);
  } finally {
    setIsLoading(false); // End Phase
  }
};</code></pre>
    `,
  },
  {
    id: 76,
    title: "Error Handling কীভাবে করা হয়?",
    content: `
<p>React-এ error
									handle করা হয় asynchronous operations বা component
									rendering-এর সময়, যাতে user-friendly message দেখানো যায় এবং অ্যাপ
								crash না হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Async Operations: API calls-এর ক্ষেত্রে
									<code>try-catch</code> ব্লক অথবা <code>.catch()</code> মেথড ব্যবহার
									করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Variable: এরর মেসেজ স্টোর করার জন্য একটি
									<code>error</code> state ডিক্লেয়ার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Conditional Rendering: লজিকের মাধ্যমে স্ক্রিনে
									error message বা alert ডিসপ্লে করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Error Boundaries: কম্পোনেন্ট লেভেলের runtime
										errors আটকানোর জন্য এবং পুরো অ্যাপ ক্রাশ হওয়া থেকে বাঁচাতে এটি ব্যবহার করা হয়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>ভুল বা ব্যর্থ রিকোয়েস্টের কারণে ইউজার যেন ব্ল্যাঙ্ক
								স্ক্রিন না দেখে, বরং কী সমস্যা হয়েছে তা বুঝতে পারে (যেমন: &quot;Network error&quot;)। এটি অ্যাপের
								reliability এবং User Experience বজায় রাখে।</p>
    `,
  },
  {
    id: 77,
    title: "useEffect with API",
    content: `
<p>React-এ useEffect
								ব্যবহার করা হয় component mount হওয়ার পর API call করতে, যাতে
								asynchronous data fetch করে state update করা যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Run Time: useEffect প্রথম
									renderএর পর রান করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Dependency Array: একটি empty dependency array
									<code>[]</code> নিশ্চিত করে যে API call-টি শুধুমাত্র একবার (mount হওয়ার সময়)
									হবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">State Management: ফেচ করা ডেটা, লোডিং স্ট্যাটাস এবং
									এরর হ্যান্ডেল করতে state variables ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Cleanup Function: ফেচ রিকোয়েস্ট abort
									করা বা সাবস্ক্রিপশন cancel করার জন্য অপশনাল cleanup function ব্যবহার
									করা যায়।</li>
							</ul>
    `,
  },
  {
    id: 78,
    title: "Debounce in React",
    content: `
<p>Debounce হলো একটি
								technique যা rapid-fire events (যেমন typing, scrolling) হ্যান্ডেল করার
								সময় function execution delay করে। এটি performance improve করতে এবং
								unnecessary state updates বা API calls avoid করতে সাহায্য করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use Cases: সাধারণত input
										search, window resize, এবং scroll eventsএর ক্ষেত্রে এটি
									বেশি ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Execution Logic: ইউজার টাইপিং বা স্ক্রলিং থামানোর পর
									একটি নির্দিষ্ট সময় (যেমন ৫০০ মিলি-সেকেন্ড) অতিবাহিত হলে তবেই ফাংশনটি এক্সিকিউট হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: এটি বারবার re-render
									হওয়া রোধ করে এবং অপ্রয়োজনীয় API calls কমিয়ে সার্ভারের ওপর চাপ কমায়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কিভাবে কাজ করে?</h3>
						
						
							<p>যখন ইউজার ইনপুট ফিল্ডে টাইপ করে, তখন প্রতিবার
								কী-প্রেসের সাথে সাথে ফাংশনটি কল না হয়ে একটি টাইমার সেট হয়। যদি টাইমার শেষ হওয়ার আগেই ইউজার আবার টাইপ
								করে, তবে আগের টাইমারটি বাতিল হয়ে নতুন টাইমার শুরু হয়। টাইপিং শেষ হলে কেবল শেষবারের টাইমারটি সফলভাবে রান
								করে।</p>
						
						
							
							
							<pre><code style="white-space:pre-wrap;word-break:break-all">useEffect(() =&gt; {
  const handler = setTimeout(() =&gt; {
    setDebouncedValue(searchTerm); // API call or state update here
  }, 500);

  return () =&gt; {
    clearTimeout(handler); // Cleanup previous timer
  };
}, [searchTerm]);</code></pre>
    `,
  },
  {
    id: 79,
    title: "Throttle in React",
    content: `
<p>Throttle হলো একটি
								technique যা rapid-fire events (যেমন scroll, resize, mousemove)
								হ্যান্ডেল করার সময় function execution একটি fixed interval-এ সীমাবদ্ধ
								করে। এটি performance improve করতে এবং ফাংশন যেন খুব frequent call না
								হয় তা নিশ্চিত করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Execution Logic: একটি নির্দিষ্ট সময় অন্তর (যেমন প্রতি
									৫০০ মিলি-সেকেন্ডে একবার) ফাংশনটি এক্সিকিউট হয়, এর মাঝে যতবারই ইভেন্ট ট্রিগার হোক না কেন।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use Cases: সাধারণত scroll,
									window resize, mousemove, অথবা button clicksএর
									ক্ষেত্রে এটি ব্যবহৃত হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: এটি অনেক বেশি ইভেন্ট ট্রিগার হওয়ার কারণে
									সৃষ্ট পারফরম্যান্স ইস্যু প্রতিরোধ করে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কিভাবে কাজ করে?</h3>
						
						
							<p>থ্রটলিং নিশ্চিত করে যে একটি ফাংশন নির্দিষ্ট সময়ের
								ব্যবধানে অন্তত একবার রান করবে। যদি ইউজার অনবরত স্ক্রল করতে থাকে, তবে থ্রটল ফাংশনটি প্রতি নির্দিষ্ট
								বিরতিতে ডেটা আপডেট বা অ্যাকশন ট্রিগার করবে, যা ব্রাউজারের ওপর চাপ কমায়।</p>
						
						
							
							
							<pre><code style="white-space:pre-wrap;word-break:break-all">const handleScroll = () =&gt; {
  const now = new Date().getTime();
  
  // নির্দিষ্ট সময় (delay) পার হলেই কেবল কাজ করবে
  if (now - lastCall.current &gt;= delay) {
    setScrollPosition(window.scrollY);
    lastCall.current = now;
  }
};</code></pre>
    `,
  },
  {
    id: 80,
    title: "XSS in React কীভাবে Prevent করা হয়?",
    content: `
<p>XSS (Cross-Site Scripting) হলো একটি
								security vulnerability যেখানে অ্যাটাকার মালিশিয়াস স্ক্রিপ্ট ইনজেক্ট করে।
								React-এর কিছু built-in protection এবং best practices
								অনুসরণ করলে এটি সহজে ঠেকানো যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Default Escaping: React ডিফল্টভাবে সব কন্টেন্ট
									escape করে। অর্থাৎ, JSX-এ কোনো স্ট্রিং রেন্ডার করলে তা সরাসরি HTML হিসেবে এক্সিকিউট
									হয় না।
										<ul>
											<li style="list-style-type:circle"><em>উদাহরণ:</em>
												<code>&lt;div&gt;{userInput}&lt;/div&gt;</code> সবসময় নিরাপদ।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Avoid dangerouslySetInnerHTML: এটি ব্যবহার করলে
									React-এর সুরক্ষা কবজ কাজ করে না। শুধুমাত্র বিশ্বস্ত সোর্স (trusted source) ছাড়া এটি ব্যবহার করা উচিত
									নয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Sanitization: যদি HTML রেন্ডার করতেই হয়, তবে
									DOMPurifyএর মতো লাইব্রেরি ব্যবহার করে ইনপুট sanitize করে নিতে হয়।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Input Validation: ইউজার ইনপুট সবসময় ভ্যালিডেট করা উচিত
									যাতে কোনো স্ক্রিপ্ট ট্যাগ বা ক্ষতিকারক কোড সিস্টেমে ঢুকতে না পারে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>XSS অ্যাটাক সফল হলে অ্যাটাকার ইউজারের
								Session Cookie চুরি করতে পারে বা ইউজারের ব্রাউজারে অনাকাঙ্ক্ষিত কোড রান করাতে পারে।
								React-এর অটোমেটিক এস্কেপিং এই ঝুঁকি অনেকাংশে কমিয়ে দেয়।</p>
    `,
  },
  {
    id: 81,
    title: "dangerouslySetInnerHTML কেন dangerous?",
    content: `
<p><code>dangerouslySetInnerHTML</code> একটি প্রপার্টি
								যা সরাসরি DOM-এ raw HTML ইনজেক্ট করতে ব্যবহৃত হয়। এটি মূলত &quot;dangerous&quot; কারণ
								এটি Cross-Site Scripting (XSS) অ্যাটাক হওয়ার সুযোগ তৈরি করে দেয় যদি কন্টেন্টটি কোনোভাবে
								আনট্রাস্টেড (untrusted) হয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Bypassing Protection: সাধারণত React সব কন্টেন্ট
									escape করে (যেমন: <code>&lt;script&gt;</code> ট্যাগকে স্ট্রিং হিসেবে দেখায়), কিন্তু
									এই প্রপার্টি সেই সুরক্ষা কবজটি bypass করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Malicious Script Execution: যদি কোনো অ্যাটাকার ইনপুট
									ফিল্ডের মাধ্যমে একটি ক্ষতিকারক স্ক্রিপ্ট পাঠায় এবং আপনি সেটি <code>dangerouslySetInnerHTML</code> দিয়ে
									রেন্ডার করেন, তবে সেই স্ক্রিপ্টটি ইউজারের ব্রাউজারে রান করবে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Trust Factor: এটি কেবল তখনই ব্যবহার করা উচিত যখন আপনি
									নিশ্চিত যে HTML কন্টেন্টটি সম্পূর্ণ নিরাপদ অথবা আগে থেকেই sanitized (যেমন: DOMPurify
									ব্যবহার করে)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Explicit Warning: রিঅ্যাক্ট টিম ইচ্ছাকৃতভাবে এর নাম
									&quot;dangerously&quot; রেখেছে যাতে ডেভেলপাররা এটি ব্যবহারের সময় সতর্ক থাকে এবং এটি
									যে একটি সিকিউরিটি রিস্ক তা মাথায় রাখে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>সতর্কতা:</h3>
						
						
							<p>যেকোনো আনট্রাস্টেড ডেটা সরাসরি এই প্রপার্টিতে পাস
								করা থেকে বিরত থাকুন। প্রয়োজনে কন্টেন্ট রেন্ডার করার আগে তা ক্লিনিং বা স্যানিটাইজ করে নিন।</p>
    `,
  },
  {
    id: 82,
    title: "Environment Variable ব্যবহার কীভাবে করা হয়?",
    content: `
<p>React-এ environment
									variables ব্যবহার করা হয় অ্যাপের sensitive বা environment-specific
									data (যেমন: API URLs, Keys, Feature Flags) মূল কোড থেকে আলাদা রাখার জন্য।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Prefix Rule: <code>create-react-app</code>এ
									ভ্যারিয়েবলগুলোর নাম অবশ্যই <code>REACT_APP_</code> দিয়ে শুরু হতে হবে। (যেমন:
									<code>REACT_APP_API_URL</code>)</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Storage: প্রজেক্টের একদম root
										directoryতে একটি <code>.env</code> ফাইল তৈরি করে সেখানে এগুলো স্টোর করা
									হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Access: কোডের ভেতর এগুলো
									<code>process.env.REACT_APP_VARIABLE_NAME</code> দিয়ে অ্যাক্সেস করা যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Environment Specific: ডেভেলপমেন্ট, প্রোডাকশন বা
									টেস্টের জন্য আলাদা আলাদা ফাইল (যেমন: <code>.env.development</code>, <code>.env.production</code>) তৈরি
									করা সম্ভব।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>এটি সিকিউরিটি নিশ্চিত করে কারণ সেনসিটিভ কী-গুলো
								সরাসরি গিটহাবে বা সোর্স কোডে ওপেন থাকে না। এছাড়া, লোকাল হোস্ট এবং লাইভ সার্ভারের জন্য আলাদা আলাদা API
								URL হ্যান্ডেল করা অনেক সহজ হয়।</p>
    `,
  },
  {
    id: 83,
    title: "Build Process কী?",
    content: `
<p>React-এর build process হলো source
								code-কে একটি optimized, production-ready version-এ রূপান্তর করার
								প্রক্রিয়া, যাতে অ্যাপটি ব্রাউজারে দ্রুত লোড হয় এবং হালকা (lightweight) থাকে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Transpilation: * JSX এবং আধুনিক
									JavaScript (ES6+)কে ব্রাউজার-ফ্রেন্ডলি জাভাস্ক্রিপ্টে রূপান্তর করা হয়।<div
										style="display:contents" dir="auto">
										<ul>
											<li style="list-style-type:circle">এর জন্য সাধারণত Babel ব্যবহার করা হয়।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Bundling: * হাজার হাজার ছোট ছোট মডিউল (JS, CSS,
									images) একত্রিত করে একটি বা কয়েকটি নির্দিষ্ট ফাইলে আনা হয়।
										<ul>
											<li style="list-style-type:circle">এটি করতে Webpack বা Vite
												ব্যবহার করা হয়।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Minification &amp; Optimization: * কোড থেকে অপ্রয়োজনীয়
									স্পেস এবং কমেন্ট সরিয়ে ফেলা হয়।
										<ul>
											<li style="list-style-type:circle">Tree Shaking: যে কোডগুলো প্রজেক্টে ব্যবহৃত
												হয়নি, সেগুলো বাদ দিয়ে দেওয়া হয়।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">ভ্যারিয়েবলগুলোর নাম ছোট করে ফাইলের সাইজ কমানো হয়।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Output: * শেষে একটি
									<code>build/</code> বা <code>dist/</code> ফোল্ডার তৈরি হয় যেখানে সব
									স্ট্যাটিক ফাইল থাকে।
										<ul>
											<li style="list-style-type:circle">এই ফাইলগুলো সরাসরি সার্ভার বা CDNএ ডেপ্লয় করা
												যায়।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>ডেভেলপমেন্টের সময় আমরা অনেক বড় কোড বা অনেক লাইব্রেরি
								ব্যবহার করি যা সরাসরি ব্রাউজারে দিলে সাইট স্লো হয়ে যাবে। বিল্ড প্রসেস সেই কোডকে কম্প্রেস করে
								পারফরম্যান্স বহুগুণ বাড়িয়ে দেয়।</p>
    `,
  },
  {
    id: 84,
    title: "React.memo vs useMemo",
    content: `
<p>React.memo এবং
								useMemo উভয়ই performance optimization-এর জন্য ব্যবহৃত হয়, তবে এদের
								ব্যবহারের ক্ষেত্র এবং উদ্দেশ্য ভিন্ন।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<h3>React.memo</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Higher-Order Component (HOC): এটি একটি ফাংশনাল
									কম্পোনেন্টকে র্যাপ (wrap) করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Re-render Avoidance: যদি কম্পোনেন্টের
									props পরিবর্তন না হয়, তবে এটি কম্পোনেন্টটিকে পুনরায় রেন্ডার হতে দেয় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Pure Component Behavior: এটি মূলত ক্লাস কম্পোনেন্টের
									<code>PureComponent</code>এর মতো কাজ করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Usage: কম্পোনেন্ট লেভেল অপ্টিমাইজেশন (Component-level
									optimization)।</li>
							</ul>
						
						
							<h3>useMemo</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Hook: এটি একটি রিঅ্যাক্ট হুক যা কোনো নির্দিষ্ট
									valueকে মেমোইজ (memoize) করে রাখে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Expensive Calculation: কোনো জটিল হিসাব-নিকাশ বা
									ক্যালকুলেশন বারবার না করে শুধুমাত্র dependency পরিবর্তন হলেই তা পুনরায় রান করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Usage: ফাংশনাল কম্পোনেন্টের ভেতরে ব্যবহৃত হয় (Inside
									functional component)।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>পার্থক্য এক নজরে:</h3>
						
						
							<table>
								<tbody>
									
										<tr>
											<td>বৈশিষ্ট্য</td>
											<td>React.memo</td>
											<td>useMemo</td>
										</tr>
									
									
										<tr>
											<td>ধরন</td>
											<td>Higher-Order Component (HOC)</td>
											<td>React Hook</td>
										</tr>
									
									
										<tr>
											<td>কী মেমোইজ করে?</td>
											<td>পুরো কম্পোনেন্ট (Component)</td>
											<td>নির্দিষ্ট ভ্যালু বা রেজাল্ট (Value/Result)</td>
										</tr>
									
									
										<tr>
											<td>কখন কাজ করে?</td>
											<td>যখন Props পরিবর্তন হয় না</td>
											<td>যখন Dependency Array পরিবর্তন হয় না</td>
										</tr>
									
									
										<tr>
											<td>কোথায় লিখব?</td>
											<td>কম্পোনেন্ট ডিক্লেয়ারেশনের বাইরে</td>
											<td>কম্পোনেন্ট বডির ভেতরে</td>
										</tr>
									
								</tbody>
							</table>
						
						
							<hr />
						
						
							<h3>প্রয়োজনীয় উদাহরণ (Code Snippet):
							</h3>
						
						
							
							
							<pre><code style="white-space:pre-wrap;word-break:break-all">// React.memo: কম্পোনেন্ট অপ্টিমাইজেশন
const MyComponent = React.memo(({ name }) =&gt; {
  return &lt;div&gt;{name}&lt;/div&gt;;
});

// useMemo: ক্যালকুলেশন অপ্টিমাইজেশন
const memoizedValue = useMemo(() =&gt; {
  return expensiveCalculation(count);
}, [count]);</code></pre>
    `,
  },
  {
    id: 85,
    title: "SSR কী?",
    content: `
<p>SSR (Server-Side Rendering) হলো এমন
								একটি প্রক্রিয়া যেখানে React component-এর HTML content সরাসরি সার্ভারে
								জেনারেট করা হয় এবং ব্রাউজারে পাঠানো হয়। এর ফলে পেজ দ্রুত লোড হয় এবং SEO-তে অনেক সুবিধা
								পাওয়া যায়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">CSR vs SSR: সাধারণ রিঅ্যাক্ট অ্যাপগুলো CSR
										(Client-Side Rendering) ব্যবহার করে, যেখানে ব্রাউজার সব কম্পোনেন্ট রেন্ডার করে। কিন্তু
									SSRএ সার্ভার থেকেই প্রাথমিক HTML রেন্ডার হয়ে আসে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Initial Load: ইউজার খুব দ্রুত কন্টেন্ট দেখতে পায় কারণ
									ব্রাউজারকে জাভাস্ক্রিপ্ট ডাউনলোড এবং এক্সিকিউট হওয়ার জন্য অপেক্ষা করতে হয় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">SEO Friendly: সার্চ ইঞ্জিনগুলো (যেমন: Google) সরাসরি
									পূর্ণাঙ্গ HTML ফাইল পায়, যা ইনডেক্সিং-এর জন্য খুবই কার্যকর।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Frameworks: বর্তমানে Next.jsএর মতো
									ফ্রেমওয়ার্ক ব্যবহার করে খুব সহজে SSR ইমপ্লিমেন্ট করা যায়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>যদি আপনার অ্যাপটি কন্টেন্ট-নির্ভর হয় এবং আপনি চান যে
								সেটি গুগল সার্চে উপরের দিকে থাকুক, তবে SSR সেরা সমাধান। এটি স্লো ইন্টারনেট কানেকশনেও
								ইউজারকে দ্রুত কন্টেন্ট দেখাতে সাহায্য করে।</p>
    `,
  },
  {
    id: 86,
    title: "CSR vs SSR",
    content: `
<p>CSR (Client-Side Rendering) এবং
								SSR (Server-Side Rendering) হলো React অ্যাপ রেন্ডার করার দুটি ভিন্ন অ্যাপ্রোচ। এদের
								কাজের ধরন এবং সুবিধাগুলো নিচে আলোচনা করা হলো:</p>
						
						
							<h3>CSR (Client-Side Rendering)</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Rendering Process: ব্রাউজার প্রথমে একটি মিনিমাল HTML
									ফাইল এবং একটি বড় JS bundle লোড করে। এরপর ব্রাউজারে React JS এক্সিকিউট হয়ে ডাইনামিক্যালি কম্পোনেন্টগুলো
									রেন্ডার করে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: প্রাথমিক লোড কিছুটা স্লো হতে পারে (যেহেতু
									বড় JS ফাইল ডাউনলোড হয়), তবে একবার লোড হয়ে গেলে পেজ নেভিগেশন খুব ফাস্ট হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">SEO: এটি SEO-র জন্য চ্যালেঞ্জিং কারণ অনেক সময় সার্চ
									ইঞ্জিন ক্রলাররা জাভাস্ক্রিপ্ট রান করার আগেই পেজটি স্ক্র্যাপ করে ফেলে।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use: সাধারণ <code>Create React App</code> বা
									<code>Vite</code> দিয়ে তৈরি অ্যাপগুলো CSR ফলো করে।</li>
							</ul>
						
						
							<h3>SSR (Server-Side Rendering)</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Rendering Process: সার্ভার নিজেই React
									কম্পোনেন্টগুলোকে HTML-এ কনভার্ট করে এবং ব্রাউজারে একটি পূর্ণাঙ্গ HTML ফাইল পাঠায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Performance: প্রাথমিক পেজ লোড খুব দ্রুত হয় কারণ ইউজার
									সাথে সাথেই কন্টেন্ট দেখতে পায়। ব্রাউজারকে JS bundle-এর জন্য অপেক্ষা করতে হয় না।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">SEO: এটি SEO-র জন্য সেরা কারণ সার্চ ইঞ্জিনগুলো শুরুতেই
									সব কন্টেন্টসহ HTML ফাইল পায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Hydration: কন্টেন্ট দেখানোর পর ব্রাউজারে React পুনরায়
									সক্রিয় হয় যাতে ইউজার ইন্টারঅ্যাকশন (যেমন: ক্লিক, টাইপ) কাজ করে। একে Hydration বলা হয়।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use: সাধারণত Next.js
									ফ্রেমওয়ার্ক ব্যবহার করে এটি ইমপ্লিমেন্ট করা হয়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>পার্থক্য এক নজরে:</h3>
						
						
							<table>
								<tbody>
									
										<tr>
											<td>বৈশিষ্ট্য</td>
											<td>CSR</td>
											<td>SSR</td>
										</tr>
									
									
										<tr>
											<td>রেন্ডারিং কোথায় হয়?</td>
											<td>ইউজারের ব্রাউজারে</td>
											<td>ওয়েব সার্ভারে</td>
										</tr>
									
									
										<tr>
											<td>প্রথম লোড টাইম</td>
											<td>কিছুটা বেশি (Slow)</td>
											<td>অনেক কম (Fast)</td>
										</tr>
									
									
										<tr>
											<td>SEO</td>
											<td>তুলনামূলক কঠিন</td>
											<td>অনেক সহজ ও উন্নত</td>
										</tr>
									
									
										<tr>
											<td>সার্ভার লোড</td>
											<td>কম (ব্রাউজার কাজ করে)</td>
											<td>বেশি (সার্ভার রেন্ডার করে)</td>
										</tr>
									
								</tbody>
							</table>
    `,
  },
  {
    id: 87,
    title: "React Portal কী?",
    content: `
<p>React Portal হলো এমন একটি ফিচার যা
								কোনো কম্পোনেন্টের কন্টেন্টকে তার Parent DOM Hierarchy-র বাইরে অন্য একটি DOM
									Node-এ রেন্ডার করতে দেয়।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Normal Rendering: সাধারণত একটি রিঅ্যাক্ট কম্পোনেন্ট
									তার প্যারেন্ট কম্পোনেন্টের ভেতরেই DOM-এ রেন্ডার হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Outside the Tree: পোর্টাল ব্যবহার করে আপনি
									কম্পোনেন্টটিকে প্যারেন্টের বাইরে (যেমন: সরাসরি <code>&lt;body&gt;</code>এর নিচে) রেন্ডার করতে পারেন।
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Common Use Cases: এটি মূলত Modals,
									Tooltips, Dropdowns, এবং Popups তৈরি করতে ব্যবহৃত
									হয়, যাতে প্যারেন্টের <code>overflow: hidden</code> বা <code>z-index</code> জনিত সমস্যা এড়ানো যায়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Consistency: যদিও DOM পজিশন আলাদা হয়, তবুও এটি
									রিঅ্যাক্টের Context এবং Event Bubbling স্বাভাবিকভাবেই বজায় রাখে।
								</li>
							</ul>
						
						
							<hr />
						
						
							<h3>প্রয়োজনীয় উদাহরণ (Code Snippet):
							</h3>
						
						
							<p>JavaScript</p>
						
						
							<h1></h1>
						
						
							<p>
								<code>import ReactDOM from &#x27;react-dom&#x27;;<br/><br/>const Modal = ({ children }) =&gt; {<br/>  // এটি &#x27;modal-root&#x27; নামক আলাদা একটি ID-তে রেন্ডার হবে<br/>  return ReactDOM.createPortal(<br/>    &lt;div className=&quot;modal&quot;&gt;<br/>      {children}<br/>    &lt;/div&gt;,<br/>    document.getElementById(&#x27;modal-root&#x27;)<br/>  );<br/>};</code>
							</p>
						
						
							<h3>কেন ব্যবহার করবে?</h3>
						
						
							<p>যখন কোনো এলিমেন্টকে (যেমন মোডাল) স্ক্রিনের একদম উপরে
								দেখাতে হয় এবং প্যারেন্ট এলিমেন্টের CSS স্টাইল তাকে বাধা দেয়, তখন পোর্টাল সবচেয়ে কার্যকর সমাধান।</p>
    `,
  },
  {
    id: 88,
    title: "Error Boundary কী?",
    content: `
<p>Error Boundary হলো একটি বিশেষ
								React component যা তার child components-এর runtime
									errors খুঁজে বের করে (catch করে) এবং পুরো অ্যাপ ক্র্যাশ হওয়া থেকে বাঁচিয়ে একটি
								fallback UI (যেমন: &quot;Something went wrong&quot; মেসেজ) প্রদর্শন করে।</p>
						
						
							<h3>Key Points:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Class Components Only: বর্তমানে শুধুমাত্র
									Class Componentsকেই Error Boundary হিসেবে তৈরি করা যায় (জীবনচক্রের
									<code>componentDidCatch</code> বা <code>getDerivedStateFromError</code> মেথড ব্যবহার করে)।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">What it Catches: এটি নিচের ক্ষেত্রগুলোতে হওয়া এরর ধরতে
									পারে:
										<ul>
											<li style="list-style-type:circle">Rendering প্রসেসের সময়।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">Lifecycle methodsএর ভেতর।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">Child components-এর Constructorsএর ভেতর।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">What it Cannot Catch: এটি কিছু নির্দিষ্ট ক্ষেত্রে এরর
									ধরতে পারে না:
										<ul>
											<li style="list-style-type:circle">Event handlers (যেমন: ক্লিক হ্যান্ডলারের ভেতর
												ভুল কোড)।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">Asynchronous code (যেমন:
												<code>setTimeout</code> বা <code>Promises</code>)।</li>
										</ul>
									
									
										<ul>
											<li style="list-style-type:circle">সার্ভার সাইড রেন্ডারিং (SSR)।</li>
										</ul>
									
								</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Graceful Fallback: এটি ব্যবহারকারীকে একটি সাদা স্ক্রিন
									(White Screen of Death) দেখার বদলে একটি সুন্দর ইন্টারফেস দেখানোর সুযোগ দেয়।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি ব্যবহার করবে?</h3>
						
						
							<p>একটি বড় অ্যাপ্লিকেশনে কোনো একটি ছোট কম্পোনেন্টে এরর
								থাকলে যেন পুরো সাইটটি বন্ধ হয়ে না যায়, সেজন্য Error Boundary ব্যবহার করা জরুরি। এটি অ্যাপের স্থায়িত্ব
								(Stability) বাড়ায়।</p>
    `,
  },
  {
    id: 89,
    title: "Production Optimization Steps",
    content: `
<p>React অ্যাপকে production-ready করতে
								পারফরম্যান্স এবং bundle size উন্নত করার জন্য নিচের optimization steps
								গুলো অনুসরণ করা হয়:</p>
						
						
							<h3>Key Steps:</h3>
						
						
							<ul>
								<li style="list-style-type:disc">Build for Production: <code>npm run build</code>
									কমান্ডের মাধ্যমে কোডকে minified এবং optimized static filesএ রূপান্তর
									করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Code Splitting: <code>React.lazy</code> এবং
									<code>Suspense</code> ব্যবহার করে কোডকে ছোট ছোট chunksএ ভাগ করা হয়, যাতে প্রতিটি
									রাউটে শুধু প্রয়োজনীয় JS লোড হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Tree Shaking: বিল্ড করার সময় অব্যবহৃত (unused) কোডগুলো
									অটোমেটিক রিমুভ করে দেওয়া হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Memoization: <code>React.memo</code>,
									<code>useMemo</code> এবং <code>useCallback</code> ব্যবহার করে অপ্রয়োজনীয় re-renders
									এবং জটিল ক্যালকুলেশন কমানো হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Lazy Loading Assets: ইমেজ বা কম্পোনেন্টগুলো কেবল তখনই
									লোড করা হয় যখন সেগুলো স্ক্রিনে প্রয়োজন হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Optimize Images: ইমেজ কম্প্রেস করা এবং আধুনিক ফরম্যাট
									(যেমন: WebP) ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Avoid Inline Functions/Objects: JSX-এর ভেতরে সরাসরি
									ফাংশন বা অবজেক্ট ডিক্লেয়ার করা এড়িয়ে চলা হয়, যাতে প্রতি রেন্ডারে সেগুলো নতুন করে তৈরি না হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">SSR or SSG: প্রথমবার পেজ লোড দ্রুত করতে এবং
									SEO উন্নত করতে Server-Side Rendering বা Static Generation ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">CDN Usage: স্ট্যাটিক ফাইলগুলো দ্রুত লোড করার জন্য
									Content Delivery Network (CDN) ব্যবহার করা হয়।</li>
							</ul>
						
						
							<ul>
								<li style="list-style-type:disc">Bundle Analysis: <code>webpack-bundle-analyzer</code>
									বা <code>source-map-explorer</code> দিয়ে চেক করা হয় কোন প্যাকেজটি বেশি জায়গা নিচ্ছে।</li>
							</ul>
						
						
							<hr />
						
						
							<h3>কেন এটি জরুরি?</h3>
						
						
							<p>ডেভেলপমেন্ট মোডে React-এ অনেক ওয়ার্নিং এবং এক্সট্রা
								চেক থাকে যা অ্যাপকে স্লো করে দেয়। প্রোডাকশন বিল্ডে এগুলো থাকে না এবং কোড অনেক বেশি কম্প্রেসড থাকে, ফলে
								ইউজারের জন্য সাইটটি অনেক ফাস্ট হয়।</p>
    `,
  },
];
