export const textUIExample = () => {
  return `
  //Caso de como funciona la herencia en emotion:
  import styled from "@emotion/styled";

  const BaseTitle = styled.h1 ${"`"}
  font-family: Montserrat;
  color: black;
  font-weight: 800;
  margin: 0px;
  // en realidad el color era con props pero no me los deja pasar ahora el codigo. 
  //Seria mas o menos de la siguiente forma
  ${(props: { color: any }) => (props.color ? props.color : "black")}; 
  ${"`"}

  //Y le agregamos los detalles: 

  export const PrimaryTitle = styled(BaseTitle)${"`"}
  font-size: 31px;
  line-height: 38px;
  ${"`"}
;
`;
};

export const actualHtml = () => {
  return `
  //order-create-success.tsx

  return (
    <div className="container-fluid py-4">
      <div>
        <h2 
          className="d-flex align-items-center mb-3" 
          style={{ gap: '1rem', color: '#28A745' }}
        >
          <FontAwesomeIcon icon={faCheck} color="#28A745" />
          Orden confirmada
        </h2>
        <div className="detail">
          <div className="detailItem">
            <div style={{ marginTop: 40, marginBottom: 40 }}>
              <h4>¡Todo listo!</h4>
              <p>El depósito qubik se encargará de gestionar tu envío</p>
            </div>
            <Button replace tag={Link} to="/order">
              Ir a Órdenes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  `;
};

export const withEmotionHtml = () => {
  return `
  //order-create-success.tsx respetando como estaba escrito con sus divs


  <Root>
  <Container>
    <SecondaryTitle>
      <FontAwesomeIcon icon={faCheck} color="#28A745" />
      Orden confirmada
    </SecondaryTitle>
    <DetailContainer>
      <DetailItem>
        <TitleAndTextContainer>
          <TertiaryTitle>¡Todo listo!</TertiaryTitle>
          <PrimaryText>El depósito qubik se encargará de gestionar tu envío</PrimaryText>
        </TitleAndTextContainer>
        <Button replace tag={Link} to="/order">
        <PrimaryText>Ir a Órdenes </PrimaryText> 
          {/*   si es que no viene ya definido que dentro de un button haya un text*/}
        </Button>
      </DetailItem>
    </DetailContai>
  </Container>
</Root>
);
  `;
};

export const withEmotionHtmlAndChanges = () => {
  return `
  //order-create-success.tsx

  return (
    <Root>
      <ConfirmRejectContainer>
        <StyledAwesomeIcon>
        <SecondaryTitle>Orden confirmada</SecondaryTitle>
      </ConfirmRejectContainer>
      <DetailContainer>   
        <InformationContainer>
          <TertiaryTitle>¡Todo listo!</TertiaryTitle>
          <PrimaryText>El depósito qubik se encargará de gestionar tu envío</PrimaryText>        
        </InformationContainer>  
        <Button replace tag={Link} to="/order">
          Ir a Órdenes
        </Button>     
      </DetailContainer>
    </Root>
  );
  `;
};
