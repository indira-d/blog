
import Link from 'next/link'
import Menu from '../api/Menu'
import Image from 'next/image'
import blogImg from '../../public/blog.jpeg'



 const posts = ({posts}) => {
	return (
		<div>
			<Menu />
			<Image src={blogImg} alt='blog Picture'/>
			{
				posts.map(post => (
					<Link href={`/posts/${post.id}`} key={post.key}>
						<a>
							<div style={{width: '80%', margin: '10px auto'}}>
								<h2>{post.title}</h2>
								<div>{post.body}</div>
							</div>
						</a>
					</Link>
				))
			}
			
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch('https://simple-blog-api.crew.red/posts')
	const posts = await res.json()

	return {
		props: {
			posts
		}
	}
}

export default posts



