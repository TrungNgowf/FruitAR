// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig, mergeConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push(
  // Adds support for `.db` files for SQLite databases
  "db",
  "obj",
  "mtl",
  "JPG",
  "vrx",
  "hdr",
  "gltf",
  "glb",
  "bin",
  "arobject",
  "gif"
);

module.exports = defaultConfig;
