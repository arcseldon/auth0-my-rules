#!/usr/bin/env bash
MSG=${*-quick update}
# echo $MSG
git add . && git commit -m "$MSG"

