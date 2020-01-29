const wdio = require("webdriverio");

// Full desired capabilities doc found at http://appium.io/docs/en/writing-running-appium/caps/index.html
const opts = {
    port: 4723, // Appium default port, otherwise, run "yarn exec appium -p [PORT]"
    capabilities: {
        platformName: "Android",
        platformVersion: "8",
        deviceName: "Android Emulator",
        app: "/Users/adilsonmokawa/projects/ApiDemos-debug.apk",
        appPackage: "io.appium.android.apis",
        appActivity: ".view.TextFields",
        automationName: "UiAutomator2", 
    }
}

var main = async () => {
    // Session initialization
    const client = await wdio.remote(opts);

    // First test
    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText(); // What if I use getValue() instead??
    assert.equal(value, "Hello World!");

    // Session close
    await client.deleteSession();
}

main();

