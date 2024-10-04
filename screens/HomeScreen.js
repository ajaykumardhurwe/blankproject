import React from 'react';
import { useState } from 'react';
import { WebView } from 'react-native-webview';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from '../components/Component';
const App = (navigation) => {
 const [expandedVideo, setExpandedVideo] = useState(null);
  const toggleExpand = (videoId) => {
    setExpandedVideo(expandedVideo === videoId ? null : videoId);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CardComponent
          title="Computer Course for Competitive Exam"
          description="This course is designed to provide a thorough understanding of computer fundamentals and advanced topics necessary for competitive exams. It covers theoretical concepts, practical skills, and exam-specific strategies to help students excel in computer-related sections of various competitive exams."
          imageUrl="https://private-user-images.githubusercontent.com/54279953/344646923-c89c08c1-ec5a-4005-a74f-50a0603baa61.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4MzEyMjYsIm5iZiI6MTcxOTgzMDkyNiwicGF0aCI6Ii81NDI3OTk1My8zNDQ2NDY5MjMtYzg5YzA4YzEtZWM1YS00MDA1LWE3NGYtNTBhMDYwM2JhYTYxLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDEwNDg0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzNDllOTcxMjczMzYxNmVhMTZlMjIyYmQ4Zjk4MWRmMjQ1YWVkMDgzYjE2MGQ5Y2IyYTEzYmIwMzQ0Yzk2MGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.fd7utozqSVQ-7VXe8ggDoqVYwe-wMNVnX64Eufx-ByU"
          dropdownOptions={['Option 1', 'Option 2', 'Option 3']}
        />
        <CardComponent
          title="English for both Speaking and  competition"
          description="Are you preparing for competitive exams and need to improve your English skills? Our comprehensive English Course for Competitive Exams is designed to help you excel. This course covers all essential areas, including grammar, vocabulary, reading comprehension, and writing skills, ensuring you're fully prepared to tackle any English section in your exams."
        //  imageUrl={require('../assets/post.png')}
          imageUrl="https://private-user-images.githubusercontent.com/54279953/344680091-02ea0d8f-fd3a-402b-b840-f8bb3f065932.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4Mzg1ODksIm5iZiI6MTcxOTgzODI4OSwicGF0aCI6Ii81NDI3OTk1My8zNDQ2ODAwOTEtMDJlYTBkOGYtZmQzYS00MDJiLWI4NDAtZjhiYjNmMDY1OTMyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMVQxMjUxMjlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lMmFmZTVjMWM0MGFhYTY1MzdlNzA4ZGQ4NWJjNmIxOGRkNGRlZTMxYTZkYTU4NzYwODI0NjZlZGJlZmM2NzFmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.OHvaDAHdZ6pbY_YKu-ryZ58Wz1gpgt_zWW1x3S03t64"
          dropdownOptions={['Option A', 'Option B', 'Option C']}
        
        />

<CardComponent
          title="Upcoming Courses"
          description="Get ready to elevate your skills with our highly anticipated upcoming courses. Each course is meticulously designed to cater to your needs, whether you’re a beginner or looking to specialize further."
          imageUrl="https://private-user-images.githubusercontent.com/54279953/344685028-88618607-9d2c-4e8a-9ec2-528f52807db7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4MzkzNDcsIm5iZiI6MTcxOTgzOTA0NywicGF0aCI6Ii81NDI3OTk1My8zNDQ2ODUwMjgtODg2MTg2MDctOWQyYy00ZThhLTllYzItNTI4ZjUyODA3ZGI3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDEzMDQwN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2NjVjMjc2ZDkzOTQ2NTRmYzlmMTYzZGYyODVmZDhlOTdjYTc1NGNiYWUwMTVhYWRlN2E3N2JiYWUyYTI1ZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0k9fDduXACF4qxR9p9ezs68cxhJKe7r_FLS_XOOR_tI"
          dropdownOptions={['Option A', 'Option B', 'Option C']}
          
        
        />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

