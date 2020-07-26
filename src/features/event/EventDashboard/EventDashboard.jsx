import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventListItem from '../EventList/EventListItem'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive content='CreateEvent' />
                   <EventForm />
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;