import GitIcon from "../assets/git.svg";
import CSharpIcon from "../assets/csharp.svg";
import NextIcon from "../assets/nextjs.svg";
import PythonIcon from "../assets/python.svg";
import ReactIcon from "../assets/react.svg";
import TypeScriptIcon from "../assets/typescript.svg";
import NodeIcon from "../assets/node.svg";
import NetIcon from "../assets/dotnet.svg";

export interface Technology {
  name: string;
  icon: any;
  /**
   * Other skill-tag names that count as this technology when matching against
   * the `skills` of each experience and the `tags` of each project.
   * Matching is case-insensitive, so "Typescript" already matches "TypeScript".
   */
  aliases?: string[];
  /** List every project, whether or not it is tagged (e.g. Git is implied). */
  allProjects?: boolean;
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: ReactIcon,
    // React Native is built on React. Remove this alias if you'd rather the
    // React popup only list projects tagged exactly "React".
    aliases: ["React Native"],
  },
  {
    name: "Typescript",
    icon: TypeScriptIcon,
  },
  {
    name: "C#",
    icon: CSharpIcon,
  },
  {
    name: ".NET",
    icon: NetIcon,
    aliases: ["ASP.NET Core", "ASP.NET"],
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
    allProjects: true,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "Node.js",
    icon: NodeIcon,
  },
];
