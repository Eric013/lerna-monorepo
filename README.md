# Monorepo project: Lerna + Yarn + Typescript + React-Native Expo + Next.js

## Start le project

```sh
yarn install
```

## Installer une dépendance sur un workspace

```sh
yarn workspace @lerna-test/mobile add expo-font -W
```

## Start l'application react-native de test

```sh
npx lerna run --scope @lerna-test/mobile start --stream
```

> --stream : permet d'avoir les outputs de la command start du projet

## Références utilisées

- [Monorepo setup](https://baltuta.eu/posts/typescript-lerna-monorepo-the-setup)
- [Monorepo step by bstep](https://blog.usejournal.com/step-by-step-guide-to-create-a-typescript-monorepo-with-yarn-workspaces-and-lerna-a8ed530ecd6d)
- [Monorepo with Expo](https://medium.com/@mauriciord/how-to-insert-an-expo-project-in-a-monorepo-9005ee763c7e)
