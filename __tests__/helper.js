export async function fillName(name, driver) {
    await driver.waitForElementByAccessibilityId("name_input", {timeout: 10_000});
    const nameInput = await driver.elementByAccessibilityId("name_input");
    await nameInput.type(name);
}

export async function fillSurname(name, driver) {
    await driver.waitForElementByAccessibilityId("surname_input", {timeout: 10_000});
    const nameInput = await driver.elementByAccessibilityId("surname_input");
    await nameInput.type(name);
}