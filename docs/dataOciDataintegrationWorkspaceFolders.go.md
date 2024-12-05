# `dataOciDataintegrationWorkspaceFolders` Submodule <a name="`dataOciDataintegrationWorkspaceFolders` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceFolders <a name="DataOciDataintegrationWorkspaceFolders" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders oci_dataintegration_workspace_folders}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFolders(scope Construct, id *string, config DataOciDataintegrationWorkspaceFoldersConfig) DataOciDataintegrationWorkspaceFolders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig">DataOciDataintegrationWorkspaceFoldersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig">DataOciDataintegrationWorkspaceFoldersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetAggregatorKey">ResetAggregatorKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAggregatorKey` <a name="ResetAggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetAggregatorKey"></a>

```go
func ResetAggregatorKey()
```

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetFields"></a>

```go
func ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetName"></a>

```go
func ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.resetNameContains"></a>

```go
func ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceFolders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFolders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFolders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFolders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFolders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceFolders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceFolders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceFolders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceFolders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList">DataOciDataintegrationWorkspaceFoldersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.folderSummaryCollection">FolderSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.aggregatorKeyInput">AggregatorKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.identifierInput">IdentifierInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameContainsInput">NameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.identifier">Identifier</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameContains">NameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceFoldersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList">DataOciDataintegrationWorkspaceFoldersFilterList</a>

---

##### `FolderSummaryCollection`<sup>Required</sup> <a name="FolderSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.folderSummaryCollection"></a>

```go
func FolderSummaryCollection() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList</a>

---

##### `AggregatorKeyInput`<sup>Optional</sup> <a name="AggregatorKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.aggregatorKeyInput"></a>

```go
func AggregatorKeyInput() *string
```

- *Type:* *string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.identifierInput"></a>

```go
func IdentifierInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameContainsInput"></a>

```go
func NameContainsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.identifier"></a>

```go
func Identifier() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.nameContains"></a>

```go
func NameContains() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFolders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceFoldersConfig <a name="DataOciDataintegrationWorkspaceFoldersConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
	AggregatorKey: *string,
	Fields: *[]*string,
	Filter: interface{},
	Id: *string,
	Identifier: *[]*string,
	Name: *string,
	NameContains: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#workspace_id DataOciDataintegrationWorkspaceFolders#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#aggregator_key DataOciDataintegrationWorkspaceFolders#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#fields DataOciDataintegrationWorkspaceFolders#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#id DataOciDataintegrationWorkspaceFolders#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.identifier">Identifier</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#identifier DataOciDataintegrationWorkspaceFolders#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name DataOciDataintegrationWorkspaceFolders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.nameContains">NameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name_contains DataOciDataintegrationWorkspaceFolders#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#workspace_id DataOciDataintegrationWorkspaceFolders#workspace_id}.

---

##### `AggregatorKey`<sup>Optional</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.aggregatorKey"></a>

```go
AggregatorKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#aggregator_key DataOciDataintegrationWorkspaceFolders#aggregator_key}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#fields DataOciDataintegrationWorkspaceFolders#fields}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#filter DataOciDataintegrationWorkspaceFolders#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#id DataOciDataintegrationWorkspaceFolders#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.identifier"></a>

```go
Identifier *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#identifier DataOciDataintegrationWorkspaceFolders#identifier}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name DataOciDataintegrationWorkspaceFolders#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersConfig.property.nameContains"></a>

```go
NameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name_contains DataOciDataintegrationWorkspaceFolders#name_contains}.

---

### DataOciDataintegrationWorkspaceFoldersFilter <a name="DataOciDataintegrationWorkspaceFoldersFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name DataOciDataintegrationWorkspaceFolders#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#values DataOciDataintegrationWorkspaceFolders#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#regex DataOciDataintegrationWorkspaceFolders#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#name DataOciDataintegrationWorkspaceFolders#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#values DataOciDataintegrationWorkspaceFolders#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_folders#regex DataOciDataintegrationWorkspaceFolders#regex}.

---

### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef {

}
```


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

&dataocidataintegrationworkspacefolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceFoldersFilterList <a name="DataOciDataintegrationWorkspaceFoldersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceFoldersFilterOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```go
func ObjectCount() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```go
func ObjectTypeCountList() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```go
func Aggregator() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```go
func CountStatistics() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```go
func IdentifierPath() *string
```

- *Type:* *string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```go
func InfoFields() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```go
func UpdatedByName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.categoryName">CategoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.folderKey">FolderKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.keyMap">KeyMap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.categoryName"></a>

```go
func CategoryName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FolderKey`<sup>Required</sup> <a name="FolderKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.folderKey"></a>

```go
func FolderKey() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyMap`<sup>Required</sup> <a name="KeyMap" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.keyMap"></a>

```go
func KeyMap() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.metadata"></a>

```go
func Metadata() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList</a>

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```go
func RegistryMetadata() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspacefolders"

dataocidataintegrationworkspacefolders.NewDataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceFolders.DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection">DataOciDataintegrationWorkspaceFoldersFolderSummaryCollection</a>

---



