import {
  BlackoutImg,
  Button,
  ContainerBanner,
  ContainerImg,
  ContainerText,
  MainImage,
  MainTitle,
  Text,
} from "./BannerStyle";
const Banner = ({ photo, title, boldTitle, paragraph }) => {
  return (
    <ContainerBanner>
      <ContainerImg>
        <MainImage src={photo}></MainImage>
        <BlackoutImg></BlackoutImg>
      </ContainerImg>
      <ContainerText>
        <MainTitle>
          <span className="teste">{title}</span>
          <br /> {boldTitle}
        </MainTitle>
        <Text>
          {paragraph}
        </Text>
        <Button>Conheça Mais</Button>
      </ContainerText>
    </ContainerBanner>
  );
};

export default Banner;
