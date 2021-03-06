import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { primaryColor, red } from '../../theme/colors';

import Stepper from '../../utils/Stepper';
import TrackCard from './TrackCard';
import DriverDetails from './DriverDetails';

const DeliveryTracking = ({ pickup, dropoff }) => {

    return (
        <View style={styles.container}>
            <Stepper
                lineColor={primaryColor}
                dotColor={primaryColor}
                Component={() => <Text style={styles.text}>Book Delivery</Text>}
            />
            <Stepper
                lineColor={'lightgray'}
                dotColor={primaryColor}
                Component={DriverDetails}
            />
            <Stepper
                lineColor={'lightgray'}
                dotColor={'lightgray'}
                Component={() => (
                    <TrackCard
                        title='Package Pickup'
                        value={pickup}
                        color={red}
                    />
                )}
            />
            <Stepper
                lineColor={'lightgray'}
                dotColor={'lightgray'}
                Component={() => (
                    <TrackCard
                        title='Drop-off package'
                        value={dropoff}
                        color={primaryColor}
                    />
                )}
            />
            <Stepper
                lineColor={'white'}
                dotColor={'lightgray'}
                Component={() => (
                    <TrackCard
                        title='Delivery Code'
                        value='4024'
                        color={primaryColor}
                    />
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 40
    },
    progressView: {
        paddingLeft: 20,
        paddingBottom: 30,
    },
    circular: {
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        left: -6,
        top: -5
    },
    text: {
        fontSize: 18,
        color: 'gray',
        marginTop: -15
    }
});

const mapStateToProps = state => ({
    pickup: state.booking.origin.address,
    dropoff: state.booking.destination.address,
});

export default connect(mapStateToProps)(DeliveryTracking);