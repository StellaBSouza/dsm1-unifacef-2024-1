import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { Text, View, Image } from "react-native"
import styles from './styles'

const page = ({ }) => {
  return (
    <View style={styles.container}>
    {/* Cabeçalho - Notificações - Direct*/} 
      <View style={styles.header}>
        <Image source={require("../../assets/instagram_texto_icone.png")} style={styles.logoHeader} />
        <View style={styles.headerNav}>
          <Image source={require("../../assets/icone_curtida.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/icone_direct.png")} style={styles.iconMenu} />
        </View>
      </View>

      {/* Story Usuario */}
      <View style={styles.containerStories}>
        <View style={styles.containerStory}>
          <View style={styles.containerStoryAdd}>
            <Image source={require("../../assets/icone_mais_azul.png")} style={styles.storyAdd} />
          </View>
          <Image source={require("../../assets/pessoa.png")} style={styles.story} />
          <Text>Seu story</Text>
        </View>

       {/* Stories */}
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa.png")} style={styles.story} />
          <Text>Janaisa</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa.png")} style={styles.story} />
          <Text>Laysa</Text>
        </View>
        <View style={styles.containerStory}>
          <LinearGradient
            colors={["#F58529", "#DD2A7B", "#8134AF"]}
            start={{ x: 0, y: 0.8 }}
            end={{ x: 0.4, y: 0 }}
            style={styles.gradient}
          />
          <Image source={require("../../assets/pessoa.png")} style={styles.story} />
          <Text>Laysa</Text>
        </View>
      </View>

      {/* Feed */}
      <View>

      {/* Cabeçalho Feed */}
        <View style={styles.containerFeedHeader}>
          <View style={styles.userContainer}>
            <Image source={require("../../assets/pessoa.png")} style={styles.userFeed} />
            <Text style={styles.userName}> Stella_Souza</Text>
          </View>
          <Image source={require("../../assets/3_pontos.png")} style={styles.more} />
        </View>

        {/* Imagem do Feed */}
        <Image source={require("../../assets/pessoa.png")} style={styles.feed} />

        {/* Rodapé do Feed */}
        <View style={styles.containerFeedFooter}>
          <View style={styles.FooterAction}>
            <Image source={require("../../assets/icone_curtida.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/icone_comentario.png")} style={styles.iconMenu} />
            <Image source={require("../../assets/icone_direct.png")} style={styles.iconMenu} />
          </View>
          <View style={styles.PostSave}>
            <Image source={require("../../assets/icone_salvar.png")} style={styles.iconMenu} />
          </View>
        </View>

        {/* Post */}
        <View style={styles.PostInfo}>
          <Text style={styles.PostText}>
            Curtido por <Text style={[styles.userName, styles.PostText]}> Gabriel </Text>
            e <Text style={[styles.userName, styles.PostText]}> outras </Text>
            pessoas
          </Text>
          <Text style={styles.PostText}>
            <Text style={[styles.userName, styles.PostText]}> Stella_souza </Text>
            <Text> Stella </Text>
          </Text>
        </View>

        <View style={styles.containerActionBar}>
          <Image source={require("../../assets/home_icon.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/pesquisa.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/reels.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/icone_mais.png")} style={styles.iconMenu} />
          <Image source={require("../../assets/pessoa.png")} style={styles.userFeed} />
        </View>
      </View>
    </View>
  )
}

export default page;
