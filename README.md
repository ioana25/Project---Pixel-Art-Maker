<h2 id="project-pixel-art-maker-for-udacity-scholarship-front-end-web-dev-by-student-ioana-enescu">Project <strong>Pixel Art Maker</strong> for Udacity Scholarship: Front-End Web Dev by student Ioana Enescu</h2>

<p><img src="https://i.imgur.com/ze4NAsO.png" alt="enter image description here" title=""></p>

<h2 id="features">Features</h2>

<p>This web page application allows the users to draw pixel art on a customizable canvas. <br>
It’s pretty simple and fun. <br>
The user chooses the height, width and color. <br>
The color can be easily chosen. <br>
After all, the user hit “Send” and the grid is generated. Also, to use the color, it has to click inside any square.</p>



<h2 id="in-the-back">In the back:</h2>

<p>it starts with the function ‘makeGrid()’; <br>
- inside the function we have defined the variables and the two ‘for’ loops; <br>
- to choose the height and width, I use a ‘for’ loop and inside each one I appended  (defines a row in an HTML table) and  (defines a standard cell in an HTML table) <br>
- after finishing the function it follows the event listener for coloring the cells <br>
- in the end of the code we have the event that calls the function at ‘submit’, and the grid is generated</p>



<h2 id="heading">Heading</h2>

<p>Also the important part is to remove the  after the grid is generated, because doing that, the table get reset and we avoid the bug that generate the grid over and over again.</p>

<h2 id="live-demo">Live demo</h2>

<p><a href="https://jsfiddle.net/IoanaEnescu/0onc0a0s/1/">https://jsfiddle.net/IoanaEnescu/0onc0a0s/1/</a> </p>

<p>02.01.2018</p>
