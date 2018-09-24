import React from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from './src/components/NativeCourses';

const courses = TabNavigator({
  ReactCourses: { screen: ReactCourses },
  NativeCourses: { screen: NativeCourses },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    swipeEnabled: true,
  },
});

AppRegistry.registerComponent('courses', () => courses);

// Session 1 and 2
// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import ReactCourses from './src/components/ReactCourses';
// import NativeCourses from './src/components/NativeCourses';

// const courses = StackNavigator({
//   ReactCourses: { screen: ReactCourses },
//   NativeCourses: { screen: NativeCourses },
// });

// AppRegistry.registerComponent('courses', () => courses);