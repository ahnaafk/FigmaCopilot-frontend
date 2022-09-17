// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
const imageArray = figma.currentPage.children[0].fills[0] //this is hard-coded. Will fix later
const imageTest = figma.currentPage.children[0] //this is hard-coded. Will fix later

getImageHash()

async function getImageHash() {

  // if (imageArray.type === "IMAGE") {
  //   const hash = imageArray.imageHash
  //   //const image = await hash.getBytesAsync()
  // }

  const bytes = await imageTest.exportAsync()
  const image = figma.createImage(bytes)
  const frame = figma.createFrame()
  
  frame.x = 200
  frame.resize(200, 230)
  frame.fills = [{
    imageHash: image.hash,
    scaleMode: "FILL",
    scalingFactor: 1,
    type: "IMAGE",
  }]
}

// async function getImage(hash: any) {


//   figma.ui.postMessage(image)
//   console.log("image: ")

//   console.log(imgs)
//   const img = imgs.fills.imageHash
//   for (const imgs of rect.fills) {
    
//   }
//   if (rect.fills)


//   }
// if (selection === string) {
//   const img = figma.getImageByHash(selection.imageHash)
// }
// if (node.type === "MEDIA"){
//   node.exportAsync
// }
//}

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.showUI(__html__, {themeColors: true});

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-rectangles') {
    console.log("Submitted")
    }

    figma.closePlugin();
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
