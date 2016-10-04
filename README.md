# cbPromisify [![Build Status](https://travis-ci.org/MichaelQQ/cbPromisify.svg?branch=master)](https://travis-ci.org/MichaelQQ/cbPromisify)
Make callback function return as Promise

## Install
```
$ npm install --save cbPromisify
```

## Usage
#### cbPromisify(fn, [args])

```js
import cbPromisify from 'cbPromisify';

const setTimeoutPromise = cbPromisify(setTimeout, 5000);
setTimeoutPromise
  .then(() => {
    console.log('5 seconds');
  });
```

With **this**
```js
import cbPromisify from 'cbPromisify';

const queryPromise = cbPromisify(database.query.bind(database), 'something');
queryPromise
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
```

With **async/await (ES2017)**
```js
import cbPromisify from 'cbPromisify';

const asyncFunc = async () => {
  try {
    const result = await cbPromisify(database.query.bind(database), 'something');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## License
MIT &copy; [MichaelQQ](http://michaelqq.com)
