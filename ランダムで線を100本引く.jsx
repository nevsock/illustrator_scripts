main ();

function main() {
  var artboard = app.activeDocument.artboards[0].artboardRect;
  for (var i=0; i < 100; i++){
      var p = new Array();
      p.push(Math.random()*artboard[2], Math.random()*artboard[3]);
      var q = new Array();
      q.push(Math.random()*artboard[2], Math.random()*artboard[3]);
      strokeLine (p, q);
  }
}

//線を描く
function strokeLine(p, q) {
  var doc = app.activeDocument;
  //pathitem追加
  var line = doc.pathItems.add();
  //全体のパスをセットしていく
  line.setEntirePath([p, q]);
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