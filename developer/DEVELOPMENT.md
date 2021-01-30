# iziModalWraps

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A simple wrapper for iziModal.

---

### Prerequisites (Development on iziModalWrap)

- Typescript (tested with 4.1.x branch, more to come)

### Development Workflow.

- Update code in `src/`
- Build code
    - Watch: `npm run build_watch`
    - One time: `npm run build`
- Create unit tests in the `test` directory. can test via `npm run test`.
- Verify test coverage `>=90%` of previous step tests with `npm run cover:check`.
- Committing:
    - `git add ...` (try to break up different changes into different commits)
    - `git cz` (follow steps to define commit changes)
    - `git push`

##### Once the code above is ready to be published to npm (this is for main package maintainer).

- Check to see if this qualifies as a major, minor, or patch release: `npm run changelog`
- Bump the NPM version following Semantic Versioning by using one of these approaches:
    - Specify major, minor, or patch and let NPM bump it: `npm version [major | minor | patch] -m "chore(release): Bump version to %s."`
    - Explicitly provide the version number such as 1.0.0: `npm version 1.0.0 -m "chore(release): Bump version to %s."`
- Post version scripts will automatically run to update the version/changelog in the system then push to repo with proper tags.
- Publish: `npm publish`

##### Notes:
- Autofix lint if IDE does not: `npm run lint_auto` (this is not built into any other commands so much be setup in your own process).

`npm version` steps
---

#### New Alpha

- Patch: `npm version prerelease --preid=alpha -m "chore(release): Bump version to %s."`
- Minor: `npm version preminor --preid=alpha -m "chore(release): Bump version to %s."`
- Major: `npm version premajor --preid=alpha -m "chore(release): Bump version to %s."`
- Final: `npm version #.#.# -m "chore(release): Bump version to %s."`
