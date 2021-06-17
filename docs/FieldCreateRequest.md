# Pipedrive.FieldCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the field | 
**options** | **String** | When &#x60;field_type&#x60; is either set or enum, possible options must be supplied as a JSON-encoded sequential array of objects. All active items must be supplied and already existing items must have their ID supplied. New items only require a label. Example: &#x60;[{\&quot;id\&quot;:123,\&quot;label\&quot;:\&quot;Existing Item\&quot;},{\&quot;label\&quot;:\&quot;New Item\&quot;}]&#x60; | [optional] 
**fieldType** | [**FieldTypeAsString**](FieldTypeAsString.md) |  | 

