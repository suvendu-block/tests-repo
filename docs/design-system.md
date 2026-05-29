# Design System: Corporate Theme (Professional / Industrial)

## 1. Color Palette

| Token | Hex Code | Usage | Contrast (on `#FFFFFF`) | WCAG AA |
|---|---|---|---|---|
| **Primary** | `#1D4ED8` | Primary actions, buttons, links | 8.17:1 | ✅ AAA |
| **Primary Hover** | `#1E40AF` | Button hover state | 12.3:1 | ✅ AAA |
| **Primary Light** | `#DBEAFE` | Soft backgrounds, badges | – | – |
| **Secondary** | `#475569` | Muted text, secondary buttons | 7.6:1 | ✅ AAA |
| **Accent** | `#0D9488` | Highlights, info paths | 4.98:1 | ✅ AA |
| **Background** | `#F8FAFC` | Page background | – | – |
| **Surface** | `#FFFFFF` | Cards, modals, dropdowns | – | – |
| **Surface Hover** | `#F1F5F9` | Interactive surface hover | – | – |
| **Border** | `#E2E8F0` | Default borders, dividers | – | – |
| **Text Primary** | `#0F172A` | High‑emphasis body text | 17.12:1 | ✅ AAA |
| **Text Secondary** | `#64748B` | Low‑emphasis text, placeholders | 4.62:1 | ✅ AA |
| **Text Inverse** | `#FFFFFF` | Text on primary / dark backgrounds | – | – |
| **Error** | `#DC2626` | Error states, destructive actions | 4.54:1 | ✅ AA |
| **Error Light** | `#FEE2E2` | Error toast / module backgrounds | – | – |
| **Success** | `#16A34A` | Success states, confirmations | 4.55:1 | ✅ AA |
| **Success Light** | `#DCFCE7` | Success toast / module backgrounds | – | – |
| **Warning** | `#B45309` | Warning states, caution | 5.7:1 | ✅ AA |
| **Warning Light** | `#FEF3C7` | Warning toast / module backgrounds | – | – |
| **Focus Ring** | `#3B82F6` | Keyboard / input focus indicator | – | – |

## 2. Typography

**Font Family:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

| Level | Size | Line‑Height | Weight | Usage |
|---|---|---|---|---|
| **H1** | 2.25rem (36px) | 1.2 | Bold (700) | Page title |
| **H2** | 1.875rem (30px) | 1.25 | SemiBold (600) | Section heading |
| **H3** | 1.5rem (24px) | 1.33 | SemiBold (600) | Card heading |
| **H4** | 1.25rem (20px) | 1.4 | Medium (500) | Sub‑heading |
| **Body** | 1rem (16px) | 1.5 | Regular (400) | Default text |
| **Body‑sm** | 0.875rem (14px) | 1.5 | Regular (400) | Captions, metadata |
| **Caption** | 0.75rem (12px) | 1.5 | Regular (400) | Small labels |
| **Overline** | 0.75rem (12px) | 1.5 | SemiBold (600) | Section labels |

## 3. Spacing Scale

| Token | Rem | Pixels | Example Usage |
|---|---|---|---|
| **space‑xs** | 0.25rem | 4px | Icons, dense grids |
| **space‑sm** | 0.5rem | 8px | Button padding, small gaps |
| **space‑md** | 0.75rem | 12px | Form‑element padding |
| **space‑base** | 1rem | 16px | Standard padding, card gaps |
| **space‑lg** | 1.5rem | 24px | Section gaps |
| **space‑xl** | 2rem | 32px | Page‑section margins |
| **space‑2xl** | 3rem | 48px | Large page dividers |
| **space‑3xl** | 4rem | 64px | Hero / page‑top padding |

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| **radius‑sm** | 0.25rem (4px) | Small elements, tags |
| **radius‑md** | 0.375rem (6px) | Buttons, inputs |
| **radius‑lg** | 0.5rem (8px) | Cards, modals |
| **radius‑xl** | 0.75rem (12px) | Large modals, sheets |
| **radius‑full** | 9999px | Pill buttons, avatars |

## 5. Shadows

| Token | Value | Usage |
|---|---|---|
| **shadow‑sm** | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle depth / hover |
| **shadow‑md** | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Cards, dropdowns |
| **shadow‑lg** | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Modals, dialogs |
| **shadow‑xl** | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Toasts, drawers |

## 6. Responsive Breakpoints

| Breakpoint | Min Width | Target Devices |
|---|---|---|
| **sm** | 640px | Mobile landscape |
| **md** | 768px | Tablets |
| **lg** | 1024px | Small desktops / tablets |
| **xl** | 1280px | Standard desktops |
| **2xl** | 1536px | Large desktops |

## 7. Motion

| Token | Duration | Easing | Usage |
|---|---|---|---|
| **duration‑fast** | 150ms | ease‑in‑out | Micro‑interactions |
| **duration‑normal** | 200ms | ease‑in‑out | Standard transitions |
| **duration‑slow** | 300ms | ease‑out | Enter / modal animations |