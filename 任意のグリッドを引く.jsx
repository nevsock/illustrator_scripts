main()

function main() {
    window()
}


//ウィンドウ関連
function window() {
    //新しいウィンドウを作成
    var win = new Window ("dialog", "グリッド作成")
    
    //ウィンドウの中身
    //罫線関連
    var keisen = win.add("panel", [0, 20, 200, 220], "罫線関連")
    //長さ
    keisen.add("statictext", [15, 20, 180, 30], "長さ")
    var keisen_length = keisen.add("edittext", [15, 40, 180, 60], 500)
    //本数
    keisen.add("statictext", [15, 75, 180, 85], "本数")
    var keisen_number = keisen.add("edittext", [15, 95, 180, 115], 5)
    //間隔
    keisen.add("statictext", [15, 130, 180, 140], "間隔")
    var keisen_dis_btw = keisen.add("edittext", [15, 150, 180, 170], 50)
   
    //交差する罫線関連
    var crs_keisen = win.add("panel", [0, 230, 200, 385], "交差する罫線")
    //間隔
    crs_keisen.add("statictext", [15, 20, 180, 30], "間隔")
    var crs_keisen_dis_btw = crs_keisen.add("edittext", [15, 40, 180, 60], 50)
    //角度
    crs_keisen.add("statictext", [15, 75, 180, 95], "角度")
    var crs_keisen_angle = crs_keisen.add("edittext", [15, 105, 180, 125], 60)
    
    //決定
    var button = win.add("button", [0, 540, 80, 565], "決定")

    //書き込んだ数を反映し実行する
    button.onClick = function (){
        //初期設定
        var doc = app.activeDocument
        var artboard = doc.artboards[0].artboardRect;
        var center = [(artboard[2] - artboard[0])/2 + artboard[0], (artboard[3] - artboard[1])/2 + artboard[1]]
        
        //レイヤー、グループの作成
        var grid_layer = doc.layers.add()
        grid_layer.name = "下地レイヤー"
        var grid_group = grid_layer.groupItems.add()
        grid_group.name = "グリッド"
        
        //各valueの数値化
        var dot = grid_group.pathItems.add()
        var length = Number (keisen_length.text)
        var number = Number (keisen_number.text)
        var dis_btw = Number (keisen_dis_btw.text)
        var c_dis_btw = Number (crs_keisen_dis_btw.text)
        var c_angle = Number (crs_keisen_angle.text)
        var c_number = (length - (length % c_dis_btw))/c_dis_btw
        var c_height = (number - 1) * dis_btw + (length % c_dis_btw + c_dis_btw) * Math.abs(Math.sin ((90 - c_angle) / 180 * Math.PI))

        //横線
        for(var i=0; i<number; i++){
            var y1 = center[1] + ((number - 1) * dis_btw / 2) + (i * -dis_btw)
            var x1 = center[0] + (y1 - center[1]) * Math.tan ((90 - c_angle) / 180 * Math.PI) - length / 2
            var line = grid_group.pathItems.add()
            line.setEntirePath([[x1, y1], [x1 + length, y1]])
            with(line){
                closed = false;
                filled = false;
                stroked = true;
                strokeWidth = 1.0;
                strokeColor = new GrayColor();
                strokeColor.gray = 100;
            }
        }
    
        //縦線
        for(var i=0; i<c_number; i++){
            var x1 = center[0] + (i * -c_dis_btw) + ((c_number - 1) * c_dis_btw / 2) + c_height / 2 * Math.tan ((90 - c_angle) / 180 * Math.PI)
            var y1 = center[1] + c_height / 2
            var line = grid_group.pathItems.add()
            line.setEntirePath([[x1, y1], [x1 - c_height * Math.tan((90 - c_angle) / 180 * Math.PI), y1 - c_height]])
            with(line){
                closed = false;
                filled = false;
                stroked = true;
                strokeWidth = 1.0;
                strokeColor = new GrayColor();
                strokeColor.gray = 100;
            }
        }
        win.close()
    }
    
    //見せる
    win.show()
}
