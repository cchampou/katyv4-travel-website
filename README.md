# Backend for Katy_v4's Japan tourism website

## Installing Corepack for Package Manager Management

To simplify package manager management, you can use Corepack. Here's how to enable Corepack:

```bash
corepack enable
```

You can also use [Volta](https://volta.sh/) to manage node and package manager versions

## Installing Packages

If you would rather not utilize volta, you can install the necessary packages for your project using pnpm. If you haven't installed pnpm yet, you can do so with npm. Here's how:

```bash
npm install -g pnpm
```

Next, you can install the required packages using pnpm:

```bash
pnpm install
```

## Getting Started

To run the development server:

```bash
# development with watch mode
pnpm dev

# development
pnpm start

# production mode (need pnpm build)
pnpm prod
```

Your server run at [http://localhost:8000](http://localhost:8000) in development mode.

## Test

```bash
# unit tests
$ pnpm test

# e2e tests
$ pnpm test:e2e

# test coverage
$ pnpm test:cov
```

## Documentation

- Framework: [Nest](https://docs.nestjs.com/)

## Configuration

There are a lot of configurations to simplify your code experience :

- Prettier to format
- ESLint to lint and prevent errors
- Fix files with linter on pre-commit which also sort imports
- Check on commit message to ensure it has the right shape

## Style guide & Commitlint

All staged files will be format using Prettier and ESLint and updated files will be added automatically.

Your commits will pass into a linter to ensure there are no fail inputs.

Examples:

- `chore: Remove unused imports`

- `feat(BSJ-126): Add button to claim bounty and save it in database`
