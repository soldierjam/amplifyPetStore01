import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMascotas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mascotas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly Edad?: number | null;
  readonly Raza?: string | null;
  readonly Acerca?: string | null;
  readonly Imagen?: string | null;
  readonly Color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMascotas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Mascotas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly Edad?: number | null;
  readonly Raza?: string | null;
  readonly Acerca?: string | null;
  readonly Imagen?: string | null;
  readonly Color?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Mascotas = LazyLoading extends LazyLoadingDisabled ? EagerMascotas : LazyMascotas

export declare const Mascotas: (new (init: ModelInit<Mascotas>) => Mascotas) & {
  copyOf(source: Mascotas, mutator: (draft: MutableModel<Mascotas>) => MutableModel<Mascotas> | void): Mascotas;
}