## Storybook config

Storybook allows us to specify where is the config directory (default is `.storybook` folder in the root)

It also allows us to run specific binaries with specific features for each framework (ex: Storybook React, Storybook Html, Storybook Angular...), so in this folder we can define a config folder for each storybook version used in the project.

package.json script runned to develop with the Storybook react version:
`yarn node_modules/@storybook/react/bin/index.js -p 6006 -c .storybook/react`

html/pug version:
`node_modules/@storybook/html/bin/index.js -p 6008 -c .storybook/pug`

