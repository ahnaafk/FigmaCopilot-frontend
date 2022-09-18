// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".


async function getImageHash(data: Array<Uint8Array>) {
  var byte;
  var image;
  var frame;
  for (let i = 0; i < data.length; i++) {
    byte = data[i]
    image = figma.createImage(byte)
    frame = figma.createFrame();
    frame.x = 200;
    frame.resize(200, 230);
    frame.fills = [{
      imageHash: image.hash,
      scaleMode: "FILL",
      scalingFactor: 1,
      type: "IMAGE",
    }]
  }
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.showUI(__html__, { themeColors: true });


//msg from html gets passed here to call main func
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'prompt') {
    await getImageHash(msg.value);
  }

  figma.closePlugin();
}