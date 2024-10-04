// // // components/VideoCard.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Card, Title, Paragraph } from 'react-native-paper';

// const VideoCard = ({ videoId, title, description }) => {
//   return (
//     <Card style={styles.card}>
//       <WebView
//         style={styles.video}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: `https://www.youtube.com/embed/${LpGhUuxRgDs}` }}
//       />
//       <Card.Content>
//         <Title>{title}</Title>
//         <Paragraph>{description}</Paragraph>
//       </Card.Content>
//     </Card>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//   },
//   video: {
//     height: 200,
//   },
// });

// export default VideoCard;





/// updated version

// components/VideoCard.js


// components/VideoCard.js
// components/VideoCard.js


// components/VideoCard.js

// components/VideoCard.js


// components/VideoCard.js

// components/VideoCard.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VideoCard({ card }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null); // Track which video is being played

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleVideoPress = (videoId) => {
    setActiveVideo(videoId);
  };

  return (
    <View style={styles.card}>
      {/* Card Header */}
      <TouchableOpacity onPress={toggleExpand}>
        <View style={styles.cardHeader}>
          <Image source={{ uri: card.thumbnail }} style={styles.thumbnail} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.toggleIcon}>{isExpanded ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>

      {/* Expanded Video List */}
      {isExpanded && (
        <ScrollView style={styles.videoList}>
          {card.videos.map((video) => (
            <View key={video.id} style={styles.videoContainer}>
              {/* Video thumbnail or video player */}
              {activeVideo === video.videoId ? (
                <WebView
                  style={styles.videoPlayer}
                  source={{ uri: `https://www.youtube.com/embed/${video.videoId}` }}
                />
              ) : (
                <TouchableOpacity onPress={() => handleVideoPress(video.videoId)}>
                  <Image source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
                </TouchableOpacity>
              )}

              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoDescription}>{video.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 15,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  toggleIcon: {
    fontSize: 18,
    color: '#888',
  },
  videoList: {
    marginTop: 10,
  },
  videoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  videoThumbnail: {
    width: 80,
    height: 60,
    borderRadius: 8,
  },
  videoInfo: {
    flexDirection: 'column',
    marginLeft: 1,
    flex: 1,
  },
  videoTitle: {
    // position:'relative',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoDescription: {
    fontSize: 14,
rowor: '#666',
  },
  videoPlayer: {
    height: 200,
    width: '100%',
  },
});
