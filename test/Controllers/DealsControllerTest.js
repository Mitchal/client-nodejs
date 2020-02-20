/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.DealsController;
const DealsResponse = testerlib.DealsResponse;
const GetDeals = testerlib.GetDeals;
const Status2Enum = testerlib.Status2Enum;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;
const GetAddedDeal = testerlib.GetAddedDeal;
const GetDealsByName = testerlib.GetDealsByName;
const GetDealsSummary = testerlib.GetDealsSummary;
const Status3Enum = testerlib.Status3Enum;
const GetDealsTimeline = testerlib.GetDealsTimeline;
const Interval2Enum = testerlib.Interval2Enum;
const DeleteDeal = testerlib.DeleteDeal;
const GetDeal = testerlib.GetDeal;
const StatusEnum = testerlib.StatusEnum;
const VisibleToEnum = testerlib.VisibleToEnum;
const GetDuplicatedDeal = testerlib.GetDuplicatedDeal;
const AddedDealFollower = testerlib.AddedDealFollower;
const DeleteDealFollower = testerlib.DeleteDealFollower;
const GetMergedDeal = testerlib.GetMergedDeal;
const DeleteDealParticipant = testerlib.DeleteDealParticipant;
const GetAddProductAttachementDetails = testerlib.GetAddProductAttachementDetails;
const GetProductAttachementDetails = testerlib.GetProductAttachementDetails;
const DeleteDealProduct = testerlib.DeleteDealProduct;

describe("DealsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Returns all deals. For more information on how to get all deals, see <a href="https://pipedrive.readme.io/docs/getting-all-deals" target="_blank" rel="noopener noreferrer">this tutorial</a>.
     */
    it("should testTestGetAllDeals response", function testTestGetAllDealsTest(done) {
        // parameters for the API call
        let input = [];
        input['userId'] = null;
        input['filterId'] = null;
        input['stageId'] = null;
        input['status'] = Status2Enum.all_not_deleted;
        input['start'] = 0;
        input['limit'] = null;
        input['sort'] = null;
        input['ownedByYou'] = null;

        controller.getAllDeals(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": [{"id": 1, "creator_user_id": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": "null", "active_flag": true, "value": 9258618}, "user_id": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": "null", "active_flag": true, "value": 9258618}, "person_id": {"active_flag": true, "name": "Person", "email": [{"label": "work", "value": "person@pipedrive.com", "primary": true}], "phone": [{"label": "work", "value": "37244499911", "primary": true}], "value": 1101}, "org_id": {"name": "Organization", "people_count": 2, "owner_id": 9258618, "address": "Mustamäe tee 3a, 10615 Tallinn", "active_flag": true, "cc_email": "org@pipedrivemail.com", "value": 5}, "stage_id": 2, "title": "Deal One", "value": 5000, "currency": "EUR", "add_time": "2019-05-29 04: 21: 51", "update_time": "2019-11-28 16: 19: 50", "stage_change_time": "2019-11-28 15: 41: 22", "active": true, "deleted": false, "status": "open", "probability": null, "next_activity_date": "2019-11-29", "next_activity_time": "11: 30: 00", "next_activity_id": 128, "last_activity_id": null, "last_activity_date": "null", "lost_reason": "null", "visible_to": "1", "close_time": "null", "pipeline_id": 1, "won_time": "2019-11-27 11: 40: 36", "first_won_time": "2019-11-27 11: 40: 36", "lost_time": "null", "products_count": 0, "files_count": 0, "notes_count": 2, "followers_count": 0, "email_messages_count": 4, "activities_count": 1, "done_activities_count": 0, "undone_activities_count": 1, "reference_activities_count": 0, "participants_count": 1, "expected_close_date": "2019-06-29", "last_incoming_mail_time": "2019-05-29 18: 21: 42", "last_outgoing_mail_time": "2019-05-30 03: 45: 35", "label": "null", "stage_order_nr": 2, "person_name": "Person", "org_name": "Organization", "next_activity_subject": "Call", "next_activity_type": "call", "next_activity_duration": "00: 30: 00", "next_activity_note": "Note content", "formatted_value": "€5, 000", "weighted_value": 5000, "formatted_weighted_value": "€5, 000", "weighted_value_currency": "EUR", "rotten_time": "null", "owner_name": "Creator", "cc_email": "company+deal1@pipedrivemail.com", "org_hidden": false, "person_hidden": false}], "related_objects": {"user": {"9258618": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": null, "active_flag": true}}, "organization": {"5": {"id": 5, "name": "Organization", "people_count": 2, "owner_id": 9258618, "address": "Mustamäe tee 3a, 10615 Tallinn", "active_flag": true, "cc_email": "org@pipedrivemail.com"}}, "person": {"1101": {"active_flag": true, "id": 1101, "name": "Person", "email": [{"label": "work", "value": "person@pipedrive.com", "primary": true}], "phone": [{"label": "work", "value": "3421787767", "primary": true}]}}}, "additional_data": {"pagination": {"start": 0, "limit": 100, "more_items_in_collection": false, "next_start": 1}}}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * Adds a new deal. Note that you can supply additional custom fields along with the request that are not described here. These custom fields are different for each Pipedrive account and can be recognized by long hashes as keys. To determine which custom fields exists, fetch the dealFields and look for 'key' values. For more information on how to add a deal, see <a href="https://pipedrive.readme.io/docs/creating-a-deal" target="_blank" rel="noopener noreferrer">this tutorial</a>.
     */
    it("should testTestAddADeal response", function testTestAddADealTest(done) {
        // parameters for the API call
        let input = [];
        input['contentType'] = null;
        input['body'] = null;

        controller.addADeal(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": {"id": 1, "creator_user_id": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": "null", "active_flag": true, "value": 9258618}, "user_id": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": "null", "active_flag": true, "value": 9258618}, "person_id": {"active_flag": true, "name": "Person", "email": [{"label": "work", "value": "person@pipedrive.com", "primary": true}], "phone": [{"label": "work", "value": "37244499911", "primary": true}], "value": 1101}, "org_id": {"name": "Organization", "people_count": 2, "owner_id": 9258618, "address": "null", "active_flag": true, "cc_email": "org@pipedrivemail.com", "value": 5}, "stage_id": 2, "title": "Deal One", "value": 5000, "currency": "EUR", "add_time": "2019-05-29 04: 21: 51", "update_time": "2019-11-28 16: 19: 50", "stage_change_time": "2019-11-28 15: 41: 22", "active": true, "deleted": false, "status": "open", "probability": null, "next_activity_date": "2019-11-29", "next_activity_time": "11: 30: 00", "next_activity_id": 128, "last_activity_id": null, "last_activity_date": "null", "lost_reason": "null", "visible_to": "1", "close_time": "null", "pipeline_id": 1, "won_time": "2019-11-27 11: 40: 36", "first_won_time": "2019-11-27 11: 40: 36", "lost_time": "null", "products_count": 0, "files_count": 0, "notes_count": 2, "followers_count": 0, "email_messages_count": 4, "activities_count": 1, "done_activities_count": 0, "undone_activities_count": 1, "reference_activities_count": 0, "participants_count": 1, "expected_close_date": "2019-06-29", "last_incoming_mail_time": "2019-05-29 18: 21: 42", "last_outgoing_mail_time": "2019-05-30 03: 45: 35", "label": "null", "stage_order_nr": 2, "person_name": "Person", "org_name": "Organization", "next_activity_subject": "Call", "next_activity_type": "call", "next_activity_duration": "00: 30: 00", "next_activity_note": "Note content", "formatted_value": "€5, 000", "weighted_value": 5000, "formatted_weighted_value": "€5, 000", "weighted_value_currency": "EUR", "rotten_time": "null", "owner_name": "Creator", "cc_email": "company+deal1@pipedrivemail.com", "org_hidden": false, "person_hidden": false}, "additional_data": {"matches_filters": [1]}, "related_objects": {"user": {"9258618": {"id": 9258618, "name": "Creator", "email": "creator@pipedrive.com", "has_pic": false, "pic_hash": null, "active_flag": true}}, "organization": {"2": {"id": 2, "name": "Organization", "people_count": 2, "owner_id": 9258618, "address": "Mustamäe tee 3a, 10615 Tallinn", "active_flag": true, "cc_email": "org@pipedrivemail.com"}}, "person": {"1101": {"active_flag": true, "id": 1101, "name": "Person", "email": [{"label": "work", "value": "person@pipedrive.com", "primary": true}], "phone": [{"label": "work", "value": "3421787767", "primary": true}]}}}}, false, true, false));
            done();
        }).catch(() => undefined);
    });

    /**
     * Returns summary of all the deals.
     */
    it("should testTestGetDealsSummary response", function testTestGetDealsSummaryTest(done) {
        // parameters for the API call
        let input = [];
        input['status'] = null;
        input['filterId'] = null;
        input['userId'] = null;
        input['stageId'] = null;

        controller.getDealsSummary(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Content-Type'] = 'application/json';
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"success": true, "data": {"values_total": {"EUR": {"value": 10, "count": 2, "value_converted": 11.1, "value_formatted": "€10", "value_converted_formatted": "US$11.10"}, "USD": {"value": 30, "count": 3, "value_converted": 30, "value_formatted": "US$30", "value_converted_formatted": "US$3"}}, "weighted_values_total": {"EUR": {"value": 10, "count": 2, "value_formatted": "€10"}, "USD": {"value": 30, "count": 3, "value_formatted": "US$30"}}, "total_count": 5, "total_currency_converted_value": 41.1, "total_weighted_currency_converted_value": 41.1, "total_currency_converted_value_formatted": "US$41.1", "total_weighted_currency_converted_value_formatted": "US$41.1"}}, false, true, false));
            done();
        }).catch(() => undefined);
    });

});
