# ReproducerForAngularIssue14081

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

# Steps for reproduction of 14081

1. Visit http://localhost:4200/ --> the outlets show "Greetings from the legacy component"
2. click "New" -> the outlets show "Greetings from the modern component"
3. click "Old" -> the outlets show both greetings!
4. click "New" -> the outlets continue to show both greetings!
