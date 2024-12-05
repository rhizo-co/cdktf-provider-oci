# `dataOciDataintegrationWorkspaceApplications` Submodule <a name="`dataOciDataintegrationWorkspaceApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplications <a name="DataOciDataintegrationWorkspaceApplications" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications oci_dataintegration_workspace_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplications(scope Construct, id *string, config DataOciDataintegrationWorkspaceApplicationsConfig) DataOciDataintegrationWorkspaceApplications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig">DataOciDataintegrationWorkspaceApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig">DataOciDataintegrationWorkspaceApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetFields"></a>

```go
func ResetFields()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetName"></a>

```go
func ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.resetNameContains"></a>

```go
func ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplications_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.applicationSummaryCollection">ApplicationSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList">DataOciDataintegrationWorkspaceApplicationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fieldsInput">FieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.identifierInput">IdentifierInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameContainsInput">NameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fields">Fields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.identifier">Identifier</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameContains">NameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ApplicationSummaryCollection`<sup>Required</sup> <a name="ApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.applicationSummaryCollection"></a>

```go
func ApplicationSummaryCollection() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceApplicationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList">DataOciDataintegrationWorkspaceApplicationsFilterList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fieldsInput"></a>

```go
func FieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.identifierInput"></a>

```go
func IdentifierInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameContainsInput"></a>

```go
func NameContainsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.fields"></a>

```go
func Fields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.identifier"></a>

```go
func Identifier() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.nameContains"></a>

```go
func NameContains() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo {

}
```


### DataOciDataintegrationWorkspaceApplicationsConfig <a name="DataOciDataintegrationWorkspaceApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#workspace_id DataOciDataintegrationWorkspaceApplications#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.fields">Fields</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#fields DataOciDataintegrationWorkspaceApplications#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#id DataOciDataintegrationWorkspaceApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.identifier">Identifier</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#identifier DataOciDataintegrationWorkspaceApplications#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name DataOciDataintegrationWorkspaceApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.nameContains">NameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name_contains DataOciDataintegrationWorkspaceApplications#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#workspace_id DataOciDataintegrationWorkspaceApplications#workspace_id}.

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.fields"></a>

```go
Fields *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#fields DataOciDataintegrationWorkspaceApplications#fields}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#filter DataOciDataintegrationWorkspaceApplications#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#id DataOciDataintegrationWorkspaceApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.identifier"></a>

```go
Identifier *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#identifier DataOciDataintegrationWorkspaceApplications#identifier}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name DataOciDataintegrationWorkspaceApplications#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsConfig.property.nameContains"></a>

```go
NameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name_contains DataOciDataintegrationWorkspaceApplications#name_contains}.

---

### DataOciDataintegrationWorkspaceApplicationsFilter <a name="DataOciDataintegrationWorkspaceApplicationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

&dataocidataintegrationworkspaceapplications.DataOciDataintegrationWorkspaceApplicationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name DataOciDataintegrationWorkspaceApplications#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#values DataOciDataintegrationWorkspaceApplications#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#regex DataOciDataintegrationWorkspaceApplications#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#name DataOciDataintegrationWorkspaceApplications#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#values DataOciDataintegrationWorkspaceApplications#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_applications#regex DataOciDataintegrationWorkspaceApplications#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath"></a>

```go
func NamePath() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```go
func ObjectCount() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```go
func ObjectTypeCountList() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```go
func Aggregator() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```go
func CountStatistics() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```go
func IdentifierPath() *string
```

- *Type:* *string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```go
func InfoFields() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```go
func UpdatedByName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.applicationVersion">ApplicationVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.dependentObjectMetadata">DependentObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.keyMap">KeyMap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.publishedObjectMetadata">PublishedObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.sourceApplicationInfo">SourceApplicationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timePatched">TimePatched</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.applicationVersion"></a>

```go
func ApplicationVersion() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DependentObjectMetadata`<sup>Required</sup> <a name="DependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.dependentObjectMetadata"></a>

```go
func DependentObjectMetadata() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsDependentObjectMetadataList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `KeyMap`<sup>Required</sup> <a name="KeyMap" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.keyMap"></a>

```go
func KeyMap() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.metadata"></a>

```go
func Metadata() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList</a>

---

##### `PublishedObjectMetadata`<sup>Required</sup> <a name="PublishedObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.publishedObjectMetadata"></a>

```go
func PublishedObjectMetadata() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList</a>

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```go
func RegistryMetadata() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList</a>

---

##### `SourceApplicationInfo`<sup>Required</sup> <a name="SourceApplicationInfo" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.sourceApplicationInfo"></a>

```go
func SourceApplicationInfo() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimePatched`<sup>Required</sup> <a name="TimePatched" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timePatched"></a>

```go
func TimePatched() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.namePath">NamePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePath`<sup>Required</sup> <a name="NamePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.namePath"></a>

```go
func NamePath() *string
```

- *Type:* *string

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsPublishedObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.applicationVersion">ApplicationVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.copyType">CopyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.lastPatchKey">LastPatchKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `ApplicationVersion`<sup>Required</sup> <a name="ApplicationVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.applicationVersion"></a>

```go
func ApplicationVersion() *string
```

- *Type:* *string

---

##### `CopyType`<sup>Required</sup> <a name="CopyType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.copyType"></a>

```go
func CopyType() *string
```

- *Type:* *string

---

##### `LastPatchKey`<sup>Required</sup> <a name="LastPatchKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.lastPatchKey"></a>

```go
func LastPatchKey() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsSourceApplicationInfo</a>

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection">DataOciDataintegrationWorkspaceApplicationsApplicationSummaryCollection</a>

---


### DataOciDataintegrationWorkspaceApplicationsFilterList <a name="DataOciDataintegrationWorkspaceApplicationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceApplicationsFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplications"

dataocidataintegrationworkspaceapplications.NewDataOciDataintegrationWorkspaceApplicationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplications.DataOciDataintegrationWorkspaceApplicationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



