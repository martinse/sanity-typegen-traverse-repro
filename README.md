
Install command:

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path .
```


```shell
❯ node --version
v24.11.1
❯ pnpm --version
10.11.1
```


Repro commands:

```sh
pnpm dlx sanity@next schema extract --enforce-required-fields --path=src/lib/sanity/schema.json
pnpm dlx sanity@next typegen generate
```