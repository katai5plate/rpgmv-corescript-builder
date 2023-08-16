(function () {
  if (!confirm("コアスクリプトを上書きしますか？")) return;
  if (!confirm("ちゃんとバックアップしましたか？")) return;
  if (!confirm("後悔しませんね？")) return;
  alert("開始します。");

  try {
    var fs = require("fs");

    var Concat = require("concat-with-sourcemaps");

    if (!fs.existsSync("./src")) throw new Error("src フォルダがないですよ");

    [
      "rpg_core",
      "rpg_managers",
      "rpg_objects",
      "rpg_scenes",
      "rpg_sprites",
      "rpg_windows",
    ].forEach(function (name) {
      if (!fs.existsSync(`./src/${name}.json`))
        throw new Error("必要なファイルがないです。手順ちゃんとあってます？");

      var order = JSON.parse(fs.readFileSync(`./src/${name}.json`).toString());

      let concat = new Concat(true, `${name}.js`, "\n");

      order.forEach((fileName) => {
        var path = `./src/${fileName}`;
        concat.add(path, fs.readFileSync(path).toString());
      });

      fs.writeFileSync(`./js/${name}.js`, concat.content);
      fs.writeFileSync(`./js/${name}.js.map`, concat.sourceMap);
    });
  } catch (error) {
    alert("エラーが発生したので中断しました。" + error.toString());
  }

  alert("完了しました。");
})();
