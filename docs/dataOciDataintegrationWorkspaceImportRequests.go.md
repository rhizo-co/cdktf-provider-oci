# `dataOciDataintegrationWorkspaceImportRequests` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequests <a name="DataOciDataintegrationWorkspaceImportRequests" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests oci_dataintegration_workspace_import_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequests(scope Construct, id *string, config DataOciDataintegrationWorkspaceImportRequestsConfig) DataOciDataintegrationWorkspaceImportRequests
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig">DataOciDataintegrationWorkspaceImportRequestsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig">DataOciDataintegrationWorkspaceImportRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetImportStatus">ResetImportStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetProjection">ResetProjection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeEndedInMillis">ResetTimeEndedInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeStartedInMillis">ResetTimeStartedInMillis</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetId"></a>

```go
func ResetId()
```

##### `ResetImportStatus` <a name="ResetImportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetImportStatus"></a>

```go
func ResetImportStatus()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetName"></a>

```go
func ResetName()
```

##### `ResetProjection` <a name="ResetProjection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetProjection"></a>

```go
func ResetProjection()
```

##### `ResetTimeEndedInMillis` <a name="ResetTimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeEndedInMillis"></a>

```go
func ResetTimeEndedInMillis()
```

##### `ResetTimeStartedInMillis` <a name="ResetTimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeStartedInMillis"></a>

```go
func ResetTimeStartedInMillis()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequests_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequests_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequests_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequests_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequests to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceImportRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList">DataOciDataintegrationWorkspaceImportRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importRequestSummaryCollection">ImportRequestSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatusInput">ImportStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projectionInput">ProjectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillisInput">TimeEndedInMillisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillisInput">TimeStartedInMillisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatus">ImportStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projection">Projection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceImportRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList">DataOciDataintegrationWorkspaceImportRequestsFilterList</a>

---

##### `ImportRequestSummaryCollection`<sup>Required</sup> <a name="ImportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importRequestSummaryCollection"></a>

```go
func ImportRequestSummaryCollection() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportStatusInput`<sup>Optional</sup> <a name="ImportStatusInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatusInput"></a>

```go
func ImportStatusInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectionInput`<sup>Optional</sup> <a name="ProjectionInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projectionInput"></a>

```go
func ProjectionInput() *string
```

- *Type:* *string

---

##### `TimeEndedInMillisInput`<sup>Optional</sup> <a name="TimeEndedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillisInput"></a>

```go
func TimeEndedInMillisInput() *string
```

- *Type:* *string

---

##### `TimeStartedInMillisInput`<sup>Optional</sup> <a name="TimeStartedInMillisInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillisInput"></a>

```go
func TimeStartedInMillisInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportStatus`<sup>Required</sup> <a name="ImportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatus"></a>

```go
func ImportStatus() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Projection`<sup>Required</sup> <a name="Projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projection"></a>

```go
func Projection() *string
```

- *Type:* *string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillis"></a>

```go
func TimeEndedInMillis() *string
```

- *Type:* *string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillis"></a>

```go
func TimeStartedInMillis() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestsConfig <a name="DataOciDataintegrationWorkspaceImportRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
	Filter: interface{},
	Id: *string,
	ImportStatus: *string,
	Name: *string,
	Projection: *string,
	TimeEndedInMillis: *string,
	TimeStartedInMillis: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.importStatus">ImportStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.projection">Projection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#filter DataOciDataintegrationWorkspaceImportRequests#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportStatus`<sup>Optional</sup> <a name="ImportStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.importStatus"></a>

```go
ImportStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}.

---

##### `Projection`<sup>Optional</sup> <a name="Projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.projection"></a>

```go
Projection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}.

---

##### `TimeEndedInMillis`<sup>Optional</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeEndedInMillis"></a>

```go
TimeEndedInMillis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}.

---

##### `TimeStartedInMillis`<sup>Optional</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeStartedInMillis"></a>

```go
TimeStartedInMillis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}.

---

### DataOciDataintegrationWorkspaceImportRequestsFilter <a name="DataOciDataintegrationWorkspaceImportRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#values DataOciDataintegrationWorkspaceImportRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#regex DataOciDataintegrationWorkspaceImportRequests#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#values DataOciDataintegrationWorkspaceImportRequests#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#regex DataOciDataintegrationWorkspaceImportRequests#regex}.

---

### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution {

}
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

&dataocidataintegrationworkspaceimportrequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestsFilterList <a name="DataOciDataintegrationWorkspaceImportRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicatePrefix">DuplicatePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicateSuffix">DuplicateSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.importConflictResolutionType">ImportConflictResolutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DuplicatePrefix`<sup>Required</sup> <a name="DuplicatePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```go
func DuplicatePrefix() *string
```

- *Type:* *string

---

##### `DuplicateSuffix`<sup>Required</sup> <a name="DuplicateSuffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```go
func DuplicateSuffix() *string
```

- *Type:* *string

---

##### `ImportConflictResolutionType`<sup>Required</sup> <a name="ImportConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```go
func ImportConflictResolutionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.namePath">NamePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.newKey">NewKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.oldKey">OldKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.resolutionAction">ResolutionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.timeUpdatedInMillis">TimeUpdatedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.namePath"></a>

```go
func NamePath() *string
```

- *Type:* *string

---

##### `NewKey`<sup>Required</sup> <a name="NewKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.newKey"></a>

```go
func NewKey() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *string
```

- *Type:* *string

---

##### `OldKey`<sup>Required</sup> <a name="OldKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.oldKey"></a>

```go
func OldKey() *string
```

- *Type:* *string

---

##### `ResolutionAction`<sup>Required</sup> <a name="ResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.resolutionAction"></a>

```go
func ResolutionAction() *string
```

- *Type:* *string

---

##### `TimeUpdatedInMillis`<sup>Required</sup> <a name="TimeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```go
func TimeUpdatedInMillis() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.areDataAssetReferencesIncluded">AreDataAssetReferencesIncluded</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.errorMessages">ErrorMessages</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importConflictResolution">ImportConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importedObjects">ImportedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectKeyForImport">ObjectKeyForImport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion">ObjectStorageRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId">ObjectStorageTenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis">TimeEndedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis">TimeStartedInMillis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.totalImportedObjectCount">TotalImportedObjectCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreDataAssetReferencesIncluded`<sup>Required</sup> <a name="AreDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.areDataAssetReferencesIncluded"></a>

```go
func AreDataAssetReferencesIncluded() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `ErrorMessages`<sup>Required</sup> <a name="ErrorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```go
func ErrorMessages() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `ImportConflictResolution`<sup>Required</sup> <a name="ImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importConflictResolution"></a>

```go
func ImportConflictResolution() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList</a>

---

##### `ImportedObjects`<sup>Required</sup> <a name="ImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importedObjects"></a>

```go
func ImportedObjects() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectKeyForImport`<sup>Required</sup> <a name="ObjectKeyForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectKeyForImport"></a>

```go
func ObjectKeyForImport() *string
```

- *Type:* *string

---

##### `ObjectStorageRegion`<sup>Required</sup> <a name="ObjectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion"></a>

```go
func ObjectStorageRegion() *string
```

- *Type:* *string

---

##### `ObjectStorageTenancyId`<sup>Required</sup> <a name="ObjectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId"></a>

```go
func ObjectStorageTenancyId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeEndedInMillis`<sup>Required</sup> <a name="TimeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis"></a>

```go
func TimeEndedInMillis() *string
```

- *Type:* *string

---

##### `TimeStartedInMillis`<sup>Required</sup> <a name="TimeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis"></a>

```go
func TimeStartedInMillis() *string
```

- *Type:* *string

---

##### `TotalImportedObjectCount`<sup>Required</sup> <a name="TotalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.totalImportedObjectCount"></a>

```go
func TotalImportedObjectCount() *f64
```

- *Type:* *f64

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceimportrequests"

dataocidataintegrationworkspaceimportrequests.NewDataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection</a>

---



