# path-fixer

A small package made exactly for one function: correcting file paths after creating a production build using a create-react-app.

For use change: 
```
"scripts": {
    ...
    "build": "react-scripts build",
    ...
}
```
On the:
```
"scripts": {
    ...
    "build": "react-scripts build && cra-path-fixer start"",
    ...
}
```