
class SVG {
    constructor(text, color, shapeColor) {
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    };
};

class Circle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    };

    print = () => `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`;
};

class Triangle extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    };

    print = () => `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="${this.shapeColor}" points="50,150 150,50 250,150" />
        <text x="150" y="140" font-size="50" text-anchor="middle" fill="${this.color}">${this.text}</text>
    </svg>`;
};

class Square extends SVG {
    constructor(text, color, shapeColor) {
        super(text, color, shapeColor);
    };

    print = () => `
        <svg width="300px" height="200px">
        <rect width="200" height="200" style="fill:rgb(0,0,255);"/>
        <text x="100" y="120" font-size="50" text-anchor="middle" fill="white">SVG</text>    
    </svg> `;
};

module.exports = {Circle, Triangle, Square};
