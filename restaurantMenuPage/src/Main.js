import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import MyBanner from './components/MyBanner';
import MyButton from './components/MyButton';

// const food_data = [
//     {
//         id: 0,
//         title: "Soups",
//         desc: "Delicious Starter Soups",
//         color: "#e57373",
//         isActive: true
//     },
//     {
//         id: 1,
//         title: "Salads",
//         desc: "All Season Salads",
//         color: "#4caf50" ,
//         isActive: true
//     },
//     {
//         id: 2,
//         title: "Main Dishes",
//         desc: "Delicious Local Main Dishes",
//         color: "#ffd54f" ,
//         isActive: true
//     },
//     {
//         id: 3,
//         title: "Sweets",
//         desc: "Milky Sweets",
//         color: "#f48fb1" ,
//         isActive: false
//     },
//     {
//         id: 4,
//         title: "Cold Drinks",
//         desc: "Cold Drinks Kinds",
//         color: "#0288d1" ,
//         isActive: true
//     },
//     {
//         id: 5,
//         title: "Hot Drinks",
//         desc: "Hot Drinks Kinds",
//         color: "#f44336" ,
//         isActive: false
//     },
// ];


const Main = () => {
    return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffebee' }}>
            <ScrollView>
                <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', margin: 10,}}>MENU</Text>
                <MyBanner
                    title="Soups"
                    desc="Delicious Starter Soups" 
                    color="#e57373" 
                    isActive={true} 
                    />
                <MyBanner 
                    title="Salads"
                    desc="All Season Salads"
                    color="#4caf50" 
                    isActive={true}
                    />
                <MyBanner 
                    title="Main Dishes"
                    desc="Delicious Local Main Dishes"
                    color="#ffd54f" 
                    isActive={true}
                    />
                <MyBanner 
                    title="Sweets"
                    desc="Milky Sweets"
                    color="#f48fb1" 
                    isActive={false}
                    />
                <MyBanner 
                    title="Cold Drinks"
                    desc="Cold Drinks Kinds"
                    color="#0288d1" 
                    isActive={true}
                    />
                <MyBanner 
                    title="Hot Drinks"
                    desc="Hot Drinks Kinds"
                    color="#f44336" 
                    isActive={false}
                    />
                
                {/* {
                    food_data.map(food => {
                        return (
                        <MyBanner 
                            title={food.title}
                            desc={food.desc}
                            color={food.color} 
                            isActive={food.isActive}
                        />
                    )})
                } */}

                <MyButton 
                    buttonTitle="Refresh"
                />
            </ScrollView>
                
        </SafeAreaView>

  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0277bd',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});