import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import PhotoDetail from './PhotoDetail';

class AlbumList extends Component{
    state = { album: []}
    componentDidMount = () => {
      axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
          console.log(res.data)
          console.log('masuk')
          this.setState({ album: res.data})
      });
    }
 
    renderAlbum = () => {
        var listAlbum = this.state.album.map((item) => {
            return (
                <PhotoDetail key={item.title} album={item}/> 
            )
        });
        return listAlbum;
    }

    render(){
        return (
            <ScrollView>
                {/* <Text>Ini Component AlbumList</Text> */}
                {this.renderAlbum()}
            </ScrollView>
        );
    }
    
}

export default AlbumList;