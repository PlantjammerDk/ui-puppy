# UI Puppy 🐶

A ReactJS UI library inspired by Eva Design

View stories: https://plantjammerdk.github.io/ui-puppy

## Contribute

### Continuous integration (Github Actions)

Whenever you `push`, Github Actions will run. We have one called `chromatic`, that checks for visual regressions using the Storybook stories. So stories === tests. And one called `release` that make a release on npm. Only pushes to master, i.e., pull requests, will create "real" npm releases. So when you simply push your branch, it will create a so-called canary release, that can still be installed, but it will be clear that it's not an official release.

If you want to skip these actions, add `skip ci` to your commit message.

### Styling

The project uses TailwindCSS. In order to get the most out of this library, please follow these guidelines:

1. Strive to only use the utility classes in Tailwind - no custom classes or css files. Using the `style` prop is fine.
2. Try to limit colors to built-in colors such as `bg-gray-100` and the extended colors in `tailwind.config.js`. This allows consumers to overwrite the colors to use for their theme. If we use hex codes or add more custom colors, they won't be customizable and custom colors won't even work, because they are local to this project.

### Creating a component

1. Create your component in the `src/MyComponent.tsx` folder.
2. Create a `MyComponent.stories.tsx` file in the `stories` folder.
3. Develop and test it using `yarn storybook`.

### Submitting/deploying

1. When you are ready submit a pull request.
2. Add labels to the pull request, particularly patch/minor/major. These are used by the Auto package to bump the version automatically.

If you want to test if it will build the package, run `yarn build`.

## TODO

- [x] Automatic deployment when merging pull requests
- [ ] Chromatic tests
- [x] CI

## Library setup

The library is set up as a combination of these two guides:

https://www.pluralsight.com/guides/react-typescript-module-create

https://www.learnstorybook.com/design-systems-for-developers/react/en/distribute/
