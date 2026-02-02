# vim-cheat-sheet

TODO:
- https://jeffkreeftmeijer.com/vim-number/
- (:substitute) :%s/<pattern>/<replacement>/g
- In normal mode, press "+p to paste from the system clipboard.
- :set diff & :set nodiff
- :ls! with !
- :set rnu
- :Ex
- " num p
- multiple lines indenting forward and backward? >>, >, <<, <, V=
- multtplie lines uncomment
- delete buffer
- [d and ]d, vim.diagnostic.goto_prev and next

## Cursor Movement

| Command                                              | Mode         | Description                                                                                                                                                                             |
| ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h`, `j`, `k`, `l`                                   | Normal       | Move the cursor: `h` (left), `j` (down), `k` (up), and `l` (right).                                                                                                                     |
| `w`, `W`                                             | Normal       | Move the cursor to the start of the next word (`w` considers punctuation; `W` skips it).                                                                                                |
| `e`, `E`                                             | Normal       | Move the cursor to the end of the current or next word (`e` considers punctuation; `E` skips it).                                                                                       |
| `b`, `B`                                             | Normal       | Move the cursor to the start of the current or previous word (`b` considers punctuation; `B` skips it).                                                                                 |
| `f{char}`, `F{char}`                                 | Normal       | Move the cursor to the next (`f`) or previous (`F`) occurrence of a character in the current line.                                                                                      |
| `t{char}`, `T{char}`                                 | Normal       | Move the cursor right before the next (`t`) or previous (`T`) occurrence of a character in the current line.                                                                            |
| `0`, `^`, `$`                                        | Normal       | Move the cursor to the start (`0`), the first non-whitespace character (`^`), or the end (`$`) of the line.                                                                             |
| `G`, `[count]G`                                      | Normal       | Move the cursor to the end of the file (`G`) or to a specific line number (`[count]G`). Invalid line numbers move to the nearest valid line (last or first).                            |
| `gg`, `[count]gg`                                    | Normal       | Move the cursor to the first non-blank character (or to the start if none) of the first (`gg`) or a specified (`[count]gg`) line.                                                       |
| `#`, `*`                                             | Normal       | Move the cursor to the previous (`#`) or next (`*`) occurrence of the word under the cursor.                                                                                            |
| `(`, `)`                                             | Normal       | Move the cursor to the start of the previous (`(`) or the next (`)`) sentence.                                                                                                          |
| `{`, `}`                                             | Normal       | Move the cursor to the start of the previous (`{`) or the next (`}`) paragraph.                                                                                                         |
| `%`                                                  | Normal       | Move the cursor to the matching pair of parentheses, brackets, or braces.                                                                                                               |
| `H`, `M`, `L`                                        | Normal       | Move the cursor to the first non-blank character (or to the start if none) of the top (`H`), middle (`M`), or bottom (`L`) line of the screen.                                          |
| `:[count]<CR>`                                       | Command-line | Move the cursor to the start of the specified line.                                                                                                                                     |
| `[count]\|`                                          | Normal       | Move the cursor to the specified column in the current line, to column 1 if the count is 0, less, or omitted (`\|`), or to the last column if the count is too large.                   |
| `/{pattern}<CR>`, `/<CR>`, `?{pattern}<CR>`, `?<CR>` | Normal       | Move the cursor to the searched pattern match forward (`/{pattern}`) or backward (`?{pattern}`), or resuse the last search pattern forward (`/`) or backward (`?`).                     |
| `m{char}`, `` `{mark} ``                             | Normal       | Set a single-character mark (`m{char}`: a-z for local marks, A-Z for global marks) at the cursor position, or move the cursor to the position of a previously set mark (`` `{mark} ``). |

## Editing

| Command                             | Mode                    | Description                                                                                                                      |
| ----------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `x`, `X`                            | Normal                  | Delete the character under (`x`) or before (`X`) the cursor.                                                                     |
| `d`, `D`                            | Normal                  | Delete from the cursor to a motion (`d`) or to the end of the line (`D`).                                                        |
| `c`, `C`, `c$`                      | Normal                  | Change (delete and enter Insert mode) from the cursor to a motion (`c`) or to the end of the line (`C`, `c$`).                   |
| `y`, `Y`                            | Normal                  | Yank (copy) text from the cursor to a motion (`y`) or yank the entire line (`Y`).                                                |
| `r`, `R`                            | Normal                  | Replace a single character under the cursor (`r`) or enter Replace mode under the cursor to overwrite multiple characters (`R`). |
| `~`                                 | Normal                  | Switch the case of the character under the cursor.                                                                               |
| `p`, `P`                            | Normal                  | Paste the text from the unnamed register after (`p`) or before (`P`) the cursor.                                                 |
| `CTRL+r`, `CTRL+R`, `:redo`, `:red` | Normal and Command-line | Redo the last undone change.                                                                                                     |
| `u`, `:u`, `:undo`                  | Normal and Command-line | Undo the last change.                                                                                                            |


## Entering Insert Mode

| Command  | Mode   | Description                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------ |
| `i`, `I` | Normal | Enter Insert mode before the cursor (`i`) or at the start of the current line (`I`). |
| `a`, `A` | Normal | Enter Insert mode after the cursor (`a`) or at the end of the current line (`A`).    |
| `o`, `O` | Normal | Enter Insert mode and open a new line below (`o`) or above (`O`) the current line.   |

## Miscellaneous

| Command                                        | Mode         | Description                                                                                                                                     |
| ---------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `zt`, `z<CR>`, `zz`, `z.`, `zb`, `z-`          | Normal       | Scroll the screen to the top (and center the cursor) (`zt` or `z<CR>`), the center of the screen (`zz` or `z.`), or the bottom (`zb` or `z-`).  |
| `Esc`                                          | Any          | Return to Normal mode.                                                                                                                          |
| `:marks`, `:delm {marks}`, `:delm!`            | Command-line | Display a list of all marks in the buffer (`:marks`), delete specified marks (`:delm {marks}`), or delete all lowercase marks (`:delm!`).       |
| `:set nu<CR>`, `:set nonu<CR>`, `:set nu!<CR>` | Command-line | Show line numbers (`:set nu<CR>`), hide line numbers (`:set nonu<CR>`), or toggle line numbering (`:set nu!<CR>`).                              |
| `:w<CR>`                                       | Command-line | Save the current file.                                                                                                                          |
| `:q<CR>`                                       | Command-line | Quit Vim.                                                                                                                                       |
