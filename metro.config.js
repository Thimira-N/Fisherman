// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require('nativewind/metro');
//
// const config = getDefaultConfig(__dirname)
//
// module.exports = withNativeWind(config, { input: './app/globals.css' })




const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

let config = getDefaultConfig(__dirname);

// Add nativewind
config = withNativeWind(config, { input: "./app/globals.css" });

// Wrap with reanimated
module.exports = wrapWithReanimatedMetroConfig(config);
