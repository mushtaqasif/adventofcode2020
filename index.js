(async function() {
    await require('./01/one')();
    await require('./01/two')();
    await require('./02/one')();
    await require('./02/two')();
    await require('./03/one')();
    await require('./03/two')();
    await require('./04/one')();
    await require('./04/two')();
    await require('./05/one')();
    await require('./05/two')();
})();
