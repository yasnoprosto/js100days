//Create variables

const gLink = document.querySelector("#glink");
const genBtn = document.querySelector("#btn");

const downloadLink = document.querySelector("#download-link");
const embedAudioLink = document.querySelector("#embed-audio");
const embedVideoLink = document.querySelector("#embed-video");

const copyDownloadBtn = document.querySelector(".copy");
const copyAudioEmbedBtn = document.querySelector(".copy-audio");
const copyVideoEmbedBtn = document.querySelector(".copy-video");

const audioTextBegin =
  '"<audio width="300" height="32" controls="controls" src="';
const audioTextEnd = '"type="audio/mp3"></audio>"';
const videoTextBegin = '<iframe src="';
const videoTextEnd = '/preview" width="560" height="315"></iframe>';

//Create addEventListeners

genBtn.addEventListener("click", generateLink);
copyDownloadBtn.addEventListener("click", () => {
  copyLink(downloadLink);
});
copyAudioEmbedBtn.addEventListener("click", () => {
  copyLink(embedAudioLink);
});
copyVideoEmbedBtn.addEventListener("click", () => {
  copyLink(embedVideoLink);
});

// Create functions

function generateLink(e) {
  e.preventDefault();
  const gLinkValue = gLink.value;
  const confirmLink = gLinkValue.includes("https://drive.google.com/file/d/");

  if (confirmLink == true) {
    const getDownloadLink = gLinkValue
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=share_link", "");

    const getAudioEmbedLink = audioTextBegin + getDownloadLink + audioTextEnd;
    const getVideoEmbedLink = videoTextBegin + getDownloadLink + videoTextEnd;

    downloadLink.value = getDownloadLink;
    embedAudioLink.value = getAudioEmbedLink;
    embedVideoLink.value = getVideoEmbedLink;
  }
}

function copyLink(target) {
  target.select();
  if (target.value == "") {
    alert("Please generate a download link");
  } else {
    document.execCommand("copy");
    alert("Link has been copied to clipboard");
  }
}

// function copyDownloadLink() {
//   downloadLink.select();
//   if (downloadLink.value == "") {
//     alert("Please generate a download link");
//   } else {
//     document.execCommand("copy");
//     alert("Link has been copied to clipboard");
//   }
// }

// function copyAudioEmbedLink() {
//   embedAudioLink.select();
//   if (embedAudioLink.value == "") {
//     alert("Please generate a download link");
//   } else {
//     document.execCommand("copy");
//     alert("Link has been copied to clipboard");
//   }
// }

// function copyVideoEmbedLink() {
//   embedVideoLink.select();
//   if (embedVideoLink.value == "") {
//     alert("Please generate a download link");
//   } else {
//     document.execCommand("copy");
//     alert("Link has been copied to clipboard");
//   }
// }

//   https://drive.google.com/file/d/0BxBfYPAGkEDwc3RhcnRlcl9maWxl/view?usp=share_link
//   <audio width="300" height="32" controls="controls" src=""           "type="audio/mp3"></audio>"
//    <iframe src="                  /preview" width="560" height="315"></iframe>
