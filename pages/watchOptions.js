import React from 'react';
import {
    AppRegistry,
    Environment,
    StyleSheet,
    Text,
    View,
    VrButton
} from 'react-360';
import {NativeModules} from 'react-360';
import videos from '../components/videos/videos.json'
const {TemporalStore, SurfaceManagement} = NativeModules;
const Diseases = Object.keys(videos)

export default class WatchOptions extends React.Component {
  constructor(props){
      super(props)
      SurfaceManagement.detachAll()
  } 
  
  render() {
    return (
      <View style={styles.panel}>
          <View style={styles.listContainer}>
            <View style={styles.header}>
              <Text>Watch educational videos on</Text>
            </View>
          {
              Diseases.map( (disease, i) => (
              <View key={disease} style={styles.option}>
                    <VrButton style={styles.button} onClick={ () => { 
                        TemporalStore.video.currentWatch = disease
                        console.log(TemporalStore.video.currentWatch)
                        this.props.history.push('/watch/see')
                    }}>
                        <Text>{disease[0].toUpperCase() +  disease.slice(1).toLowerCase()}</Text>
                    </VrButton>
            </View>))
          }
            <View style={[styles.option, {backgroundColor: 'red', borderColor: 'red'}]}>
                      <VrButton style={styles.button} onClick={ () => { 
                          this.props.history.goBack()
                      }}>
                          <Text style={{textAlign: 'center'}}>
                              Back
                          </Text>
                      </VrButton>
            </View>
          </View>
          
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    paddingTop: 10,
    position: 'relative',
    width: 1000,
    height: 600,
    backgroundColor: 'black',
  },
  listContainer:{
    position: 'relative',
    top: 50,
    left:350,
    width: 300
  },
  option: {
    borderColor: 'white',
    marginBottom: 20,
    height: 50,
    padding: 10,
    borderWidth: 2,
  },
  header:{
    margin: 20,
  }

});
AppRegistry.registerComponent('WatchOptions', () => WatchOptions);
