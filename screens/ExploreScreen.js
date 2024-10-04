import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking, FlatList, ScrollView } from 'react-native';
import H1 from '../components/H1';
 // Make sure to import the H1 component

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      name: 'Available Room',
      details: 'Welcome to Our Exceptional Room Service Experience At Ajey World, we take pride in offering a premier room service experience tailored to meet your every need. Whether you are craving a delicious meal, a refreshing drink, or a late-night snack, our room service is designed to provide the utmost convenience and comfort',
      icon: 'https://private-user-images.githubusercontent.com/54279953/344696497-7243a1a3-1fb9-4258-989d-014ef3b670d2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NDEyOTMsIm5iZiI6MTcxOTg0MDk5MywicGF0aCI6Ii81NDI3OTk1My8zNDQ2OTY0OTctNzI0M2ExYTMtMWZiOS00MjU4LTk4OWQtMDE0ZWYzYjY3MGQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDEzMzYzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg3MTU0MzQ5YWNkNWQxMWU0NTM5ZDFhOWIxY2ZmOWI2MGZiNTIwYTQyN2JmNTM4NzRkZDBlNWU0M2U5MDczYzEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.8ZL1yZojZprKgYI_ViIGMNT-XKkeOMDWznICjy8YQyk',
      link: 'https://forms.gle/cWPiSEcdWNgA4ore9'
    },
    {
      name: 'Shop Owner Detail',
      details: 'Welcome to Ajey World, where your business meets limitless possibilities! Register your shop today and take the first step towards expanding your reach and boosting your sales. Here’s why you should join our thriving online marketplace:',
      icon: 'https://private-user-images.githubusercontent.com/54279953/344698079-0a989be9-e8e1-4785-b256-49f0ec82325a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NDE2MDYsIm5iZiI6MTcxOTg0MTMwNiwicGF0aCI6Ii81NDI3OTk1My8zNDQ2OTgwNzktMGE5ODliZTktZThlMS00Nzg1LWIyNTYtNDlmMGVjODIzMjVhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDEzNDE0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFmYmQ5ZmU1MzRmNjI5Y2JjNTIzYTU0Njk3ZmE2Y2VhMmY2MGRjYWQzOGQ5MjcxMDcwOTlkY2M2MzljNGUwYzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5jDBu8o3L4wC3-hfjQo6KR3b4AIwq29-8kCeGF12nV0',
      link: 'https://forms.gle/UJYHCmYXtPVuMxoj9'
    },
    // {
    //   name: 'Worker Contact Detail',
    //   details: 'Phone: 123-456-7890\nWork Type: Plumber\nAddPhone: 123-456-7890\nWork Type: Plumber\nAddress: 123 Worker St. ress: 123 Worker St.  ',
    //   icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Upwork_logo_2022.svg',
    //   link: 'https://www.example.com/workers'
    // },
    {
      name: 'Developer Contact',
      details: 'As a MERN stack developer, I am proficient in using the technologies that make up the MERN stack, which include MongoDB, Express.js, React.js, and Node.js. I have experience designing and developing full-stack web applications using these technologies. I am skilled in creating RESTful APIs with Node.js and Express.js, as well as using MongoDB for data storage and retrieval.As a MERN stack developer, I am committed to writing clean, maintainable code that is well- documented and adheres to best practices in software development. I am always eager to learn and stay up-to-date with the latest trends and technologies in the field.',
      icon: 'https://private-user-images.githubusercontent.com/54279953/344710807-89da00cb-17db-4ad7-9c1f-f4c47a0972d4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NDM5ODQsIm5iZiI6MTcxOTg0MzY4NCwicGF0aCI6Ii81NDI3OTk1My8zNDQ3MTA4MDctODlkYTAwY2ItMTdkYi00YWQ3LTljMWYtZjRjNDdhMDk3MmQ0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDE0MjEyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU1ZDc4OGYxNWVkZGIzODcxMzE0MmVhMjM3MGFkNDI0NmEzOGRkMzhlM2U5NWViZDFjNmU1NDFjZjI0YTk4OGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.E4Uls25GoBg1Jr5yoSEaF-wKqE6vQMqx0-Lg7E-8SPU',
      link: 'https://ajaykumardhurwe.github.io/about_me/' 
    },
    {
      name: 'Social Media Link',
      details: 'Follow us on social media.',
      icon: 'https://private-user-images.githubusercontent.com/54279953/344702586-23b67a1e-e899-437f-bc80-65144f51e519.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4NDM3MzQsIm5iZiI6MTcxOTg0MzQzNCwicGF0aCI6Ii81NDI3OTk1My8zNDQ3MDI1ODYtMjNiNjdhMWUtZTg5OS00MzdmLWJjODAtNjUxNDRmNTFlNTE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA3MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNzAxVDE0MTcxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA4MTkzYWM0ZWNlMDAxYzEyMzZjYmZmOTQ2ZWRlZDhjNWIzOTZmYWU3OTgwOGIxNDZmODYzMzI5MzBiYzhhYTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3GZTd5-TXdu3qXjnZpLe17-VK31bwJWeuGRMy5PafMY',
      // icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png',
      link: 'https://www.instagram.com'
    },
    // Add more categories as needed
  ];

  const handlePress = (category) => {
    setSelectedCategory(category);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} onPress={() => handlePress(item)}>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.boxText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (

    <><ScrollView>
      
      <View style={styles.container}>
      <H1>Our Upcoming Services</H1>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList} />
      <View style={styles.contentContainer}>
        {selectedCategory ? (
          <View>
            <H1>{selectedCategory.name}</H1>
            <Text style={styles.contentText}>{selectedCategory.details}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(selectedCategory.link)}>
              Visit {selectedCategory.name}
            </Text>
          </View>
        ) : (
          <Text style={styles.contentText}>Select a category to see details</Text>
        )}
      </View>
    </View>

    </ScrollView>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  flatList: {
    paddingHorizontal: 10,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 150,
    height: 150,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  icon: {
    width: 130,
    height: 100,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    minWidth: 300,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 70,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
