document.querySelector('#changesp').addEventListener('click', () => {
    var t = document.querySelector('#temp').classList
    if (t.contains('sq')) {
        t.replace('sq', 'cir')
    }
    else if (t.contains('cir')) {
        t.replace('cir', 'tri')
    }
    else if (t.contains('tri')) {
        t.replace('tri', 'poly')
    }
    else if (t.contains('poly')) {
        t.replace('poly', 'sq')
    }
})
document.querySelector('#changecol').addEventListener('click', () => {
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    document.querySelector('#circle').style.backgroundColor=`rgb(${r},${g},${b})`
});
