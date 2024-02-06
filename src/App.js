import { useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";

function App() {
  const NAV = 12.6897;

  const [amount, setAmount] = useState();
  const [unit, setUnit] = useState();
  const [toggleAmountUnit, setToggleAmountUnit] = useState(false);

  useEffect(() => setUnit(amount / NAV), [amount]);
  useEffect(() => setAmount(unit * NAV), [unit]);

  const reset = () => {
    setAmount();
    setUnit();
  };

  return (
    <Container maxWidth="md">
      <Card
        variant="outlined"
        style={{ padding: "25px", marginTop: "35px", textAlign: "center" }}
      >
        <div style={{ margin: "20px 50px" }}>
          <h3>NAV Calculator</h3>
          <h4>
            Scheme Name :{" "}
            <u>Mutual Fund - Motilal Oswal Liquid Fund - Direct Growth</u>
          </h4>

          <h5>Net Asset Value - {NAV}</h5>
        </div>
        <br />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "30vh" }}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button
              color={toggleAmountUnit ? "secondary" : ""}
              onClick={() => {
                setToggleAmountUnit(true);
                reset();
              }}
            >
              Amount
            </Button>
            <Button
              color={toggleAmountUnit ? "" : "secondary"}
              onClick={() => {
                setToggleAmountUnit(false);
                reset();
              }}
            >
              Units
            </Button>
          </ButtonGroup>
          <div>
            <TextField
              type="number"
              style={{ width: "100%", marginTop: "15px" }}
              label="Amount"
              value={amount}
              variant="filled"
              disabled={!toggleAmountUnit}
              onChange={(e) => setAmount(e.target.value)}
              inputProps={{ step: "1" }}
            />
            <TextField
              type="number"
              style={{ width: "100%", marginTop: "15px" }}
              label="Unit"
              variant="filled"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              disabled={toggleAmountUnit}
              inputProps={{ step: "1" }}
            />
          </div>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
