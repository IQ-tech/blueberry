const loader = require('pug-loader')

const MIXINS_REGEXP = /mixin ([^ (]+)/
const ARGS_REGEXP = /\((.*)\)$/m
const LAST_ARGS = /\)\((.*)\)/

module.exports = function (src) {
    
    this.cacheable && this.cacheable();
    const matches = src.trim().match(MIXINS_REGEXP)
    
    if (!matches) {
        return loader.call(this, src)
    }

    const name = matches[1];
    const args = src.trim().match(ARGS_REGEXP)[1]
    const attributes = src.trim().match(LAST_ARGS)
    const attr = attributes? attributes[1] : '{}'

    return loader.call(
        this,
        `${src}\nif contents\n\t\t\t\t+${name}(${args})&attributes(${attr})\n\t\t\t\t| !{contents}\nelse\n\t\t\t\t+${name}(${args})&attributes(${attr})\n`
    )
}