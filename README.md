# Functional Requirements
## Data Display

1. The page shall display a list of monitored services.
2. The page shall show for each service:
  - Service Name
  - Endpoint
  - Uptime (%)
  - Total Downtime
  - Incidents
  - Status
3. The page shall display aggregated availability statistics at the top.
4. The page shall visually distinguish statuses using colors:
  - Green – Available
  - Red – Unavailable
  - Orange – Degraded
5. The page shall display:
  - Duration
  - Description (if available)
# Non-Functional Requirements
1. Maintainability
  - The page shall use reusable UI components.
  - The page shall separate UI logic from data-fetching logic.
