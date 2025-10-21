import { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import { supabase } from '../utils'

function Quotes() {

    const [currentQuote, setCurrentQuote] = useState({
        name: 'char_name',
        anime: 'char_anime',
        img_links: [],
        quote: 'random_quote',
    })

    const getQuote = async () => {

        const { data, error } = await supabase.rpc('hello')
        if(error) {
            console.error('RPC Error:' , error)
        } else {
            console.log(data)
            setCurrentQuote({
                name: data.name,
                anime: data.anime,
                img_links: data.img_links,
                quote: data.quote
            })
        }
    }

    useEffect(() => {
        getQuote();
    },[]);

    
    
    return (
        <View style={styles.quote_root}>
            <View style={styles.quote_title}>
                <Pressable style={{flex: 0.1}} onPress={getQuote}>
                    <Image
                        style={styles.quote_img}
                        source={{
                            uri: currentQuote.img_links[0]
                        }}
                    />
                </Pressable>
                

                <View style={{ flex: 0.7, aspectRatio: 1, marginLeft: '12%' }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{currentQuote.name}</Text>
                    <Text style={{ fontSize: 16 }}>{currentQuote.anime}</Text>
                </View>
             </View>


            <View style={styles.quote_container}>
                <View style={styles.divider}/>
                <Text style={styles.quote_text} onPress={getQuote}>
                    {currentQuote.quote}
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
        width: 70,
        height: 70,
        borderRadius: 35
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
        width: '90%',
        marginTop: '7%',
        textAlign: 'center',
        fontSize: 30
    }
})


export default Quotes;