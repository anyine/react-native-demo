import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Modal } from 'react-native';
import StatusView from './components/StatusView'
import Swiper from 'react-native-swiper'
import GlobalStyles from './utils/GlobalStyles'
import Focus from '.././src/components/home/Focus'
import PicTextCell from '.././src/components/home/PicTextCell'
import { NavigationActions } from 'react-navigation';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleList: ['发现', '关注'],
            currentIndex: 0
        };

    }



    render() {
        return (
            <View style={styles.container}>
                <StatusView></StatusView>
                <View style={styles.titleView}>
                    {
                        this.state.titleList.map((item, index) => {
                            return (<Text key={item} style={this.state.currentIndex == index ? styles.fontBig : styles.fontNormal} onPress={() => {
                                this.press(index)
                            }}>{item}</Text>)
                        }
                        )
                    }
                </View>

                <FlatList data={["1", "2", "3", "1", "2", "3", "1", "2", "3"]} renderItem={(item) => {
                    switch (item.index) {
                        case 0:
                            return (<View style={styles.swiperView}>
                                <Swiper style={styles.swiper} height={200} width={GlobalStyles.window_width}>
                                    <View style={styles.slide}>
                                        <Image style={styles.image} style={{ width: GlobalStyles.window_width - 40, height: 130 }}
                                            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}></Image>
                                    </View>

                                    <View style={styles.slide}>
                                        <Image style={styles.image} style={{ width: GlobalStyles.window_width - 40, height: 130 }}
                                            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}></Image>
                                    </View>

                                    <View style={styles.slide}>
                                        <Image style={styles.image} style={{ width: GlobalStyles.window_width - 40, height: 130 }}
                                            source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}></Image>
                                    </View>
                                </Swiper>
                            </View>)
                            break;
                        case 1:
                            return (<Focus data={["关注", "已关注", "已关注"]}></Focus>)
                            break
                        default:
                            return (<PicTextCell style={styles.picTextCell} imageurls={[
                                {
                                    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
                                },
                                {
                                    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
                                },
                                {
                                    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
                                }]} showPic={(index) => { this.showPic(index) }}></PicTextCell>)
                            break;
                    }

                }} />


            </View >
        );
    }
    press(index) {
        this.setState({
            currentIndex: index
        })
    }

    showPic(index) {
        const navigateAction = NavigationActions.navigate({
            routeName: 'ImagePickViewer',
            params: {},
            // navigate can have a nested navigate action that will be run inside the child router （navigate 可以用有一个嵌套的navigate 操作）
            action: NavigationActions.navigate({ routeName: 'ImagePickViewer' }),
        });
        this.props.navigation.dispatch(navigateAction);

        // this.props.navigation.navigate('ImagePickViewer')

    }
}

const styles = StyleSheet.create({
    fontBig: {
        width: 50,
        fontSize: 21,
        fontWeight: 'bold'
    },
    fontNormal: {
        width: 40,
        fontSize: 16,
    },
    container: {
        flex: 1,

    },
    titleView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginLeft: 20,
        marginRight: 20,
    },
    swiper: {
        marginTop: 20,

    },
    image: {

    },
    slide: {
        alignItems: 'center',
        width: GlobalStyles.window_width,
        height: 200
    },
    swiperView: {
        height: 200
    },


})

export default Home;
