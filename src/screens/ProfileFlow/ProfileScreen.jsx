import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/commons/Header';
import Avatar from '../../components/Avatar/Avatar';
import ProfileData from '../../components/ProfileFlow/ProfileData';
import {colors} from '../../constants/colors';
import normalize from '../../utils/resposiveFunction';
import CustomButton from '../../components/CustomButtons/CustomButton';
import PressableIcon from '../../components/ProfileFlow/PressableIcon';
import SavedIGStories from '../../components/ProfileFlow/SavedIGStories';
import TabNaviBar from '../../components/ProfileFlow/TabNaviBar';
export const source =
  'https://s3-alpha-sig.figma.com/img/260a/cb7f/837eef41ed89178bb8849abaae20e34a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P~Sar5l4etUwBbexalrT~Lq5cv8omY3WLSIZW-u7RZtRvwuQtKwpMM9mNI9saQ3r0SZinAIryxOLSpvuug9hbZHgDBkeiYmUDfta3xTyUuAiqbU8RJtKjhM9zuGvqcrRoqcuafO~-nhYnYbQ~HnNIa4HZZ6XNWPsAXHZB4vCHXxhuziTH4V0R7SKHbdsEqaHj2EEqXKS1PL0OQ8GdyfuxqJVP3PPYbMXgYZUEsId0RJ6HwymGW7Xo7dyc2R-2QwUOAGODLfsIepKvNbVdWyH7eyEpQT5qScBZppnvJN4qLjZOuv~w1iOlKDCUXa34L81ybvZlHlMFXFuxRz1-TZA7Q__';

const tabList=[
  "post",
  "reels",
  "user"
]

  const ProfileScreen = () => {
  const [activeTab,setActiveTab]=useState(0)
  return (
    <View>
      <Header screenName={'ProfileScreen'} isMyProfile={true} />
      <View style={styles.userProfileData}>
        <Avatar image={source} />
        <View style={styles.data}>
          <ProfileData value={'1,234'} title={'Posts'} />
          <ProfileData value={'5,678'} title={'Followers'} />
          <ProfileData value={'9.101'} title={'Following'} />
        </View>
      </View>
      <View style={styles.userNameAndInfo}>
        <View>
          <Text style={styles.userName}>Username</Text>
          <Text style={styles.category}>Category/Genre text</Text>
          <Text style={styles.describtion}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
          <Text style={styles.link}>Link goes here</Text>
        </View>
        <View style={styles.followers}>
          <View style={styles.friends}>
            <Image source={{uri: source}} style={styles.friendsImage} />
            <Image
              source={{uri: source}}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 13,
                  zIndex: -1,
                },
              ]}
            />
            <Image
              source={{uri: source}}
              style={[
                styles.friendsImage,
                {
                  position: 'absolute',
                  left: 26,
                  zIndex: -2,
                },
              ]}
            />
          </View>

          <View style={styles.followersRight}>
            <Text style={styles.followed}>Followed by </Text>
            <Text style={styles.boldFollowed}> username</Text>
            <Text style={styles.boldFollowed}> username</Text>
            <Text style={styles.followed}> and</Text>
            <Text style={styles.boldFollowed}> 100 others</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <CustomButton title={'Follow'} theme={'primary'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 6,
            }}>
            <CustomButton title={'Message'} theme={'outline'} />
            <CustomButton title={'Subscribe'} theme={'outline'} />
            <CustomButton title={'Contact'} theme={'outline'} />
            <PressableIcon />
          </View>
        </View>
      </View>
      <SavedIGStories />
      <TabNaviBar tabList={tabList} activeBar={activeTab} setActiveBar={setActiveTab}/>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userProfileData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  data: {
    flexDirection: 'row',
    gap: 24,
  },
  userName: {
    color: colors.BLACK,
    fontSize: 13,
    fontWeight: '700',
  },
  category: {
    color: colors.NEUTRAL,
    fontSize: 13,
    fontWeight: '400',
  },
  describtion: {
    fontSize: 13,

    fontWeight: 400,
    lineHeight: 16,
  },
  link: {
    color: colors.DARK_BLUE,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  userNameAndInfo: {
    paddingTop: 6,
    paddingHorizontal: 12,
    paddingBottom: 10,
    gap: 12,
  },
  friends: {
    flexDirection: 'row',
    width: 54,
  },
  friendsImage: {
    width: 26,
    height: 26,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: colors.WHITE,
  },
  followers: {
    flexDirection: 'row',
    paddingBottom: 4,
    gap: 12,
  },
  followed: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
  },
  boldFollowed: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  followersRight: {
    flexDirection: 'row',
  },
  buttons: {
    gap: 9,
  },
});
