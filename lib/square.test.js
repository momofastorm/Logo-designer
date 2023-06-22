const { Square } = require('./shapes');

const shape = new Square('mst','red','white');
shape.setColor("blue");

let output = `
    <svg width="300px" height="200px"  xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" style="fill:${shape.shapeColor};"/>
        <text x="100" y="120" font-size="50" text-anchor="middle" fill="${shape.color}">${shape.text}</text>    
    </svg>`;        

test('Testing Square SVG', ()=>expect(shape.render()).toBe(output));
