---
title: 一些技術筆記的整理
date: 2026-09-16
description: 自己的技術筆記
---
本文沒有使用 AI 潤飾。

## 套件管理工具
### 契機
這學期我有修陳建錦老師的「資訊檢索與文字探勘導論」，英文是 Information Retrieval and Text Mining，作業一中要我們手刻 tokenization，中間會可以使用一個叫做 Porter's Algorithm 的套件，趁此機會我好好的研究了常見的幾種 Python 套件管理工具。

### Conda
首先登場的是 Conda，這是一個老牌的套件管理工具了，我安裝的是比較輕量的 MiniConda，使用 conda 的優點是可以輕易地設定所需的 Python 版本，此外如果要安裝的套件底層有 C/C++ 的依賴也可以由 conda 一併搞定，十分方便，但缺點就是會比較「重」一點。

主要的指令如下：
- 創建環境：conda create -n env_name python=版本，如 conda create -n my_env python=3.12
- 進入環境：conda activate env_name
- 安裝套件：conda install package_name 或是 pip install package_name
- 退出環境：conda deactivate

要注意的是你用 conda 建立的 env 是全域的，簡單來說就是假如你建立一個叫做 hw1 的環境，這個環境並不是只隸屬於現在這個資料夾下，而是在整個電腦上都可以用，這對於我這種常常在不同資料夾下可能需要不同 Python 版本來工作的人比較不方便。

註：以上問題可以用 conda create -p ./.conda python=3.12 解決，但語法太醜了。

### Venv
這個不用多說，有寫過 Python 的人應該都知道 python3 -m venv .venv，好處是這個環境只跟著現在這個資料夾，壞處是無法指定 Python 版本。

### 兩者折衷 -- uv
uv 其實我大二就有聽過，但當時不太明白它跟 上一個的區別所以沒有使用，現在發現它的語法簡單、隸屬於單一資料夾、可以指定 Python 版本，完美符合我的需求，而且 uv 非常快（底層是用 Rust 寫的 ）。

主要指令如下：
- 創建環境：uv venv --python 版本，如 uv venv --python 3.12
- 進入環境：source .venv/bin/activate
- 安裝套件：uv pip install package_name
- 退出環境：deactivate

