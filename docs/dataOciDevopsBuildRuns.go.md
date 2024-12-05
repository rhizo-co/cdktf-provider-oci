# `dataOciDevopsBuildRuns` Submodule <a name="`dataOciDevopsBuildRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsBuildRuns <a name="DataOciDevopsBuildRuns" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs oci_devops_build_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRuns(scope Construct, id *string, config DataOciDevopsBuildRunsConfig) DataOciDevopsBuildRuns
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig">DataOciDevopsBuildRunsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig">DataOciDevopsBuildRunsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId">ResetBuildPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBuildPipelineId` <a name="ResetBuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetBuildPipelineId"></a>

```go
func ResetBuildPipelineId()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.DataOciDevopsBuildRuns_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.DataOciDevopsBuildRuns_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.DataOciDevopsBuildRuns_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.DataOciDevopsBuildRuns_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDevopsBuildRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDevopsBuildRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDevopsBuildRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsBuildRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection">BuildRunSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput">BuildPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BuildRunSummaryCollection`<sup>Required</sup> <a name="BuildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildRunSummaryCollection"></a>

```go
func BuildRunSummaryCollection() DataOciDevopsBuildRunsBuildRunSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList">DataOciDevopsBuildRunsBuildRunSummaryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filter"></a>

```go
func Filter() DataOciDevopsBuildRunsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList">DataOciDevopsBuildRunsFilterList</a>

---

##### `BuildPipelineIdInput`<sup>Optional</sup> <a name="BuildPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineIdInput"></a>

```go
func BuildPipelineIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.buildPipelineId"></a>

```go
func BuildPipelineId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRuns.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollection <a name="DataOciDevopsBuildRunsBuildRunSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollection {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude {

}
```


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo {

}
```


### DataOciDevopsBuildRunsConfig <a name="DataOciDevopsBuildRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BuildPipelineId: *string,
	CompartmentId: *string,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuildPipelineId`<sup>Optional</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.buildPipelineId"></a>

```go
BuildPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#build_pipeline_id DataOciDevopsBuildRuns#build_pipeline_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#compartment_id DataOciDevopsBuildRuns#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#display_name DataOciDevopsBuildRuns#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#filter DataOciDevopsBuildRuns#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#id DataOciDevopsBuildRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#project_id DataOciDevopsBuildRuns#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#state DataOciDevopsBuildRuns#state}.

---

### DataOciDevopsBuildRunsFilter <a name="DataOciDevopsBuildRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

&dataocidevopsbuildruns.DataOciDevopsBuildRunsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#name DataOciDevopsBuildRuns#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#values DataOciDevopsBuildRuns#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_build_runs#regex DataOciDevopsBuildRuns#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.items"></a>

```go
func Items() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArguments</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummary</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo">TriggerInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `TriggerInfo`<sup>Required</sup> <a name="TriggerInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.triggerInfo"></a>

```go
func TriggerInfo() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSource</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef">BaseRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef">HeadRef</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseRef`<sup>Required</sup> <a name="BaseRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.baseRef"></a>

```go
func BaseRef() *string
```

- *Type:* *string

---

##### `HeadRef`<sup>Required</sup> <a name="HeadRef" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.headRef"></a>

```go
func HeadRef() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterInclude</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include">Include</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource">TriggerSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.include"></a>

```go
func Include() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterIncludeList</a>

---

##### `TriggerSource`<sup>Required</sup> <a name="TriggerSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.triggerSource"></a>

```go
func TriggerSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilter</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.buildPipelineId"></a>

```go
func BuildPipelineId() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.filter"></a>

```go
func Filter() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsFilterList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActions</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.actions"></a>

```go
func Actions() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoActionsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceTriggerInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash">CommitHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch">RepositoryBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommitHash`<sup>Required</sup> <a name="CommitHash" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.commitHash"></a>

```go
func CommitHash() *string
```

- *Type:* *string

---

##### `RepositoryBranch`<sup>Required</sup> <a name="RepositoryBranch" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryBranch"></a>

```go
func RepositoryBranch() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfo</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId">BuildPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments">BuildRunArguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary">BuildRunProgressSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource">BuildRunSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo">CommitInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BuildPipelineId`<sup>Required</sup> <a name="BuildPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildPipelineId"></a>

```go
func BuildPipelineId() *string
```

- *Type:* *string

---

##### `BuildRunArguments`<sup>Required</sup> <a name="BuildRunArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunArguments"></a>

```go
func BuildRunArguments() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunArgumentsList</a>

---

##### `BuildRunProgressSummary`<sup>Required</sup> <a name="BuildRunProgressSummary" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunProgressSummary"></a>

```go
func BuildRunProgressSummary() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunProgressSummaryList</a>

---

##### `BuildRunSource`<sup>Required</sup> <a name="BuildRunSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.buildRunSource"></a>

```go
func BuildRunSource() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsBuildRunSourceList</a>

---

##### `CommitInfo`<sup>Required</sup> <a name="CommitInfo" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.commitInfo"></a>

```go
func CommitInfo() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsCommitInfoList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItems">DataOciDevopsBuildRunsBuildRunSummaryCollectionItems</a>

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionList <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference <a name="DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList">DataOciDevopsBuildRunsBuildRunSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsBuildRunsBuildRunSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsBuildRunSummaryCollection">DataOciDevopsBuildRunsBuildRunSummaryCollection</a>

---


### DataOciDevopsBuildRunsFilterList <a name="DataOciDevopsBuildRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsBuildRunsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get"></a>

```go
func Get(index *f64) DataOciDevopsBuildRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDevopsBuildRunsFilterOutputReference <a name="DataOciDevopsBuildRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsbuildruns"

dataocidevopsbuildruns.NewDataOciDevopsBuildRunsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsBuildRunsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsBuildRuns.DataOciDevopsBuildRunsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



