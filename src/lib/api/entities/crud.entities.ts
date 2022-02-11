import * as friend from './crud.friend';
import * as document from './crud.document';
import * as residence from './crud.residence';
import * as duration from './crud.duration';
import * as quote from './crud.quote';
import * as tag from './crud.tag';
import * as edition from './crud.edition';
import * as audio from './crud.audio';
import * as audioPart from './crud.audio-part';
import * as relatedDocument from './crud.related-document';
import { EditableEntity, ErrorMsg } from '../../../types';

export async function createEntity(entity: EditableEntity): Promise<ErrorMsg | null> {
  console.log(`CREATE:`, entity);
  switch (entity.__typename) {
    case `Friend`:
      return friend.create(entity);
    case `FriendQuote`:
      return quote.create(entity);
    case `FriendResidence`:
      return residence.create(entity);
    case `FriendResidenceDuration`:
      return duration.create(entity);
    case `Document`:
      return document.create(entity);
    case `DocumentTag`:
      return tag.create(entity);
    case `RelatedDocument`:
      return relatedDocument.create(entity);
    case `Edition`:
      return edition.create(entity);
    case `Audio`:
      return audio.create(entity);
    case `AudioPart`:
      return audioPart.create(entity);
  }
}

export async function deleteEntity(entity: EditableEntity): Promise<ErrorMsg | null> {
  console.log(`DELETE:`, entity);
  let err: ErrorMsg | null = null;
  switch (entity.__typename) {
    case `FriendQuote`:
      err = await quote.delete(entity);
      break;
    case `FriendResidence`:
      err = await residence.delete(entity);
      break;
    case `FriendResidenceDuration`:
      err = await duration.delete(entity);
      break;
    case `Document`:
      err = await document.delete(entity);
      break;
    case `DocumentTag`:
      err = await tag.delete(entity);
      break;
    case `RelatedDocument`:
      err = await relatedDocument.delete(entity);
      break;
    case `Edition`:
      err = await edition.delete(entity);
      break;
    case `Audio`:
      err = await audio.delete(entity);
      break;
    case `AudioPart`:
      err = await audioPart.delete(entity);
      break;
    case `Friend`:
      throw new Error(`Deleting Friends not supported, use the postgres shell`);
  }

  // foreign key cascades often mean that our entities get deleted
  // when the parent is deleted, so treat a DELETE -> 404 as success
  if (err && err.includes(`notFound`)) {
    return null;
  }

  return err;
}

export async function updateEntity(entity: EditableEntity): Promise<ErrorMsg | null> {
  console.log(`UPDATE:`, entity);
  switch (entity.__typename) {
    case `Friend`:
      return friend.update(entity);
    case `FriendQuote`:
      return quote.update(entity);
    case `FriendResidence`:
      return residence.update(entity);
    case `FriendResidenceDuration`:
      return duration.update(entity);
    case `Document`:
      return document.update(entity);
    case `DocumentTag`:
      return tag.update(entity);
    case `RelatedDocument`:
      return relatedDocument.update(entity);
    case `Edition`:
      return edition.update(entity);
    case `Audio`:
      return audio.update(entity);
    case `AudioPart`:
      return audioPart.update(entity);
  }
}
