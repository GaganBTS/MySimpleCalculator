let calc = function (op) {
    try {
        f_v = document.getElementById('one').value;
        s_v = document.getElementById('two').value;
        if (Number(f_v) && Number(s_v)) {
            result = eval(`${Number(f_v)} ${op} ${Number(s_v)}`)
        }
        else {
            result = 'Enter valid inputs please'
        }



        h1 = document.getElementById('output')
        h1.value = result;

    }
    catch (err) {
        h1 = document.getElementById('output')
        h1.value = 'Enter valid input please';
    }

}


let reset = function () {
    f_v = document.getElementById('one');
    s_v = document.getElementById('two');
    h1 = document.getElementById('output');
    f_v.value = '';
    s_v.value = '';
    h1.value = '';
}