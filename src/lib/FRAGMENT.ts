export const FRAGMENT = `
{
    ...,
    "alt": select(defined(alt) => alt, defined(asset->altText) => asset->altText),
    "lqip": select(defined(asset->metadata.lqip) => asset->metadata.lqip),
}
`