# YMC — Built for what comes next

> **Concept website and pre-build blueprint.** YMC explores a proposed independent Layer 1 network. This repository does not represent a live blockchain, deployed token, working validator set, or production benchmark.

## Frontend stack

- **React 18 + TypeScript** for composable UI and safer iteration
- **Vite** for local development and production builds
- **Tailwind CSS** with a custom YMC design-token layer
- **shadcn-style UI primitives** built from accessible React components, with class-variance-authority, clsx and tailwind-merge
- **Lucide React** icons
- **GitHub Actions** workflow for production build and GitHub Pages deployment

## Run locally

Requires Node.js 20 or newer.

    npm install
    npm run dev

Create a production build:

    npm run build
    npm run preview

Type-check the app:

    npm run typecheck

## Website experience

- Responsive editorial-style hero with custom network topology illustration
- Proposed architecture and layered stack explorer
- Interactive capacity / utilization model with adjustable inputs
- Click-through conceptual transaction lifecycle
- Interactive token allocation chart and allocation details
- Security and trust principles
- Roadmap with clearly labeled concept / future states
- Developer configuration example with copy interaction
- Mobile navigation, keyboard-friendly controls, and reduced-motion support

## Conceptual architecture

- **Network model:** Independent Layer 1 concept (not implemented)
- **Consensus proposal:** DPoS + IBFT 2.0 (not validated)
- **Execution target:** EVM compatibility (not implemented or tested)
- **Block-time target:** Approximately 1.2 seconds (design target, not measured)
- **Throughput target:** 3,500 transactions per second (illustrative only)

The network lab is a simplified capacity arithmetic demonstration. It is not a simulator of consensus, transaction queues, network latency, hardware, or real-world throughput.

## Proposed token allocation

| Allocation | Share | Amount |
|---|---:|---:|
| Ecosystem & liquidity | 40% | 400,000,000 YMC |
| Network rewards | 20% | 200,000,000 YMC |
| Team & engineering | 20% | 200,000,000 YMC |
| Treasury | 10% | 100,000,000 YMC |
| Partner grants | 10% | 100,000,000 YMC |
| **Total** | **100%** | **1,000,000,000 YMC** |

Proposed vesting concepts include network rewards over four years and team allocation with a one-year cliff followed by three years of linear vesting. These are planning inputs, not deployed token rules.

## Roadmap concept

1. **Research:** Define architecture, assumptions, governance principles, and the technical brief.
2. **Specification:** Make consensus, token economics, and security assumptions testable.
3. **Prototype:** Consider a prototype and reproducible tests after review and resourcing.
4. **Validation:** Independent security review and benchmarks before production claims.

No delivery dates are committed. Roadmap stages are not represented as completed engineering.

## GitHub Pages

A workflow at .github/workflows/deploy.yml builds the Vite app and deploys the dist directory. In repository settings, select **Settings → Pages → Build and deployment → Source → GitHub Actions** to enable this deployment path.

## Project structure

    src/
      components/ui/  reusable button and card primitives
      lib/            shared utilities
      App.tsx         page sections and interactive concept demos
      index.css       design system and responsive styles
      main.tsx        React entry point

## Important disclaimer

YMC is a conceptual blueprint and pre-build infrastructure project. No live blockchain, mainnet, testnet, token contract, validator set, or production benchmark is represented as operational. Architecture, metrics, tokenomics, vesting, and milestones remain subject to technical feasibility, security review, legal review, and final governance. Nothing in this repository constitutes investment advice or an offer to sell a digital asset.
