// Single source of truth for the anchor ids used by the experience and project
// cards. The cards set these ids, and the technology popup links to them, so
// both sides always agree.

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Company + role + start date, because "Windsor Mold Group" appears twice.
export const experienceId = (exp: {
  company: string;
  role: string;
  start: string;
}): string => `exp-${slugify(`${exp.company} ${exp.role} ${exp.start}`)}`;

export const projectId = (title: string): string => `proj-${slugify(title)}`;
