import axios from 'axios';
import { useState } from 'react';
import Menu from './api/Menu';

const CreatePost = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const handleSubmit = async () => {
	  const response = await axios.post('https://simple-blog-api.crew.red/posts', {
	  title: title,
	  body: body,
  });
}


	return (
		<div>
			<Menu />
		<div style={{margin: '70px auto', width: '70%',}}>
			<h2 style={{textAlign: 'center', marginBottom: '40px'}}> CREATE YOUR POST</h2>
				<div>
					<h4 style={{margin: '10px'}}>Post Title</h4>
					<input 
						type='text' 
						placeholder='Enter post title' 
						onChange={(e)=> setTitle( e.target.value)}
						style={{width: '100%', padding: '10px', margin: '10px'}}>
						</input>
				</div>
				<div>
					<h4 style={{margin: '10px'}}>Post Description</h4>
					<textarea 
							placeholder='Write a text..' 
							onChange={(e)=> setBody( e.target.value)}
							style={{width: '100%',
									 padding: '10px', 
									 margin: '10px',
									 minHeight: '200px'}}>	
							</textarea>
				</div>
				<button 
					style={{
						border:'none',
						padding: '10px 20px',
						margin: '10px',
						background: 'black',
						color: 'white',
					}}
					onClick={()=>handleSubmit()}>Add post</button>


				<div>

				</div>
				</div>
				</div>
	)


}


export default CreatePost
