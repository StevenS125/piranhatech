import React, { Component } from 'react';
import styles from './Bio.module.scss';

import Gallery from 'react-photo-gallery';

 class Photo extends Component {
    render() {
	return (
	    <Gallery photos={PHOTO_SET} />
	);
    }
}
const PHOTO_SET = [
  {
    src: '../../kh1.JPG',
    width: 4,
    height: 3
  },
  {
    src: '../../kh2.JPG',
    width: 1,
    height: 1
  },
  {
    src: '../../kh3.png',
    width: 8,
    height: 3
  },
  {
    src: '../../redhookbg.jpg',
    width: 5,
    height: 4
  },
  {
    src: '../../journeycollage.jpg',
    width: 5,
    height: 4
  },
  {
    src: '../../tshirtback.jpg',
    width: 5,
    height: 4
  }
];


class Bio extends Component {


  render() {
    return (
      <div>
          <div className={styles.aboutHero}>
          <img src="../../biophoto.jpg" alt="Straight talk today logo" className={styles.biopic}/>
          <div className={styles.heroSlogan}>Straight Talk for Straight Understanding &nbsp; &nbsp; &nbsp;
          <span>-Kevin Holmes</span>
    </div>

          </div>
          <div className={styles.abouthead}>About Kevin Holmes</div>
<div className={styles.aboutPhoto}>
          <img src="../../candid.jpg" alt="Kevin Holmes Posing in Charlotte" className={styles.candidPhoto}/>
</div>

<div className={styles.textLeft}> 
Kevin Holmes is a native of Brooklyn, New York.  He grew up in the infamous Red Hook Projects, known for being the backdrop of the independent and award winning film “Straight Out of Brooklyn”. Kevin is the youngest of three boys. He graduated from George Westinghouse Vocational High School where he studied electrical installation.
<br></br><br></br>
During his childhood, Kevin had some challenges in school that eventually led to him being diagnosed with a learning disorder.  Despite those challenges, Kevin had/has an extraordinary work ethic.  He landed his first job at the age of 12 years old at a Pizza Parlor where he worked part-time. 
<br></br><br></br>
Kevin worked for several companies before entering an apprenticeship program that eventually led to his current job with the city as an Electrician. Utilizing his experience as an electrician, Kevin started Holmes Improvement Company.
<br></br><br></br>
</div>

<div className={styles.textFull}>
Folded Corner: Awards & Recognition:    “8 Most Handsome and Brilliant Men of Mecklenburg” – CityPolitical Magazine 2006    “Above and Beyond the Call of Duty” – Local #3 International Brotherhood of Electrical Workers    “Brave Act of Heroism” – Department of Environmental Protection  
<br></br><br></br>   
   
In 2000, Kevin became a licensed real estate agent.  In 2005 Kevin earned his North Carolina Mortgage Loan Originators license.
<br></br><br></br>

In 2001, Kevin and another passerby came upon an automobile accident with the victims still trapped in the car.  They were able to rescue two of the passengers but unfortunately, they could not save the third.
<br></br><br></br>
That act earned Kevin several awards for heroism.  But the greatest reward that Kevin took away from the experience was a renewed spirit and attitude about just how precious life really is. 
<br></br><br></br>
Kevin believes that every person has a purpose, and his goal is to help individuals, especially young people, reach their full potential.  His father used to always say to him “Son, you may be slow but you are sure.”  Those words have been a source of encouragement for Kevin throughout his life.  Kevin has succeeded in spite of many challenges and he strives to encourage others to do the same.
<br></br><br></br>
Kevin resides in Queens, New York and remains employed by the city of New York at the Department of Environmental Protection as an electrician.  He is a Real Estate Investor and wrote a book: Daddy I’m the Man You Could Have Been.  He mentors local youth and speaks to young people about reaching their goals.  His motto is “straight talk for straight understanding.”

<br></br><br></br>
          </div>
          <Photo></Photo>

</div>
    );
  }
}

export default Bio;
