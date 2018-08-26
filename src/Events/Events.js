import React, { Component } from 'react';
import { Table } from 'reactstrap';

//components

//styles
import styles from './Events.module.scss';





class Events extends Component {

  render() {
    return (
        <div className={styles.eMain}>
        <h4 className={styles.eHead}>Upcoming Events</h4>
        <Table hover>
        <thead>
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date / Time</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Investing in Real Estate Outside of New York</td>
            <td>June 21st 6:00 PM</td>
            <td>Catherine & Count Basie Middle School 72,<br></br> 133-25 Guy R. Brewer Blvd., Rm. 209, 1 Jamaica, Ny 11434</td>
          </tr>
        </tbody>
      </Table>
        </div>
    );
  }
}





export default Events;