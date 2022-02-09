/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum EditionType {
  modernized = 'modernized',
  original = 'original',
  updated = 'updated',
}

export enum Gender {
  female = 'female',
  male = 'male',
  mixed = 'mixed',
}

export enum Lang {
  en = 'en',
  es = 'es',
}

export enum OrderSource {
  internal = 'internal',
  website = 'website',
}

export enum PrintJobStatus {
  accepted = 'accepted',
  bricked = 'bricked',
  canceled = 'canceled',
  pending = 'pending',
  presubmit = 'presubmit',
  rejected = 'rejected',
  shipped = 'shipped',
}

export enum PrintSize {
  m = 'm',
  s = 's',
  xl = 'xl',
}

export enum PrintSizeVariant {
  m = 'm',
  s = 's',
  xl = 'xl',
  xlCondensed = 'xlCondensed',
}

export enum ShippingLevel {
  expedited = 'expedited',
  express = 'express',
  ground = 'ground',
  groundBus = 'groundBus',
  groundHd = 'groundHd',
  mail = 'mail',
  priorityMail = 'priorityMail',
}

export enum TagType {
  allegory = 'allegory',
  doctrinal = 'doctrinal',
  exhortation = 'exhortation',
  history = 'history',
  journal = 'journal',
  letters = 'letters',
  spiritualLife = 'spiritualLife',
  treatise = 'treatise',
}

export interface CreateDocumentInput {
  altLanguageId?: UUID | null;
  description: string;
  featuredDescription?: string | null;
  filename: string;
  friendId: UUID;
  id?: UUID | null;
  incomplete: boolean;
  originalTitle?: string | null;
  partialDescription: string;
  published?: number | null;
  slug: string;
  title: string;
}

export interface CreateFriendInput {
  born?: number | null;
  description: string;
  died?: number | null;
  gender: Gender;
  id?: UUID | null;
  lang: Lang;
  name: string;
  published?: string | null;
  slug: string;
}

export interface CreateFriendQuoteInput {
  context?: string | null;
  friendId: UUID;
  id?: UUID | null;
  order: number;
  source: string;
  text: string;
}

export interface CreateFriendResidenceDurationInput {
  end: number;
  friendResidenceId: UUID;
  id?: UUID | null;
  start: number;
}

export interface CreateFriendResidenceInput {
  city: string;
  friendId: UUID;
  id?: UUID | null;
  region: string;
}

export interface CreateOrderInput {
  addressCity: string;
  addressCountry: string;
  addressName: string;
  addressState: string;
  addressStreet: string;
  addressStreet2?: string | null;
  addressZip: string;
  amount: number;
  ccFeeOffset: number;
  email: string;
  freeOrderRequestId?: UUID | null;
  id?: UUID | null;
  lang: Lang;
  paymentId: string;
  printJobId?: number | null;
  printJobStatus: PrintJobStatus;
  shipping: number;
  shippingLevel: ShippingLevel;
  source: OrderSource;
  taxes: number;
}

export interface CreateOrderItemInput {
  editionId: UUID;
  id?: UUID | null;
  orderId: UUID;
  quantity: number;
  unitPrice: number;
}

export interface GetPrintJobExploratoryMetadataInput {
  address: ShippingAddressInput;
  items: PrintJobExploratoryItemInput[];
}

export interface PrintJobExploratoryItemInput {
  printSize: PrintSize;
  quantity: number;
  volumes: number[];
}

export interface ShippingAddressInput {
  city: string;
  country: string;
  name: string;
  state: string;
  street: string;
  street2?: string | null;
  zip: string;
}

export interface UpdateDocumentInput {
  altLanguageId?: UUID | null;
  description: string;
  featuredDescription?: string | null;
  filename: string;
  friendId: UUID;
  id: UUID;
  incomplete: boolean;
  originalTitle?: string | null;
  partialDescription: string;
  published?: number | null;
  slug: string;
  title: string;
}

export interface UpdateFriendInput {
  born?: number | null;
  description: string;
  died?: number | null;
  gender: Gender;
  id: UUID;
  lang: Lang;
  name: string;
  published?: string | null;
  slug: string;
}

export interface UpdateFriendQuoteInput {
  context?: string | null;
  friendId: UUID;
  id: UUID;
  order: number;
  source: string;
  text: string;
}

export interface UpdateFriendResidenceDurationInput {
  end: number;
  friendResidenceId: UUID;
  id: UUID;
  start: number;
}

export interface UpdateFriendResidenceInput {
  city: string;
  friendId: UUID;
  id: UUID;
  region: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
