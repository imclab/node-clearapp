## node-clear

access the local sqlite database of [Clear](http://realmacsoftware.com/clear)

## install

    npm install --save clearapp

## api

### `total(callback)`

Call callback with the total number of tasks currently in Clear.

### `all(callback)`

Call callback with a list of individual tasks in Clear.

### `setUser(user)`

Pull the Clear database of a user other than `process.env.USER` specifies.
Returns `this`.
