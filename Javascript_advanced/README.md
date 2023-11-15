<h1>JavaScript Functions</h1>
<h2>Learning Objective</h2>
<h3>What is lexical scoping in JavaScript:</h3>
<p>Lexical scoping refers to the way variable access is determined by the position of the variables within the code.</p>
<ul>
  <li>Lexical scope: Lexical scope means that the scope of a variable is determined at the time the code is written and remain unchanged during runtime.</li>
  <li>How it Works: When you declare a variable inside a function, that variable is accessible within that function, and any nested functions inside it can also access the same variable. However, the variable is not accessible outside of that function or its nested functions.</li>
</ul>
<p>Lexical scoping is fundamental to how JavaScript handles variable scope and helps to create a clear and predictable environment for managing variables in your code.</p>
<hr>
<h3>What is closure in JavaScript:</h3>
<p>Closures occur when a function is defined inside another function (the outer function) and has access to the outer functions variables. This inner function retains access to the outer functions variables even after the outer function has finished executing.</p>
<p>A closure "closes over" its surrounding scope, preserving access to variables.</p>
<ul>
<li>Outer function: The function that contains the inner function.</li>
<li>Inner function: The function defined inside the outer function.</li>
</ul>