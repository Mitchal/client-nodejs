/**
 * PipedriveAPIV1Lib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.UserSettingsController;
const FilterTypeEnum = testerlib.FilterTypeEnum;
const IconKeyEnum = testerlib.IconKeyEnum;
const FieldType = testerlib.FieldType;
const NumberBooleanEnum = testerlib.NumberBooleanEnum;
const MailMessage = testerlib.MailMessage;
const MailMessageData = testerlib.MailMessageData;
const MailParticipant = testerlib.MailParticipant;
const MailServiceBaseResponse = testerlib.MailServiceBaseResponse;
const Activity = testerlib.Activity;
const BasicDeal = testerlib.BasicDeal;
const VisibleToEnum = testerlib.VisibleToEnum;
const NewDeal = testerlib.NewDeal;
const GetAddedDeal = testerlib.GetAddedDeal;
const GetDuplicatedDeal = testerlib.GetDuplicatedDeal;
const GetMergedDeal = testerlib.GetMergedDeal;
const AddedDealFollower = testerlib.AddedDealFollower;
const DeleteDeal = testerlib.DeleteDeal;
const DeleteDealFollower = testerlib.DeleteDealFollower;
const DeleteDealParticipant = testerlib.DeleteDealParticipant;
const DeleteDealProduct = testerlib.DeleteDealProduct;
const BasicDealProduct = testerlib.BasicDealProduct;
const NewDealProduct = testerlib.NewDealProduct;
const BaseCurrency = testerlib.BaseCurrency;
const Currencies = testerlib.Currencies;
const Note = testerlib.Note;
const GetNotes = testerlib.GetNotes;
const PostNote = testerlib.PostNote;
const DeleteNote = testerlib.DeleteNote;
const BaseNoteDealTitle = testerlib.BaseNoteDealTitle;
const BaseNote = testerlib.BaseNote;
const NoteCreatorUser = testerlib.NoteCreatorUser;
const AdditionalData = testerlib.AdditionalData;
const AdditionalDataWithPaginationDetails = testerlib.AdditionalDataWithPaginationDetails;
const BasicGoal = testerlib.BasicGoal;
const NewGoal = testerlib.NewGoal;
const BasicOrganizationField = testerlib.BasicOrganizationField;
const NewOrganizationField = testerlib.NewOrganizationField;
const BasicOrganization = testerlib.BasicOrganization;
const NewOrganization = testerlib.NewOrganization;
const OrganizationRelationship = testerlib.OrganizationRelationship;
const BasicPerson = testerlib.BasicPerson;
const NewPerson = testerlib.NewPerson;
const NewPersonField = testerlib.NewPersonField;
const Pipeline = testerlib.Pipeline;
const Product = testerlib.Product;
const NewFollowerResponse = testerlib.NewFollowerResponse;
const DeleteProductFollowerResponse = testerlib.DeleteProductFollowerResponse;
const FindProductsByNameResponse = testerlib.FindProductsByNameResponse;
const BasicProductField = testerlib.BasicProductField;
const NewProductField = testerlib.NewProductField;
const ProductField = testerlib.ProductField;
const GetAllProductFieldsResponse = testerlib.GetAllProductFieldsResponse;
const GetProductFieldResponse = testerlib.GetProductFieldResponse;
const DeleteMultipleProductFieldsResponse = testerlib.DeleteMultipleProductFieldsResponse;
const DeleteProductFieldResponse = testerlib.DeleteProductFieldResponse;
const BaseRole = testerlib.BaseRole;
const RoleAssignment = testerlib.RoleAssignment;
const SubRole = testerlib.SubRole;
const FullRole = testerlib.FullRole;
const GetRoles = testerlib.GetRoles;
const RoleSettings = testerlib.RoleSettings;
const RolesAdditionalData = testerlib.RolesAdditionalData;
const PostRoles = testerlib.PostRoles;
const DeleteRole = testerlib.DeleteRole;
const GetRole = testerlib.GetRole;
const PutRole = testerlib.PutRole;
const DeleteRoleAssignment = testerlib.DeleteRoleAssignment;
const GetRoleAssignments = testerlib.GetRoleAssignments;
const PostRoleAssignment = testerlib.PostRoleAssignment;
const GetRoleSubroles = testerlib.GetRoleSubroles;
const GetRoleSettings = testerlib.GetRoleSettings;
const PostRoleSettings = testerlib.PostRoleSettings;
const Stage = testerlib.Stage;
const PermissionSets = testerlib.PermissionSets;
const PermissionSetsItem = testerlib.PermissionSetsItem;
const SinglePermissionSetsItem = testerlib.SinglePermissionSetsItem;
const UserAssignmentsToPermissionSet = testerlib.UserAssignmentsToPermissionSet;
const UserAssignmentToPermissionSet = testerlib.UserAssignmentToPermissionSet;
const CreateTeam = testerlib.CreateTeam;
const UpdateTeam = testerlib.UpdateTeam;
const BaseTeam = testerlib.BaseTeam;
const Teams = testerlib.Teams;
const UserIDs = testerlib.UserIDs;
const BaseUser = testerlib.BaseUser;
const User = testerlib.User;
const Users = testerlib.Users;
const BaseUserMe = testerlib.BaseUserMe;
const UserMe = testerlib.UserMe;
const UserConnections = testerlib.UserConnections;
const GetDeal = testerlib.GetDeal;
const GetDeals = testerlib.GetDeals;
const GetDealsByName = testerlib.GetDealsByName;
const GetDealsSummary = testerlib.GetDealsSummary;
const GetDealsTimeline = testerlib.GetDealsTimeline;
const DealUserData = testerlib.DealUserData;
const DealPersonData = testerlib.DealPersonData;
const DealOrganizationData = testerlib.DealOrganizationData;
const GetProductAttachementDetails = testerlib.GetProductAttachementDetails;
const GetAddProductAttachementDetails = testerlib.GetAddProductAttachementDetails;
const ProductAttachementFields = testerlib.ProductAttachementFields;
const DealNonStrictModeFields = testerlib.DealNonStrictModeFields;
const DealStrictModeFields = testerlib.DealStrictModeFields;
const BaseDeal = testerlib.BaseDeal;
const BaseResponse = testerlib.BaseResponse;
const FailResponseException = testerlib.FailResponseException;
const UnauthorizedException = testerlib.UnauthorizedException;
const CommonMailThread = testerlib.CommonMailThread;
const BaseMailThread = testerlib.BaseMailThread;
const MailThread = testerlib.MailThread;
const MailThreadOne = testerlib.MailThreadOne;
const MailThreadParticipant = testerlib.MailThreadParticipant;
const BaseMailThreadMessages = testerlib.BaseMailThreadMessages;
const MailThreadMessages = testerlib.MailThreadMessages;
const MailThreadDelete = testerlib.MailThreadDelete;
const MailThreadPut = testerlib.MailThreadPut;
const GlobalMessageGet = testerlib.GlobalMessageGet;
const GlobalMessageBaseResponse = testerlib.GlobalMessageBaseResponse;
const GlobalMessageData = testerlib.GlobalMessageData;
const GlobalMessageUserData = testerlib.GlobalMessageUserData;
const GlobalMessageDelete = testerlib.GlobalMessageDelete;
const AdditionalData3 = testerlib.AdditionalData3;
const AdditionalData4 = testerlib.AdditionalData4;
const AdditionalData5 = testerlib.AdditionalData5;
const AdditionalData6 = testerlib.AdditionalData6;
const Age = testerlib.Age;
const AssigneeTypeEnum = testerlib.AssigneeTypeEnum;
const AverageTimeToWon = testerlib.AverageTimeToWon;
const BaseResponseErrorException = testerlib.BaseResponseErrorException;
const CreatorUserId = testerlib.CreatorUserId;
const Data = testerlib.Data;
const Data2 = testerlib.Data2;
const Data3 = testerlib.Data3;
const Data4 = testerlib.Data4;
const Data5 = testerlib.Data5;
const Data6 = testerlib.Data6;
const Data7 = testerlib.Data7;
const Data8 = testerlib.Data8;
const Data9 = testerlib.Data9;
const Data10 = testerlib.Data10;
const Data11 = testerlib.Data11;
const Data12 = testerlib.Data12;
const Data13 = testerlib.Data13;
const Data14 = testerlib.Data14;
const Data15 = testerlib.Data15;
const Data16 = testerlib.Data16;
const Data17 = testerlib.Data17;
const Data18 = testerlib.Data18;
const Data19 = testerlib.Data19;
const Data20 = testerlib.Data20;
const Data21 = testerlib.Data21;
const Data24 = testerlib.Data24;
const Data25 = testerlib.Data25;
const Data26 = testerlib.Data26;
const Data27 = testerlib.Data27;
const Data28 = testerlib.Data28;
const Data29 = testerlib.Data29;
const Data30 = testerlib.Data30;
const Data31 = testerlib.Data31;
const Deal1 = testerlib.Deal1;
const DealDefaultVisibilityEnum = testerlib.DealDefaultVisibilityEnum;
const DealsResponse = testerlib.DealsResponse;
const Email = testerlib.Email;
const EventActionEnum = testerlib.EventActionEnum;
const EventObjectEnum = testerlib.EventObjectEnum;
const ExpectedOutcomeTrackingMetricEnum = testerlib.ExpectedOutcomeTrackingMetricEnum;
const FieldType6Enum = testerlib.FieldType6Enum;
const FieldType1Enum = testerlib.FieldType1Enum;
const FieldType4Enum = testerlib.FieldType4Enum;
const FileTypeEnum = testerlib.FileTypeEnum;
const FolderEnum = testerlib.FolderEnum;
const IntervalEnum = testerlib.IntervalEnum;
const Interval2Enum = testerlib.Interval2Enum;
const ItemTypeEnum = testerlib.ItemTypeEnum;
const ItemType2Enum = testerlib.ItemType2Enum;
const ItemsEnum = testerlib.ItemsEnum;
const Language = testerlib.Language;
const MailTrackingStatusEnum = testerlib.MailTrackingStatusEnum;
const OrderByEnum = testerlib.OrderByEnum;
const Organization1 = testerlib.Organization1;
const OrgId = testerlib.OrgId;
const Pagination = testerlib.Pagination;
const Pagination1 = testerlib.Pagination1;
const Parties = testerlib.Parties;
const Person1 = testerlib.Person1;
const PersonId = testerlib.PersonId;
const Phone = testerlib.Phone;
const RelatedObjects = testerlib.RelatedObjects;
const RemoteLocationEnum = testerlib.RemoteLocationEnum;
const RottenFlagEnum = testerlib.RottenFlagEnum;
const SettingKeyEnum = testerlib.SettingKeyEnum;
const StatusEnum = testerlib.StatusEnum;
const Status2Enum = testerlib.Status2Enum;
const Status3Enum = testerlib.Status3Enum;
const StayInPipelineStages = testerlib.StayInPipelineStages;
const Totals = testerlib.Totals;
const TypeEnum = testerlib.TypeEnum;
const TypeNameEnum = testerlib.TypeNameEnum;
const Type2Enum = testerlib.Type2Enum;
const UserId = testerlib.UserId;
const ValuesTotal = testerlib.ValuesTotal;
const Webhooks400ErrorException = testerlib.Webhooks400ErrorException;
const Webhooks400ErrorErrorException = testerlib.Webhooks400ErrorErrorException;
const WebhooksResponse = testerlib.WebhooksResponse;
const WebhooksResponse1 = testerlib.WebhooksResponse1;
const WeightedValuesTotal = testerlib.WeightedValuesTotal;
const OAuthToken = testerlib.OAuthToken;
const OAuthProviderException = testerlib.OAuthProviderException;
const OAuthProviderErrorEnum = testerlib.OAuthProviderErrorEnum;


describe("UserSettingsController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Lists settings of authorized user.
     */
    it("should testTestListSettingsOfAuthorizedUser response", function testTestListSettingsOfAuthorizedUserTest(done) {
        controller.listSettingsOfAuthorizedUser(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            done();
        }).catch(() => undefined);
    });

});
