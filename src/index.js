import faker from '@faker-js/faker'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDatail.js'

const App = () => {
	return (
		<div className='ui container comments'>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
			<CommentDetail
				author={faker.name.findName(undefined, undefined, undefined)}
				timeAgo={faker.date.weekday()}
				post={faker.lorem.lines(5)}
			/>
		</div>
	)
}
ReactDOM.render(<App />, document.querySelector('#root'))
