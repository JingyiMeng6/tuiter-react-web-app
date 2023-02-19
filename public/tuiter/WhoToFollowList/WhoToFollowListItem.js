const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item" href="#">
      <img class="rounded-circle float-start m-0" style="width: 50px;" src="${who.avatarIcon}">
      <button type="button" class="btn btn-primary rounded-pill mt-2 float-end">Follow</button>
      <div class="fw-bold ms-4">${who.userName}  <i class="fa-sharp fa-solid fa-circle-check"></i></div>
      <div class="ms-4">@${who.handle} <span class="font-weight-bold text-muted"></span></div>
    </li>
  `)
};
export default WhoToFollowListItem;