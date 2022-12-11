import { Button, Divider, TextField, Typography } from "@mui/material";
import Card1 from "components/Card1";
import { FlexBetween, FlexBox } from "components/flex-box";
import { useAppContext } from "contexts/AppContext";
import React, {useEffect, useState} from "react";

const CheckoutSummary = () => {
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
        <Typography color="grey.600">Subtotal:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
              ${`${price.toString().split('.')[0]}.`}
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
              {price.toString().split('.')[1] ? price.toString().split('.')[1] : '00' }

          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Shipping:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={1}>
        <Typography color="grey.600">Tax:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>
      <FlexBetween mb={2}>
        <Typography color="grey.600">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBetween>

      <Divider
        sx={{
          mb: "1rem",
        }}
      />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
        mb={3}
      >
        ${price}
      </Typography>

      <TextField
        placeholder="Voucher"
        variant="outlined"
        size="small"
        fullWidth
      />
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        sx={{
          mt: "1rem",
          mb: "30px",
        }}
      >
        Apply Voucher
      </Button>
    </Card1>
  );
};

export default CheckoutSummary;
