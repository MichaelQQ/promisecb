# promisecb [![Build Status](https://travis-ci.org/MichaelQQ/promisecb.svg?branch=master)](https://travis-ci.org/MichaelQQ/promisecb)
Make callback function return as Promise

## Install
```
$ npm install --save promisecb
```

## Usage
#### promisecb(fn, [args])

```js
import promisecb from 'promisecb';

const setTimeoutPromise = promisecb(setTimeout, 5000);
setTimeoutPromise
  .then(() => {
    console.log('5 seconds');
  });
```

With **this**
```js
import promisecb from 'promisecb';

const queryPromise = promisecb(database.query.bind(database), 'something');
queryPromise
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
```

With **async/await (ES2017)**
```js
import promisecb from 'promisecb';

const asyncFunc = async () => {
  try {
    const result = await promisecb(database.query.bind(database), 'something');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## License
MIT &copy; [MichaelQQ](http://michaelqq.com)
