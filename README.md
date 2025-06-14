# market-place

A marketplace web application built with React and SCSS.

## Commit Message Guidelines

When committing changes, classify your commit message using one of the following types:

- **feat**: Introduce a new feature.  
- **fix**: Resolve a bug.  
- **chore**: Update tooling or dependencies without modifying source or tests.  
- **refactor**: Improve code structure without adding features or fixing bugs.  
- **docs**: Update documentation (e.g., README, markdown files).  
- **style**: Format code or styling (whitespace, semicolons, etc.).  
- **test**: Add or correct tests.  
- **perf**: Enhance performance.  
- **ci**: Modify CI/CD configuration.  
- **build**: Adjust build scripts or external dependencies.  
- **revert**: Revert a previous commit.

---

## Example Commit Messages


```bash
feat: add product filters dropdown to the product list page  
fixcorrect: off-by-one error in pagination logic  
chore: update React and React Router to the latest versions  
refactor: simplify useCart hook implementation  
docs: improve README with setup instructions  
style: apply Prettier formatting  
test: add unit tests for Navigation component  
perf: memoize expensive calculations in ProductList  
ci: add GitHub Actions workflow for linting  
build: upgrade Vite config to support environment variables  
revert: undo commit 1a2b3c4 due to regression in checkout feature  
```

## Current state of the client side

Just created a ListPage that is supposed to list the items a user adds to his/her "list".
Need to build the backend to fetch the data and store it on FE since passing it from component to component is shit.
Also will create - on FE - a component/page where users can create listings (upload photo, add tags, write description, price, etc)
No user signup needed yet, users can create listings anonymously for now.


--