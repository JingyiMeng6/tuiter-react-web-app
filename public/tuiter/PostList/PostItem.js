export default function PostItem(post) {
  return(`
    <li class="list-group-item" href="#">
      <img class="rounded-circle float-start m-0" style="width: 50px;" src="${post.avatarIcon}">
      <!--username, handle, and time-->
      <div class=" ms-4 ">
        <span class="font-weight-bold">${post.userName}</span>
        <i class="fa-sharp fa-solid fa-circle-check"></i>
        <span class="text-muted">@${post.handle} . ${post.time}</span>
      </div>
      <!--post summary-->
      <div class="mb-2">${post.summary}</div>
      <!--post card-->
      <div class="card border-secondary w-75 rounded mb-2" style="position: relative; left: 50px">
        <img src="${post.picture}" class="card-img-top" alt="Card image cap" style="max-height: 100%; width: auto">
        ${(() => {
    if (post.bodyTitle == "") {
      return `
          `
    } else {
      return `
          <div class="card-body"><h6 class="card-title">${post.bodyTitle}</h6><p class="card-text text-muted">${post.body}</p></div>
        `
    }
  })()}
        
      </div>
      <!--bottom buttons -->
      <div class="row ">
        <div class="col text-muted text-center"><i class="fa-regular fa-comment"></i>  ${post.numComment}</div>
        <div class="col text-muted text-center"><i class="fa-solid fa-retweet"></i>  ${post.numTuit}</div>
        <div class="col text-muted text-center"><i class="fa-regular fa-heart"></i>  ${post.numLike}</div>
        <div class="col text-muted text-center"><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
      </div>
     </li>
  `)
}
