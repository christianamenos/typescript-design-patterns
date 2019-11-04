# Typescript design patterns

With this repository I want to learn more about TypeScript and design patterns. I will use it to apply patterns, documenting the usage and the situations in which they can be a good choice.

## Setup

Init the project with npm:

```bash
npm init
```

Install typescript as dependency with npm:

```bash
npm i -D typescript
```

Build the solution using the compile script defined in `package.json`:

```bash
npm run compile
```

The previous command will keep watching for changes and compiling them.

Execute the generated file running: `$ node helloworld.js`

## Testing

Using [Jest](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)

Install jest:

```bash
npm i jest @types/jest ts-jest -D
```

Running tests:

```beash
npm run test
```
