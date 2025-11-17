import { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image, Pressable, Modal, Button, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { supabase } from '../utils'

function Quotes() {

    const [currentQuote, setCurrentQuote] = useState({
        name: 'char_name',
        anime: 'char_anime',
        img_links: [],
        quote: 'random_quote',
        biography: 'biography'
    })

    const [imageUriIndex, setImageUriIndex ] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    const getQuote = async () => {

        const { data, error } = await supabase.rpc('get_random_quote')

        if(error) {
            console.error('RPC Error:' , error)
        } else {
            console.log(data)
            setCurrentQuote({
                name: data.name || '',
                anime: data.anime || '',
                img_links: data.img_links || ['https://img.freepik.com/free-photo/anime-style-illustration-rose_23-2151548355.jpg','',''],
                quote: data.quote || '',
                biography: data.biography || ''
            })

            setImageUriIndex(0);
        }
    }

    useEffect(() => {
        getQuote();
    },[]);

    const cycleImages = () => {
        setImageUriIndex( imageUriIndex + 1)

        if(imageUriIndex > 2) {
            console.log("No Images");
        }
    }

    const ModalImages = () => {

        const styles = StyleSheet.create({
            
            container: {
                position: 'absolute',
                top: '40%',
                left : '63%',
                transform: 'translate(-50%,-50%)',
                width: '100%',
                height: '50%'
            },
            scrollView: {
                backgroundColor: 'pink',
            },
            text: {
                fontSize: 42,
                padding: 12,
            },
            images: {
                width: 200,
                height: 200,
                marginTop: '5%',
                marginLeft: '3%',

            }
        });

        return (

            <View style={styles.container}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <Image
                        style= {styles.images}
                        source={{
                            uri: currentQuote.img_links[0]
                        }}
                   
                    />


                    <Image
                        style= {styles.images}
                        source={{
                            uri: currentQuote.img_links[1]
                        }}
                       
                    />

                    <Image
                        style= {styles.images}
                        source={{
                            uri: currentQuote.img_links[2]
                        }}
                       
                    />

                    <Image
                        style= {styles.images}
                        source={{
                            uri: currentQuote.img_links[0]
                        }}
                    />

                    <Image
                        style= {styles.images}
                        source={{
                            uri: currentQuote.img_links[2]
                        }}
                    />
                </ScrollView>
            </View>            
            
            
        )
            
    }

    const ModalBio = () => {
        return (
            <View style={{ position: 'absolute', top: '80%', left: '60%', transform: 'translate(-50%, -50%)'}}>
                <Text>{currentQuote.name} | {currentQuote.anime}</Text>
                <Text>{currentQuote.biography}</Text>

                <View style={{display: 'flex',  }}> 

                </View>
            </View>
        )
    }

    
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.quote_root}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ModalImages/>
                            
                            <ModalBio/>
                                
                            <Button
                                title="Close"
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>

                <View style={styles.quote_title}>
                    
                    <View style={{ width: 70, height: 70, borderRadius: 35}}>
                        <Pressable onPress={() => setModalVisible(true)}>
                                <Image
                                    style= {styles.quote_img}
                                    source={{
                                        uri: currentQuote.img_links[imageUriIndex]
                                    }}
                                    onError={cycleImages}
                                />
                        </Pressable>
                        
                    </View>
                
                    
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


                <View style={styles.bottom_nav}>
                    <View style={{ width: '100%', height: '100%', gap: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Button
                            title="Share"
                            color="red"
                        />
                        
                        <Button
                            title="Save"
                            color="red"
                        />

                        <Button
                            title="Search"
                            color="red"
                        />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
        
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
        height: '20%',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    quote_img : {
        width: '100%',
        height: '100%',
        borderRadius: 35
    },
    divider: {
        backgroundColor: 'black',
        width: '100%',
        height: '.2%',
        marginTop: '15%'
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
    },
    bottom_nav : {
        width: '100%',
        height: '20%',
        position: 'absolute',
        top: '90%',
    },
    // Modal Styles
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%',
        height: '90%',
        position: 'relative'
    },
})


export default Quotes;