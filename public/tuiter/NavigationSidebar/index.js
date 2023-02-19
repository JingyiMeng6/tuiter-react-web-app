const NavigationSidebar = (active) => {
  console.log(active);

  return(`
   <div class="list-group">
      <a class="list-group-item d-none d-xl-block" href="/"><i class="fab fa-twitter"></i></a>
      <a class="list-group-item ${active == 'home' ? 'active' : ''} d-none d-xl-block" href="../HomeScreen/index.html"><i class="fa-solid fa-house"></i> Home</a>
       <a class="list-group-item ${active == 'explore' ? 'active' : ''} d-none d-xl-block" href="../ExploreScreen/index.html"><i class="fa-solid fa-hashtag"></i> Explore</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-bell"></i> Notifications</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-envelope"></i> Messages</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-bookmark"></i> Bookmarks</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-list"></i> Lists</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-user"></i> Profile</a>
       <a class="list-group-item d-none d-xl-block" href="#"><i class="fa-solid fa-circle"></i> More</a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="/"><i class="fab fa-twitter"></i></a>
       <a class="list-group-item ${active == 'home' ? 'active' : ''} d-xl-none d-flex justify-content-center" href="../HomeScreen/index.html"><i class="fa-solid fa-house"></i></a>
       <a class="list-group-item ${active == 'explore' ? 'active' : ''} d-xl-none d-flex justify-content-center" href="../ExploreScreen/index.html"><i class="fa-solid fa-hashtag"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-bell"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-envelope"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-bookmark"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-list"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-user"></i></a>
       <a class="list-group-item d-xl-none d-flex justify-content-center" href="#"><i class="fa-solid fa-circle"></i></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}


export default NavigationSidebar;
