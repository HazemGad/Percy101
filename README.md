Workflow :-
--
First Run (Baseline)
Run Percy on your Storybook for the first time.
Percy stores these screenshots as your baseline.
Make Changes
Update component styles or structure.
Second Run
Run Percy again.
Percy compares the new screenshots to the baseline.
Review
In Percy dashboard:
Green highlight = added pixels
Red highlight = removed pixels
Approve or Reject
If the change was intended → click Approve → new baseline is saved.
If unintended → reject and fix the code.


--
Integration with Storybook :-
--
Percy automatically:

1-Loads all stories from your Storybook instance.

2-Takes screenshots of each story.

3-Uploads them to the Percy dashboard for comparison.

 Tip: Keep your Storybook organized with clear story names for better Percy reports.

--
 Integration with Figma :-
--
Percy doesn’t directly “pull” designs from Figma, but it works alongside it:

1-Use Figma for design specifications.

2-Build components in Storybook according to Figma designs.

3-Use Percy to visually compare code implementation against the baseline (which matches your approved Figma design).

4-If a Figma update changes design, update the component → Percy will catch the change → approve it as new baseline.


--
Advantages :-
--

Automatic Visual Diff – Catches pixel-level changes.

Storybook Integration – Works with isolated components.

Cross-browser testing – Simulates multiple browsers/resolutions.

Team Collaboration – Review/approve changes in dashboard.

CI/CD Ready – Can run in pipelines to block unintended changes.

Integrates with Design Workflow – Works alongside Figma.

--
Disadvantages :-
--

Not free for large teams – Free plan is limited.

No direct Figma sync – Only compares against previous code screenshots.

Needs good Storybook coverage – If a state isn’t in Storybook, it won’t be tested.

Limited offline use – Requires internet to upload screenshots.


--
Commands :-
--
first run (Baseline)
npm run storybook
npx percy storybook http://localhost:6006

after making a change:
npx percy storybook "(your url)"
