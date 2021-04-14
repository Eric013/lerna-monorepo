# Monorepo project: Lerna + Yarn + Typescript + React-Native Expo + Next.js

## Start project

```sh
yarn install
```

## Install a dependency on a workspace

```sh
yarn workspace @lerna-monorepo/mobile add expo-font -W
```

## Start mobile application test react-native expo

```sh
npx lerna run --scope @lerna-monorepo/mobile start --stream
```

> --stream : keep the outputs of the commands

## References

- [Monorepo setup](https://baltuta.eu/posts/typescript-lerna-monorepo-the-setup)
- [Monorepo step by bstep](https://blog.usejournal.com/step-by-step-guide-to-create-a-typescript-monorepo-with-yarn-workspaces-and-lerna-a8ed530ecd6d)
- [Monorepo with Expo](https://medium.com/@mauriciord/how-to-insert-an-expo-project-in-a-monorepo-9005ee763c7e)
