import { Divider } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween } from "components/flex-box";
import { Paragraph } from "components/Typography";
import React, {useEffect, useState} from "react";
import {useAppContext} from "../../contexts/AppContext";

const PaymentSummary = () => {
    const { state } = useAppContext();
    const cartList = state.cart;
    const [price,setPrice] = useState(0);
    useEffect(()=>{
        console.log(cartList)
        setPrice(getTotalPrice())
    },[])
    const getTotalPrice = ()=>{
        let total =0;
        cartList.forEach(e=>{
            total = total+e.price*e.qty
        })
        return total
    }
  return (
    <Card1>
      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Subtotal:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          ${price}
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Shipping:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          -
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={1}>
        <Paragraph color="grey.600">Tax:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          -
        </Paragraph>
      </FlexBetween>

      <FlexBetween mb={2}>
        <Paragraph color="grey.600">Discount:</Paragraph>
        <Paragraph fontSize={18} fontWeight={600} lineHeight={1}>
          -
        </Paragraph>
      </FlexBetween>

      <Divider
        sx={{
          mb: 2,
        }}
      />

      <Paragraph
        fontSize={25}
        fontWeight={600}
        lineHeight={1}
        textAlign="right"
      >
        ${price}
      </Paragraph>
    </Card1>
  );
};

export default PaymentSummary;
