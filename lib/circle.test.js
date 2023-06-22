const { Circle } = require('./shapes');

const shape = new Circle('mst','red','white');
shape.setColor("blue");

let output =`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${shape.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.color}">${shape.text}</text>
        </svg>`;        

test('Testing Circle SVG', ()=>expect(shape.render()).toBe(output));
