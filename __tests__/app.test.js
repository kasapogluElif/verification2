import wd from 'wd';
import * as util from "./helper";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 3 * 60_000; // 2 mins
const PORT = 4723;
// TODO need to setup these tests for ios as well
const config = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'C:\\Users\\talha\\Documents\\ws\\verification2\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk'
};
// C:\Users\perma\AndroidStudioProjects\verification2\android\app\build\outputs\apk\debug\app-debug.apk

const driver = wd.promiseChainRemote('localhost', PORT);
// driver.update_settings({"snapshotMaxDepth": 100});

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(10_000);

    // let contexts = await driver.contexts();
    // await driver.context(contexts[1]);
}) // Sometime for the app to load

// afterAll(async () => {
//     await driver.quit();
// })

beforeEach(async () => {
    await driver.sleep(2_000);
});

test('name invalid', async () => {
    await util.fillName("rono123", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("name_invalid");
    } catch (e) {
        console.log("name invalid was not found(unexpected)");
    }

    // clear up after the test
    await util.fillName("", driver, false);

    expect(invalid_field).not.toBe(undefined);

});

test('name valid', async () => {
    await util.fillName("rono", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("name_invalid");
    } catch (e) {
        console.log("name invalid was not found(expected)");
    }

    // clear up after the test
    await util.fillName("", driver, false);

    expect(invalid_field).toBe(undefined);
})

test('surname invalid', async () => {
    await util.fillSurname("lalayev_SDW@+QFOEF1", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("surname_invalid");
    } catch (e) {
        console.log("surname invalid was not found(unexpected)");
    }

    // clear up after the test
    await util.fillSurname("", driver, false);

    expect(invalid_field).not.toBe(undefined);
})

test('surname valid', async () => {
    await util.fillSurname("lalayev", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("surname_invalid");
    } catch (e) {
        console.log("surname invalid was not found(expected)");
    }

    // clear up after the test
    await util.fillSurname("", driver, false);

    expect(invalid_field).toBe(undefined);
})

test('birth date invalid', async () => {
    await util.fillBirthDate("11-10-2022", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("birthdate_invalid");
    } catch (e) {
        console.log("birthdate invalid was not found(unexpected)");
    }

    // clear up after the test
    await util.fillSurname("", driver, false);

    expect(invalid_field).not.toBe(undefined);
})

test('birth date valid', async () => {
    await util.fillBirthDate("11-10-1999", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("birthdate_invalid");
    } catch (e) {
        console.log("birthdate invalid was not found(expected)");
    }

    // clear up after the test
    await util.fillBirthDate("", driver, false);

    expect(invalid_field).toBe(undefined);
})

test('city name invalid', async () => {
    await util.fillCityName("Ankr", driver);
    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("cityname_invalid");
    } catch (e) {
        console.log("city name invalid was not found(unexpected)");
    }

    // clear up after the test
    await util.fillCityName("", driver, false);

    expect(invalid_field).not.toBe(undefined);
})

test('city name valid', async () => {
    await util.fillCityName("Ankara", driver);
    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("cityname_invalid");
    } catch (e) {
        console.log("city name invalid was not found(expected)");
    }

    // clear up after the test
    await util.fillCityName("", driver, false);

    expect(invalid_field).toBe(undefined);
})

test('send info button should show up', async () => {
    await util.fillName("rono", driver);
    await util.fillSurname("lalayev", driver);
    await util.fillBirthDate("11-10-2001", driver);
    await util.fillCityName("Ankara", driver);
    await util.fillSideEffects("Everything was fine", driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("sendButton_invalid");
    } catch (e) {
        console.log("sendButton invalid was not found(expected)");
    }

    // clear up after the test
    await util.fillName("", driver);
    await util.fillSurname("", driver);
    await util.fillBirthDate("", driver);
    await util.fillCityName("", driver);
    await util.fillSideEffects("", driver);

    expect(invalid_field).toBe(undefined);
})

test('making sure that the side effects has a limit on size', async () => {
    const TEXT_AREA_LIMIT = 400;
    let dummySideEffect = "";

    for(let i = 0; i < TEXT_AREA_LIMIT; i++)
        dummySideEffect += 'a';

    await util.fillSideEffects(dummySideEffect, driver);

    let invalid_field;
    try {
        invalid_field = await driver.elementByAccessibilityId("sideEffect_invalid");
    } catch (e) {
        console.log("sideEffect_invalid invalid was not found(unexpected)");
    }

    // clear up after the test
    await util.fillSideEffects("", driver, false);

    expect(invalid_field).not.toBe(undefined);
})


/*
{
  "platformName": "Android",
  "deviceName": "Android",
"app":"C:\Users\perma\AndroidStudioProjects\verification2\android\app\build\outputs\apk\debug\app-debug.apk"
}
 */