/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MascotasCreateFormInputValues = {
    nombre?: string;
    Edad?: number;
    Raza?: string;
    Acerca?: string;
    Imagen?: string;
    Color?: string;
};
export declare type MascotasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    Edad?: ValidationFunction<number>;
    Raza?: ValidationFunction<string>;
    Acerca?: ValidationFunction<string>;
    Imagen?: ValidationFunction<string>;
    Color?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MascotasCreateFormOverridesProps = {
    MascotasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    Edad?: PrimitiveOverrideProps<TextFieldProps>;
    Raza?: PrimitiveOverrideProps<TextFieldProps>;
    Acerca?: PrimitiveOverrideProps<TextFieldProps>;
    Imagen?: PrimitiveOverrideProps<TextFieldProps>;
    Color?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MascotasCreateFormProps = React.PropsWithChildren<{
    overrides?: MascotasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MascotasCreateFormInputValues) => MascotasCreateFormInputValues;
    onSuccess?: (fields: MascotasCreateFormInputValues) => void;
    onError?: (fields: MascotasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MascotasCreateFormInputValues) => MascotasCreateFormInputValues;
    onValidate?: MascotasCreateFormValidationValues;
} & React.CSSProperties>;
export default function MascotasCreateForm(props: MascotasCreateFormProps): React.ReactElement;
