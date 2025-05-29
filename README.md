# AI Coaching Platform

This repository contains a basic monorepo structure for an AI-driven coaching platform. It is organised into the following directories:

- **frontend/** – Next.js application with Tailwind CSS and ShadCN UI
- **backend/** – Node.js (Express + TypeScript) REST API
- **ai-integrations/** – Reusable modules for OpenAI, transcription and sentiment analysis
- **database/** – Schema and seed scripts for PostgreSQL (Supabase)

The codebase is intentionally lightweight and uses placeholders where third‑party APIs would normally be integrated. See each folder for additional details.

## Quick Start

1. Copy `.env.example` files to `.env` in both `frontend` and `backend`.
2. Install dependencies using `npm install` in each folder.
3. Run `docker-compose up` to start both the API and the frontend in development mode.

## Deployment

- The frontend is ready to deploy to Vercel or AWS Amplify.
- The backend can be containerised and deployed to AWS (ECS or Lambda).
- Adjust environment variables to point at your Supabase project and AWS resources.


