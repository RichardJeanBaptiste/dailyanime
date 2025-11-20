import { useEffect, useState } from 'react';
import {StyleSheet, View, Text, Image, Pressable, Modal, Button, ScrollView, TouchableOpacity } from 'react-native';
import {SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Feather from '@react-native-vector-icons/feather';
import { supabase } from '../utils'

function Quotes() {

    const [currentQuote, setCurrentQuote] = useState({
        name: '',
        anime: '',
        img_links: [],
        quote: '',
        biography: ''
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
                top: '30%',
                left : '63%',
                transform: 'translate(-50%,-50%)',
                width: '100%',
                height: '40%'
            },
            scrollView: {
                width: '100%'
            },
            text: {
                fontSize: 42,
                padding: 12,
            },
            images: {
                width: 200,
                height: 200,
                flex: 1
            }
        });

        return (

            <View style={styles.container}>
                <ScrollView 
                    style={styles.scrollView} 
                    horizontal={true}
                    contentContainerStyle={{paddingRight: '50%'}}
                >
                    {currentQuote.img_links.map((img, index) => {
                        return (
                            <View style={{ width: 200, height: 200,  marginRight: '3%'}} key={index}>
                                <Image
                                    style= {styles.images}
                                    source={{
                                        uri: img
                                    }}
                                    resizeMode='contain'
                                />
                            </View>
                        )
                    })}
                </ScrollView>
            </View>            
             
        )
            
    }

    const ModalBio = () => {
        return (
            <View style={{ position: 'absolute', top: '80%', left: '60%', transform: 'translate(-50%, -50%)', width: 300, height: 300}}>
                
                <View style={{ width: '100%', height: '90%'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>{currentQuote.name} | {currentQuote.anime}</Text>

                   
                    <ScrollView style={{ width: '100%' }}>
                        <Text style={{fontSize: 16 }}>{currentQuote.biography}</Text>
                    </ScrollView>
                    
                </View>
                

                <View style={{display: 'flex',  flexDirection: 'row', marginTop: '10%', width: '100%', justifyContent: 'center', alignItems: 'center', gap: 10}}> 
                    <Button
                        title="Wiki"

                    />
                    <Button
                        title="Close"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
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
                    <View style={{ width: '100%', height: '100%', gap: 60, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    
                        <Pressable 
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.6 : 1.0 } 
                            ]}
                            onPress={() => console.log("share button")}
                        >
                            <Feather name="share-2" size={30} color="#900"/>
                        </Pressable>

                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.6 : 1.0 } 
                            ]} 
                            onPress={() => console.log("save button")}
                        >
                            <Feather name="pocket" size={30} color="#900" />
                        </Pressable>

                        <Pressable
                            style={({ pressed }) => [
                                { opacity: pressed ? 0.6 : 1.0 } 
                            ]} 
                            onPress={() => console.log("search button")}
                        >
                            <Feather name="external-link" size={30} color="#900"/>
                        </Pressable>

                        
                        
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