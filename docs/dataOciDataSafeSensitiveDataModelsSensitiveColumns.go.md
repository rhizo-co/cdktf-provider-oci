# `dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumns <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns oci_data_safe_sensitive_data_models_sensitive_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumns(scope Construct, id *string, config DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig) DataOciDataSafeSensitiveDataModelsSensitiveColumns
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup">ResetColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive">ResetIsCaseInSensitive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType">ResetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey">ResetParentColumnKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType">ResetRelationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState">ResetSensitiveColumnLifecycleState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId">ResetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo">ResetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan">ResetTimeUpdatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumnGroup` <a name="ResetColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnGroup"></a>

```go
func ResetColumnGroup()
```

##### `ResetColumnName` <a name="ResetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetDataType` <a name="ResetDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCaseInSensitive` <a name="ResetIsCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetIsCaseInSensitive"></a>

```go
func ResetIsCaseInSensitive()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObject"></a>

```go
func ResetObject()
```

##### `ResetObjectType` <a name="ResetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetObjectType"></a>

```go
func ResetObjectType()
```

##### `ResetParentColumnKey` <a name="ResetParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetParentColumnKey"></a>

```go
func ResetParentColumnKey()
```

##### `ResetRelationType` <a name="ResetRelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetRelationType"></a>

```go
func ResetRelationType()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSensitiveColumnLifecycleState` <a name="ResetSensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveColumnLifecycleState"></a>

```go
func ResetSensitiveColumnLifecycleState()
```

##### `ResetSensitiveTypeId` <a name="ResetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetSensitiveTypeId"></a>

```go
func ResetSensitiveTypeId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeCreatedLessThan"></a>

```go
func ResetTimeCreatedLessThan()
```

##### `ResetTimeUpdatedGreaterThanOrEqualTo` <a name="ResetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeUpdatedGreaterThanOrEqualTo()
```

##### `ResetTimeUpdatedLessThan` <a name="ResetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.resetTimeUpdatedLessThan"></a>

```go
func ResetTimeUpdatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection">SensitiveColumnCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput">ColumnGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput">ColumnNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput">DataTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput">IsCaseInSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput">ObjectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput">ObjectTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput">ParentColumnKeyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput">RelationTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput">SchemaNameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput">SensitiveColumnLifecycleStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput">SensitiveTypeIdInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput">StatusInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput">TimeUpdatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput">TimeUpdatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup">ColumnGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName">ColumnName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType">DataType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive">IsCaseInSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object">Object</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType">ObjectType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey">ParentColumnKey</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType">RelationType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState">SensitiveColumnLifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status">Status</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filter"></a>

```go
func Filter() DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList</a>

---

##### `SensitiveColumnCollection`<sup>Required</sup> <a name="SensitiveColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnCollection"></a>

```go
func SensitiveColumnCollection() DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList</a>

---

##### `ColumnGroupInput`<sup>Optional</sup> <a name="ColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroupInput"></a>

```go
func ColumnGroupInput() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnNameInput"></a>

```go
func ColumnNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataTypeInput"></a>

```go
func DataTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCaseInSensitiveInput`<sup>Optional</sup> <a name="IsCaseInSensitiveInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitiveInput"></a>

```go
func IsCaseInSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectInput"></a>

```go
func ObjectInput() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectTypeInput"></a>

```go
func ObjectTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParentColumnKeyInput`<sup>Optional</sup> <a name="ParentColumnKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKeyInput"></a>

```go
func ParentColumnKeyInput() *[]*string
```

- *Type:* *[]*string

---

##### `RelationTypeInput`<sup>Optional</sup> <a name="RelationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationTypeInput"></a>

```go
func RelationTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaNameInput"></a>

```go
func SchemaNameInput() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveColumnLifecycleStateInput`<sup>Optional</sup> <a name="SensitiveColumnLifecycleStateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleStateInput"></a>

```go
func SensitiveColumnLifecycleStateInput() *string
```

- *Type:* *string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelIdInput"></a>

```go
func SensitiveDataModelIdInput() *string
```

- *Type:* *string

---

##### `SensitiveTypeIdInput`<sup>Optional</sup> <a name="SensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeIdInput"></a>

```go
func SensitiveTypeIdInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.statusInput"></a>

```go
func StatusInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThanInput"></a>

```go
func TimeCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `TimeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```go
func TimeUpdatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeUpdatedLessThanInput`<sup>Optional</sup> <a name="TimeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThanInput"></a>

```go
func TimeUpdatedLessThanInput() *string
```

- *Type:* *string

---

##### `ColumnGroup`<sup>Required</sup> <a name="ColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnGroup"></a>

```go
func ColumnGroup() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.columnName"></a>

```go
func ColumnName() *[]*string
```

- *Type:* *[]*string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.dataType"></a>

```go
func DataType() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCaseInSensitive`<sup>Required</sup> <a name="IsCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.isCaseInSensitive"></a>

```go
func IsCaseInSensitive() interface{}
```

- *Type:* interface{}

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.object"></a>

```go
func Object() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.objectType"></a>

```go
func ObjectType() *[]*string
```

- *Type:* *[]*string

---

##### `ParentColumnKey`<sup>Required</sup> <a name="ParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.parentColumnKey"></a>

```go
func ParentColumnKey() *[]*string
```

- *Type:* *[]*string

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.relationType"></a>

```go
func RelationType() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.schemaName"></a>

```go
func SchemaName() *[]*string
```

- *Type:* *[]*string

---

##### `SensitiveColumnLifecycleState`<sup>Required</sup> <a name="SensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveColumnLifecycleState"></a>

```go
func SensitiveColumnLifecycleState() *string
```

- *Type:* *string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveDataModelId"></a>

```go
func SensitiveDataModelId() *string
```

- *Type:* *string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.status"></a>

```go
func Status() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
func TimeCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeCreatedLessThan"></a>

```go
func TimeCreatedLessThan() *string
```

- *Type:* *string

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedGreaterThanOrEqualTo"></a>

```go
func TimeUpdatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeUpdatedLessThan`<sup>Required</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.timeUpdatedLessThan"></a>

```go
func TimeUpdatedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumns.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

&dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SensitiveDataModelId: *string,
	ColumnGroup: *string,
	ColumnName: *[]*string,
	DataType: *[]*string,
	Filter: interface{},
	Id: *string,
	IsCaseInSensitive: interface{},
	Object: *[]*string,
	ObjectType: *[]*string,
	ParentColumnKey: *[]*string,
	RelationType: *[]*string,
	SchemaName: *[]*string,
	SensitiveColumnLifecycleState: *string,
	SensitiveTypeId: *[]*string,
	Status: *[]*string,
	TimeCreatedGreaterThanOrEqualTo: *string,
	TimeCreatedLessThan: *string,
	TimeUpdatedGreaterThanOrEqualTo: *string,
	TimeUpdatedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup">ColumnGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName">ColumnName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType">DataType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive">IsCaseInSensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object">Object</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType">ObjectType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey">ParentColumnKey</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType">RelationType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName">SchemaName</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState">SensitiveColumnLifecycleState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status">Status</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo">TimeUpdatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan">TimeUpdatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveDataModelId"></a>

```go
SensitiveDataModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_data_model_id}.

---

##### `ColumnGroup`<sup>Optional</sup> <a name="ColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnGroup"></a>

```go
ColumnGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_group DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_group}.

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.columnName"></a>

```go
ColumnName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#column_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#column_name}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.dataType"></a>

```go
DataType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#data_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#data_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#filter DataOciDataSafeSensitiveDataModelsSensitiveColumns#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#id DataOciDataSafeSensitiveDataModelsSensitiveColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCaseInSensitive`<sup>Optional</sup> <a name="IsCaseInSensitive" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.isCaseInSensitive"></a>

```go
IsCaseInSensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#is_case_in_sensitive DataOciDataSafeSensitiveDataModelsSensitiveColumns#is_case_in_sensitive}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.object"></a>

```go
Object *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object DataOciDataSafeSensitiveDataModelsSensitiveColumns#object}.

---

##### `ObjectType`<sup>Optional</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.objectType"></a>

```go
ObjectType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#object_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#object_type}.

---

##### `ParentColumnKey`<sup>Optional</sup> <a name="ParentColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.parentColumnKey"></a>

```go
ParentColumnKey *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#parent_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumns#parent_column_key}.

---

##### `RelationType`<sup>Optional</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.relationType"></a>

```go
RelationType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#relation_type DataOciDataSafeSensitiveDataModelsSensitiveColumns#relation_type}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.schemaName"></a>

```go
SchemaName *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#schema_name DataOciDataSafeSensitiveDataModelsSensitiveColumns#schema_name}.

---

##### `SensitiveColumnLifecycleState`<sup>Optional</sup> <a name="SensitiveColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveColumnLifecycleState"></a>

```go
SensitiveColumnLifecycleState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_column_lifecycle_state DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_column_lifecycle_state}.

---

##### `SensitiveTypeId`<sup>Optional</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.sensitiveTypeId"></a>

```go
SensitiveTypeId *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#sensitive_type_id DataOciDataSafeSensitiveDataModelsSensitiveColumns#sensitive_type_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.status"></a>

```go
Status *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#status DataOciDataSafeSensitiveDataModelsSensitiveColumns#status}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
TimeCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeCreatedLessThan"></a>

```go
TimeCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_created_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_created_less_than}.

---

##### `TimeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```go
TimeUpdatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_greater_than_or_equal_to DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_greater_than_or_equal_to}.

---

##### `TimeUpdatedLessThan`<sup>Optional</sup> <a name="TimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsConfig.property.timeUpdatedLessThan"></a>

```go
TimeUpdatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#time_updated_less_than DataOciDataSafeSensitiveDataModelsSensitiveColumns#time_updated_less_than}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

&dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#name DataOciDataSafeSensitiveDataModelsSensitiveColumns#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#values DataOciDataSafeSensitiveDataModelsSensitiveColumns#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_columns#regex DataOciDataSafeSensitiveDataModelsSensitiveColumns#regex}.

---

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

&dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection {

}
```


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

&dataocidatasafesensitivedatamodelssensitivecolumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName">AppName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups">ColumnGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount">EstimatedDataValueCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys">ParentColumnKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType">RelationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues">SampleDataValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```go
func AppDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.appName"></a>

```go
func AppName() *string
```

- *Type:* *string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnGroups"></a>

```go
func ColumnGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```go
func DbDefinedChildColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `EstimatedDataValueCount`<sup>Required</sup> <a name="EstimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```go
func EstimatedDataValueCount() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ParentColumnKeys`<sup>Required</sup> <a name="ParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.parentColumnKeys"></a>

```go
func ParentColumnKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.relationType"></a>

```go
func RelationType() *string
```

- *Type:* *string

---

##### `SampleDataValues`<sup>Required</sup> <a name="SampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sampleDataValues"></a>

```go
func SampleDataValues() *[]*string
```

- *Type:* *[]*string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveDataModelId"></a>

```go
func SensitiveDataModelId() *string
```

- *Type:* *string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```go
func SensitiveTypeId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesensitivedatamodelssensitivecolumns"

dataocidatasafesensitivedatamodelssensitivecolumns.NewDataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumns.DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection">DataOciDataSafeSensitiveDataModelsSensitiveColumnsSensitiveColumnCollection</a>

---



