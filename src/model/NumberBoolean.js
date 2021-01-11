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
/**
* Enum class NumberBoolean.
* @enum {}
* @readonly
*/
export default class NumberBoolean {
    
        /**
         * value: 0
         * @const
         */
        "0" = 0;

    
        /**
         * value: 1
         * @const
         */
        "1" = 1;

    

    /**
    * Returns a <code>NumberBoolean</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NumberBoolean} The enum <code>NumberBoolean</code> value.
    */
    static constructFromObject(object) {
        return object;
    }

    /**
    * Initializes the fields of this object.
    * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
    * Only for internal use.
    */
    static initialize(obj) { 
    }
}

