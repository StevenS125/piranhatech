import React from 'react';

import Burger from './Burger';

class Burgerman extends React.Component {
	constructor() {
		super();
		this.state = {
			open: [false, true, false, true]
		};
  }
	handleClick(id) {
		let { open } = this.state;
    this.setState({
			open: [...open.slice(0, id), !open[id], ...open.slice(id + 1)]
		});
	}
	render() {
		return (
			<div className='menu-row'>

				<Burger
					isOpen={this.state.open[1]}
					menuClicked={this.handleClick.bind(this, 1)}
					width={54}
					height={45}
					strokeWidth={3}
					rotate={0}
					color='black'
					borderRadius={5}
					animationDuration='0.4'
				/>

			</div>
		);
	}
};

export default Burgerman;
