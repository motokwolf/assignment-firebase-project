function showComments() {
    console.log(`click`)
      var Post = document.getElementById("post-text")
      var Comms = document.getElementById("comments");
    if (Comms.style.display === "none") {
      Post.classList.add("clear");
      Comms.style.display = "block";
    } else {
      Post.classList.remove("clear");
      Comms.style.display = "none";
    }
  }


  