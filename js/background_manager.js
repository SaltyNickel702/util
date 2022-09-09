window.addEventListener('load',() => {
    const el = document.createElement('a');

    el.setAttribute('id','background');

    el.style.position = 'fixed';
    el.style.width = '100%';
    el.style.height = '100%';
    el.style.top = '0px';
    el.style.left = '0px';

    document.body.prepend(el)
});

const background = {};
background.set = (type,val) => {
    const backgroundEl = document.getElementById('background')
    switch (type) {
        case 'img':
            backgroundEl.style.backgroundImage = `url('${val}')`;
            break;
        case 'color':
            backgroundEl.style.backgroundColor = `${val}`;
            break;
    }
    background.toggle('on');
}

background.isOn = true;
background.toggle = (mode) => {
    //mode is optional
    const backgroundEl = document.getElementById('background')
    switch (mode) {
        case 'on':
            backgroundEl.style.display = 'block';
            background.isOn = true;
            break;
        case 'off':
            backgroundEl.style.display = 'none';
            background.isOn = false;
            break;
        default:
            if (background.isOn) {
                background.toggle('off');
            } else {
                background.toggle('on');
            }
    }
}