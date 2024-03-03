/**
 * @type {import("knip").KnipConfig}
 */
const knipConfig = {
  compilers: {
    css: (text) => [...text.matchAll(/(?<=@)import[^;]+/g)].join("\n"),
  },
  ignoreDependencies: [
    // Used in Bun install security scanner
    "@socketsecurity/bun-security-scanner",
  ],
  tags: ["-lintignore"],
};

export default knipConfig;
