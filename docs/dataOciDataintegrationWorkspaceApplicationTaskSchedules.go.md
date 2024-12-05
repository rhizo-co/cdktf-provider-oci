# `dataOciDataintegrationWorkspaceApplicationTaskSchedules` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationTaskSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedules <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedules" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules oci_dataintegration_workspace_application_task_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedules(scope Construct, id *string, config DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig) DataOciDataintegrationWorkspaceApplicationTaskSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig">DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig">DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetKey"></a>

```go
func ResetKey()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationTaskSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationTaskSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceApplicationTaskSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationTaskSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.taskScheduleSummaryCollection">TaskScheduleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKeyInput">ApplicationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifierInput">IdentifierInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.keyInput">KeyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.typeInput">TypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifier">Identifier</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.key">Key</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.type">Type</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList</a>

---

##### `TaskScheduleSummaryCollection`<sup>Required</sup> <a name="TaskScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.taskScheduleSummaryCollection"></a>

```go
func TaskScheduleSummaryCollection() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList</a>

---

##### `ApplicationKeyInput`<sup>Optional</sup> <a name="ApplicationKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKeyInput"></a>

```go
func ApplicationKeyInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifierInput"></a>

```go
func IdentifierInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.keyInput"></a>

```go
func KeyInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.typeInput"></a>

```go
func TypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.identifier"></a>

```go
func Identifier() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.key"></a>

```go
func Key() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.type"></a>

```go
func Type() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationKey: *string,
	WorkspaceId: *string,
	Filter: interface{},
	Id: *string,
	Identifier: *[]*string,
	IsEnabled: interface{},
	Key: *[]*string,
	Name: *string,
	Type: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.identifier">Identifier</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.key">Key</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.type">Type</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.applicationKey"></a>

```go
ApplicationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#application_key DataOciDataintegrationWorkspaceApplicationTaskSchedules#application_key}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationTaskSchedules#workspace_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#filter DataOciDataintegrationWorkspaceApplicationTaskSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#id DataOciDataintegrationWorkspaceApplicationTaskSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.identifier"></a>

```go
Identifier *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#identifier DataOciDataintegrationWorkspaceApplicationTaskSchedules#identifier}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#is_enabled DataOciDataintegrationWorkspaceApplicationTaskSchedules#is_enabled}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.key"></a>

```go
Key *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#key DataOciDataintegrationWorkspaceApplicationTaskSchedules#key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesConfig.property.type"></a>

```go
Type *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#type DataOciDataintegrationWorkspaceApplicationTaskSchedules#type}.

---

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#values DataOciDataintegrationWorkspaceApplicationTaskSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#regex DataOciDataintegrationWorkspaceApplicationTaskSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#name DataOciDataintegrationWorkspaceApplicationTaskSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#values DataOciDataintegrationWorkspaceApplicationTaskSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_task_schedules#regex DataOciDataintegrationWorkspaceApplicationTaskSchedules#regex}.

---

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct {

}
```


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

&dataocidataintegrationworkspaceapplicationtaskschedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.lastRunTimeMillis">LastRunTimeMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LastRunTimeMillis`<sup>Required</sup> <a name="LastRunTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.lastRunTimeMillis"></a>

```go
func LastRunTimeMillis() *string
```

- *Type:* *string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```go
func ObjectCount() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```go
func ObjectTypeCountList() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```go
func Aggregator() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```go
func CountStatistics() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```go
func IdentifierPath() *string
```

- *Type:* *string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```go
func InfoFields() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```go
func UpdatedByName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.authMode">AuthMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.configProviderDelegate">ConfigProviderDelegate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.endTimeMillis">EndTimeMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDuration">ExpectedDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDurationUnit">ExpectedDurationUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isBackfillEnabled">IsBackfillEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isConcurrentAllowed">IsConcurrentAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.lastRunDetails">LastRunDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.nextRunTimeMillis">NextRunTimeMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.numberOfRetries">NumberOfRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelay">RetryDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelayUnit">RetryDelayUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.scheduleRef">ScheduleRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.startTimeMillis">StartTimeMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `AuthMode`<sup>Required</sup> <a name="AuthMode" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.authMode"></a>

```go
func AuthMode() *string
```

- *Type:* *string

---

##### `ConfigProviderDelegate`<sup>Required</sup> <a name="ConfigProviderDelegate" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.configProviderDelegate"></a>

```go
func ConfigProviderDelegate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndTimeMillis`<sup>Required</sup> <a name="EndTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.endTimeMillis"></a>

```go
func EndTimeMillis() *string
```

- *Type:* *string

---

##### `ExpectedDuration`<sup>Required</sup> <a name="ExpectedDuration" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDuration"></a>

```go
func ExpectedDuration() *f64
```

- *Type:* *f64

---

##### `ExpectedDurationUnit`<sup>Required</sup> <a name="ExpectedDurationUnit" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.expectedDurationUnit"></a>

```go
func ExpectedDurationUnit() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IsBackfillEnabled`<sup>Required</sup> <a name="IsBackfillEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isBackfillEnabled"></a>

```go
func IsBackfillEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsConcurrentAllowed`<sup>Required</sup> <a name="IsConcurrentAllowed" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isConcurrentAllowed"></a>

```go
func IsConcurrentAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `LastRunDetails`<sup>Required</sup> <a name="LastRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.lastRunDetails"></a>

```go
func LastRunDetails() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsLastRunDetailsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.metadata"></a>

```go
func Metadata() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NextRunTimeMillis`<sup>Required</sup> <a name="NextRunTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.nextRunTimeMillis"></a>

```go
func NextRunTimeMillis() *string
```

- *Type:* *string

---

##### `NumberOfRetries`<sup>Required</sup> <a name="NumberOfRetries" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.numberOfRetries"></a>

```go
func NumberOfRetries() *f64
```

- *Type:* *f64

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList</a>

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```go
func RegistryMetadata() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList</a>

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryAttempts"></a>

```go
func RetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryDelay`<sup>Required</sup> <a name="RetryDelay" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelay"></a>

```go
func RetryDelay() *f64
```

- *Type:* *f64

---

##### `RetryDelayUnit`<sup>Required</sup> <a name="RetryDelayUnit" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.retryDelayUnit"></a>

```go
func RetryDelayUnit() *string
```

- *Type:* *string

---

##### `ScheduleRef`<sup>Required</sup> <a name="ScheduleRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.scheduleRef"></a>

```go
func ScheduleRef() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList</a>

---

##### `StartTimeMillis`<sup>Required</sup> <a name="StartTimeMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.startTimeMillis"></a>

```go
func StartTimeMillis() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.customExpression">CustomExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.days">Days</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.time">Time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.weekOfMonth">WeekOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomExpression`<sup>Required</sup> <a name="CustomExpression" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.customExpression"></a>

```go
func CustomExpression() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.days"></a>

```go
func Days() *[]*f64
```

- *Type:* *[]*f64

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.time"></a>

```go
func Time() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList</a>

---

##### `WeekOfMonth`<sup>Required</sup> <a name="WeekOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```go
func WeekOfMonth() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.second">Second</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `Second`<sup>Required</sup> <a name="Second" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.second"></a>

```go
func Second() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsTime</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```go
func ObjectCount() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```go
func ObjectTypeCountList() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregator"></a>

```go
func Aggregator() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.countStatistics"></a>

```go
func CountStatistics() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.identifierPath"></a>

```go
func IdentifierPath() *string
```

- *Type:* *string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.infoFields"></a>

```go
func InfoFields() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.updatedByName"></a>

```go
func UpdatedByName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.frequencyDetails">FrequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.isDaylightAdjustmentEnabled">IsDaylightAdjustmentEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FrequencyDetails`<sup>Required</sup> <a name="FrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.frequencyDetails"></a>

```go
func FrequencyDetails() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefFrequencyDetailsList</a>

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IsDaylightAdjustmentEnabled`<sup>Required</sup> <a name="IsDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.isDaylightAdjustmentEnabled"></a>

```go
func IsDaylightAdjustmentEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.metadata"></a>

```go
func Metadata() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsScheduleRefParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationtaskschedules"

dataocidataintegrationworkspaceapplicationtaskschedules.NewDataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationTaskSchedules.DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationTaskSchedulesTaskScheduleSummaryCollection</a>

---



