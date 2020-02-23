const puppeteer = require('puppeteer');

let browser;
/*******************************************
/   If you want to test the local file,
/   please use the absolute path of index.html.
/   ie. file:///index.html
/******************************************/
const app = 'https://yaoliu928.github.io/form-wizard/';

test('Background should be light pink, if not type first-name.', async () => {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(app);

    await page.click('input#first-name');
    await page.type('input#first-name', '');
    await page.click('button.btn--next');

    let firstNameInputBackground = await page.$eval(
        'input#first-name',
        input => input.style.background
    );
    expect(firstNameInputBackground).toBe('lightpink');
    await browser.close();
})

test('Fill and submit the form successfully', async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size=1280,800']
    });
    const page = await browser.newPage();
    await page.goto(app);
    

    await page.click('input#first-name');
    await page.type('input#first-name', 'John');
    await page.click('input#last-name');
    await page.type('input#last-name', 'Doe');
    await page.click('input#email');
    await page.type('input#email', 'John.D@gmail.com');
    await page.click('input#phone');
    await page.type('input#phone', '0412 345 678');
    await page.click('button.btn--next');
    await page.click('input#street-number');
    await page.type('input#street-number', '6');
    await page.click('input#street-name');
    await page.type('input#street-name', 'Queen Mary');
    await page.click('select#street-type');
    await page.select('select#street-type', 'Ave');
    await page.click('input#suburb');
    await page.type('input#suburb', 'North Farm');
    await page.click('input#postcode');
    await page.type('input#postcode', '2000');
    await page.click('button.btn--next')

    let successResult = await page.waitForSelector('div.result');
    expect(successResult).toBeDefined();
    await browser.close();
}, 20000);
