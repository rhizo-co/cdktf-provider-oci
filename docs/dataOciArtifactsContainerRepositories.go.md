# `dataOciArtifactsContainerRepositories` Submodule <a name="`dataOciArtifactsContainerRepositories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciArtifactsContainerRepositories <a name="DataOciArtifactsContainerRepositories" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories oci_artifacts_container_repositories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositories(scope Construct, id *string, config DataOciArtifactsContainerRepositoriesConfig) DataOciArtifactsContainerRepositories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig">DataOciArtifactsContainerRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetId"></a>

```go
func ResetId()
```

##### `ResetIsPublic` <a name="ResetIsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetIsPublic"></a>

```go
func ResetIsPublic()
```

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetRepositoryId"></a>

```go
func ResetRepositoryId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciArtifactsContainerRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciArtifactsContainerRepositories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciArtifactsContainerRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciArtifactsContainerRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection">ContainerRepositoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput">IsPublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ContainerRepositoryCollection`<sup>Required</sup> <a name="ContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.containerRepositoryCollection"></a>

```go
func ContainerRepositoryCollection() DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filter"></a>

```go
func Filter() DataOciArtifactsContainerRepositoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList">DataOciArtifactsContainerRepositoriesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublicInput"></a>

```go
func IsPublicInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryIdInput"></a>

```go
func RepositoryIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.isPublic"></a>

```go
func IsPublic() interface{}
```

- *Type:* interface{}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.repositoryId"></a>

```go
func RepositoryId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciArtifactsContainerRepositoriesConfig <a name="DataOciArtifactsContainerRepositoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

&dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	IsPublic: interface{},
	RepositoryId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic">IsPublic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId">RepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id DataOciArtifactsContainerRepositories#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#compartment_id_in_subtree DataOciArtifactsContainerRepositories#compartment_id_in_subtree}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#display_name DataOciArtifactsContainerRepositories#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#filter DataOciArtifactsContainerRepositories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#id DataOciArtifactsContainerRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.isPublic"></a>

```go
IsPublic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#is_public DataOciArtifactsContainerRepositories#is_public}.

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.repositoryId"></a>

```go
RepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#repository_id DataOciArtifactsContainerRepositories#repository_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#state DataOciArtifactsContainerRepositories#state}.

---

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollection <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollection" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

&dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection {

}
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

&dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems {

}
```


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

&dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme {

}
```


### DataOciArtifactsContainerRepositoriesFilter <a name="DataOciArtifactsContainerRepositoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

&dataociartifactscontainerrepositories.DataOciArtifactsContainerRepositoriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#name DataOciArtifactsContainerRepositories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#values DataOciArtifactsContainerRepositories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/artifacts_container_repositories#regex DataOciArtifactsContainerRepositories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs">BillableSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount">ImageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable">IsImmutable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic">IsPublic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount">LayerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes">LayersSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme">Readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed">TimeLastPushed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BillableSizeInGbs`<sup>Required</sup> <a name="BillableSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.billableSizeInGbs"></a>

```go
func BillableSizeInGbs() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageCount`<sup>Required</sup> <a name="ImageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.imageCount"></a>

```go
func ImageCount() *f64
```

- *Type:* *f64

---

##### `IsImmutable`<sup>Required</sup> <a name="IsImmutable" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isImmutable"></a>

```go
func IsImmutable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LayerCount`<sup>Required</sup> <a name="LayerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layerCount"></a>

```go
func LayerCount() *f64
```

- *Type:* *f64

---

##### `LayersSizeInBytes`<sup>Required</sup> <a name="LayersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.layersSizeInBytes"></a>

```go
func LayersSizeInBytes() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Readme`<sup>Required</sup> <a name="Readme" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.readme"></a>

```go
func Readme() DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastPushed`<sup>Required</sup> <a name="TimeLastPushed" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.timeLastPushed"></a>

```go
func TimeLastPushed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItems</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadmeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsReadme</a>

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference <a name="DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount">ImageCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount">LayerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes">LayersSizeInBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount">RemainingItemsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount">RepositoryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageCount`<sup>Required</sup> <a name="ImageCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.imageCount"></a>

```go
func ImageCount() *f64
```

- *Type:* *f64

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList">DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionItemsList</a>

---

##### `LayerCount`<sup>Required</sup> <a name="LayerCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layerCount"></a>

```go
func LayerCount() *f64
```

- *Type:* *f64

---

##### `LayersSizeInBytes`<sup>Required</sup> <a name="LayersSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.layersSizeInBytes"></a>

```go
func LayersSizeInBytes() *string
```

- *Type:* *string

---

##### `RemainingItemsCount`<sup>Required</sup> <a name="RemainingItemsCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.remainingItemsCount"></a>

```go
func RemainingItemsCount() *f64
```

- *Type:* *f64

---

##### `RepositoryCount`<sup>Required</sup> <a name="RepositoryCount" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.repositoryCount"></a>

```go
func RepositoryCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciArtifactsContainerRepositoriesContainerRepositoryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesContainerRepositoryCollection">DataOciArtifactsContainerRepositoriesContainerRepositoryCollection</a>

---


### DataOciArtifactsContainerRepositoriesFilterList <a name="DataOciArtifactsContainerRepositoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciArtifactsContainerRepositoriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get"></a>

```go
func Get(index *f64) DataOciArtifactsContainerRepositoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciArtifactsContainerRepositoriesFilterOutputReference <a name="DataOciArtifactsContainerRepositoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociartifactscontainerrepositories"

dataociartifactscontainerrepositories.NewDataOciArtifactsContainerRepositoriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciArtifactsContainerRepositoriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciArtifactsContainerRepositories.DataOciArtifactsContainerRepositoriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



