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
import GetRecents from '../model/GetRecents';

/**
* Recents service.
* @module api/RecentsApi
* @version 1.0.0
*/
export default class RecentsApi {

    /**
    * Constructs a new RecentsApi. 
    * @alias module:api/RecentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get recents
     * Returns data about all recent changes occured after given timestamp.
     * @param {String} sinceTimestamp Timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.items Multiple selection of item types to include in query (optional)
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRecents} and HTTP response
     */
    getRecentsWithHttpInfo(sinceTimestamp, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sinceTimestamp' is set
      if (sinceTimestamp === undefined || sinceTimestamp === null) {
        throw new Error("Missing the required parameter 'sinceTimestamp' when calling getRecents");
      }

      let pathParams = {
      };
      let queryParams = {
        'since_timestamp': sinceTimestamp,
        'items': opts['items'],
        'start': opts['start'],
        'limit': opts['limit'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isUrlEncoded = contentTypes.includes('application/x-www-form-urlencoded');

      if (isUrlEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetRecents;
      return this.apiClient.callApi(
        '/recents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get recents
     * Returns data about all recent changes occured after given timestamp.
     * @param {String} sinceTimestamp Timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.items Multiple selection of item types to include in query (optional)
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRecents}
     */
    getRecents(sinceTimestamp, opts) {
      return this.getRecentsWithHttpInfo(sinceTimestamp, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
