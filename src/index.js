function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-codepen'));
        }
    };
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
