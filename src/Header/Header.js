import React, { Component } from 'react';
import styles from "./Header.module.scss";
import Burger from './Burger'


class Header extends Component {
        constructor(props) {
                super(props);
                this.state = {
                  open: [false]
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
    <div id="myNav" className={styles.container}>
    <img src="../../editedcropcopy.jpg" alt="piranha" className={styles.container}/>
        <div className={styles.Nav}> 
        <img src="../../logotech.jpg" alt="piranha tech logo" className={styles.logotech}/>
        <h1>
        <div className={styles.masthead}>Piranha Technologies</div> 
        </h1>
        <h2>
        <div className={styles.links}><a>About</a></div>
        <div className={styles.links}><a>Contact</a></div> 
        <div className={styles.links}><a>Bio</a></div> 
        <div className={styles.links}><a>Partnerships</a></div>  
</h2>
<div className={styles.menurow}>
<Burger
					isOpen={this.state.open[1]}
					menuClicked={this.handleClick.bind(this, 1)}
					width={54}
					height={45}
					strokeWidth={3}
					rotate={0}
					color='white'
					borderRadius={5}
					animationDuration='0.4'
				/>
                                </div>
        </div>
<div className={styles.heroSlogan}>Ease your mind with our expertise in your next project
<button className={styles.heroButton}>Learn How</button>
</div>
        </div>
);
}
}
export default Header