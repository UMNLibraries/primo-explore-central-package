module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true, 
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "angular/controller_name": 0
    },
    "globals": {
        "angular": false
    },
    "plugins": [
        "jasmine", 
        "angular"
    ]
};
