const noop = () => {};

require.extensions['.css'] = noop;
require.extensions['.ico'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.less'] = noop;
require.extensions['.scss'] = noop;

// To support older browser with polyfill
global.requestAnimationFrame = cb => setTimeout(cb, 0);

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
