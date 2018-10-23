const pup = require('puppeteer');
const path = require('path');

async function takeThatPic(page, i) {
    await page.screenshot({path: 'render/testimg' + i + '.png'});

}

async function init() {
    const thispath = path.resolve('test_ink_animated.svg');
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    page.setViewport({width: 1920, height: 1080, isLandscape: true})
    await page.goto('file://' + thispath);

    for (i = 0; i < 100; i ++) {
        page.evaluate((i) => {
            console.log("this is the nth " + i);
            //window.alert('thing is ' + i);
        // 
        }, i);
        page.screenshot({path: 'render/testimg' + i + '.png'});

    }
    console.log('file://' + thispath);
}

init()