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
import DeleteNote from '../model/DeleteNote';
import GetNotes from '../model/GetNotes';
import NumberBoolean from '../model/NumberBoolean';
import PostNote from '../model/PostNote';

/**
* Notes service.
* @module api/NotesApi
* @version 1.0.0
*/
export default class NotesApi {

    /**
    * Constructs a new NotesApi. 
    * @alias module:api/NotesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a note
     * Adds a new note.
     * @param {String} content Content of the note in HTML format. Subject to sanitization on the back-end.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who will be marked as the author of this note. Only an admin can change the author.
     * @param {String} opts.leadId The ID of the lead the note will be attached to
     * @param {Number} opts.dealId The ID of the deal the note will be attached to
     * @param {Number} opts.personId The ID of the person this note will be attached to
     * @param {Number} opts.orgId The ID of the organization this note will be attached to
     * @param {String} opts.addTime Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state (lead_id is also required)
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state (`org_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state (`person_id` is also required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    addNoteWithHttpInfo(content, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling addNote");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'content': content,
        'user_id': opts['userId'],
        'lead_id': opts['leadId'],
        'deal_id': opts['dealId'],
        'person_id': opts['personId'],
        'org_id': opts['orgId'],
        'add_time': opts['addTime'],
        'pinned_to_lead_flag': opts['pinnedToLeadFlag'],
        'pinned_to_deal_flag': opts['pinnedToDealFlag'],
        'pinned_to_organization_flag': opts['pinnedToOrganizationFlag'],
        'pinned_to_person_flag': opts['pinnedToPersonFlag'],
      };

      let formParamArray = [
        'content',
        'userId',
        'leadId',
        'dealId',
        'personId',
        'orgId',
        'addTime',
        'pinnedToLeadFlag',
        'pinnedToDealFlag',
        'pinnedToOrganizationFlag',
        'pinnedToPersonFlag',
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
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a note
     * Adds a new note.
     * @param {String} content Content of the note in HTML format. Subject to sanitization on the back-end.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who will be marked as the author of this note. Only an admin can change the author.
     * @param {String} opts.leadId The ID of the lead the note will be attached to
     * @param {Number} opts.dealId The ID of the deal the note will be attached to
     * @param {Number} opts.personId The ID of the person this note will be attached to
     * @param {Number} opts.orgId The ID of the organization this note will be attached to
     * @param {String} opts.addTime Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state (lead_id is also required)
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state (`org_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state (`person_id` is also required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    addNote(content, opts) {
      return this.addNoteWithHttpInfo(content, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a note
     * Deletes a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteNote} and HTTP response
     */
    deleteNoteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNote");
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
      let returnType = DeleteNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a note
     * Deletes a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteNote}
     */
    deleteNote(id) {
      return this.deleteNoteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one note
     * Returns details about a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    getNoteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNote");
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
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one note
     * Returns details about a specific note.
     * @param {Number} id ID of the note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    getNote(id) {
      return this.getNoteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all notes
     * Returns all notes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
     * @param {String} opts.leadId The ID of the lead which notes to fetch. If omitted, notes about all leads with be returned.
     * @param {Number} opts.dealId The ID of the deal which notes to fetch. If omitted, notes about all deals with be returned.
     * @param {Number} opts.personId The ID of the person whose notes to fetch. If omitted, notes about all persons with be returned.
     * @param {Number} opts.orgId The ID of the organization which notes to fetch. If omitted, notes about all organizations with be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
     * @param {Date} opts.startDate Date in format of YYYY-MM-DD from which notes to fetch.
     * @param {Date} opts.endDate Date in format of YYYY-MM-DD until which notes to fetch to.
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNotes} and HTTP response
     */
    getNotesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'user_id': opts['userId'],
        'lead_id': opts['leadId'],
        'deal_id': opts['dealId'],
        'person_id': opts['personId'],
        'org_id': opts['orgId'],
        'start': opts['start'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'pinned_to_lead_flag': opts['pinnedToLeadFlag'],
        'pinned_to_deal_flag': opts['pinnedToDealFlag'],
        'pinned_to_organization_flag': opts['pinnedToOrganizationFlag'],
        'pinned_to_person_flag': opts['pinnedToPersonFlag'],
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
      let returnType = GetNotes;
      return this.apiClient.callApi(
        '/notes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all notes
     * Returns all notes.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId The ID of the user whose notes to fetch. If omitted, notes by all users will be returned.
     * @param {String} opts.leadId The ID of the lead which notes to fetch. If omitted, notes about all leads with be returned.
     * @param {Number} opts.dealId The ID of the deal which notes to fetch. If omitted, notes about all deals with be returned.
     * @param {Number} opts.personId The ID of the person whose notes to fetch. If omitted, notes about all persons with be returned.
     * @param {Number} opts.orgId The ID of the organization which notes to fetch. If omitted, notes about all organizations with be returned
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort Field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`.
     * @param {Date} opts.startDate Date in format of YYYY-MM-DD from which notes to fetch.
     * @param {Date} opts.endDate Date in format of YYYY-MM-DD until which notes to fetch to.
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNotes}
     */
    getNotes(opts) {
      return this.getNotesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a note
     * Updates a note.
     * @param {Number} id ID of the note
     * @param {String} content Content of the note in HTML format. Subject to sanitization on the back-end.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who will be marked as the author of this note. Only an admin can change the author.
     * @param {String} opts.leadId The ID of the lead the note will be attached to
     * @param {Number} opts.dealId The ID of the deal the note will be attached to
     * @param {Number} opts.personId The ID of the person this note will be attached to
     * @param {Number} opts.orgId The ID of the organization this note will be attached to
     * @param {String} opts.addTime Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state (lead_id is also required)
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state (`org_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state (`person_id` is also required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PostNote} and HTTP response
     */
    updateNoteWithHttpInfo(id, content, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNote");
      }
      // verify the required parameter 'content' is set
      if (content === undefined || content === null) {
        throw new Error("Missing the required parameter 'content' when calling updateNote");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'content': content,
        'user_id': opts['userId'],
        'lead_id': opts['leadId'],
        'deal_id': opts['dealId'],
        'person_id': opts['personId'],
        'org_id': opts['orgId'],
        'add_time': opts['addTime'],
        'pinned_to_lead_flag': opts['pinnedToLeadFlag'],
        'pinned_to_deal_flag': opts['pinnedToDealFlag'],
        'pinned_to_organization_flag': opts['pinnedToOrganizationFlag'],
        'pinned_to_person_flag': opts['pinnedToPersonFlag'],
      };

      let formParamArray = [
        'content',
        'userId',
        'leadId',
        'dealId',
        'personId',
        'orgId',
        'addTime',
        'pinnedToLeadFlag',
        'pinnedToDealFlag',
        'pinnedToOrganizationFlag',
        'pinnedToPersonFlag',
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
      let returnType = PostNote;
      return this.apiClient.callApi(
        '/notes/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a note
     * Updates a note.
     * @param {Number} id ID of the note
     * @param {String} content Content of the note in HTML format. Subject to sanitization on the back-end.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.userId ID of the user who will be marked as the author of this note. Only an admin can change the author.
     * @param {String} opts.leadId The ID of the lead the note will be attached to
     * @param {Number} opts.dealId The ID of the deal the note will be attached to
     * @param {Number} opts.personId The ID of the person this note will be attached to
     * @param {Number} opts.orgId The ID of the organization this note will be attached to
     * @param {String} opts.addTime Optional creation date & time of the Note in UTC. Can be set in the past or in the future. Requires admin user API token. Format: YYYY-MM-DD HH:MM:SS
     * @param {module:model/NumberBoolean} opts.pinnedToLeadFlag If set, then results are filtered by note to lead pinning state (lead_id is also required)
     * @param {module:model/NumberBoolean} opts.pinnedToDealFlag If set, then results are filtered by note to deal pinning state (`deal_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToOrganizationFlag If set, then results are filtered by note to organization pinning state (`org_id` is also required).
     * @param {module:model/NumberBoolean} opts.pinnedToPersonFlag If set, then results are filtered by note to person pinning state (`person_id` is also required).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostNote}
     */
    updateNote(id, content, opts) {
      return this.updateNoteWithHttpInfo(id, content, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
