// @flow

import { all, takeEvery } from 'redux-saga/effects';
import { addContact, fetchContacts, updateContacts } from './sagas';
import { SERVICES_CREATED } from '../../actions/serviceContainer';
import {
  START_CONTACTS_FETCH,
  CONTACTS_UPDATED,
  ADD_CONTACT,
} from '../../actions/contacts';

/**
 * @desc Root Contacts saga.
 * @return {void}
 */
export default function* rootSaga(): Generator<*, *, *> {
  yield all([
    yield takeEvery([SERVICES_CREATED, START_CONTACTS_FETCH], fetchContacts),
    yield takeEvery(CONTACTS_UPDATED, updateContacts),
    yield takeEvery(ADD_CONTACT, addContact),
  ]);
}
