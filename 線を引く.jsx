main ();

function main() {
    var first_coordinate = [], last_coordinate = [];
    window (first_coordinate, last_coordinate);
}

//ウィンドウ関連
function window(first_coordinate, last_coordinate) {
    //新しいウィンドウを作成
    var win = new Window ("dialog", "coordinate");
    //ウィンドウの中身（項目名と空欄と決定ボタン）
    win.add("statictext", undefined, "最初のx座標");
    var fx = win.add("EditText", {width: 100, height: 20, x: 100, y: 100}, 0);
    win.add("statictext", undefined, "最初のy座標");
    var fy = win.add("EditText", {width: 100, height: 20, x: 100, y: 100}, 0);
    win.add("statictext", undefined, "最後のx座標");
    var lx = win.add("EditText", {width: 100, height: 20, x: 100, y: 100}, 0);
    win.add("statictext", undefined, "最後のy座標");
    var ly = win.add("EditText", {width: 100, height: 20, x: 100, y: 100}, 0);
    var button =  win.add("button", { width: 80, height: 25, x: 40, y: 25 }, "決定");
    //ボタンクリックでedittext内の数値取得、引数に配列をぶち込む
    button.onClick = function () {
        newFx = Number(fx.text);
        newFy = Number(fy.text);
        newLx = Number(lx.text);
        newLy = Number(ly.text);
        first_coordinate = [newFx, -newFy];
        last_coordinate = [newLx, -newLy];
        strokeLine(first_coordinate, last_coordinate);
        win.close();
    }
    //ウィンドウ閉じる
    win.show();
}

//線を描く
function strokeLine(first_coordinate, last_coordinate) {
    var doc = app.activeDocument;
    //pathitem追加
    var line = doc.pathItems.add();
    //全体のパスをセットしていく
    line.setEntirePath([first_coordinate, last_coordinate]);
    //線のプロパティ
    with(line) {
        closed = false;
        filled = false;
        stroked = true;
        strokeWidth = 1.0;
        strokeColor = new GrayColor();
        strokeColor.gray = 80;
    }
}
