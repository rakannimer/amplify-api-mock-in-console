const dynamoSimulator = require("amplify-dynamodb-simulator");

(async () => {
  const dbPath = "/tmp/emulator-" + Date.now();
  console.warn("Launching");
  try {
    await dynamoSimulator.launch({
      dbPath,
      port: null
    });
    console.warn("Launched");
  } catch (err) {
    console.warn("Failed to launch simulator ", err);
  }
})();
