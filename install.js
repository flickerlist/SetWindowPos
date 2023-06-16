var addon = null;

// Load the precompiled binary for windows.
if (process.platform == 'win32') {
  require('child_process').exec('node-gyp rebuild', (error, stdout, stderr) => {
    if (error) {
      console.error(`[win-setwindowpos] error: node-gyp rebuild: ${error}`);
      return;
    }
    console.log(`[win-setwindowpos] node-gyp rebuild succeed: ${stdout}`);
  });
}
