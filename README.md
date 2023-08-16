# rpgmv-corescript-builder

ツクール MV 上からアツマール版コアスクリプトをビルドするプラグイン

## 使い方

**※※※　絶対にバックアップすること。データが消えても責任は取らないよ　※※※**

### 事前準備

まず、[ここ](https://github.com/katai5plate/rpgmv-corescript-builder/archive/refs/heads/main.zip) からキットをダウンロードし、解凍する。  
それを適当な MV のプロジェクトに上書きする。（`README.md` はなくてもいい）

次に、[ここ](https://github.com/rpgtkoolmv/corescript/releases) からコアスクリプトをダウンロードし、解凍する。  
その中身を MV のプロジェクトの `src` フォルダの中に入れる。

MV のプロジェクトにある `node_modules.zip` を解凍する。（解凍したら消していい）

するとこんな感じになる

```
適当なプロジェクト
  +- audio/
  +- data/
  +- fonts/
  +- icon/
  +- img/
  +- js/
  |   +- libs/
  |   +- plugins/
  |   |   +- H2A_CoreScriptBuilder.js
  |   |   `- (その他プロジェクトに入ってるプラグイン)
  |   +- rpg_core.js
  |   +- rpg_managers.js
  |   +- rpg_objects.js
  |   +- rpg_scenes.js
  |   +- rpg_sprites.js
  |   +- rpg_windows.js
  |   `- (その他いろいろ)
  +- movies/
  +- node_modules/
  |   +- concat-with-sourcemaps/
  |   +- source-map/
  |   `- .package-lock.json
  +- src/
  |   +- healthcheck/
  |   +- js/
  |   +- plugins/
  |   +- template/
  |   +- tests/
  |   +- (省略)
  |   +- rpg_core.json
  |   +- rpg_managers.json
  |   +- rpg_objects.json
  |   +- rpg_scenes.json
  |   +- rpg_sprites.json
  |   +- rpg_windows.json
  |   `- (その他ごちゃごちゃしたいろんなファイル)
  +- Game.rpgproject
  +- index.html
  +- (node_modules.zip)
  +- package.json
  `- (README.md)
```

ちゃんとこんなふうなファイル構造になったなら、事前準備は完了。

### 実行方法

ツクール MV を開き、`ツール` -> `プラグインの管理` を開き、`H2A_CoreScriptBuilder` を追加設定する。

それからテストプレイを実行。

`コアスクリプトを上書きしますか？` と出るので、指示に従って進める。

`完了しました。` と出たら完了。  
`適当なプロジェクト/js/` フォルダにあるコアスクリプト (`rpg_core.js`, `rpg_managers.js`, `rpg_objects.js`, `rpg_scenes.js`, `rpg_sprites.js`, `rpg_windows.js`) は、アツマール版コアスクリプトです。

最後に、`適当なプロジェクト/src/js/libs` の中身を `適当なプロジェクト/js/libs` に上書きすれば完了。
