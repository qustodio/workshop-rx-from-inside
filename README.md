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

## Starting

Clone workshop:
```bash
git clone https://github.com/qustodio/workshop-rx-from-inside.git
```

Install dependencies:
```bash
yarn install
```

## How run tests?

All test:
```bash
yarn test --watch
```

Single test:
```bash
yarn test path/to/test.spec.js --watch
```

## How run sandbox

```bash
yarn sandbox
```

## Workshop structure

### Part 1 - Defining the Architecture

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
 6. Implement share and shareReplay operators

 **Goals:** 

At this point, you should be able to create your own operators and utilize endomorphisms and monoids in other aspects to compose infinitely.

**Exercises: Creation helpers** 

1. Implements map
2. Implements filter
3. Implements take
4. Implements scan
5. Implement first (from take)

### Part 3: Error handling

1. Handling errors with streams, using the tryCatch operator.

**Goals:** 

At this stage, you will be able to compose error-handling reactive streams. Remember that when capturing a stream, we should always return an observable.

**Exercises: Error handling helpers** 

1. Implements tryCatchOperator

### Part 4: combining observables

1. The importance of completing streams
2. Different ways of combining, merging, and concatenating.
3. IMPORTANT: foldables and monoids to simplify reasoning (functional tool).

**Goals:** 

At this point, you should feel comfortable using monoids and foldables to simplify reasoning. You should also be able to create your own combination operators.

**Exercises: combining observables**

1. Implement merge (variadic version)
2. Implement concat (variadic version)

### Part 5: The problem of nesting - the monadic perspective

1. How to reduce nesting complexity? 
2. What is a monad?

**Goals:** 

At this stage, you should understand what a monad is and how it helps us reason in a flat manner, avoiding the additional complexity that nesting introduces.

**Exercises: The problem of nesting**

1. Implement switchMap
2. Implement mergeMap


### Part 6: Operators that take other observables (in progress)

1. Observable as a first-class object

**Goals:** 

**Exercises: Operators that take other observables**

1. Implement takeUntil
2. Implement takeWhile

###  Conclusions

1. Why do observables compose so well? 
2. What are the components of this architecture? 
3. What algebraic data types have you used? 
4. How do algebraic data types facilitate reasoning?
5. Can you describe how redux-observable operates, perhaps provide an implementation?
6. The solutions can be found in the "feature/solutions" branch.





