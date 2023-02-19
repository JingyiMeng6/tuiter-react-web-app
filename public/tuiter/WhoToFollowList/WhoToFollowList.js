import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
           <ul class="list-group">
           ${who.map(person => WhoToFollowListItem(person)).join("")}
           </ul>
`); }

export default WhoToFollowList;