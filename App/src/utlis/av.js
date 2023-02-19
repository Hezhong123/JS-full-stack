// 声音插件
import {Audio} from 'expo-av';
import React from "react";
import {Button, View} from "react-native";

//播放声音
export  function Av_sound(url){
    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(url);
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View >
            <Button title="播放" onPress={playSound} />
        </View>
    );
}


export function Av_Recording(url){
    const [recording, setRecording] = React.useState();
    async function startRecording() {
        try {
            // console.log('Requesting permissions..');
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            // console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            // console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        // console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        });
        const uri = recording.getURI();
        url(uri)
        // console.log('Recording stopped and stored at', uri);
    }

    return (
        <View >
            <Button
                title={recording ? '停止录音' : '开始录音'}
                onPress={recording ? stopRecording : startRecording}
            />
        </View>
    );

}

