import React from "react";

const TuitStats = (
    {tuitStats = {
      liked: true,
      replies: 34,
      retuits: 34,
      likes: 34,
    }}
) => {

  return(
      <div className="row ">
        <div className="col text-muted text-center">
          <i className="bi bi-chat"></i> {tuitStats.replies}</div>
        <div className="col text-muted text-center"><i
            className="bi bi-arrow-repeat"></i> {tuitStats.retuits}</div>
        <div className="col text-muted text-center"><i
            className={"bi " + (tuitStats.liked ? 'bi-heart-fill text-danger' : 'bi-heart')}></i> {tuitStats.likes}</div>
        <div className="col text-muted text-center"><i
            className="bi bi-box-arrow-up"></i></div>
      </div>
  )
}


export default TuitStats;