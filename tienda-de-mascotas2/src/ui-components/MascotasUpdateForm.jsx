/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Mascotas } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MascotasUpdateForm(props) {
  const {
    id: idProp,
    mascotas: mascotasModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    Edad: "",
    Raza: "",
    Acerca: "",
    Imagen: "",
    Color: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [Edad, setEdad] = React.useState(initialValues.Edad);
  const [Raza, setRaza] = React.useState(initialValues.Raza);
  const [Acerca, setAcerca] = React.useState(initialValues.Acerca);
  const [Imagen, setImagen] = React.useState(initialValues.Imagen);
  const [Color, setColor] = React.useState(initialValues.Color);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mascotasRecord
      ? { ...initialValues, ...mascotasRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setEdad(cleanValues.Edad);
    setRaza(cleanValues.Raza);
    setAcerca(cleanValues.Acerca);
    setImagen(cleanValues.Imagen);
    setColor(cleanValues.Color);
    setErrors({});
  };
  const [mascotasRecord, setMascotasRecord] = React.useState(mascotasModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Mascotas, idProp)
        : mascotasModelProp;
      setMascotasRecord(record);
    };
    queryData();
  }, [idProp, mascotasModelProp]);
  React.useEffect(resetStateValues, [mascotasRecord]);
  const validations = {
    nombre: [{ type: "Required" }],
    Edad: [],
    Raza: [],
    Acerca: [],
    Imagen: [],
    Color: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          Edad,
          Raza,
          Acerca,
          Imagen,
          Color,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Mascotas.copyOf(mascotasRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MascotasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={true}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              Edad,
              Raza,
              Acerca,
              Imagen,
              Color,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Edad"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Edad}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombre,
              Edad: value,
              Raza,
              Acerca,
              Imagen,
              Color,
            };
            const result = onChange(modelFields);
            value = result?.Edad ?? value;
          }
          if (errors.Edad?.hasError) {
            runValidationTasks("Edad", value);
          }
          setEdad(value);
        }}
        onBlur={() => runValidationTasks("Edad", Edad)}
        errorMessage={errors.Edad?.errorMessage}
        hasError={errors.Edad?.hasError}
        {...getOverrideProps(overrides, "Edad")}
      ></TextField>
      <TextField
        label="Raza"
        isRequired={false}
        isReadOnly={false}
        value={Raza}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Edad,
              Raza: value,
              Acerca,
              Imagen,
              Color,
            };
            const result = onChange(modelFields);
            value = result?.Raza ?? value;
          }
          if (errors.Raza?.hasError) {
            runValidationTasks("Raza", value);
          }
          setRaza(value);
        }}
        onBlur={() => runValidationTasks("Raza", Raza)}
        errorMessage={errors.Raza?.errorMessage}
        hasError={errors.Raza?.hasError}
        {...getOverrideProps(overrides, "Raza")}
      ></TextField>
      <TextField
        label="Acerca"
        isRequired={false}
        isReadOnly={false}
        value={Acerca}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Edad,
              Raza,
              Acerca: value,
              Imagen,
              Color,
            };
            const result = onChange(modelFields);
            value = result?.Acerca ?? value;
          }
          if (errors.Acerca?.hasError) {
            runValidationTasks("Acerca", value);
          }
          setAcerca(value);
        }}
        onBlur={() => runValidationTasks("Acerca", Acerca)}
        errorMessage={errors.Acerca?.errorMessage}
        hasError={errors.Acerca?.hasError}
        {...getOverrideProps(overrides, "Acerca")}
      ></TextField>
      <TextField
        label="Imagen"
        isRequired={false}
        isReadOnly={false}
        value={Imagen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Edad,
              Raza,
              Acerca,
              Imagen: value,
              Color,
            };
            const result = onChange(modelFields);
            value = result?.Imagen ?? value;
          }
          if (errors.Imagen?.hasError) {
            runValidationTasks("Imagen", value);
          }
          setImagen(value);
        }}
        onBlur={() => runValidationTasks("Imagen", Imagen)}
        errorMessage={errors.Imagen?.errorMessage}
        hasError={errors.Imagen?.hasError}
        {...getOverrideProps(overrides, "Imagen")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={false}
        isReadOnly={false}
        value={Color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              Edad,
              Raza,
              Acerca,
              Imagen,
              Color: value,
            };
            const result = onChange(modelFields);
            value = result?.Color ?? value;
          }
          if (errors.Color?.hasError) {
            runValidationTasks("Color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("Color", Color)}
        errorMessage={errors.Color?.errorMessage}
        hasError={errors.Color?.hasError}
        {...getOverrideProps(overrides, "Color")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || mascotasModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || mascotasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
