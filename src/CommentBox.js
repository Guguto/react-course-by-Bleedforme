import React from 'react';
import CommentList from "./CommentList";
class CommentBox extends React.Component {
	constructor(){
		super();
		console.log("Constructor ejecutado.");
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}
	onSubmitHandler(event){
		event.preventDefault();
	}

	render(){
		return (
			<div className = "Commentbox">
				<form onSubmit = {this.onSubmitHandler}>
					<h1> Enter your comment:</h1>
					<textarea/>
					<button/>
				</form>
			<CommentList comments = {[1,2,3,4,5]}> </CommentList>
			</div>
		);
	}
}

export default CommentBox;
