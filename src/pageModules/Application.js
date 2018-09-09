import React from "react";
import styled from "styled-components";
import SplitHero from "components/SplitHero";
import Form from "components/Form";
import H1 from "components/H1";

const Application = ({ image, title }) => {
  return (
    <SplitHero image={image}>
			<H1>{title}</H1>
      <Form />
    </SplitHero>
  );
}

export default Application;
