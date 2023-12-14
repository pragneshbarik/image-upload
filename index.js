const url =
  "https://script.google.com/macros/s/AKfycbxTSWGsOpsd70OZfQsYmm0JGgCHBHsmD6ZDL2lQCo4d2N8N_bpzAUsJqkcUIEiD6aRg/exec";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("some error");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Received JSON data:", data);
    console.log(data);
    const imageContainer = document.getElementById("image-container");

    for (let i = 1; i < data.images.length; i++) {
      const img = document.createElement("img");
      img.src =
        "https://drive.google.com/uc?export=view&id=" +
        data.images[i].split("=")[1];
      img.alt = "Image";
      imageContainer.appendChild(img);
    }
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
