# uzairsaleem.dev

My portfolio. Next.js 16, React 19, TypeScript and plain CSS, deployed on Vercel.

Live at [uzairsaleem.dev](https://uzairsaleem.dev).

## Run it

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Where things live

- `src/app/page.tsx`: the home page
- `src/components/portfolio/work-data.ts`: the four projects and their case studies
- `src/components/portfolio/portfolio.css`: the whole theme
- `src/app/resume/resume-data.ts`: the résumé. The home page experience list, the `/resume` page, the PDF and the Word file all read from here
- `src/app/blog/posts.ts`: the writing

## Résumé files

```bash
npm run resume        # rebuild the PDF from /resume
npm run resume:docx   # rebuild the Word file
```

## Tests

```bash
npm test
```
