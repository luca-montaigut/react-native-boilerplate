# React Native Boilerplate

## Folder structure

```sh
src
├── assets
├── components
│   ├── atoms
│   │   ├── Layout.tsx
│   │   ├── Link.tsx
│   │   ├── Switch.tsx
│   │   └── Text.tsx
│   ├── folder-rules.txt
│   └── index.ts
├── navigators
├── screens
│   ├── WelcomeScreen.tsx
│   └── folder-rules.txt
├── themes
│   ├── ThemeContext.tsx
│   ├── index.ts
│   └── themes.ts
├── translations
│   ├── en
│   │   ├── common.json
│   │   └── index.ts
│   ├── fr
│   │   ├── common.json
│   │   └── index.ts
│   ├── i18n.js
│   └── resources.ts
└── utilities
    ├── constants.ts
    └── helpers.ts

```

_ref: generated using `tree src`._

## Packages

- typescript
- @typescript-eslint
- eslint-react-hook
- @react-native-community/eslint-config
- prettier
- husky (pre-commit)
- i18next
- react-native-dotenv
- react testing library

## Rename the project

```
npx react-native-rename YourProjectName
```

## Theming

Styling was handle with a Context provider and a custom hook (useTheme) to use it.
The theme provider detect the color scheme of the device (light or dark) and use it by default or when it change,
but you can also switch the theme manually.

You can use your the custom hook "useTheme" like this :

```jsx
// Component.jsx

const Component = props => {
  const { theme, isDarkMode, setDarkMode } = useTheme();

  return (
    <View style={styles(theme).container}>
      <Switch
        onValueChange={switchState => setDarkMode(switchState)}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.mainBackground,
    },
  });
```

## Recommended conventions

- Conventionnal Commits (https://www.conventionalcommits.org/en/v1.0.0/)
- Changelog (https://keepachangelog.com/en/1.0.0/)
- Semantic Versioning (https://semver.org/)
