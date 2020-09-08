# omnibug.io

This repository is for the main website, omnibug.io. It is built using [11ty](https://www.11ty.dev/), a simple static 
site generator and [TailwindCSS](https://tailwindcss.com/).

## Instructions

### Installation

Run `yarn install` to install the dependencies locally.

### Development

To develop, you can run `yarn dev` to build the website and automatically update as you develop (via a file watcher). 
If you'd prefer to build the website manually, you can run `yarn build`, which builds the production version (minifies 
code, removes unused CSS, etc.). Note that currently SCSS files do not trigger a new build when using `yarn dev`.

