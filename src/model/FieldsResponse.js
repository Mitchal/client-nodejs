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
import AdditionalData from './AdditionalData';
import BaseResponse from './BaseResponse';
import Field from './Field';
import FieldsResponseAllOf from './FieldsResponseAllOf';

/**
 * The FieldsResponse model module.
 * @module model/FieldsResponse
 * @version 1.0.0
 */
class FieldsResponse {
    /**
     * Constructs a new <code>FieldsResponse</code>.
     * @alias module:model/FieldsResponse
     * @implements module:model/BaseResponse
     * @implements module:model/FieldsResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);FieldsResponseAllOf.initialize(this);
        FieldsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FieldsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldsResponse} obj Optional instance to populate.
     * @return {module:model/FieldsResponse} The populated <code>FieldsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FieldsResponse();
            BaseResponse.constructFromObject(data, obj);
            FieldsResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [Field]);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = AdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
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
FieldsResponse.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/Field>} data
 */
FieldsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/AdditionalData} additional_data
 */
FieldsResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement FieldsResponseAllOf interface:
/**
 * @member {Array.<module:model/Field>} data
 */
FieldsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/AdditionalData} additional_data
 */
FieldsResponseAllOf.prototype['additional_data'] = undefined;




export default FieldsResponse;

