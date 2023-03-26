/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Mascotas } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MascotasUpdateFormInputValues = {
    nombre?: string;
    Edad?: number;
    Raza?: string;
    Acerca?: string;
    Imagen?: string;
    Color?: string;
};
export declare type MascotasUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    Edad?: ValidationFunction<number>;
    Raza?: ValidationFunction<string>;
    Acerca?: ValidationFunction<string>;
    Imagen?: ValidationFunction<string>;
    Color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MascotasUpdateFormOverridesProps = {
    MascotasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Edad?: PrimitiveOverrideProps<TextFieldProps>;
    Raza?: PrimitiveOverrideProps<TextFieldProps>;
    Acerca?: PrimitiveOverrideProps<TextFieldProps>;
    Imagen?: PrimitiveOverrideProps<TextFieldProps>;
    Color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MascotasUpdateFormProps = React.PropsWithChildren<{
    overrides?: MascotasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mascotas?: Mascotas;
    onSubmit?: (fields: MascotasUpdateFormInputValues) => MascotasUpdateFormInputValues;
    onSuccess?: (fields: MascotasUpdateFormInputValues) => void;
    onError?: (fields: MascotasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MascotasUpdateFormInputValues) => MascotasUpdateFormInputValues;
    onValidate?: MascotasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MascotasUpdateForm(props: MascotasUpdateFormProps): React.ReactElement;
