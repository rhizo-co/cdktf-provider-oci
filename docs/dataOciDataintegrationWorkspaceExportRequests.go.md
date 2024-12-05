# `dataOciDataintegrationWorkspaceExportRequests` Submodule <a name="`dataOciDataintegrationWorkspaceExportRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceExportRequests <a name="DataOciDataintegrationWorkspaceExportRequests" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests oci_dataintegration_workspace_export_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequests(scope Construct, id *string, config DataOciDataintegrationWorkspaceExportRequestsConfig) DataOciDataintegrationWorkspaceExportRequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig">DataOciDataintegrationWorkspaceExportRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig">DataOciDataintegrationWorkspaceExportRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetExportStatus">ResetExportStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetProjection">ResetProjection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeEndedInMillis">ResetTimeEndedInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeStartedInMillis">ResetTimeStartedInMillis</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExportStatus` <a name="ResetExportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetExportStatus"></a>

```go
func ResetExportStatus()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetName"></a>

```go
func ResetName()
```

##### `ResetProjection` <a name="ResetProjection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetProjection"></a>

```go
func ResetProjection()
```

##### `ResetTimeEndedInMillis` <a name="ResetTimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeEndedInMillis"></a>

```go
func ResetTimeEndedInMillis()
```

##### `ResetTimeStartedInMillis` <a name="ResetTimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.resetTimeStartedInMillis"></a>

```go
func ResetTimeStartedInMillis()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceExportRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceExportRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceExportRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceExportRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceExportRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportRequestSummaryCollection">ExportRequestSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList">DataOciDataintegrationWorkspaceExportRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatusInput">ExportStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projectionInput">ProjectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillisInput">TimeEndedInMillisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillisInput">TimeStartedInMillisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatus">ExportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projection">Projection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExportRequestSummaryCollection`<sup>Required</sup> <a name="ExportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportRequestSummaryCollection"></a>

```go
func ExportRequestSummaryCollection() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceExportRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList">DataOciDataintegrationWorkspaceExportRequestsFilterList</a>

---

##### `ExportStatusInput`<sup>Optional</sup> <a name="ExportStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatusInput"></a>

```go
func ExportStatusInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectionInput`<sup>Optional</sup> <a name="ProjectionInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projectionInput"></a>

```go
func ProjectionInput() *string
```

- *Type:* *string

---

##### `TimeEndedInMillisInput`<sup>Optional</sup> <a name="TimeEndedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillisInput"></a>

```go
func TimeEndedInMillisInput() *string
```

- *Type:* *string

---

##### `TimeStartedInMillisInput`<sup>Optional</sup> <a name="TimeStartedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillisInput"></a>

```go
func TimeStartedInMillisInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ExportStatus`<sup>Required</sup> <a name="ExportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.exportStatus"></a>

```go
func ExportStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.projection"></a>

```go
func Projection() *string
```

- *Type:* *string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeEndedInMillis"></a>

```go
func TimeEndedInMillis() *string
```

- *Type:* *string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.timeStartedInMillis"></a>

```go
func TimeStartedInMillis() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceExportRequestsConfig <a name="DataOciDataintegrationWorkspaceExportRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

&dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
	ExportStatus: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	Projection: *string,
	TimeEndedInMillis: *string,
	TimeStartedInMillis: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.exportStatus">ExportStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.projection">Projection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#workspace_id DataOciDataintegrationWorkspaceExportRequests#workspace_id}.

---

##### `ExportStatus`<sup>Optional</sup> <a name="ExportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.exportStatus"></a>

```go
ExportStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#export_status DataOciDataintegrationWorkspaceExportRequests#export_status}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#filter DataOciDataintegrationWorkspaceExportRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#id DataOciDataintegrationWorkspaceExportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}.

---

##### `Projection`<sup>Optional</sup> <a name="Projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.projection"></a>

```go
Projection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#projection DataOciDataintegrationWorkspaceExportRequests#projection}.

---

##### `TimeEndedInMillis`<sup>Optional</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeEndedInMillis"></a>

```go
TimeEndedInMillis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_ended_in_millis DataOciDataintegrationWorkspaceExportRequests#time_ended_in_millis}.

---

##### `TimeStartedInMillis`<sup>Optional</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsConfig.property.timeStartedInMillis"></a>

```go
TimeStartedInMillis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#time_started_in_millis DataOciDataintegrationWorkspaceExportRequests#time_started_in_millis}.

---

### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

&dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

&dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

&dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems {

}
```


### DataOciDataintegrationWorkspaceExportRequestsFilter <a name="DataOciDataintegrationWorkspaceExportRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

&dataocidataintegrationworkspaceexportrequests.DataOciDataintegrationWorkspaceExportRequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#values DataOciDataintegrationWorkspaceExportRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#regex DataOciDataintegrationWorkspaceExportRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#name DataOciDataintegrationWorkspaceExportRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#values DataOciDataintegrationWorkspaceExportRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_export_requests#regex DataOciDataintegrationWorkspaceExportRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.namePath">NamePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.namePath"></a>

```go
func NamePath() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.timeUpdatedInMillis"></a>

```go
func TimeUpdatedInMillis() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItems</a>

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.areReferencesIncluded">AreReferencesIncluded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.errorMessages">ErrorMessages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.exportedItems">ExportedItems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.filters">Filters</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.isObjectOverwriteEnabled">IsObjectOverwriteEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectKeys">ObjectKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.referencedItems">ReferencedItems</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.totalExportedObjectCount">TotalExportedObjectCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreReferencesIncluded`<sup>Required</sup> <a name="AreReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.areReferencesIncluded"></a>

```go
func AreReferencesIncluded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```go
func ErrorMessages() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExportedItems`<sup>Required</sup> <a name="ExportedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.exportedItems"></a>

```go
func ExportedItems() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsExportedItemsList</a>

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.filters"></a>

```go
func Filters() *[]*string
```

- *Type:* *[]*string

---

##### `IsObjectOverwriteEnabled`<sup>Required</sup> <a name="IsObjectOverwriteEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.isObjectOverwriteEnabled"></a>

```go
func IsObjectOverwriteEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectKeys`<sup>Required</sup> <a name="ObjectKeys" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectKeys"></a>

```go
func ObjectKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion"></a>

```go
func ObjectStorageRegion() *string
```

- *Type:* *string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId"></a>

```go
func ObjectStorageTenancyId() *string
```

- *Type:* *string

---

##### `ReferencedItems`<sup>Required</sup> <a name="ReferencedItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.referencedItems"></a>

```go
func ReferencedItems() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis"></a>

```go
func TimeEndedInMillis() *string
```

- *Type:* *string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis"></a>

```go
func TimeStartedInMillis() *string
```

- *Type:* *string

---

##### `TotalExportedObjectCount`<sup>Required</sup> <a name="TotalExportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.totalExportedObjectCount"></a>

```go
func TotalExportedObjectCount() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection">DataOciDataintegrationWorkspaceExportRequestsExportRequestSummaryCollection</a>

---


### DataOciDataintegrationWorkspaceExportRequestsFilterList <a name="DataOciDataintegrationWorkspaceExportRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceExportRequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference <a name="DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceexportrequests"

dataocidataintegrationworkspaceexportrequests.NewDataOciDataintegrationWorkspaceExportRequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceExportRequests.DataOciDataintegrationWorkspaceExportRequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



