# Xiaokun (Ken) Zhong Personal Website

Static Astro site for a one-page researcher profile connecting scientific ML, autonomous research, and AI for Biology. Preserve the existing minimalist layout when updating content.

## Editing Content

- Homepage copy and section data live in `src/pages/index.astro`.
- Update profile links, news, publications, experience, and additional projects in the arrays at the top of that file.
- The Research section leads with the ICML 2026 paper and explicit co-first-author attribution, followed by SciML AutoResearch and independent computational protein design.
- Keep project status explicit: published research, implemented ongoing workflow, or ongoing computational evaluation. Protein-design scores are not experimental binding evidence; update the dated submission/validation status only when supported by records.
- The AutoResearch workflow diagram describes implemented methods, not a performance result. Keep unpublished metrics, internal logs, and candidate sequences out of the public site.
- Publication links include the canonical [ICML proceedings](https://proceedings.mlr.press/v306/wang26cc.html), arXiv, and public code. The protein project's [competition challenge](https://proteinbase.com/competitions/anthropic-adaptyv-2026/challenges/pmhc) is context, not an affiliation or endorsement. Add project code links only after verifying they are public.
- The page description is set in `src/pages/index.astro`, with the same default in `src/layouts/Layout.astro`.
- Replace `public/resume.pdf` to update the CV link at `/resume.pdf`.
- Additional projects use compact text rows so the main research remains the focus.

## Commands

```sh
npm run dev
npm run build
npm run preview
```
