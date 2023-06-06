const { Circle, Triangle, Square } = require('./shapes');
const { writeFile } = require('fs');

const genLogo = ({text,color,shape,shapeColor}) => {
        if(shape == "circle") writeFile('./dist/logo.svg', new Circle(text,color,shapeColor).render(), () => {
            console.log('logo.svg is created in dist folder!');
        });

        if(shape == "square") writeFile('./dist/logo.svg', new Square(text,color,shapeColor).render(), () => {
            console.log('logo.svg is created in dist folder!');
        });

        if(shape == "triangle") writeFile('./dist/logo.svg', new Triangle(text,color,shapeColor).render(), () => {
            console.log('logo.svg is created in dist folder!');
        });
};



module.exports = genLogo;