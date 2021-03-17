const WAIT_TO_LOAD = 5_000


export async function fillName(name, driver, wait = true) {
    if(wait) {
        try {
            await driver.waitForElementByAccessibilityId("name_input", {timeout: WAIT_TO_LOAD});
        } catch (e) {
            console.log(e);
        }
    }
    const nameInput = await driver.elementByAccessibilityId("name_input");
    await nameInput.type(name);
}

export async function fillSurname(surname, driver, wait = true) {
    if(wait)
        await driver.waitForElementByAccessibilityId("surname_input", {timeout: WAIT_TO_LOAD});
    const surnameInput = await driver.elementByAccessibilityId("surname_input");
    await surnameInput.type(surname);
}

export async function fillBirthDate(date, driver, wait = true){
    if(wait)
        await driver.waitForElementByAccessibilityId("birthdate_input", {timeout: WAIT_TO_LOAD});
    const birthDateInput = await driver.elementByAccessibilityId("birthdate_input");
    await birthDateInput.type(date);
}

export async function fillCityName(cityName, driver, wait = true){
    if(wait)
        await driver.waitForElementByAccessibilityId("cityname_input", {timeout: WAIT_TO_LOAD});
    const birthDateInput = await driver.elementByAccessibilityId("cityname_input");
    await birthDateInput.type(cityName);
}

export async function fillSideEffects(sideEffects, driver, wait = true){
    if(wait)
        await driver.waitForElementByAccessibilityId("sideEffect_input", {timeout: WAIT_TO_LOAD});
    const birthDateInput = await driver.elementByAccessibilityId("sideEffect_input");
    await birthDateInput.type(sideEffects);
}