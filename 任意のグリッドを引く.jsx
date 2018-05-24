main()

function main() {
    window()
}


//ウィンドウ関連
function window() {
    //新しいウィンドウを作成
    var win = new Window ("dialog", "グリッド作成")
    
    //ウィンドウの中身
    //横書きか縦書き
    var direction_panel = win.add("panel", [0, 0, 200, 60], "縦横設定")
    var vertical = direction_panel.add("radiobutton", undefind, "縦書き")
    var horizontal = direction_panel.add("radiobutton", undefind, "横書き")
    
    //罫線関連
    var keisen = win.add("panel", [0, 0, 200, 60], "罫線関連")
    //長さ
    keisen.add("statictext", undefind, "長さ")
    var keisen_length = keisen.add("edittext", undefind, 0)
    //本数
    keisen.add("statictext", undefind, "本数")
    var keisen_number = keisen.add("edittext", undefined, 0)
    //間隔
    keisen.add("statictext", undefind, "間隔")
    var keisen_dis_btw = keisen.add("edittext", undefind, 0)
    //角度
    keisen.add("statictext", undefind, "角度(0~180)")
    var keisen_angle = keisen.add("edittext", undefind, 0)
    
    //交差する罫線関連
    var crs_keisen = win.add("panel", [0,0,200,60], "交差する罫線")
    //間隔
    crs_keisen.add("statictext", undefind, "間隔")
    var crs_keisen_dis_btw = crs_keisen.add("edittext", undefind, 0)
    //角度
    crs_keisen.add("statictext", undefind, "角度(0~180)")
    var crs_keisen_angle = crs_keisen.add("edittext", undefind, 90)
    
    //決定
    var button = win.add("button", [80, 25, 40, 25], "決定")

    //書き込んだ数を反映し実行する
    button.onClick() = function (){
        var number = new Array(Number(keisen_length.text), Number(keisen_number.text), Number(keisen_dis_btw.text), Number(keisen_angle.text), Number(crs_keisen_dis_btw.text), Number(crs_keisen_angle.text))
        write(number)
    }
    
    //見せる
    Window.show()
}

//書く
function write(n) {
     
}

//書く座標を角度から算出
function keisenAngle(){
    
}

