/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DealCountAndActivityInfo from './DealCountAndActivityInfo';
import PersonCountAndEmailInfo from './PersonCountAndEmailInfo';

/**
 * The PersonCountEmailDealAndActivityInfo model module.
 * @module model/PersonCountEmailDealAndActivityInfo
 * @version 1.0.0
 */
class PersonCountEmailDealAndActivityInfo {
    /**
     * Constructs a new <code>PersonCountEmailDealAndActivityInfo</code>.
     * @alias module:model/PersonCountEmailDealAndActivityInfo
     * @implements module:model/PersonCountAndEmailInfo
     * @implements module:model/DealCountAndActivityInfo
     */
    constructor() { 
        PersonCountAndEmailInfo.initialize(this);DealCountAndActivityInfo.initialize(this);
        PersonCountEmailDealAndActivityInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonCountEmailDealAndActivityInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonCountEmailDealAndActivityInfo} obj Optional instance to populate.
     * @return {module:model/PersonCountEmailDealAndActivityInfo} The populated <code>PersonCountEmailDealAndActivityInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonCountEmailDealAndActivityInfo();
            PersonCountAndEmailInfo.constructFromObject(data, obj);
            DealCountAndActivityInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('email_messages_count')) {
                obj['email_messages_count'] = ApiClient.convertToType(data['email_messages_count'], 'Number');

                delete data['email_messages_count'];
            }
            if (data.hasOwnProperty('activities_count')) {
                obj['activities_count'] = ApiClient.convertToType(data['activities_count'], 'Number');

                delete data['activities_count'];
            }
            if (data.hasOwnProperty('done_activities_count')) {
                obj['done_activities_count'] = ApiClient.convertToType(data['done_activities_count'], 'Number');

                delete data['done_activities_count'];
            }
            if (data.hasOwnProperty('undone_activities_count')) {
                obj['undone_activities_count'] = ApiClient.convertToType(data['undone_activities_count'], 'Number');

                delete data['undone_activities_count'];
            }
            if (data.hasOwnProperty('files_count')) {
                obj['files_count'] = ApiClient.convertToType(data['files_count'], 'Number');

                delete data['files_count'];
            }
            if (data.hasOwnProperty('notes_count')) {
                obj['notes_count'] = ApiClient.convertToType(data['notes_count'], 'Number');

                delete data['notes_count'];
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');

                delete data['followers_count'];
            }
            if (data.hasOwnProperty('last_incoming_mail_time')) {
                obj['last_incoming_mail_time'] = ApiClient.convertToType(data['last_incoming_mail_time'], 'String');

                delete data['last_incoming_mail_time'];
            }
            if (data.hasOwnProperty('last_outgoing_mail_time')) {
                obj['last_outgoing_mail_time'] = ApiClient.convertToType(data['last_outgoing_mail_time'], 'String');

                delete data['last_outgoing_mail_time'];
            }
            if (data.hasOwnProperty('open_deals_count')) {
                obj['open_deals_count'] = ApiClient.convertToType(data['open_deals_count'], 'Number');

                delete data['open_deals_count'];
            }
            if (data.hasOwnProperty('related_open_deals_count')) {
                obj['related_open_deals_count'] = ApiClient.convertToType(data['related_open_deals_count'], 'Number');

                delete data['related_open_deals_count'];
            }
            if (data.hasOwnProperty('closed_deals_count')) {
                obj['closed_deals_count'] = ApiClient.convertToType(data['closed_deals_count'], 'Number');

                delete data['closed_deals_count'];
            }
            if (data.hasOwnProperty('related_closed_deals_count')) {
                obj['related_closed_deals_count'] = ApiClient.convertToType(data['related_closed_deals_count'], 'Number');

                delete data['related_closed_deals_count'];
            }
            if (data.hasOwnProperty('won_deals_count')) {
                obj['won_deals_count'] = ApiClient.convertToType(data['won_deals_count'], 'Number');

                delete data['won_deals_count'];
            }
            if (data.hasOwnProperty('related_won_deals_count')) {
                obj['related_won_deals_count'] = ApiClient.convertToType(data['related_won_deals_count'], 'Number');

                delete data['related_won_deals_count'];
            }
            if (data.hasOwnProperty('lost_deals_count')) {
                obj['lost_deals_count'] = ApiClient.convertToType(data['lost_deals_count'], 'Number');

                delete data['lost_deals_count'];
            }
            if (data.hasOwnProperty('related_lost_deals_count')) {
                obj['related_lost_deals_count'] = ApiClient.convertToType(data['related_lost_deals_count'], 'Number');

                delete data['related_lost_deals_count'];
            }
            if (data.hasOwnProperty('next_activity_date')) {
                obj['next_activity_date'] = ApiClient.convertToType(data['next_activity_date'], 'String');

                delete data['next_activity_date'];
            }
            if (data.hasOwnProperty('next_activity_time')) {
                obj['next_activity_time'] = ApiClient.convertToType(data['next_activity_time'], 'String');

                delete data['next_activity_time'];
            }
            if (data.hasOwnProperty('next_activity_id')) {
                obj['next_activity_id'] = ApiClient.convertToType(data['next_activity_id'], 'Number');

                delete data['next_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_id')) {
                obj['last_activity_id'] = ApiClient.convertToType(data['last_activity_id'], 'Number');

                delete data['last_activity_id'];
            }
            if (data.hasOwnProperty('last_activity_date')) {
                obj['last_activity_date'] = ApiClient.convertToType(data['last_activity_date'], 'String');

                delete data['last_activity_date'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * The count of email messages related to the Person
 * @member {Number} email_messages_count
 */
PersonCountEmailDealAndActivityInfo.prototype['email_messages_count'] = undefined;

/**
 * The count of activities related to the Person
 * @member {Number} activities_count
 */
PersonCountEmailDealAndActivityInfo.prototype['activities_count'] = undefined;

/**
 * The count of done activities related to the Person
 * @member {Number} done_activities_count
 */
PersonCountEmailDealAndActivityInfo.prototype['done_activities_count'] = undefined;

/**
 * The count of undone activities related to the Person
 * @member {Number} undone_activities_count
 */
PersonCountEmailDealAndActivityInfo.prototype['undone_activities_count'] = undefined;

/**
 * The count of files related to the Person
 * @member {Number} files_count
 */
PersonCountEmailDealAndActivityInfo.prototype['files_count'] = undefined;

/**
 * The count of notes related to the Person
 * @member {Number} notes_count
 */
PersonCountEmailDealAndActivityInfo.prototype['notes_count'] = undefined;

/**
 * The count of followers related to the Person
 * @member {Number} followers_count
 */
PersonCountEmailDealAndActivityInfo.prototype['followers_count'] = undefined;

/**
 * The date and time of the last incoming email associated with the Person
 * @member {String} last_incoming_mail_time
 */
PersonCountEmailDealAndActivityInfo.prototype['last_incoming_mail_time'] = undefined;

/**
 * The date and time of the last outgoing email associated with the Person
 * @member {String} last_outgoing_mail_time
 */
PersonCountEmailDealAndActivityInfo.prototype['last_outgoing_mail_time'] = undefined;

/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['open_deals_count'] = undefined;

/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['related_open_deals_count'] = undefined;

/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['closed_deals_count'] = undefined;

/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['related_closed_deals_count'] = undefined;

/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['won_deals_count'] = undefined;

/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['related_won_deals_count'] = undefined;

/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['lost_deals_count'] = undefined;

/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
PersonCountEmailDealAndActivityInfo.prototype['related_lost_deals_count'] = undefined;

/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
PersonCountEmailDealAndActivityInfo.prototype['next_activity_date'] = undefined;

/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
PersonCountEmailDealAndActivityInfo.prototype['next_activity_time'] = undefined;

/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
PersonCountEmailDealAndActivityInfo.prototype['next_activity_id'] = undefined;

/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
PersonCountEmailDealAndActivityInfo.prototype['last_activity_id'] = undefined;

/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
PersonCountEmailDealAndActivityInfo.prototype['last_activity_date'] = undefined;


// Implement PersonCountAndEmailInfo interface:
/**
 * The count of email messages related to the Person
 * @member {Number} email_messages_count
 */
PersonCountAndEmailInfo.prototype['email_messages_count'] = undefined;
/**
 * The count of activities related to the Person
 * @member {Number} activities_count
 */
PersonCountAndEmailInfo.prototype['activities_count'] = undefined;
/**
 * The count of done activities related to the Person
 * @member {Number} done_activities_count
 */
PersonCountAndEmailInfo.prototype['done_activities_count'] = undefined;
/**
 * The count of undone activities related to the Person
 * @member {Number} undone_activities_count
 */
PersonCountAndEmailInfo.prototype['undone_activities_count'] = undefined;
/**
 * The count of files related to the Person
 * @member {Number} files_count
 */
PersonCountAndEmailInfo.prototype['files_count'] = undefined;
/**
 * The count of notes related to the Person
 * @member {Number} notes_count
 */
PersonCountAndEmailInfo.prototype['notes_count'] = undefined;
/**
 * The count of followers related to the Person
 * @member {Number} followers_count
 */
PersonCountAndEmailInfo.prototype['followers_count'] = undefined;
/**
 * The date and time of the last incoming email associated with the Person
 * @member {String} last_incoming_mail_time
 */
PersonCountAndEmailInfo.prototype['last_incoming_mail_time'] = undefined;
/**
 * The date and time of the last outgoing email associated with the Person
 * @member {String} last_outgoing_mail_time
 */
PersonCountAndEmailInfo.prototype['last_outgoing_mail_time'] = undefined;
// Implement DealCountAndActivityInfo interface:
/**
 * The count of open Deals related with the item
 * @member {Number} open_deals_count
 */
DealCountAndActivityInfo.prototype['open_deals_count'] = undefined;
/**
 * The count of related open Deals related with the item
 * @member {Number} related_open_deals_count
 */
DealCountAndActivityInfo.prototype['related_open_deals_count'] = undefined;
/**
 * The count of closed Deals related with the item
 * @member {Number} closed_deals_count
 */
DealCountAndActivityInfo.prototype['closed_deals_count'] = undefined;
/**
 * The count of related closed Deals related with the item
 * @member {Number} related_closed_deals_count
 */
DealCountAndActivityInfo.prototype['related_closed_deals_count'] = undefined;
/**
 * The count of won Deals related with the item
 * @member {Number} won_deals_count
 */
DealCountAndActivityInfo.prototype['won_deals_count'] = undefined;
/**
 * The count of related won Deals related with the item
 * @member {Number} related_won_deals_count
 */
DealCountAndActivityInfo.prototype['related_won_deals_count'] = undefined;
/**
 * The count of lost Deals related with the item
 * @member {Number} lost_deals_count
 */
DealCountAndActivityInfo.prototype['lost_deals_count'] = undefined;
/**
 * The count of related lost Deals related with the item
 * @member {Number} related_lost_deals_count
 */
DealCountAndActivityInfo.prototype['related_lost_deals_count'] = undefined;
/**
 * The date of the next activity associated with the Deal
 * @member {String} next_activity_date
 */
DealCountAndActivityInfo.prototype['next_activity_date'] = undefined;
/**
 * The time of the next activity associated with the Deal
 * @member {String} next_activity_time
 */
DealCountAndActivityInfo.prototype['next_activity_time'] = undefined;
/**
 * The ID of the next activity associated with the Deal
 * @member {Number} next_activity_id
 */
DealCountAndActivityInfo.prototype['next_activity_id'] = undefined;
/**
 * The ID of the last activity associated with the Deal
 * @member {Number} last_activity_id
 */
DealCountAndActivityInfo.prototype['last_activity_id'] = undefined;
/**
 * The date of the last activity associated with the Deal
 * @member {String} last_activity_date
 */
DealCountAndActivityInfo.prototype['last_activity_date'] = undefined;




export default PersonCountEmailDealAndActivityInfo;

