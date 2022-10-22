import { Button, ButtonGroup } from "@mui/material";

const StepsButton = () => {
  const buttons = [
    <Button
      key="back"
      variant="text"
      // onClick={back}
      // disabled={isActiveButtonBack}
    >
      Назад
    </Button>,
    <Button
      key="next"
      variant="contained"
      // onClick={stepCount === 2 ? finish : next}
      // disabled={isDisabledButtonNext}
    >
      {/* {stateForm.stepCount === 2 ? "Отправить" : "Продолжить"} */}
    </Button>,
  ];

  return (
    <ButtonGroup
      sx={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {buttons}
    </ButtonGroup>
  );
};

export default StepsButton;
