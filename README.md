# AiCoachingOS

This repository contains a skeletal implementation of an AI‑driven coaching platform.
It includes a Next.js frontend, an Express/TypeScript backend and utility
modules for AI integrations.  Each directory is self‑contained so the project
can be expanded as needed.

```
frontend/       # Next.js + Tailwind CSS client and coach dashboards
backend/        # Express REST API with JWT auth and AI helpers
ai-integrations/# Modules for GPT-4o, speech‑to‑text, etc
database/       # Example PostgreSQL schema
```

Existing scripts such as **skiptracer.py** remain for reference and do not
interfere with the new platform.

## Quick Start
1. Copy `.env.example` files to `.env` and supply your secrets.
2. Install dependencies inside each directory using `npm install`.
3. Run the backend:
   ```bash
   cd backend && npm run dev
   ```
4. Run the frontend in another terminal:
   ```bash
   cd frontend && npm run dev
   ```

## skiptracer Utility

The original repository contained a simple skip tracer. Its usage remains the
same:

```bash
python skiptracer.py "709 W High St, Portland, IN"
```

It queries public websites and returns any matching phone numbers. Only publicly
available information is used.
