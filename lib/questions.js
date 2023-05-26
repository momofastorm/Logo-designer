const questions = [
    {
        "type": "input",
        "name": "text",
        "message": "What are the three letters for you logo?",
        "validate": text => text.length < 4 || 'No more than three letters, please!'
    },
    {
        "type": "input",
        "name": "color",
        "message": "What color would you like your text?",   
        "default": "pink"
    },
    {
        "type": "list",
        "name": "shape",
        "message": "What shape would you like your logo to be?",   
        "choices": ["circle", "square", "triangle"]
    },
    {
        "type": "input",
        "name": "shapeColor",
        "message": "What color would you like your shape to be?",   
        "default": "black"
    }
];

module.exports = questions;