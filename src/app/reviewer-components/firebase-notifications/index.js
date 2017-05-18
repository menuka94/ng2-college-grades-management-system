'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendFeedbackNotification = functions.database.ref('/feedback/{key}')
  .onWrite(event => {
    const studentId = event.params.studentId;
    const reviewerId = event.params.reviewerId;
  });
