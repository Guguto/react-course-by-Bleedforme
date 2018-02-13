import React from "react";

const CommentList = (props) => {
	return(
		<div className="CommentList">
			<ul>
				{props.comments.map((comment, index)=><li key={index}>{comment}</li>)}
			</ul>
		</div>
	)

};

export default CommentList;