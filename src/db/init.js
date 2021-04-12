const Database = require('./config')

const initDb = {

    async init() {

        const db = await Database();

        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INIT,
            days_per_week INIT,
            hours_per_day INIT,
            vacation_per_year INIT,
            value_hour INIT
            )`
        );

        await db.exec(`CREATE TABLE jobs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INIT,
            total_hours INIT,
            created_at DATETIME
            )`
        );

        await db.run(`INSERT INTO profile (
                name,
                avatar,
                monthly_budget,
                days_per_week,
                hours_per_day,
                vacation_per_year,
                value_hour
            ) VALUES (
                'Jess',
                'https://github.com/Jess-Carmona.png',
                3000,
                5,
                5,
                4,
                75
            )`
        );

        await db.run(
            `INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                'Pizzaria',
                2,
                45,
                1617514376018
            )`
        );

        await db.run(
            `INSERT INTO jobs (
                name,
                daily_hours,
                total_hours,
                created_at
            ) VALUES (
                'OneTwo',
                5,
                30,
                1617514376018
            )`
        );

        await db.close()
    }
}

initDb.init()




