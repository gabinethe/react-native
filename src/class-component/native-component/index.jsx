import * as S from "./styles";

function CreativeCard(props) {
  return (
    <S.CardContainer>
      <S.CardSubtitle>{props.title}</S.CardSubtitle>
      <S.CardSubtitle>{props.description}</S.CardSubtitle>
    </S.CardContainer>
  );
}

export const CreativeComponent = () => {
  return (
    <S.Container>
      <CreativeCard title="Gabi" description="é isso ai" />
      <CreativeCard title="Gusta" description="tamo junto" />
      <CreativeCard title="Gui" description="fodase" />
      <CreativeCard title="Pedo" description="OKA" />
    </S.Container>
  );
}
