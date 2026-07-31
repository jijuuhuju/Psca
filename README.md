````md
# Psca 標準命令一覧

Psca（Programming Script Commit Actions）で使用できる標準命令の一覧です。

## 基本構文

### START / END

Pscaプログラムの開始と終了を表します。

```psca
START

print("Hello Psca")

END
````

---

# 出力

## print

文字や値を表示します。

```psca
print("Hello World")
```

---

# 変数

## set

変数を作成・変更します。

```psca
set name = "Psca"
set score = 100
```

変数の使用：

```psca
print(name)
```

---

# 待機

## wait

指定した時間だけ待機します。

```psca
wait 3 seconds
```

---

# 条件分岐

## if

条件が成立した場合、処理を実行します。

```psca
if score >= 100:
    print("Clear")
```

## else

条件が成立しなかった場合の処理です。

```psca
if score >= 100:
    print("Clear")
else:
    print("Failed")
```

---

# 繰り返し

## repeat

指定回数繰り返します。

```psca
repeat 5:
    print("Hello")
```

---

# 関数

## function

処理をまとめます。

```psca
function hello:
    print("Hello")
```

## call

関数を実行します。

```psca
call hello
```

---

# イベント

## when

特定のイベントで処理を実行します。

例：

```psca
when key pressed "space":
    print("Jump")
```

---

# ファイル操作

## save

データを保存します。

```psca
save "data.psca"
```

## load

データを読み込みます。

```psca
load "data.psca"
```

---

# 演算

## 四則演算

```psca
set result = 10 + 5
set result = 10 - 5
set result = 10 * 5
set result = 10 / 5
```

---

# コメント

## /* */

コードに説明を書くことができます。

```psca
/* This is comment */

print("Psca")
```

---

# 例：簡単なPscaプログラム

```psca
START

set player = "Gona"
set score = 0

print(player)

repeat 5:
    set score = score + 10

if score >= 50:
    print("Clear")
else:
    print("Failed")

END
```

---

## Version

Psca Standard Commands v1.0

```
