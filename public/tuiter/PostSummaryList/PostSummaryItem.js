export default function PostSummaryItem(post) {
  return(`
    <li class="list-group-item m-0 float-none" >
      <img class=" rounded float-end" width="100" height="100" src="${post.image}">
      <div class="text-muted font-weight-bold">${post.topic}</div>

      <div class="wd-font-bold">${post.userName}  <i class="fa-sharp fa-solid fa-circle-check"></i> <span class="font-weight-bold text-muted">- ${post.time}</span></div>
      <p class=" wd-font-bold">${post.title}</p>
    </li>
  `)
}