import React from "react";

const PostItem = (
    {post = { "avatarIcon": "tesla.png",
      "userName": "Elon Musk",
      "handle": "elonmusk",
      "time": "23h",
      "summary": "Amazing show about Inspiration4x mission!",
      "picture": "inspriation4.jpeg",
      "bodyTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
      "body": "From training to landing, this all-access docuseries rides along with the Inspriation4 crew on the first all-cilillian orbital space.",
      "numComment": "4.2k",
      "numTuit": "3.5k",
      "numLike": "37.5k"
    }}
) => {
  return(
      <li className={"list-group-item border-0"}>
        <div className={"row"}>
          <div className="col-1">
            <img className="rounded-circle" height={48} src={`/images/${post.avatarIcon}`}/>
          </div>
          <div className="col-10">
            {/*username, handle and time*/}
            <div className="">
              <span className="font-weight-bold">{post.userName}</span>
              <i className="fa-sharp fa-solid fa-circle-check"></i>
              <span className="text-muted">@{post.handle} . {post.time}</span>
            </div>
            {/*post summary*/}
            <div className="mb-2">{post.summary}</div>
            {/*  post body*/}
            <div className="card border-secondary rounded">
              <img src={`/images/${post.picture}`} className={"card-img-top"} style={{"max-height":"100%", "width": "auto"}}/>
              {(() => {
                if (post.bodyTitle === "") {
                  return("");
                } else {
                  return(<div className="card-body">
                    <h6 className="card-title">{post.bodyTitle}</h6>
                    <p className="card-text text-muted">{post.body}</p>
                  </div>)
                }
              })()}
            </div>

          </div>
          <div className={"col-1"}><i className="bi bi-three-dots"></i> </div>
        </div>
        <div className="row ">
          <div className="col text-muted text-center">
            <i className="bi bi-chat"></i> {post.numComment}</div>
          <div className="col text-muted text-center"><i
              className="bi bi-arrow-repeat"></i> {post.numTuit}</div>
          <div className="col text-muted text-center"><i
              className="bi bi-heart"></i> {post.numLike}</div>
          <div className="col text-muted text-center"><i
              className="bi bi-box-arrow-up"></i></div>
        </div>
      </li>
  )
}

export default PostItem;