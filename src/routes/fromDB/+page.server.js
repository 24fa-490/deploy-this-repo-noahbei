
// import sql from '$lib/server/database';

// export async function load() {
//     const rows = await sql`
//     SELECT
//         containernumber,
//         nameofship,
//         containersize,
//         datecontainershipped
//     FROM
//         containers`;

//     console.log({rows});

//     return { containers: rows };
// }

import POSTGRES_URL from '$lib/server/database';
import { createPool } from '@vercel/postgres';

export async function load() {
    try{
        const db = createPool({ connectionString: POSTGRES_URL })
        const { rows: containers } = await db.query(
            `SELECT 
                containernumber,
                nameofship,
                containersize,
                datecontainershipped
            FROM 
                containers`
        )
        return {
            containers: containers
        }
    } catch (error) {

    }
}