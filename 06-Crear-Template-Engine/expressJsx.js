const fs = require('fs');

function getKeysFromOptions(options) {
    const { settings, _locals, ...objectkeys } = options;
    return Object.keys(objectkeys);
};

/* Tener la logica asi, genera más legibilidad */
function getRenderedContent(content, options) {

    /* Al object(options) express le inyecta una propiedades
    extras, y debemos desaparecerlas */
    const keys = getKeysFromOptions(options);
    let contentString = content.toString();

    for (let key of keys) {
        contentString = contentString.replace(
            new RegExp(`\{${key}\}`, 'gi'), options[key]);
    }

    return contentString;
}

function expressJsx(filePath, options, callback) {
    fs.readFile(filePath, function(err, content) {
        if (err) {
            return callback(err);
        }

        const rendered = getRenderedContent(content, options);
        return callback(null, rendered)
    });
};

module.exports = expressJsx;