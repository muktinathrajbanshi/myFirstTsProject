const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const main_container = document.querySelector(".main_container");
// reusable function 
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(` Network response was not ok - status : ${response.status} `);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
// let's display the card UI 
const showResultUI = (singleUser) => {
    const { avatar_url, login, url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `
     <div class="card">
      <img src="${avatar_url}" alt="${login}" />
      <h3>${login}</h3>

      <div class="card-footer">
        <a href="${url}" target="_blank">GitHub Profile</a>
      </div>
    </div>
    
    `);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
            console.log("login " + singleUser.login);
        }
    });
}
// default function call 
fetchUserData("https://api.github.com/users");
export {};
//# sourceMappingURL=index.js.map