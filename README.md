Overview
--
Percy is a visual testing tool that captures screenshots of your components or pages, compares them to a baseline, and highlights any visual differences.
It integrates with Storybook, CI/CD pipelines, and design tools like Figma to ensure your UI stays consistent over time.




Getting Started
--
1. Install dependencies

npm install --save-dev @percy/cli @percy/storybook

2. Create a Percy account
   
Go to https://percy.io → Sign up

Create a new project

Choose Storybook as the integration type

Copy the generated PERCY_TOKEN

3. Set your Percy token
 
On Windows CMD:
set PERCY_TOKEN=your-token-here

On Windows PowerShell:

$Env:PERCY_TOKEN="your-token-here"

On Mac/Linux:

export PERCY_TOKEN=your-token-here

4. Run Storybook

npm run storybook

5. Run Percy
   
With Storybook running at http://localhost:6006:


npx percy storybook http://localhost:6006



Workflow :-
--

-First Run (Baseline)

-Run Percy on your Storybook for the first time.

-Percy stores these screenshots as your baseline.

-Make Changes

-Update component styles or structure.

-Second Run

-Run Percy again.

-Percy compares the new screenshots to the baseline.

-Review

-In Percy dashboard:

-Green highlight = added pixels

-Red highlight = removed pixels

-Approve or Reject

-If the change was intended → click Approve → new baseline is saved.

-If unintended → reject and fix the code.



Integration with Storybook :-
--
Percy automatically:

1-Loads all stories from your Storybook instance.

2-Takes screenshots of each story.

3-Uploads them to the Percy dashboard for comparison.

 Tip: Keep your Storybook organized with clear story names for better Percy reports.


 Integration with Figma :-
--
Percy doesn’t directly “pull” designs from Figma, but it works alongside it:

1-Use Figma for design specifications.

2-Build components in Storybook according to Figma designs.

3-Use Percy to visually compare code implementation against the baseline (which matches your approved Figma design).

4-If a Figma update changes design, update the component → Percy will catch the change → approve it as new baseline.



Advantages :-
--

Automatic Visual Diff – Catches pixel-level changes.

Storybook Integration – Works with isolated components.

Cross-browser testing – Simulates multiple browsers/resolutions.

Team Collaboration – Review/approve changes in dashboard.

CI/CD Ready – Can run in pipelines to block unintended changes.

Integrates with Design Workflow – Works alongside Figma.


Disadvantages :-
--

Not free for large teams – Free plan is limited.

No direct Figma sync – Only compares against previous code screenshots.

Needs good Storybook coverage – If a state isn’t in Storybook, it won’t be tested.

Limited offline use – Requires internet to upload screenshots.



Testing Full Pages by URL :-
--
Unlike Chromatic (which only tests isolated components inside Storybook), Percy can also test full web pages — even without Storybook.

This means you can:

Test entire pages like /home, /login, /dashboard

Test dynamic pages in staging environments

Test production pages directly

How to Test a Full Page by URL :-

for example:

npx percy snapshot http://localhost:3000/home

npx percy snapshot http://localhost:3000/login

When to Use This :
If you have end-to-end flows (not just components)

If you want to visually test how components look together in layout

If you need to verify final styling after backend data loads
