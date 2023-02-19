import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
  return(`
<!--    Search bar-->
    <a class="float-end" href="#"> <i class="fa-solid fa-gear fa-2x"></i></a>
    <div class="row">
      
      <div class=" container border border-gray align-self-center rounded-pill mb-2 bg-white">

        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" class="border-0 bg-white" placeholder="Search Twitter" aria-label="Username" aria-describedby="basic-addon1">
      </div>
    </div>
<!--    Nav bar-->
    <ul class="nav nav-tabs mb-2">
      <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
      </li>
      <li class="nav-item d-none d-md-block">
        <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
      </li>
    </ul>
    <!-- Image -->
    <div class="card">
      <img class="card-img-top m-0" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
      <div class="text-white position-absolute bottom-0 start-0 fs-2">SpaceX's Starship</div>
    </div>
    <!--PostSummary list-->
    ${PostSummaryList()}
    
  
  
  
  
  
  
  `)
}
export default ExploreComponent;


