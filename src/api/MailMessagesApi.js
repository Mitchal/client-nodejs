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


import ApiClient from "../ApiClient";
import MailMessage from '../model/MailMessage';
import NumberBooleanDefault0 from '../model/NumberBooleanDefault0';

/**
* MailMessages service.
* @module api/MailMessagesApi
* @version 1.0.0
*/
export default class MailMessagesApi {

    /**
    * Constructs a new MailMessagesApi. 
    * @alias module:api/MailMessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get one mail message
     * Returns data about specific mail message.
     * @param {Number} id ID of the mail message to fetch.
     * @param {Object} opts Optional parameters
     * @param {module:model/NumberBooleanDefault0} opts.includeBody Whether to include full message body or not. 0 = Don't include, 1 = Include
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MailMessage} and HTTP response
     */
    getMailMessageWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getMailMessage");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'include_body': opts['includeBody']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MailMessage;
      return this.apiClient.callApi(
        '/mailbox/mailMessages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one mail message
     * Returns data about specific mail message.
     * @param {Number} id ID of the mail message to fetch.
     * @param {Object} opts Optional parameters
     * @param {module:model/NumberBooleanDefault0} opts.includeBody Whether to include full message body or not. 0 = Don't include, 1 = Include
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MailMessage}
     */
    getMailMessage(id, opts) {
      return this.getMailMessageWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}