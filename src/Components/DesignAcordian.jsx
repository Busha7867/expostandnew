'use client'


import React, {useState} from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';



const AccordionSection = styled.div`

  position: relative;
 
  background: #fff;
`;

const Container = styled.div`
 

  margin-bottom:4rem;
`;

const Wrap = styled.div`
//   background: #272727;
margin:10px 0;
  color: #A8cf45;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border: 3px solid #A8cf45;
  border-radius: 2rem;

  .data_items {
    padding: 15px;
    font-size: 1rem;
    font-weight:400;
  }

  span {
    margin-right: 1.5rem;
    z-index:0;
  }
`;

const Dropdown = styled.div`
background: linear-gradient(rgb(168 207 69 / 52%),rgb(168 207 70 / 77%)),url(/src/Components/Pages/ExhibitionStanddroppages/images/Mamiba.jpg) no-repeat center/cover;
  color: #A8cf45;
  width: 100%;
  height:auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  transition: all 0.8s ease-in-out;
  border-radius:2rem;

  p {
    font-size: 1rem;
    backdrop-filter: blur(2px);
    color:#000;
    padding:28px;
  }
`;

const DesignAcordian = () => {
    const [clicked, setClicked] = useState(false);
  
    const toggle = index => {
      if (clicked === index) {
        //if clicked question is already active, then close it
        return setClicked(null);
      }
  
      setClicked(index);
    };
  
    return (
      <IconContext.Provider value={{ color: '#A8cf45', size: '18px' }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <span className='data_items'>{item.question}</span>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    );
  };
  
  export default DesignAcordian;