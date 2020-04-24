import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

const menuImg = require("../../../local-assets/menu.png");
const searchImage = require("../../../local-assets/search.png");

class GorgeousHeader extends Component {
  renderTopBar = () => {
    const {
      menuImageStyle,
      menuImageSource,
      menuImageOnPress,
      profileImageStyle,
      profileImageSource,
      profileImageOnPress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
      </View>
    );
  };

  renderContent = () => {
    const {
      title,
      subtitle,
      searchIcon,
      placeholderText,
      titleTextStyle,
      searchInputStyle,
      subtitleTextStyle,
    } = this.props;
    return (
      <View style={styles.contentContainer}>
        <Text style={titleTextStyle || styles.titleTextStyle}>{title}</Text>
        <Text style={subtitleTextStyle || styles.subtitleTextStyle}>
          {subtitle}
        </Text>
        <View style={styles.searchBarStyle}>
          <Image
            style={styles.searchImageStyle}
            source={searchIcon || searchImage}
          />
          <TextInput
            style={searchInputStyle || styles.searchInputStyle}
            placeholder={placeholderText ?? 'Search something'}
            {...this.props}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopBar()}
        {this.renderContent()}
      </View>
    );
  }
}

GorgeousHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

GorgeousHeader.defaultProps = {
  title: "Order",
  subtitle: "Healthy food can keep you fit.",
};

export default GorgeousHeader;
