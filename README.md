## How to debug in typescript

In the tsconfig.json, certify that sourceMap key are true  

0. .env.example to.env
1. `yarn install`
2. [optional] ctrl + shift + b tsc:build
3. ctrl+ shift + d -> create a launch.json file
    1. "program" key pointing to the main file in dist/
4. Put the breakpoints and run