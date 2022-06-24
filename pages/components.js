import CustomInput from "UI/CustomInput/CustomInput";

const Components = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CustomInput label="Как к вам обращаться?" />
    </div>
  );
};

export default Components;
