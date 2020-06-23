import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';



export default class MovieDetailScreen extends React.Component {
  render() {
    const { route } = this.props;
    const {movie } = route.params;
    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500';
    let imageurl = IMAGEPATH + movie.backdrop_path;

    return (
      <View>
      <Image source= {{uri: imageurl}} style={styles.image} />
      <Text style={styles.title}> {movie.title} </Text>
      <Text style={styles.title}> {movie.release_date} </Text>
      <Text style={styles.title}> {movie.overview} </Text>
          
      </View>
    );
  }


}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 670/250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  text: {
    fontSize: 12,
    flexWrap: 'wrap'
  }

});
