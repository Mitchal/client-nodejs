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
import NumberBooleanDefault0 from './NumberBooleanDefault0';

/**
 * The AddOrUpdateRoleSettingRequest model module.
 * @module model/AddOrUpdateRoleSettingRequest
 * @version 1.0.0
 */
class AddOrUpdateRoleSettingRequest {
    /**
     * Constructs a new <code>AddOrUpdateRoleSettingRequest</code>.
     * @alias module:model/AddOrUpdateRoleSettingRequest
     * @param settingKey {module:model/AddOrUpdateRoleSettingRequest.SettingKeyEnum} 
     * @param value {module:model/NumberBooleanDefault0} Possible values for `default_visibility` settings: `0` or `1`
     */
    constructor(settingKey, value) { 
        
        AddOrUpdateRoleSettingRequest.initialize(this, settingKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, settingKey, value) { 
        obj['setting_key'] = settingKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>AddOrUpdateRoleSettingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddOrUpdateRoleSettingRequest} obj Optional instance to populate.
     * @return {module:model/AddOrUpdateRoleSettingRequest} The populated <code>AddOrUpdateRoleSettingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddOrUpdateRoleSettingRequest();

            if (data.hasOwnProperty('setting_key')) {
                obj['setting_key'] = ApiClient.convertToType(data['setting_key'], 'String');

                delete data['setting_key'];
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], NumberBooleanDefault0);

                delete data['value'];
            }

            if (Object.keys(data).length > 0) {
                obj['extra'] = data;
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/AddOrUpdateRoleSettingRequest.SettingKeyEnum} setting_key
 */
AddOrUpdateRoleSettingRequest.prototype['setting_key'] = undefined;

/**
 * Possible values for `default_visibility` settings: `0` or `1`
 * @member {module:model/NumberBooleanDefault0} value
 */
AddOrUpdateRoleSettingRequest.prototype['value'] = undefined;





/**
 * Allowed values for the <code>setting_key</code> property.
 * @enum {String}
 * @readonly
 */
AddOrUpdateRoleSettingRequest['SettingKeyEnum'] = {

    /**
     * value: "deal_default_visibility"
     * @const
     */
    "deal_default_visibility": "deal_default_visibility",

    /**
     * value: "org_default_visibility"
     * @const
     */
    "org_default_visibility": "org_default_visibility",

    /**
     * value: "person_default_visibility"
     * @const
     */
    "person_default_visibility": "person_default_visibility",

    /**
     * value: "product_default_visibility"
     * @const
     */
    "product_default_visibility": "product_default_visibility"
};



export default AddOrUpdateRoleSettingRequest;

