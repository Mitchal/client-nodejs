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
import AddLeadRequest from '../model/AddLeadRequest';
import GetLeadsResponse200 from '../model/GetLeadsResponse200';
import LeadIdResponse200 from '../model/LeadIdResponse200';
import LeadResponse404 from '../model/LeadResponse404';
import LeadSearchResponse from '../model/LeadSearchResponse';
import OneLeadResponse200 from '../model/OneLeadResponse200';
import UpdateLeadRequest from '../model/UpdateLeadRequest';

/**
* Leads service.
* @module api/LeadsApi
* @version 1.0.0
*/
export default class LeadsApi {

    /**
    * Constructs a new LeadsApi. 
    * @alias module:api/LeadsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a lead
     * Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source `API` assigned. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a lead</a>. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    addLeadWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addLeadRequest'];

      if (opts['title'] === undefined || opts['title'] === null) {
        throw new Error("Missing the required parameter 'title' when calling addLead");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a lead
     * Creates a lead. A lead always has to be linked to a person or an organization or both. All leads created through the Pipedrive API will have a lead source `API` assigned. Here's the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-lead\" target=\"_blank\" rel=\"noopener noreferrer\">adding a lead</a>. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields' values tutorial</a>.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadRequest} opts.addLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    addLead(opts) {
      return this.addLeadWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a lead
     * Deletes a specific lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeadIdResponse200} and HTTP response
     */
    deleteLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLead");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = LeadIdResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a lead
     * Deletes a specific lead.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeadIdResponse200}
     */
    deleteLead(id) {
      return this.deleteLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one lead
     * Returns details of a specific lead. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    getLeadWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getLead");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one lead
     * Returns details of a specific lead. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals.
     * @param {String} id The ID of the lead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    getLead(id) {
      return this.getLeadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all leads
     * Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on the archived status of a lead. If not provided, `All` is used.
     * @param {Number} opts.ownerId If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {module:model/String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadsResponse200} and HTTP response
     */
    getLeadsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;







      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'start': opts['start'],
        'archived_status': opts['archivedStatus'],
        'owner_id': opts['ownerId'],
        'filter_id': opts['filterId'],
        'sort': opts['sort'],
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadsResponse200;
      return this.apiClient.callApi(
        '/leads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all leads
     * Returns multiple leads. Leads are sorted by the time they were created, from oldest to newest. Pagination can be controlled using `limit` and `start` query parameters. If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields' structure from deals. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.
     * @param {Number} opts.start For pagination, the position that represents the first result for the page
     * @param {module:model/String} opts.archivedStatus Filtering based on the archived status of a lead. If not provided, `All` is used.
     * @param {Number} opts.ownerId If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.
     * @param {Number} opts.filterId The ID of the filter to use
     * @param {module:model/String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadsResponse200}
     */
    getLeads(opts) {
      return this.getLeadsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Search leads
     * Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {Number} opts.personId Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
     * @param {Number} opts.organizationId Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LeadSearchResponse} and HTTP response
     */
    searchLeadsWithHttpInfo(term, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'term' is set
      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling searchLeads");
      }








      let pathParams = {
      };
      let queryParams = {
        'term': term,
        'fields': opts['fields'],
        'exact_match': opts['exactMatch'],
        'person_id': opts['personId'],
        'organization_id': opts['organizationId'],
        'include_fields': opts['includeFields'],
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
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = LeadSearchResponse;
      return this.apiClient.callApi(
        '/leads/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search leads
     * Searches all leads by title, notes and/or custom fields. This endpoint is a wrapper of <a href=\"https://developers.pipedrive.com/docs/api/v1/ItemSearch#searchItem\">/v1/itemSearch</a> with a narrower OAuth scope. Found leads can be filtered by the person ID and the organization ID.
     * @param {String} term The search term to look for. Minimum 2 characters (or 1 if using `exact_match`).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fields A comma-separated string array. The fields to perform the search from. Defaults to all of them.
     * @param {module:model/Boolean} opts.exactMatch When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive.
     * @param {Number} opts.personId Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000.
     * @param {Number} opts.organizationId Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000.
     * @param {module:model/String} opts.includeFields Supports including optional fields in the results which are not provided by default
     * @param {Number} opts.start Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter. (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LeadSearchResponse}
     */
    searchLeads(term, opts) {
      return this.searchLeadsWithHttpInfo(term, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a lead
     * Updates one or more properties of a lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields’ values tutorial</a>.
     * @param {String} id The ID of the lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OneLeadResponse200} and HTTP response
     */
    updateLeadWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateLeadRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLead");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = OneLeadResponse200;
      return this.apiClient.callApi(
        '/leads/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a lead
     * Updates one or more properties of a lead. Only properties included in the request will be updated. Send `null` to unset a property (applicable for example for `value`, `person_id` or `organization_id`). If a lead contains custom fields, the fields' values will be included in the response in the same format as with the `Deals` endpoints. If a custom field's value hasn't been set for the lead, it won't appear in the response. Please note that leads do not have a separate set of custom fields, instead they inherit the custom fields’ structure from deals. See an example given in the <a href=\"https://pipedrive.readme.io/docs/updating-custom-field-value\" target=\"_blank\" rel=\"noopener noreferrer\">updating custom fields’ values tutorial</a>.
     * @param {String} id The ID of the lead
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadRequest} opts.updateLeadRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OneLeadResponse200}
     */
    updateLead(id, opts) {
      return this.updateLeadWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
