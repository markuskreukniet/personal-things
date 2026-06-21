# visual-studio-code-configuration

## Preferences

File > Preferences > Settings > Text Editor > Cursor > Cursor Blinking: solid

## Added to settings.json

`"editor.rulers": [120],
{
  "vim.leader": "<space>",
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "c"],
      "commands": ["editor.action.commentLine"]
    },
    {
      "before": ["<space>", "r", "n"],
      "commands": ["editor.action.rename"]
    },
    {
      "before": ["<leader>", "y", "a"],
      "after": ["g", "g", "V", "G", "y"]
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "c"],
      "commands": ["editor.action.commentLine"]
    },
    {
      "before": ["<leader>", "p"],
      "after": ["\"", "_", "d", "P"]
    }
  ],
  "vim.useSystemClipboard": true
}`

## Extensions

- Auto Rename Tag
- Code Spell Checker
- ESLint
- GitLens — Git supercharged
- Material Icon Theme
- Prettier - Code formatter
- SonarLint

optional:

- Vim
- lit-plugin
- Svelte for VS Code
- Vue Language Features (Volar)
- Go
