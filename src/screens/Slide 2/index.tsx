import { ImageBackground, Text, View, Image } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles, stylesz, stylesy } from "./style"
import { ButtonSlide } from "../../components/ButtonSlide"

import React from "react";
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigarion";

export function Slide2({ navigation }: MenuTabTypes) {
  const fundo = require('../../assets/fundo.png')
  const imagem1 = require('../../assets/image 2.png')
  const imagem2 = require('../../assets/image 3.png')
  const imagem3 = require('../../assets/image 4.png')
  const imagem4 = require('../../assets/image 5.png')
  return (
    <>
      <ImageBackground source={fundo} style={styleContainer.container}>
        <View style={stylesz.view}>
          <View style={styles.image}>
            <Image source={imagem1} style={styles.imagem} ></Image>
            <Image source={imagem2} style={styles.imagem}></Image>
            <Image source={imagem3} style={styles.imagem}></Image>
            <Image source={imagem4} style={styles.imagem}></Image>
          </View>
         
        </View>
      </ImageBackground>
    </>
  )



}
