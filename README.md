
Install command:

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path .
```


```shell
❯ node --version
v24.11.1
❯ pnpm --version
10.24.0
```


Repro commands:

```sh
pnpm dlx sanity@next schema extract --enforce-required-fields --path=src/lib/sanity/schema.json
pnpm dlx sanity@next typegen generate
```

```sh
pnpm dlx https://pkg.pr.new/@sanity/cli@23db03f schema extract --enforce-required-fields --path=src/lib/sanity/schema.json
pnpm dlx https://pkg.pr.new/@sanity/cli@23db03f typegen generate
```