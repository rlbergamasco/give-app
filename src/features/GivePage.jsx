import React, { useState } from "react";
import { Typography, Box, Button, Checkbox } from "@mui/material";
import { CheckoutButtons, NativeShare, NonNativeShare } from "components";
import { red } from '@mui/material/colors';

export const GivePage = ({ cause, name, setName }) => {
  const defaultAmount = 3.16;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [displayNameErorr, setDisplayNameError] = useState(false);
  const [displayPhoneErorr, setDisplayPhoneError] = useState(false);
  const [displayAmountErorr, setDisplayAmountError] = useState(false);
  const [addFees, setAddFees] = useState(true);
  const possibleTotal = (amount ? amount * 1.03 + .49 : defaultAmount * 1.03 + .49).toFixed(2);
  const total = !addFees ? amount ? amount : defaultAmount : possibleTotal;
  const message = `Hi have you heard about ${cause}? Can you help me support them by donating a few dollars?`;

  const handleInputPhone = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedPhone);
  };

  const handleInputAmount = (e) => {
    const formattedAmount = formatAmount(e.target.value);
    setAmount(formattedAmount);
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    // remove nondigit values
    const number = value.replace(/[^\d]/g, "");
    const numberLength = number.length;
    if (numberLength < 4) return number;
    if (numberLength < 7) {
      return `(${number.slice(0, 3)}) ${number.slice(3)}`;
    }
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 10)}`;
  };

  const formatAmount = (value) => {
    if (!value) return value;
    // remove leading zeros
    value = value.replace(/\D|^0+/g, "");
    // remove nondigit values
    const amt = value.replace(/[^\d]/g, "");
    const amtLength = amt.length;
    if (amtLength === 1) return `0.0${amt}`;
    if (amtLength === 2) return `0.${amt}`;
    return `${amt.slice(0, -2)}.${amt.slice(-2)}`;
  };

  const handleClick = () => {
    setDisplayNameError(false);
    setDisplayPhoneError(false);
    setDisplayAmountError(false);
    if (name.length < 2) {
      setDisplayNameError(true);
    }
    if (phoneNumber.length !== 14) {
      setDisplayPhoneError(true);
    }
    if (total < 1) {
      setDisplayAmountError(true);
    }
    if (phoneNumber.length === 14 && name.length > 1 && (amount === "" || amount >= 1)) {
      setCheckout(true);
    }
  }

  const handleCancel = () => {
    setCheckout(false);
  }

  const handleCheck = () => {
    setAddFees(!addFees);
  }

  return (
    <React.Fragment>
      <Box sx={{ maxWidth: "600px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          variant="h4"
          align="center"
        >{`Donate to ${cause}`}</Typography>
        <Typography sx={{ my: 1 }} align="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        {checkout ?
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CheckoutButtons amount={total} />
            <Button variant="contained" onClick={handleCancel}>Back</Button>
          </Box>
          :
          <React.Fragment>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <Typography>Enter your name</Typography>
              <Box sx={{ mb: 1, "& > input": { p: 1 } }}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {displayNameErorr ? <Typography color={red[600]} variant="body2">Please enter your name</Typography> : null}
              </Box>
              <Typography>Enter your phone number</Typography>
              <Box sx={{ mb: 1, "& > input": { p: 1 } }}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(000) 000-0000"
                  onChange={(e) => handleInputPhone(e)}
                  value={phoneNumber}
                />
                {displayPhoneErorr ? <Typography color={red[600]} variant="body2">Please enter your phone number</Typography> : null}
              </Box>
              <Typography>Amount to give</Typography>
              <Box sx={{ mb: 1 }}>
                <div className="amountContainer">
                  <span className="dollar">
                    <Typography>$</Typography>
                  </span>
                  <input
                    id="amount"
                    name="amount"
                    type="text"
                    placeholder={defaultAmount}
                    onChange={(e) => handleInputAmount(e)}
                    value={amount}
                  />
                </div>
                {displayAmountErorr ? <Typography color={red[600]} variant="body2">Please donate at least $1</Typography> : null}
              </Box>
            </Box>
            <Box sx={{ maxWidth: '227.28px', display: 'flex' }}>
              <Checkbox checked={addFees} onClick={handleCheck} />
              <Typography variant="body2">Would you like to include the transaction fee of 3% + $0.49 for a total of ${possibleTotal} as part of your donation?</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 1,
              }}
            >
              <Button variant="contained" onClick={handleClick}>Donate ${total}</Button>
            </Box>
            <Typography align="center" sx={{ mt: 2 }}>
              {navigator.share ? "Can't donate today?" : "Can't donate today? Invite friends to donate!"}
            </Typography>
          </React.Fragment>
        }
      </Box >
      {navigator.share ?
        <Box sx={{ width: "100%", mt: 1, display: 'flex', justifyContent: 'center' }}>
          <NativeShare
            cause={cause}
            message={message}
          />
        </Box>
        : <Box sx={{ width: "100%", mt: 1 }}>
          <NonNativeShare cause={cause} message={message}
          />
        </Box>
      }
    </React.Fragment>
  );
};
