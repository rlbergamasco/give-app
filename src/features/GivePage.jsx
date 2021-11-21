import {useState} from "react";
import {Typography, Box} from "@mui/material";
import {CheckoutButtons, ShareButton} from "components";

export const GivePage = ({cause, name, setName}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

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
    return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(
      6,
      10
    )}`;
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

  return (
    <Box sx={{maxWidth: "600px", margin: "auto"}}>
      <Typography
        variant="h4"
        align="center"
      >{`Donate to ${cause}`}</Typography>
      <Typography sx={{my: 1}} align="center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Box
          component="form"
          sx={{
            "& > input": {mb: 1, p: 1},
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography>Enter your name</Typography>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <Typography>Enter your phone number</Typography>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(000) 000-0000"
            onChange={(e) => handleInputPhone(e)}
            value={phoneNumber}
          />
          <Typography>Amount to give</Typography>
          <div className="amountContainer">
            <span className="dollar">
              <Typography>$</Typography>
            </span>
            <input
              id="amount"
              name="amount"
              type="text"
              placeholder="1.00"
              onChange={(e) => handleInputAmount(e)}
              value={amount}
            />
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 2,
        }}
      >
        <CheckoutButtons amount={amount === "" ? "1.00" : amount} />
      </Box>
      <Typography align="center">Can't donate today?</Typography>
      <Box sx={{display: "flex", justifyContent: "center", m: 1}}>
        <ShareButton
          cause={cause}
          message={`Hi this is ${name}! Can you help me support ${cause} by donating $1?`}
        />
      </Box>
    </Box>
  );
};
