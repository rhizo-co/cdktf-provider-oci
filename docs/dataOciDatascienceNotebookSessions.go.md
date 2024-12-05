# `dataOciDatascienceNotebookSessions` Submodule <a name="`dataOciDatascienceNotebookSessions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceNotebookSessions <a name="DataOciDatascienceNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions oci_datascience_notebook_sessions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessions(scope Construct, id *string, config DataOciDatascienceNotebookSessionsConfig) DataOciDatascienceNotebookSessions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig">DataOciDatascienceNotebookSessionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig">DataOciDatascienceNotebookSessionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatascienceNotebookSessions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatascienceNotebookSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceNotebookSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions">NotebookSessions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter"></a>

```go
func Filter() DataOciDatascienceNotebookSessionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a>

---

##### `NotebookSessions`<sup>Required</sup> <a name="NotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions"></a>

```go
func NotebookSessions() DataOciDatascienceNotebookSessionsNotebookSessionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceNotebookSessionsConfig <a name="DataOciDatascienceNotebookSessionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CreatedBy: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ProjectId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#filter DataOciDatascienceNotebookSessions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}.

---

### DataOciDatascienceNotebookSessionsFilter <a name="DataOciDatascienceNotebookSessionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}.

---

### DataOciDatascienceNotebookSessionsNotebookSessions <a name="DataOciDatascienceNotebookSessionsNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessions {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection {

}
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

&dataocidatasciencenotebooksessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceNotebookSessionsFilterList <a name="DataOciDatascienceNotebookSessionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceNotebookSessionsFilterOutputReference <a name="DataOciDatascienceNotebookSessionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatascienceNotebookSessionsNotebookSessionsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `NotebookSessionShapeConfigDetails`<sup>Required</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```go
func NotebookSessionShapeConfigDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">BlockStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">NotebookSessionShapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockStorageSizeInGbs`<sup>Required</sup> <a name="BlockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```go
func BlockStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `NotebookSessionShapeConfigDetails`<sup>Required</sup> <a name="NotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```go
func NotebookSessionShapeConfigDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">NotebookSessionGitRepoConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookSessionGitRepoConfigCollection`<sup>Required</sup> <a name="NotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```go
func NotebookSessionGitRepoConfigCollection() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">CustomEnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">NotebookSessionGitConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomEnvironmentVariables`<sup>Required</sup> <a name="CustomEnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```go
func CustomEnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NotebookSessionGitConfigDetails`<sup>Required</sup> <a name="NotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```go
func NotebookSessionGitConfigDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```go
func Get(index *f64) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">DestinationDirectoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">DestinationPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">ExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">MountTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DestinationDirectoryName`<sup>Required</sup> <a name="DestinationDirectoryName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```go
func DestinationDirectoryName() *string
```

- *Type:* *string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```go
func DestinationPath() *string
```

- *Type:* *string

---

##### `ExportId`<sup>Required</sup> <a name="ExportId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```go
func ExportId() *string
```

- *Type:* *string

---

##### `MountTargetId`<sup>Required</sup> <a name="MountTargetId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```go
func MountTargetId() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasciencenotebooksessions"

dataocidatasciencenotebooksessions.NewDataOciDatascienceNotebookSessionsNotebookSessionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails">NotebookSessionConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails">NotebookSessionConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails">NotebookSessionRuntimeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList">NotebookSessionStorageMountConfigurationDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl">NotebookSessionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NotebookSessionConfigDetails`<sup>Required</sup> <a name="NotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails"></a>

```go
func NotebookSessionConfigDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a>

---

##### `NotebookSessionConfigurationDetails`<sup>Required</sup> <a name="NotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails"></a>

```go
func NotebookSessionConfigurationDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a>

---

##### `NotebookSessionRuntimeConfigDetails`<sup>Required</sup> <a name="NotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails"></a>

```go
func NotebookSessionRuntimeConfigDetails() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a>

---

##### `NotebookSessionStorageMountConfigurationDetailsList`<sup>Required</sup> <a name="NotebookSessionStorageMountConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```go
func NotebookSessionStorageMountConfigurationDetailsList() DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `NotebookSessionUrl`<sup>Required</sup> <a name="NotebookSessionUrl" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl"></a>

```go
func NotebookSessionUrl() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatascienceNotebookSessionsNotebookSessions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a>

---



