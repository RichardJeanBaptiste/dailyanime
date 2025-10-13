import { useEffect } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function Quotes() {
    return (
        <View style={styles.quote_root}>
            <View style={styles.quote_title}>
                <Image
                    style={styles.quote_img}
                    source={require('../components/a_prof.jpg')}
                />

                <View style={{ flex: 0.7, aspectRatio: 1, marginLeft: '5%' }}>
                    <Text>Char Name</Text>
                    <Text>Char Anime</Text>
                </View>
             </View>


            <View style={styles.quote_container}>
                <View style={styles.divider}/>
                <Text style={styles.quote_text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer at diam ut velit semper placerat ac non mi. Nam venenatis lacus ligula, at aliquam quam finibus faucibus. Mauris et condimentum ante. 
                    Donec commodo eros non tristique blandit. Aenean tellus justo, luctus vel sapien id, tincidunt cursus lectus. Cras convallis ultricies nunc, sit amet consequat nulla.
                     Nulla vitae sapien id orci euismod ornare ut in ex. Integer ullamcorper est sit amet ipsum luctus molestie. Etiam blandit dui eu pretium sollicitudin. 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lectus tincidunt, ornare augue eu, fringilla orci. 
                     Aenean lacus tortor, accumsan vehicula libero quis, ultricies vulputate neque. 
                    Praesent eu euismod eros. Morbi iaculis efficitur nunc sit amet mollis.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quote_root: {
        height: '85%',
        width: '100%',
        position: 'absolute',
        top: '10%',
    },
    quote_title: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    quote_img : {
        width: 50,
        height: 50,
        flex: 0.1,
        borderRadius: 30
    },
    divider: {
        backgroundColor: 'black',
        width: '100%',
        height: '.2%'
    },
    quote_container:{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: '85%'
    },
    quote_text: {
        width: '95%',
        marginTop: '7%',
        textAlign: 'center',
        fontSize: 21
    }
})


export default Quotes;