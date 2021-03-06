const state = require('./state');

function activationGreetings(chan) {
    chan.appendLine("Calva activated. Happy Clojure coding! ❤️");
    chan.appendLine("Please file any feature requests or bug reports here: https://github.com/PEZ/clojure4vscode/issues");
    chan.appendLine("I will also respond to any @pez mentions in the #editors channel of the Clojurians Slack: https://clojurians.slack.com/messages/editors/");
    chan.appendLine("");
    chan.appendLine("BIG FAT NOTE: All keyboard shortcuts have been changed to use prefix CTRL+ALT+V, this due to: https://github.com/PEZ/clojure4vscode/issues/9");
    chan.appendLine("");

    if (!state.config().lint) {
        chan.appendLine("");
        chan.appendLine("Note: Autolinting is disabled. You need to enable \"clojure4vscode.lintOnSave\" in your editor settings to use it. But first install Joker: https://github.com/candid82/joker")
    }
    chan.appendLine("-".repeat(3));
}

module.exports = {
    activationGreetings
};