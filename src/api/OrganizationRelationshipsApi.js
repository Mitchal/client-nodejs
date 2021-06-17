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
import AllOrganizationRelationshipsGetResponse from '../model/AllOrganizationRelationshipsGetResponse';
import OrganizationRelationshipDeleteResponse from '../model/OrganizationRelationshipDeleteResponse';
import OrganizationRelationshipGetResponse from '../model/OrganizationRelationshipGetResponse';
import OrganizationRelationshipPostResponse from '../model/OrganizationRelationshipPostResponse';
import OrganizationRelationshipUpdateResponse from '../model/OrganizationRelationshipUpdateResponse';

/**
* OrganizationRelationships service.
* @module api/OrganizationRelationshipsApi
* @version 1.0.0
*/
export default class OrganizationRelationshipsApi {

    /**
    * Constructs a new OrganizationRelationshipsApi. 
    * @alias module:api/OrganizationRelationshipsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create an organization relationship
     * Creates and returns an organization relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @param {module:model/String} opts.type The type of organization relationship
     * @param {Number} opts.relOwnerOrgId The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
     * @param {Number} opts.relLinkedOrgId The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationRelationshipPostResponse} and HTTP response
     */
    addOrganizationRelationshipWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'org_id': opts['orgId'],
        'type': opts['type'],
        'rel_owner_org_id': opts['relOwnerOrgId'],
        'rel_linked_org_id': opts['relLinkedOrgId'],
      };

      let formParamArray = [
        'orgId',
        'type',
        'relOwnerOrgId',
        'relLinkedOrgId',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
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
      let returnType = OrganizationRelationshipPostResponse;
      return this.apiClient.callApi(
        '/organizationRelationships', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create an organization relationship
     * Creates and returns an organization relationship.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @param {module:model/String} opts.type The type of organization relationship
     * @param {Number} opts.relOwnerOrgId The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
     * @param {Number} opts.relLinkedOrgId The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationRelationshipPostResponse}
     */
    addOrganizationRelationship(opts) {
      return this.addOrganizationRelationshipWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete an organization relationship
     * Deletes an organization relationship and returns the deleted id.
     * @param {Number} id ID of the organization relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationRelationshipDeleteResponse} and HTTP response
     */
    deleteOrganizationRelationshipWithHttpInfo(id) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteOrganizationRelationship");
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
      let returnType = OrganizationRelationshipDeleteResponse;
      return this.apiClient.callApi(
        '/organizationRelationships/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an organization relationship
     * Deletes an organization relationship and returns the deleted id.
     * @param {Number} id ID of the organization relationship
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationRelationshipDeleteResponse}
     */
    deleteOrganizationRelationship(id) {
      return this.deleteOrganizationRelationshipWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all relationships for organization
     * Gets all of the relationships for a supplied organization ID.
     * @param {Number} orgId ID of the organization to get relationships for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AllOrganizationRelationshipsGetResponse} and HTTP response
     */
    getOrganizationRelationShipsWithHttpInfo(orgId) {
      const opts = {}
      let postBody = null;
      // verify the required parameter 'orgId' is set
      if (orgId === undefined || orgId === null) {
        throw new Error("Missing the required parameter 'orgId' when calling getOrganizationRelationShips");
      }

      let pathParams = {
      };
      let queryParams = {
        'org_id': orgId,
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
      let returnType = AllOrganizationRelationshipsGetResponse;
      return this.apiClient.callApi(
        '/organizationRelationships', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all relationships for organization
     * Gets all of the relationships for a supplied organization ID.
     * @param {Number} orgId ID of the organization to get relationships for
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AllOrganizationRelationshipsGetResponse}
     */
    getOrganizationRelationShips(orgId) {
      return this.getOrganizationRelationShipsWithHttpInfo(orgId)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one organization relationship
     * Finds and returns an organization relationship from its ID.
     * @param {Number} id ID of the organization relationship
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationRelationshipGetResponse} and HTTP response
     */
    getOrganizationRelationshipWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getOrganizationRelationship");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
        'org_id': opts['orgId'],
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
      let returnType = OrganizationRelationshipGetResponse;
      return this.apiClient.callApi(
        '/organizationRelationships/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one organization relationship
     * Finds and returns an organization relationship from its ID.
     * @param {Number} id ID of the organization relationship
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationRelationshipGetResponse}
     */
    getOrganizationRelationship(id, opts) {
      return this.getOrganizationRelationshipWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update an organization relationship
     * Updates and returns an organization relationship.
     * @param {Number} id ID of the organization relationship
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @param {module:model/String} opts.type The type of organization relationship
     * @param {Number} opts.relOwnerOrgId The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
     * @param {Number} opts.relLinkedOrgId The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizationRelationshipUpdateResponse} and HTTP response
     */
    updateOrganizationRelationshipWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateOrganizationRelationship");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'org_id': opts['orgId'],
        'type': opts['type'],
        'rel_owner_org_id': opts['relOwnerOrgId'],
        'rel_linked_org_id': opts['relLinkedOrgId'],
      };

      let formParamArray = [
        'orgId',
        'type',
        'relOwnerOrgId',
        'relLinkedOrgId',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
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
      let returnType = OrganizationRelationshipUpdateResponse;
      return this.apiClient.callApi(
        '/organizationRelationships/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an organization relationship
     * Updates and returns an organization relationship.
     * @param {Number} id ID of the organization relationship
     * @param {Object} opts Optional parameters
     * @param {Number} opts.orgId ID of the base organization for the returned calculated values
     * @param {module:model/String} opts.type The type of organization relationship
     * @param {Number} opts.relOwnerOrgId The owner of this relationship. If type is `parent`, then the owner is the parent and the linked organization is the daughter.
     * @param {Number} opts.relLinkedOrgId The linked organization in this relationship. If type is `parent`, then the linked organization is the daughter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizationRelationshipUpdateResponse}
     */
    updateOrganizationRelationship(id, opts) {
      return this.updateOrganizationRelationshipWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}