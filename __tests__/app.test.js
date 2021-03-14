import wd from 'wd';
import * as util from "./helper";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'C:\\Users\\talha\\Documents\\ws\\verification2\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk'
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(5_000);
}) // Sometime for the app to load

test('name', async () => {
    await util.fillName("david", driver);
    await util.fillSurname("davenport", driver);

    // await driver.waitForElementByAccessibilityId("city_picker", {timeout: 10_000});
    // const date = await driver.elementByAccessibilityId("city_picker");
    // await driver.sleep(3_000);
    // await date.click();
    // await date.sendKeys("Adana");
    // await driver.sleep(3_000);
    // await date.keys(wd.SPECIAL_KEYS['Down arrow']);
    // await driver.sleep(1_000);
    // await date.keys(wd.SPECIAL_KEYS['Down arrow']);
    // await driver.sleep(1_000);
    // date.active((err, el) => console.log(err, el));
    // await driver.sleep(1_000);
    // await date.keys(wd.SPECIAL_KEYS.Enter);
    // console.log(date);
});



