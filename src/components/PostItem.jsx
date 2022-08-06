import React, { useState } from 'react';

const PostItem = function(props) {
    console.log(props);
    return (
        <div className="post">
        <div className="post_content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_btn">
          <button>Удалить</button>
        </div>
      </div>
    )
}

export default PostItem;