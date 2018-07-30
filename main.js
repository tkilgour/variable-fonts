const variableFont = document.querySelector(".variable");

const map = (num, inMin, inMax, outMin, outMax) => {
  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

const adjustFontVariationAttrs = newSettingsObj => {
  let fontVariationOutput = "";

  for (let attr in newSettingsObj) {
    fontVariationOutput += `"${attr}" ${newSettingsObj[attr]}, `;
  }

  fontVariationOutput = fontVariationOutput.slice(0, -2);
  variableFont.style.fontVariationSettings = fontVariationOutput;
};

const handleOrientation = event => {
  const beta = Math.abs(Math.round(event.beta));
  const gamma = Math.abs(Math.round(event.gamma));
  const newWidth = map(beta, 0, 90, 75, 100);
  // console.log("width: ", newWidth);
  const newWeight = map(beta, 0, 90, 400, 900);
  // console.log("weight: ", newWeight);
  const newSettingsObj = { wdth: newWidth, wght: newWeight };

  adjustFontVariationAttrs(newSettingsObj);
};

window.addEventListener("deviceorientation", handleOrientation, true);
