import {defineQuery} from 'groq'
import {FRAGMENT} from './FRAGMENT'

export const TEST_QUERY = defineQuery(`
{
    "page": *[_type == "testDoc"][0] {
        _id,
        "image": ${FRAGMENT},   
    }
}
`)