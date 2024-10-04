import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import VideoCard from '../components/VideoCard';


const HomeScreen = ({ navigation }) => {
  const [expandedVideo, setExpandedVideo] = useState(null);

  const toggleExpand = (videoId) => {
    setExpandedVideo(expandedVideo === videoId ? null : videoId);
  };


  const videoData = [
    {
      id: '1',
      title: 'Computer Class',
      thumbnail: 'https://private-user-images.githubusercontent.com/54279953/368494888-30b07b9d-8383-4593-836b-f399ddf41531.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MTQxMzksIm5iZiI6MTcyNjcxMzgzOSwicGF0aCI6Ii81NDI3OTk1My8zNjg0OTQ4ODgtMzBiMDdiOWQtODM4My00NTkzLTgzNmItZjM5OWRkZjQxNTMxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE5VDAyNDM1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzNGQwOWY5YjkzY2JlMjRlMzE0YmZlOGU2NTEzODRjODNkNzU2YzcwMTRmMWVlYTlkMDVlYjViZWQxMzljMzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Fe0xFNQZ32CMsLct3yXO7_9vTVCS77ddH7BXFH2TQLM',
      videos: [
        {
          id: 'v1',
          title: 'Lecture 01',
          thumbnail: 'https://private-user-images.githubusercontent.com/54279953/368494888-30b07b9d-8383-4593-836b-f399ddf41531.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MTQxMzksIm5iZiI6MTcyNjcxMzgzOSwicGF0aCI6Ii81NDI3OTk1My8zNjg0OTQ4ODgtMzBiMDdiOWQtODM4My00NTkzLTgzNmItZjM5OWRkZjQxNTMxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE5VDAyNDM1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzNGQwOWY5YjkzY2JlMjRlMzE0YmZlOGU2NTEzODRjODNkNzU2YzcwMTRmMWVlYTlkMDVlYjViZWQxMzljMzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Fe0xFNQZ32CMsLct3yXO7_9vTVCS77ddH7BXFH2TQLM',
          description: 'Description of Lecture 1',
          videoId: 'dQw4w9WgXcQ',
        },
        {
          id: 'v2',
          title: 'Lecture 02',
          thumbnail: 'https://private-user-images.githubusercontent.com/54279953/368494888-30b07b9d-8383-4593-836b-f399ddf41531.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MTQxMzksIm5iZiI6MTcyNjcxMzgzOSwicGF0aCI6Ii81NDI3OTk1My8zNjg0OTQ4ODgtMzBiMDdiOWQtODM4My00NTkzLTgzNmItZjM5OWRkZjQxNTMxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE5VDAyNDM1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgzNGQwOWY5YjkzY2JlMjRlMzE0YmZlOGU2NTEzODRjODNkNzU2YzcwMTRmMWVlYTlkMDVlYjViZWQxMzljMzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Fe0xFNQZ32CMsLct3yXO7_9vTVCS77ddH7BXFH2TQLM',
          description: 'Description of Lecture 2',
          videoId: '3JZ_D3ELwOQ',
        },
      ],
    },
    {
      id: '2',
      title: 'English Speaking',
      thumbnail: 'https://private-user-images.githubusercontent.com/54279953/368490994-5b7d3375-be2d-4dd9-9c69-8af0d6109cac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MTQzOTMsIm5iZiI6MTcyNjcxNDA5MywicGF0aCI6Ii81NDI3OTk1My8zNjg0OTA5OTQtNWI3ZDMzNzUtYmUyZC00ZGQ5LTljNjktOGFmMGQ2MTA5Y2FjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE5VDAyNDgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiY2UwZjRiZDYwMjdkNjVlYTc3NTM1NzVmZTNiNWFhMTU0NWYxNTJjMjBjNGUzZDZlMWFhMGZhNTUwZTQ1NjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dM0TetoZS-D4MAbGoYBJGiuiG-GabXHMH3nxC7hdoFQ',
      videos: [
        {
          id: 'v3',
          title: 'Lecture 01',
          thumbnail: 'https://private-user-images.githubusercontent.com/54279953/368490994-5b7d3375-be2d-4dd9-9c69-8af0d6109cac.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY3MTQzOTMsIm5iZiI6MTcyNjcxNDA5MywicGF0aCI6Ii81NDI3OTk1My8zNjg0OTA5OTQtNWI3ZDMzNzUtYmUyZC00ZGQ5LTljNjktOGFmMGQ2MTA5Y2FjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTE5VDAyNDgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiY2UwZjRiZDYwMjdkNjVlYTc3NTM1NzVmZTNiNWFhMTU0NWYxNTJjMjBjNGUzZDZlMWFhMGZhNTUwZTQ1NjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.dM0TetoZS-D4MAbGoYBJGiuiG-GabXHMH3nxC7hdoFQ',
          description: 'Description of Lecture 01',
          videoId: 'L_jWHffIx5E',
        },
      ],
    },

  ];
  return (
<View style={styles.container}>
<FlatList
  data={videoData}
  renderItem={({ item }) => <VideoCard card={item} />}
  keyExtractor={(item) => item.id}
/>
</View>


  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 16,

    paddingTop: 20,
    backgroundColor: '#f0f0f0',

  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 10,
  },
  video: {
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default HomeScreen;





// //////////////////////////////
// //    updated version


