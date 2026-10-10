# Engineering Constitution (clean-room R6 pilot)

- **tests-are-witness** — every behavior change lands with `node:test` tests
  under `test/` at the same commit as the code; `node --test` must pass at the
  delivered commit.
- **declared-surface** — every exported function under `src/` declares its
  contract in prose at the definition site; renames update the declaration in
  the same commit.
- **small-commits** — one logical change per commit; no inert files in
  delivered commits.
- **module-local-change** — a new pure text helper lives in its own module
  file under `src/` with its own test file under `test/`; unrelated files are
  not touched by its delivery.
