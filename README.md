# :sunglasses: React Native Template Material Design

<p>
  <a href="https://github.com/azuy212/react-native-template-material-design#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/azuy212/react-native-template-material-design/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/azuy212/react-native-template-material-design/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Clean and minimalist React Native template for a quick start with Material Design and proper Navigation in Typescript.

## :star2: Features

- Elegant usage directly within the [React Native CLI](https://github.com/react-native-community/cli).
- Proper Typescript implementation.
- Strict Lint rules with auto fix on save (on VSCode) using [ESLint](https://github.com/eslint/eslint).
- Navigation implementation using [react-navigation](https://reactnavigation.org).
- Tab based navigation implementation using [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation)
- Material Design implementation using [react-native-paper](https://reactnativepaper.com).
- Icons support using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).
- Proper commit message linting using [commitlint](https://github.com/conventional-changelog/commitlint), [commitizen](https://github.com/commitizen/cz-cli) and [husky](https://github.com/typicode/husky).

## :pencil2: Usage

```sh
npx react-native init MyApp --template react-native-template-material-design
```


See the below table to find out which version of the relevant package is used

#### React Native <=> Template Version

| Package Name                  | Version   |
| ----------------------------- | --------- |
| react-native                  | 0.68      |
| react-navigation              | 6.0       |
| react-native-paper            | 4.12      |
| react-native-vector-icons     | 9.1       |
| Typescript                    | 4.4       |

## :warning: React Native CLI

This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`) for the below command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

If you tried the above and still get the react-native-template-react-native-template-material-design: Not found error, please try adding the `--ignore-existing` flag to [force npx to ignore](https://github.com/npm/npx#description) any locally installed versions of the CLI and use the latest.

Further information can be found here: https://github.com/react-native-community/cli#about

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.