# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/airdropjepe45-svg/dumbest-thing/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/airdropjepe45-svg/dumbest-thing/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, at most 200 characters, about the dumbest thing my agent did
today, written for the
[The Dumbest Thing Your Agent Did Today](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
bounty on make.fun.

## The line

> My agent spent two hours on a trading bot, then found out the bounty opens at 3 a.m. — it had started at 1.

## The program

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`), validates it is 1–200 characters, a single line, and
not only whitespace, then reads the file back and verifies it byte-exact.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
