# `dataOciFleetAppsManagementTaskRecords` Submodule <a name="`dataOciFleetAppsManagementTaskRecords` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementTaskRecords <a name="DataOciFleetAppsManagementTaskRecords" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records oci_fleet_apps_management_task_records}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecords(scope Construct, id *string, config DataOciFleetAppsManagementTaskRecordsConfig) DataOciFleetAppsManagementTaskRecords
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig">DataOciFleetAppsManagementTaskRecordsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetId"></a>

```go
func ResetId()
```

##### `ResetPlatform` <a name="ResetPlatform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetState"></a>

```go
func ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecords_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecords_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecords_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecords_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecords resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementTaskRecords to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementTaskRecords that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementTaskRecords to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection">TaskRecordCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filter"></a>

```go
func Filter() DataOciFleetAppsManagementTaskRecordsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList">DataOciFleetAppsManagementTaskRecordsFilterList</a>

---

##### `TaskRecordCollection`<sup>Required</sup> <a name="TaskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.taskRecordCollection"></a>

```go
func TaskRecordCollection() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecords.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementTaskRecordsConfig <a name="DataOciFleetAppsManagementTaskRecordsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	Platform: *string,
	State: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform">Platform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#compartment_id DataOciFleetAppsManagementTaskRecords#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#display_name DataOciFleetAppsManagementTaskRecords#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#filter DataOciFleetAppsManagementTaskRecords#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#id DataOciFleetAppsManagementTaskRecords#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#platform DataOciFleetAppsManagementTaskRecords#platform}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#state DataOciFleetAppsManagementTaskRecords#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#type DataOciFleetAppsManagementTaskRecords#type}.

---

### DataOciFleetAppsManagementTaskRecordsFilter <a name="DataOciFleetAppsManagementTaskRecordsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#name DataOciFleetAppsManagementTaskRecords#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#values DataOciFleetAppsManagementTaskRecords#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_records#regex DataOciFleetAppsManagementTaskRecords#regex}.

---

### DataOciFleetAppsManagementTaskRecordsTaskRecordCollection <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables {

}
```


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

&dataocifleetappsmanagementtaskrecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementTaskRecordsFilterList <a name="DataOciFleetAppsManagementTaskRecordsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementTaskRecordsFilterOutputReference <a name="DataOciFleetAppsManagementTaskRecordsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content">Content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType">ExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.content"></a>

```go
func Content() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsContentList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.executionType"></a>

```go
func ExecutionType() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.variables"></a>

```go
func Variables() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">OutputVariables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```go
func OutputVariables() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails">ExecutionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionDetails`<sup>Required</sup> <a name="ExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.executionDetails"></a>

```go
func ExecutionDetails() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsExecutionDetailsList</a>

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.properties"></a>

```go
func Properties() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetails</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsProperties</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.details"></a>

```go
func Details() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItems</a>

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference <a name="DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecords"

dataocifleetappsmanagementtaskrecords.NewDataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList">DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordsTaskRecordCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecords.DataOciFleetAppsManagementTaskRecordsTaskRecordCollection">DataOciFleetAppsManagementTaskRecordsTaskRecordCollection</a>

---



