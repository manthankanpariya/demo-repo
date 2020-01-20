import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { VideoPlayer, Trimmer } from 'react-native-video-processing';

export default class ImageVideoPicker extends React.Component {
  state = {
    avatarSource: null,
    videoSource: null,
  };
 newvideo = 'content://com.mi.android.globalFileexplorer.myprovider/external_files/WhatsApp/Media/WhatsApp%20Video/VID-20200101-WA0001.mp4';

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    this.selectVideoTapped = this.selectVideoTapped.bind(this);
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  selectVideoTapped() {
    const options = {
      title: 'Video Picker',
      takePhotoButtonTitle: 'Take Video...',
      mediaType: 'video',
      videoQuality: 'medium',
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          videoSource: response.uri,
        });
      }
    });
  }

//   trimVideo() {
//     retrun(console.log('kjbjjhb'));
//     const options = {
//         startTime: 0,
//         endTime: 15,
//         quality: VideoPlayer.Constants.quality.QUALITY_1280x720, // iOS only
//         saveToCameraRoll: true, // default is false // iOS only
//         saveWithCurrentDate: true, // default is false // iOS only
//     };
//     this.videoPlayerRef.trim(options)
//         .then((newvideo) => console.log(newvideo))
//         .catch(console.warn);
// }

// compressVideo() {
//     const options = {
//         width: 720,
//         height: 1280,
//         bitrateMultiplier: 3,
//         saveToCameraRoll: true, // default is false, iOS only
//         saveWithCurrentDate: true, // default is false, iOS only
//         minimumBitrate: 300000,
//         removeAudio: true, // default is false
//     };
//     this.videoPlayerRef.compress(options)
//         .then((videoSource) => console.log(videoSource))
//         .catch(console.warn);
// }

// getPreviewImageForSecond(second) {
//     const maximumSize = { width: 640, height: 1024 }; // default is { width: 1080, height: 1080 } iOS only
//     this.videoPlayerRef.getPreviewForSecond(second, maximumSize) // maximumSize is iOS only
//     .then((base64String) => console.log('This is BASE64 of image', base64String))
//     .catch(console.warn);
// }

// getVideoInfo() {
//     this.videoPlayerRef.getVideoInfo()
//     .then((info) => console.log(info))
//     .catch(console.warn);
// }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource === null ? (
              <Text>Select a Photo</Text>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text>Select a Video</Text>
          </View>
        </TouchableOpacity>

        <VideoPlayer
                    ref={ref => this.videoPlayerRef = ref}
                    startTime={30}  // seconds
                    endTime={120}   // seconds
                    play={true}     // default false
                    replay={true}   // should player play video again if it's ended
                    rotate={true}   // use this prop to rotate video if it captured in landscape mode iOS only
                    source={this.state.videoSource}
                    playerWidth={300} // iOS only
                    playerHeight={500} // iOS only
                    style={{ height:200,width:500, borderColor:'black' }}
                    resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
                    onChange={({ nativeEvent }) => console.log({ nativeEvent })} // get Current time on every second
                />
                {/* <Text>{console.log(this.state.videoSource)}</Text> */}

                {/* <Trimmer
                    source={this.state.videoSource} 
                    height={100}
                    width={300}
                    onTrackerMove={(e) => console.log(e.currentTime)} // iOS only
                    // currentTime={this.video.currentTime} // use this prop to set tracker position iOS only
                    themeColor={'white'} // iOS only
                    thumbWidth={30} // iOS only
                    trackerColor={'green'} // iOS only
                    onChange={(e) => console.log(e.startTime, e.endTime)}
                /> */}
  <Text>{console.log(this.trimVideo)}</Text>
        {this.state.videoSource && (
          <Text style={{margin: 8, textAlign: 'center'}}>
            {this.state.videoSource}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150,
  },
});