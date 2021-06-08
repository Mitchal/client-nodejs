/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Note
 */
class Note extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.content = this.constructor.getValue(obj.content);
        this.user_id = this.constructor.getValue(obj.user_id);
        this.deal_id = this.constructor.getValue(obj.deal_id);
        this.person_id = this.constructor.getValue(obj.person_id);
        this.org_id = this.constructor.getValue(obj.org_id);
        this.add_time = this.constructor.getValue(obj.add_time);
        this.pinned_to_deal_flag = this.constructor.getValue(obj.pinned_to_deal_flag);
        this.pinned_to_organization_flag =
          this.constructor.getValue(obj.pinned_to_organization_flag);
        this.pinned_to_person_flag = this.constructor.getValue(obj.pinned_to_person_flag);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'content', realName: 'content' },
            { name: 'user_id', realName: 'user_id' },
            { name: 'deal_id', realName: 'deal_id' },
            { name: 'person_id', realName: 'person_id' },
            { name: 'org_id', realName: 'org_id' },
            { name: 'add_time', realName: 'add_time' },
            { name: 'pinned_to_deal_flag', realName: 'pinned_to_deal_flag' },
            { name: 'pinned_to_organization_flag', realName: 'pinned_to_organization_flag' },
            { name: 'pinned_to_person_flag', realName: 'pinned_to_person_flag' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = Note;