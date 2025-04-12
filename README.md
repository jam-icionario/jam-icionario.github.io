
# Jamicionario

## Deploying

When data is updated, it's necessary to update and deploy:

1. Update data with the Scores Processor — see the [README](ScoresProcessor/README.md) file there.
2. WIP: ???
3. Save changes with git: commit, push.
4. Then deploy with:  
`ng deploy --base-href=/pages/ --repo=https://github.com/<username>/<repositoryname>.git`

## Development server

To start a local development server, run in console:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Installing

These are instructions for your one-time setup.

1. Install git.
2. Then install Angular following the instructions below according to your <abbr title="Operating System">OS</abbr>.

### MacOS

Install Angular:

1. Install [HomeBrew](https://brew.sh/):
    `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install node via brew:
    `brew install node`

3. Install Angular:
    `npm install -g @angular/cli`

You can see the NPM installed packages with `npm list -g`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
