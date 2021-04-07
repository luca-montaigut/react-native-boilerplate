# React Native Boilerplate

## Folder structure :

```
src
├── assets
│   ├── audios
│   ├── fonts
│   ├── icons
│   └── images
├── components
│   ├── Layout.tsx
│   ├── Text.tsx
│   └── folder-rules.txt
├── navigators
├── screens
│   ├── WelcomeScreen.tsx
│   └── folder-rules.txt
├── services
├── themes
│   ├── ThemeContext.tsx
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

## Theming

Styling was handle with a Context provider and a custom hook (useTheme) to use it.
The theme provider detect the color scheme of the device (light or dark) and use it by default or when it change,
but you can also switch the theme manually.

You can use your the custom hook "useTheme" like this :

```
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

## Conventions

- Conventionnal Commits (https://www.conventionalcommits.org/en/v1.0.0/)
- Changelog (https://keepachangelog.com/en/1.0.0/)
- Semantic Versioning (https://semver.org/)
