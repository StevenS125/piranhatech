import React, { Component } from 'react';
 //components
 //styles
import styles from './Twitter.module.scss';
 import { TwitterTimelineEmbed } from 'react-twitter-embed';
// TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton
  
 class Tweets extends Component {
    
    constructor(props) {
        super(props)
     }
    toggleHover(){
        this.setState({hover: !this.state.hover})
      }
    
   render() {
    return (
            
            <div className={styles.container}>
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="thepiranhatech"
  options={{height: 500}}
/></div>
     );
  }
}
 export default Tweets; 