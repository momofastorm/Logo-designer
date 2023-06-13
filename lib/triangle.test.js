const { Triangle } = require('./shapes');

const shape = new Triangle('mst','red','white');
shape.setColor("blue");

let output = `    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="white" points="50,150 150,50 250,150" />
        <text x="150" y="140" font-size="50" text-anchor="middle" fill="blue">mst</text>
    </svg>`;        

test('Testing Triangle SVG', ()=>expect(shape.render()).toBe(output));

console.log(shape.render());