
import Menu from '../api/Menu'
import Image from 'next/image'
import blogImg from '../../public/blog-details.jpeg'


const Post = ({post}) =>  {
 	return (<div>
		<Menu/>
		<div style={{width: '100%'}}>
			<Image src={blogImg} alt='blog'  style={{width: '100%'}}/>
		</div>
		<div style={{width: '80%', margin: '20px auto'}}>
	 		<h1>{post.title}</h1>
			<div>{post.body}</div>
		</div>
	</div>)
	}


export const getStaticPaths = async () => {

	const res = await fetch('https://simple-blog-api.crew.red/posts')
	const posts = await res.json()

	const paths = posts.map((post) => ({
		 params: {id: post.id.toString()}
}))
   return { paths, fallback: false}
}

export const getStaticProps = async ({params}) => {

	const res = await fetch(`https://simple-blog-api.crew.red/posts/${params.id}`)
	const post = await res.json()
	return { props: { post}}

}


export default Post