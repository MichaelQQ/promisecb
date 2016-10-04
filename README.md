# cbPromise
Make callback function return as Promise

## Install
```
$ npm install --save cbPromise
```

## Usage
#### cbPromise(fn, [args])

```js
import cbPromise from 'cbPromise';

const setTimeoutPromise = cbPromise(setTimeout, 5000);
setTimeoutPromise
  .then(() => {
    console.log('5 seconds');
  });
```

With **this**
```js
import cbPromise from 'cbPromise';

const queryPromise = cbPromise(database.query.bind(database), 'something');
queryPromise
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.error(error);
  });
```

With **async/await (ES2017)**
```js
import cbPromise from 'cbPromise';

const asyncFunc = async () => {
  try {
    const result = await cbPromise(database.query.bind(database), 'something');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## License
MIT &copy; [MichaelQQ](http://michaelqq.com)
