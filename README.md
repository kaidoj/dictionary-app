# Dictionary application (React, Redux)

Dictionary application where all data is held in localStorage. No update for domains added. Just delete and add an updated one again.

Valids and invalids are in separated arrays. Better to manage them.
```js 
class DictionaryModel {
  constructor(name) {
    this.uuid = uuidv1();
    this.name = name;
    this.domains = {
      valids: [],
      invalids: []
    };
  }
}
```

### Screenshot

![Alt text](/screenshot.png?raw=true "Screenshot")

### Usage

```npm install``` then ```npm start```

### Testing

```npm test```

### Todo

  - Filters/Searches
  - Infinity loaders for results or pagination
  - More tests