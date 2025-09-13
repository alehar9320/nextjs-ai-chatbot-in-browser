# Copilot Instructions for nextjs-ai-chatbot-in-browser

## Project Overview

- **Framework:** Next.js 14 (App Router)
- **Purpose:** AI chatbot template using Vercel AI SDK, supporting multiple LLM providers (xAI, OpenAI, Anthropic, Cohere, etc.)
- **UI:** Built with shadcn/ui, Tailwind CSS, and Radix UI primitives
- **Persistence:** Neon Serverless Postgres (chat/user data), Vercel Blob (file storage)
- **Auth:** Auth.js for authentication

## Architecture & Key Patterns

- **App Structure:**
  - Main logic in `app/(chat)/` and `app/(auth)/` directories
  - Artifacts (code, image, sheet, text) in `artifacts/` with client/server separation
  - Shared UI components in `components/`, including chat, sidebar, editors, and primitives in `components/ui/`
- **Data Flow:**
  - Chat messages and artifacts flow through server actions and React Server Components
  - API routes in `app/(chat)/api/` and `app/(auth)/api/` handle backend logic
- **Model Providers:**
  - Default: xAI `grok-2-1212` (see `lib/ai/`)
  - Easily switch providers via AI SDK config
- **Authentication:**
  - Auth.js config in `app/(auth)/auth.config.ts`
  - Actions in `app/(auth)/actions.ts`

## Developer Workflows

- **Install dependencies:**
  ```bash
  pnpm install
  ```
- **Run locally:**
  ```bash
  pnpm dev
  ```
- **Testing:**
  - Vitest config in `vitest.config.ts`
  - Playwright config in `playwright.config.ts`
- **Environment Variables:**
  - Copy `.env.example` to `.env` and fill in secrets
  - Use `vercel env pull` to sync with Vercel

## Conventions & Patterns

- **Artifacts:**
  - Each type (code, image, sheet, text) has both client and server logic in `artifacts/<type>/`
- **Components:**
  - UI primitives in `components/ui/` follow shadcn/ui conventions
  - Chat logic in `components/chat.tsx`, message handling in `components/message.tsx`
- **Routing:**
  - Uses Next.js App Router, layouts in `app/layout.tsx`, page logic in `app/(chat)/page.tsx`
- **Styling:**
  - Tailwind CSS config in `tailwind.config.ts`
  - Custom themes via `components/theme-provider.tsx`

## Integration Points

- **AI SDK:**
  - Unified API for LLMs in `lib/ai/`
- **Database:**
  - Neon Postgres config in `drizzle.config.ts`
- **File Storage:**
  - Vercel Blob integration in `lib/artifacts/`
- **Authentication:**
  - Auth.js setup in `app/(auth)/auth.config.ts`

## Example: Adding a New Artifact Type

1. Create `artifacts/<newtype>/client.tsx` and `server.ts`
2. Add UI in `components/` as needed
3. Update data flow in relevant server actions and API routes

---

For more details, see:

- [README.md](../README.md)
- [AI SDK Docs](https://sdk.vercel.ai/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Next.js Docs](https://nextjs.org/docs)

---

**Feedback:** If any section is unclear or missing, please specify what needs improvement or additional detail.
