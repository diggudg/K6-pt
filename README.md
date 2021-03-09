# k6 Typescript Framework
A starter framework for k6 load tests written in TypeScript.


## Quick Start :zap:

Install the [k6 performance test tool](https://docs.k6.io/docs/installation).

Clone this repository and open in the IDE of your choice.

Install dependencies using: 

`npm install` 

in the terminal (you need to have [yarn](https://yarnpkg.com/getting-started/install) installed on your machine).

Now run the test using the following command: 

`npm go:k6` 

This will run the [soak.test.ts](/src/tests/soak.test.ts) script, using **k6**.

## Run with Monitoring 

![Grafana Dashboard](https://grafana.com/api/dashboards/11837/images/7658/image)

Ensure you have [docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

Start the monitors using the following command: 

`npm monitors` 

Go to **localhost:3000** in your browser to login to Grafana with the username '**admin**' and the password '**admin**'.

Add the [k6 dashboard](https://grafana.com/grafana/dashboards/11837) to **Grafana** by following these instructions: [Importing a Dashboad](https://grafana.com/docs/grafana/latest/reference/export_import/)

Now run the test using the following command: 

`npm go:docker` 

This will run the [soak.test.ts](/src/tests/soak.test.ts) script, using **k6** installed in a docker, which outputs the results to **influxDB**. **Grafana** is used to visualise the results.

**Please NOTE:** If you're running in **Windows** you'll need to use the full path for the local directories in the **volumes** sections of the [docker-compose.yaml](docker-compose.yml) file. See the [k6 documentation](https://docs.k6.io/docs/docker-on-windows) for more details.



### **src** folder

All the code can be found in the `src` folder. And is written in TypeScript using [types provided by k6](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/k6).

#### The types folder

This currently contains an interface for a 'User' in the system, specifying that they need a first name, last name, username and password.

### **tests** folder

This is where you create your performance tests using the modules from the rest of the framework. `actions` are never called directly, but always through the `role` performing them (see the `actions` and `roles` folders above).

## Checking your Code

Use: 

`npm check-types` 

to check your code against type safety and the rules set in your [tsconfig.json file](tsconfig.json). You can also have this running while you work using: 

`npm check-types:watch`.

**PLEASE NOTE** I haven't set up `ESLint` and `Prettier` which this framework, but it's recommended that you do so.

## Building your Code

[Babel](https://babeljs.io/) handles the transpiling of the code (see the [.babelrc](.babelrc) file in the root directory), while [Webpack](https://webpack.js.org/) builds it (see the [webpack.config.js](webpack.config.js) file in the root directory).

## Debugging k6 :bug:

It's easy to debug `k6` scripts. See the [k6 documentation](https://docs.k6.io/docs/debugging) for more details.

## Running in CI/CD Pipelines 

`k6` has been designed to work with your `CI/CD` pipeline whatever tool you're using. There are examples for [GitHub Actions](https://blog.loadimpact.com/load-testing-using-github-actions), [GitLab](https://blog.loadimpact.com/integrating-load-testing-with-gitlab), [CircleCI](https://github.com/loadimpact/k6-circleci-example), [Jenkins](https://github.com/loadimpact/k6-jenkins-example) and many others. 


## Problems with this Framework 

If you notice any problems or improvements that could be made to this example framework, I accept PRs or you can raise an issue on the [k6 community forum](https://community.k6.io/)

## TO DO

