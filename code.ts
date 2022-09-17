// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".

const imageTest = figma.currentPage.selection[0] 

async function getImageHash() {

  const bytes = await imageTest.exportAsync() //turns the selected image into bytes
  //send the bytes somewhere

  //take in bytes from somewhere else
  const image = figma.createImage(bytes) //turns bytes into image on figma

  const frame = figma.createFrame() //creates frame to hold the image
  
  //places and sizes the frame. 
  frame.x = 200
  frame.resize(200, 230)
  frame.fills = [{
    imageHash: image.hash,
    scaleMode: "FILL",
    scalingFactor: 1,
    type: "IMAGE",
  }]
}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.showUI(__html__, {themeColors: true});


//msg from html gets passed here to call main func
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'prompt') {
    console.log("Submitted")
    await getImageHash()
    }

    figma.closePlugin();
  }
