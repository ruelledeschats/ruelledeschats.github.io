const container = document.querySelector(".container-photos");
const photos_RuelledesChats = [
  { url: "Ruelle des Chats - Troyes", name: "1_photo", image: "photos/1_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "2_photo", image: "photos/2_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "3_photo", image: "photos/3_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "4_photo", image: "photos/4_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "5_photo", image: "photos/5_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "6_photo", image: "photos/6_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "7_photo", image: "photos/7_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "8_photo", image: "photos/8_photo.jpg" },
  { url: "Ruelle des Chats - Troyes", name: "9_photo", image: "photos/9_photo.jpg" },
];


const showRuelleDesChats = () => {
  let output = "";
  photos_RuelledesChats.forEach(
    ({ url, name, image }) =>
      (output += `
              <div class="card-photo">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">${url}</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showRuelleDesChats);
