# Database

SQL schema for PostgreSQL (hosted on Supabase). Use `schema.sql` to create tables for clients and sessions. Additional tables can be added for assessments, notes and other features.

Example setup using the `psql` CLI:

```bash
psql $DATABASE_URL -f schema.sql
```
