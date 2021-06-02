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
import BaseResponse from './BaseResponse';
import ListPermittedUsersResponse1AllOf from './ListPermittedUsersResponse1AllOf';

/**
 * The ListPermittedUsersResponse1 model module.
 * @module model/ListPermittedUsersResponse1
 * @version 1.0.0
 */
class ListPermittedUsersResponse1 {
    /**
     * Constructs a new <code>ListPermittedUsersResponse1</code>.
     * @alias module:model/ListPermittedUsersResponse1
     * @implements module:model/BaseResponse
     * @implements module:model/ListPermittedUsersResponse1AllOf
     */
    constructor() { 
        BaseResponse.initialize(this);ListPermittedUsersResponse1AllOf.initialize(this);
        ListPermittedUsersResponse1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPermittedUsersResponse1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListPermittedUsersResponse1} obj Optional instance to populate.
     * @return {module:model/ListPermittedUsersResponse1} The populated <code>ListPermittedUsersResponse1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPermittedUsersResponse1();
            BaseResponse.constructFromObject(data, obj);
            ListPermittedUsersResponse1AllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], ['Number']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
ListPermittedUsersResponse1.prototype['success'] = undefined;

/**
 * The list of permitted Users IDs
 * @member {Array.<Number>} data
 */
ListPermittedUsersResponse1.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement ListPermittedUsersResponse1AllOf interface:
/**
 * The list of permitted Users IDs
 * @member {Array.<Number>} data
 */
ListPermittedUsersResponse1AllOf.prototype['data'] = undefined;




export default ListPermittedUsersResponse1;

