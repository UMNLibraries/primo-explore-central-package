# Primo CENTRAL_PACKAGE
Custom JavaScript, HTML, CSS, and images for the Primo AngularJS UI. The files in this package are shared between all campus views (TWINCITES, DULUTH, MORRIS, CROOKSTON).

## Setup

1. Clone the [Primo Development Environment repository](https://github.com/ExLibrisGroup/primo-explore-devenv) and follow the setup instructions.

    tl;dr:

    ```bash
    git clone git@github.com:ExLibrisGroup/primo-explore-devenv.git
    cd primo-explore-devenv
    npm install
    ```

    *Note that the Primo Development Environment only works with node.js version 6 at this time*.

2. From the project's root directory, clone this repository to `primo-explore/custom/CENTRAL_PACKAGE`:

    ```bash
    cd primo-explore/custom
    git clone git@github.umn.edu:gpeterso/primo-explore-central-package.git CENTRAL_PACKAGE
    ```

3. Install the project dependencies: 

    ```bash
    cd CENTRAL_PACKAGE
    npm install
    ```

## Local Development
Run `npm run start`. This task builds the custom.js and custom1.css files, watches for js/css changes, and launches a Browsersync proxy that sits between the localhost and the UMN Primo sandbox. To preview local changes in the sandbox, point a browser to `localhost:8003/primo-explore/?vid={campus view ID}`. For example http://localhost:8003/primo-explore/?vid=TWINCITIES.

To preview local changes in production, run `npm run start-prod` instead.

## Deployment
1. Run `npm run pkg` and select the number for  `CENTRAL_PACKAGE` when prompted. The package will be written to `primo-explore-devenv/packages/CENTRAL_PACKAGE.zip`. 

2. In the Primo Back Office, navigate to Primo Utilities > UI Customization Package Manager, and upload the CENTRAL_PACKAGE.zip file. 

3. Run Deploy All > Views. 

## Updating the Color Scheme
Edit the `colors.json` file, and then run `npm run gen-color-scheme`. This will rebuild the `app-colors.css` file. It's a good idea to do this following Primo upgrades (which sometimes introduce new HTML elements).

If you which to override any colors defined in this file, it's best to do so in a separate css file. 

## Running Tests

### Unit Tests
`npm run test-unit`

### Functional (end-to-end) Tests
`npm run test-e2e`

## Getting Help
- [Primo Documentation](https://knowledge.exlibrisgroup.com/Primo/Product_Documentation)
- [#primodev Slack Chanel](https://igelu-eluna-siwg.slack.com/messages/primodev)
- [Primo Email List](https://el-una.org/about/mailing-lists/primo-email-list/)
- [AngularJS 1.6 Documentation](https://code.angularjs.org/1.6.7/docs/guide)
- [AngularJS Material Documentation](https://material.angularjs.org/latest/) 
- Dev Tool Documentation:
    - [Babel](https://babeljs.io/)
    - [Browserify](http://browserify.org/)
    - [Gulp](https://gulpjs.com/)
    - [Karma](http://karma-runner.github.io/0.12/intro/installation.html)
    - [Jasmine](https://jasmine.github.io/1.3/introduction.html)
    - [NPM](https://docs.npmjs.com/)
    - [Protractor](http://www.protractortest.org/)
