# xtend-results
Passes a value through two functions and merges the resulting objects

```
npm install --save xtend-results
```

```javascript
var extendResults = require("xtend-results");

function makeFullName(person) {
    return {
        name: person.firstName + " " + person.lastName
    };
}

function makeFullLocation(person) {
    return {
        location: person.region + ", " + person.country
    };
}

var renderPerson = extendResults([makeFullName, makeFullLocation]);

renderPerson({
    firstName: "Thug",
    lastName: "Aim",
    country: "CA",
    region: "ON",
});

/*
{
    name: "Thug Aim",
    location: "ON, CA"
}
 */
```
