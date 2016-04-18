## Contributing

Thank you for thinking about contributing. This is your first step in being a part of the Chat-Template contributors. Here are a few guidelines that will help you along the way.

### Opening an Issue

If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been [reported or fixed](https://github.com/sevenleaps/chat-template/issues). You can search through existing issues and Pull Requests to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

For code issues please include:
* Chat-Template version
* React version
* Browser version
* A code example or link to a repo, gist or running site.

For feature requests please include a title and a description of the feature requested and how it is beneficial and if possible a screenshot or mockup of what you would like to look like.

#### Issue Guidelines

Please use an adequate title that captures the issue. Don't put in items with only: "Doesn't work" or "Not displaying". The more descriptive you are, the more likely someone else will discover the issue in future.

Please don't group multiple topics into one issue, but instead each should be its own issue.

And please don't just '+1' an issue. It spams the maintainers and doesn't help move the issue forward.

### Submitting a Pull Request

Chat-Template is a community project, so pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

If you are fixing an issue or adding a new feature, please begin the title with [Issue #X], where X is the number of the issue on BitBucket.

#### Getting started

Please create a new branch from an up to date master on your fork.

1. Fork the Chat-Template repository on BitBucket
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/chat-template.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to BitBucket with `git push --set-upstream origin my-topic-branch`.
5. Visit BitBucket and make your pull request.

If you have an existing local repository, please update it before you start, to minimize the chance of merge conflicts.
```js
git remote add upstream git@bitbucket.org:seven-leaps/chat-template.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
npm update
```

#### Testing

To run the tests, go to the root folder and type the following commands:
```js
npm run test
```
Test coverage is limited at present, but where possible, please add tests for any changes you make.

#### Coding style

You must follow the coding style of the current code base. Chat-Template uses eslint, so if possible, enable linting in your editor to get realtime feedback. The linting rules are also run when Webpack recompiles your changes, and can be run manually with `npm run lint`.

When you submit a pull request, they are run again by Wercker so make sure your code is linted correctly.

### License

By contributing your code to the seven-leaps/chat-template BitBucket repository, you agree to license your contribution under the MIT license.
