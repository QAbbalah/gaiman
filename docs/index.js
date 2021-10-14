/* Code generated by Gaiman version 0.1.0-alpha
 * https://github.com/jcubic/gaiman
 */
function parse_cookies(cookies) {
    const result = {};
    cookies.split(/\s*;\s*/).forEach(function(pair) {
        pair = pair.split(/\s*=\s*/);
        var name = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair.splice(1).join('='));
        result[name] = value;
    });
    return result;
}

function is_node() {
    return typeof process !== 'undefined' &&
        process.release.name === 'node';
}

class WebAdapter {
    constructor() {
        this._term = $('body').terminal($.noop, { greetings: false, exit: false });
    }
    ask(message) {
        return this._term.read(message);
    }
    echo(string) {
        this._term.echo(string);
    }
    get(url) {
        return fetch(url).then(res => res.text());
    }
    async post(url, data) { }
}

var cookie, argv, term;
if (is_node()) {
    argv = process.argv;
} else {
    cookie = parse_cookies(document.cookie);
    term = new WebAdapter();
}

(async function () {
    async function $_ask_color() {
        term.echo(`Pick color?`);
        let $_color = await term.ask(`color? `);;
        if ($$__m = String($_color).match(/red/i)) {
            term.echo(`I like red, it remiding me of sun at sunset`);
        } else if ($$__m = String($_color).match(/blue/i)) {
            term.echo(`I like blue, it remind me of sky`);
        } else if ($$__m = String($_color).match(/black/i)) {
            term.echo(`I like black it remind me of the darkest night`);
        } else {
            term.echo(`sorry I only know red, blue and black colors`);
        }
        term.echo(`Do you want to check another color?`);
        let $_confirm = await term.ask(`yes/no? `);;
        if ($$__m = String($_confirm).match(/yes/i)) {
            await $_ask_color();
        } else {
            term.echo(`Ok, have a nice day`);
        }
    }
    term.echo(`Welcome stranger, can you tell me what is your name?`);
    let $_name = await term.ask(`name? `);;
    if ($_name) {
        term.echo(`Hi, ${ $_name }. Welcome to the game generated by Gaiman`);
        term.echo(`Do you want to play?`);
        let $_confirm = await term.ask(`yes/no? `);;
        if ($$__m = String($_confirm).match(/yes/i)) {
            await $_ask_color();
        } else {
            term.echo(`Ok you can close the tab`);
        }
    }
}());