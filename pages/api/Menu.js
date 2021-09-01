
import Link from 'next/link'

const Menu = () => {
	return (
		<div style={{width: '100%', 
					height: '70px', 
					padding: '30px',
					fontWeight: 'bold',
					borderBottom: '1px solid silver'}}>
		
			<Link href={'/posts'}>
				<a style={{margin: '20px'}}>
					Latest Posts
				</a></Link>
			<Link href={'/CreatePost'}>
				<a>
			     	Create Post
				</a></Link>
		</div>
	)
}

export default Menu
