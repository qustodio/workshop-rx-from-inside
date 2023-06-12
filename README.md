# qrx

This repository is a workshop to explain the main concepts of RxJS starting from the implementation.

The main idea is to implement the key features to gain a deep understanding of the architecture and model proposed by reactive programming, as well as to explore functional concepts that are very useful for simplifying reasoning about the implemented types.

## Workshop mechanics

From the perspective of a type, what interests us is knowing how it is created, how it is combined, how it is transformed, and how it is destroyed. Therefore, this workshop will have unit tests to verify each aspect. Participants will have to implement creation operators, combination operators and transformation operators.

By default, the tests come with the ".skip" modifier. The idea is to gradually remove them until we have a fully functional library.

Once the operator is implemented (in teams), a Pull Request (PR) will be created and merged with the main branch, while ensuring that it passes the tests successfully.

It is very important that the added commits follow the Conventional Commits convention to ensure smooth integration in the CI (Continuous Integration) pipeline. The prefixes to be used are:

feat: for new features
fix: for bug fixes
docs: for documentation updates
style: for code style changes (e.g., formatting)
refactor: for code refactoring without adding new features or fixing bugs
test: for adding or modifying tests
chore: for other changes that do not affect the code (e.g., build configuration, dependencies)
Following this convention helps in maintaining a clean commit history and facilitates automated processes in the CI pipeline.

A sandbox.js file is also provided for live code testing. You can execute this file by using the command "yarn sandbox".

## How run tests?
```bash
yarn test --watch
```

## How run sandbox

```bash
yarn sandbox
```

## Workshop structure

### Part One - Defining the Architecture

1. Observable as value producer
2. Observer as a distributor of values, error signal, and completion.
3. Subscription as cancellation of value production.
4. Defining rules for error, cancellation and completion.

**Goals:** 

At this stage, you should be familiar with the concepts of hot observables and cold observables. Additionally, you should be able to propose alternatives for combining these behaviors (multicast).

**Exercises: Creation helpers** 

1. Implement from (iterators, strings and promises)
2. Implement of (for any value)
3. Implement interval (without completion)
4. empty (observable without values)

### Part 2: Operators - transforming values

 1. What is an operator? 
 2. Improving syntax for composing operators (pipe)
 3. IMPORTANT: Endomorphisms and monoids (functional tool).
 4. Extending the architecture: Subject and Replay Subject
 5. Implement share and shareReplay operators

 **Goals:** 

At this point, you should be able to create your own operators and utilize endomorphisms and monoids in other aspects to compose infinitely.

**Exercises: Creation helpers** 

1. Implements map
2. Implements filter
3. Implements take
4. Implements scan
5. Implements first

### Part 3: Error handling

5. Manejo de Errores
5. Operadores que toman otros observables
   ejemplo takeUntil
   ejercicio takeWhile
x. Manejo de Errores 
 1. Ejercico catchError
x CUIDADO CON LA CANCELACION, EL ORDEN IMPORTA PONER SHARE Y takeWhile AL FINAL
6. EL PROBLEA DE ANIDAMIENTO
 1. Observables que transforman a otros observables
 2. ejemplo swithMap
 3. Ejercicio mergeMap
 4. Observable como monadas
7. El problema se combinar observables
  1. Ejemplo concat
  1.1 Monoides + foldables = de dos a infinito
  2. ejercicio merge
Ejercicio del mundo real, autocompletacion + analitics de una appi js a rxjs