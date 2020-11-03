import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/global.styles'

const Error = ({ error = '', handleClose, showErr, time = 5000 }) => {
    
    return showErr ?
        <View style={{
            backgroundColor: 'black',
            paddingHorizontal: 30,
            paddingVertical: 20,
            flexDirection: 'row',
            borderRadius: 8,
            margin: 4
        }}>
            <View style={{ paddingRight: 8 }}>
                {
                    typeof error === 'string' && <Text style={styles.errText}>{error}</Text>
                }
            </View>
            <TouchableOpacity onPress={handleClose} style={{
                justifyContent: 'flex-end',
                position: 'absolute',
                top: 10,
                right: 10,
                padding: 8
            }}>
                <Text>cross</Text>
            </TouchableOpacity>
        </View>
        : null
}

export default Error;