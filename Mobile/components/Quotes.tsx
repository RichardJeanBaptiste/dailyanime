import { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

function Quotes() {

    const [currentQuote, setCurrentQuote] = useState({
        name: 'char_name',
        anime: 'char_anime',
        img_links: [],
        quote: 'random_quote',
    })

    useEffect(() => {
         const fetchQuote = async () => {
            try {
                const response = await fetch("http://10.0.2.2:3000/api/quotes/random", {
                method: 'GET',
                });

                if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
                }

                const data = await response.json();
                //console.log('Fetched data:', data);

                setCurrentQuote({
                    name: data[0].name || 'Unknown',
                    anime: data[0].anime || 'Unknown Anime',
                    img_links: data[0].img_links || [],
                    quote: data[0].quote || 'No quote available.',
                });
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };
        fetchQuote();
    },[]);

    const getQuote = async () => {

       try {
            const response = await fetch("http://10.0.2.2:3000/api/quotes/random", {
                method: 'GET',
            });

            if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Fetched data:', data);

            setCurrentQuote({
                name: data[0].name || 'Unknown',
                anime: data[0].anime || 'Unknown Anime',
                img_links: data[0].img_links || [],
                quote: data[0].quote || 'No quote available.',
            });
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }
    
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
                <Text style={styles.quote_text}>
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