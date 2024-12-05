# `dataOciDevopsDeployStages` Submodule <a name="`dataOciDevopsDeployStages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployStages <a name="DataOciDevopsDeployStages" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages oci_devops_deploy_stages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStages(scope Construct, id *string, config DataOciDevopsDeployStagesConfig) DataOciDevopsDeployStages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig">DataOciDevopsDeployStagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig">DataOciDevopsDeployStagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId">ResetDeployPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDeployPipelineId` <a name="ResetDeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDeployPipelineId"></a>

```go
func ResetDeployPipelineId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.DataOciDevopsDeployStages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.DataOciDevopsDeployStages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.DataOciDevopsDeployStages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.DataOciDevopsDeployStages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDevopsDeployStages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDevopsDeployStages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDevopsDeployStages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployStages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection">DeployStageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput">DeployPipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeployStageCollection`<sup>Required</sup> <a name="DeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployStageCollection"></a>

```go
func DeployStageCollection() DataOciDevopsDeployStagesDeployStageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList">DataOciDevopsDeployStagesDeployStageCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filter"></a>

```go
func Filter() DataOciDevopsDeployStagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList">DataOciDevopsDeployStagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DeployPipelineIdInput`<sup>Optional</sup> <a name="DeployPipelineIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineIdInput"></a>

```go
func DeployPipelineIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.deployPipelineId"></a>

```go
func DeployPipelineId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployStagesConfig <a name="DataOciDevopsDeployStagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DeployPipelineId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#compartment_id DataOciDevopsDeployStages#compartment_id}.

---

##### `DeployPipelineId`<sup>Optional</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.deployPipelineId"></a>

```go
DeployPipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#deploy_pipeline_id DataOciDevopsDeployStages#deploy_pipeline_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#display_name DataOciDevopsDeployStages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#filter DataOciDevopsDeployStages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#id DataOciDevopsDeployStages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#state DataOciDevopsDeployStages#state}.

---

### DataOciDevopsDeployStagesDeployStageCollection <a name="DataOciDevopsDeployStagesDeployStageCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollection {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItems {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetString <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig {

}
```


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria {

}
```


### DataOciDevopsDeployStagesFilter <a name="DataOciDevopsDeployStagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

&dataocidevopsdeploystages.DataOciDevopsDeployStagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#name DataOciDevopsDeployStages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#values DataOciDevopsDeployStages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_stages#regex DataOciDevopsDeployStages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType">ApprovalPolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired">NumberOfApprovalsRequired</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalPolicyType`<sup>Required</sup> <a name="ApprovalPolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.approvalPolicyType"></a>

```go
func ApprovalPolicyType() *string
```

- *Type:* *string

---

##### `NumberOfApprovalsRequired`<sup>Required</sup> <a name="NumberOfApprovalsRequired" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.numberOfApprovalsRequired"></a>

```go
func NumberOfApprovalsRequired() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA">NamespaceA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB">NamespaceB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.ingressName"></a>

```go
func IngressName() *string
```

- *Type:* *string

---

##### `NamespaceA`<sup>Required</sup> <a name="NamespaceA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceA"></a>

```go
func NamespaceA() *string
```

- *Type:* *string

---

##### `NamespaceB`<sup>Required</sup> <a name="NamespaceB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.namespaceB"></a>

```go
func NamespaceB() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName">IngressName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType">StrategyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressName`<sup>Required</sup> <a name="IngressName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.ingressName"></a>

```go
func IngressName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `StrategyType`<sup>Required</sup> <a name="StrategyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.strategyType"></a>

```go
func StrategyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannel</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType">ContainerConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerConfigType`<sup>Required</sup> <a name="ContainerConfigType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.containerConfigType"></a>

```go
func ContainerConfigType() *string
```

- *Type:* *string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.networkChannel"></a>

```go
func NetworkChannel() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigNetworkChannelList</a>

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigShapeConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollection</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount">FailureCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage">FailurePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailureCount`<sup>Required</sup> <a name="FailureCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failureCount"></a>

```go
func FailureCount() *f64
```

- *Type:* *f64

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.failurePercentage"></a>

```go
func FailurePercentage() *f64
```

- *Type:* *f64

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items">Items</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.items"></a>

```go
func Items() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIps</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy">ApprovalPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled">AreHooksEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps">BlueBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy">BlueGreenStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy">CanaryStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId">CommandSpecDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId">ComputeInstanceGroupBlueGreenDeploymentDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId">ComputeInstanceGroupCanaryDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId">ComputeInstanceGroupCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId">ComputeInstanceGroupDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config">Config</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId">DeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds">DeployArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA">DeployEnvironmentIdA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB">DeployEnvironmentIdB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId">DeploymentSpecDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId">DeployPipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection">DeployStagePredecessorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType">DeployStageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId">DockerImageDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId">FunctionDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds">FunctionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps">GreenBackendIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId">HelmChartDeployArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds">HelmCommandArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync">IsAsync</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled">IsDebugEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled">IsForceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete">IsUninstallOnStageDelete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled">IsValidationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds">KubernetesManifestDeployArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig">LoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory">MaxHistory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs">MaxMemoryInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId">OkeBlueGreenDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId">OkeCanaryDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId">OkeCanaryTrafficShiftDeployStageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId">OkeClusterDeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig">ProductionLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose">Purpose</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName">ReleaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy">RollbackPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy">RolloutPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString">SetString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues">SetValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail">ShouldCleanupOnFail</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait">ShouldNotWait</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues">ShouldResetValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues">ShouldReuseValues</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds">ShouldSkipCrds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes">ShouldSkipRenderSubchartNotes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig">TestLoadBalancerConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget">TrafficShiftTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds">ValuesArtifactIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria">WaitCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApprovalPolicy`<sup>Required</sup> <a name="ApprovalPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.approvalPolicy"></a>

```go
func ApprovalPolicy() DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsApprovalPolicyList</a>

---

##### `AreHooksEnabled`<sup>Required</sup> <a name="AreHooksEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.areHooksEnabled"></a>

```go
func AreHooksEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `BlueBackendIps`<sup>Required</sup> <a name="BlueBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueBackendIps"></a>

```go
func BlueBackendIps() DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueBackendIpsList</a>

---

##### `BlueGreenStrategy`<sup>Required</sup> <a name="BlueGreenStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.blueGreenStrategy"></a>

```go
func BlueGreenStrategy() DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsBlueGreenStrategyList</a>

---

##### `CanaryStrategy`<sup>Required</sup> <a name="CanaryStrategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.canaryStrategy"></a>

```go
func CanaryStrategy() DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList">DataOciDevopsDeployStagesDeployStageCollectionItemsCanaryStrategyList</a>

---

##### `CommandSpecDeployArtifactId`<sup>Required</sup> <a name="CommandSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.commandSpecDeployArtifactId"></a>

```go
func CommandSpecDeployArtifactId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupBlueGreenDeploymentDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupBlueGreenDeploymentDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupBlueGreenDeploymentDeployStageId"></a>

```go
func ComputeInstanceGroupBlueGreenDeploymentDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryDeployStageId"></a>

```go
func ComputeInstanceGroupCanaryDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="ComputeInstanceGroupCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupCanaryTrafficShiftDeployStageId"></a>

```go
func ComputeInstanceGroupCanaryTrafficShiftDeployStageId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupDeployEnvironmentId`<sup>Required</sup> <a name="ComputeInstanceGroupDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.computeInstanceGroupDeployEnvironmentId"></a>

```go
func ComputeInstanceGroupDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.config"></a>

```go
func Config() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.containerConfig"></a>

```go
func ContainerConfig() DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsContainerConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeployArtifactId`<sup>Required</sup> <a name="DeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactId"></a>

```go
func DeployArtifactId() *string
```

- *Type:* *string

---

##### `DeployArtifactIds`<sup>Required</sup> <a name="DeployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployArtifactIds"></a>

```go
func DeployArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `DeployEnvironmentIdA`<sup>Required</sup> <a name="DeployEnvironmentIdA" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdA"></a>

```go
func DeployEnvironmentIdA() *string
```

- *Type:* *string

---

##### `DeployEnvironmentIdB`<sup>Required</sup> <a name="DeployEnvironmentIdB" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployEnvironmentIdB"></a>

```go
func DeployEnvironmentIdB() *string
```

- *Type:* *string

---

##### `DeploymentSpecDeployArtifactId`<sup>Required</sup> <a name="DeploymentSpecDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deploymentSpecDeployArtifactId"></a>

```go
func DeploymentSpecDeployArtifactId() *string
```

- *Type:* *string

---

##### `DeployPipelineId`<sup>Required</sup> <a name="DeployPipelineId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployPipelineId"></a>

```go
func DeployPipelineId() *string
```

- *Type:* *string

---

##### `DeployStagePredecessorCollection`<sup>Required</sup> <a name="DeployStagePredecessorCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStagePredecessorCollection"></a>

```go
func DeployStagePredecessorCollection() DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList">DataOciDevopsDeployStagesDeployStageCollectionItemsDeployStagePredecessorCollectionList</a>

---

##### `DeployStageType`<sup>Required</sup> <a name="DeployStageType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.deployStageType"></a>

```go
func DeployStageType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DockerImageDeployArtifactId`<sup>Required</sup> <a name="DockerImageDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.dockerImageDeployArtifactId"></a>

```go
func DockerImageDeployArtifactId() *string
```

- *Type:* *string

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.failurePolicy"></a>

```go
func FailurePolicy() DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsFailurePolicyList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FunctionDeployEnvironmentId`<sup>Required</sup> <a name="FunctionDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionDeployEnvironmentId"></a>

```go
func FunctionDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `FunctionTimeoutInSeconds`<sup>Required</sup> <a name="FunctionTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.functionTimeoutInSeconds"></a>

```go
func FunctionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `GreenBackendIps`<sup>Required</sup> <a name="GreenBackendIps" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.greenBackendIps"></a>

```go
func GreenBackendIps() DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList">DataOciDevopsDeployStagesDeployStageCollectionItemsGreenBackendIpsList</a>

---

##### `HelmChartDeployArtifactId`<sup>Required</sup> <a name="HelmChartDeployArtifactId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmChartDeployArtifactId"></a>

```go
func HelmChartDeployArtifactId() *string
```

- *Type:* *string

---

##### `HelmCommandArtifactIds`<sup>Required</sup> <a name="HelmCommandArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.helmCommandArtifactIds"></a>

```go
func HelmCommandArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAsync`<sup>Required</sup> <a name="IsAsync" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isAsync"></a>

```go
func IsAsync() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDebugEnabled`<sup>Required</sup> <a name="IsDebugEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isDebugEnabled"></a>

```go
func IsDebugEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsForceEnabled`<sup>Required</sup> <a name="IsForceEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isForceEnabled"></a>

```go
func IsForceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsUninstallOnStageDelete`<sup>Required</sup> <a name="IsUninstallOnStageDelete" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isUninstallOnStageDelete"></a>

```go
func IsUninstallOnStageDelete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsValidationEnabled`<sup>Required</sup> <a name="IsValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.isValidationEnabled"></a>

```go
func IsValidationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KubernetesManifestDeployArtifactIds`<sup>Required</sup> <a name="KubernetesManifestDeployArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.kubernetesManifestDeployArtifactIds"></a>

```go
func KubernetesManifestDeployArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LoadBalancerConfig`<sup>Required</sup> <a name="LoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.loadBalancerConfig"></a>

```go
func LoadBalancerConfig() DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsLoadBalancerConfigList</a>

---

##### `MaxHistory`<sup>Required</sup> <a name="MaxHistory" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxHistory"></a>

```go
func MaxHistory() *f64
```

- *Type:* *f64

---

##### `MaxMemoryInMbs`<sup>Required</sup> <a name="MaxMemoryInMbs" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.maxMemoryInMbs"></a>

```go
func MaxMemoryInMbs() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OkeBlueGreenDeployStageId`<sup>Required</sup> <a name="OkeBlueGreenDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeBlueGreenDeployStageId"></a>

```go
func OkeBlueGreenDeployStageId() *string
```

- *Type:* *string

---

##### `OkeCanaryDeployStageId`<sup>Required</sup> <a name="OkeCanaryDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryDeployStageId"></a>

```go
func OkeCanaryDeployStageId() *string
```

- *Type:* *string

---

##### `OkeCanaryTrafficShiftDeployStageId`<sup>Required</sup> <a name="OkeCanaryTrafficShiftDeployStageId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeCanaryTrafficShiftDeployStageId"></a>

```go
func OkeCanaryTrafficShiftDeployStageId() *string
```

- *Type:* *string

---

##### `OkeClusterDeployEnvironmentId`<sup>Required</sup> <a name="OkeClusterDeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.okeClusterDeployEnvironmentId"></a>

```go
func OkeClusterDeployEnvironmentId() *string
```

- *Type:* *string

---

##### `ProductionLoadBalancerConfig`<sup>Required</sup> <a name="ProductionLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.productionLoadBalancerConfig"></a>

```go
func ProductionLoadBalancerConfig() DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.purpose"></a>

```go
func Purpose() *string
```

- *Type:* *string

---

##### `ReleaseName`<sup>Required</sup> <a name="ReleaseName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.releaseName"></a>

```go
func ReleaseName() *string
```

- *Type:* *string

---

##### `RollbackPolicy`<sup>Required</sup> <a name="RollbackPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rollbackPolicy"></a>

```go
func RollbackPolicy() DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList</a>

---

##### `RolloutPolicy`<sup>Required</sup> <a name="RolloutPolicy" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.rolloutPolicy"></a>

```go
func RolloutPolicy() DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setString"></a>

```go
func SetString() DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList</a>

---

##### `SetValues`<sup>Required</sup> <a name="SetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.setValues"></a>

```go
func SetValues() DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList</a>

---

##### `ShouldCleanupOnFail`<sup>Required</sup> <a name="ShouldCleanupOnFail" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldCleanupOnFail"></a>

```go
func ShouldCleanupOnFail() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldNotWait`<sup>Required</sup> <a name="ShouldNotWait" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldNotWait"></a>

```go
func ShouldNotWait() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldResetValues`<sup>Required</sup> <a name="ShouldResetValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldResetValues"></a>

```go
func ShouldResetValues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldReuseValues`<sup>Required</sup> <a name="ShouldReuseValues" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldReuseValues"></a>

```go
func ShouldReuseValues() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldSkipCrds`<sup>Required</sup> <a name="ShouldSkipCrds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipCrds"></a>

```go
func ShouldSkipCrds() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShouldSkipRenderSubchartNotes`<sup>Required</sup> <a name="ShouldSkipRenderSubchartNotes" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.shouldSkipRenderSubchartNotes"></a>

```go
func ShouldSkipRenderSubchartNotes() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TestLoadBalancerConfig`<sup>Required</sup> <a name="TestLoadBalancerConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.testLoadBalancerConfig"></a>

```go
func TestLoadBalancerConfig() DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TrafficShiftTarget`<sup>Required</sup> <a name="TrafficShiftTarget" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.trafficShiftTarget"></a>

```go
func TrafficShiftTarget() *string
```

- *Type:* *string

---

##### `ValuesArtifactIds`<sup>Required</sup> <a name="ValuesArtifactIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.valuesArtifactIds"></a>

```go
func ValuesArtifactIds() *[]*string
```

- *Type:* *[]*string

---

##### `WaitCriteria`<sup>Required</sup> <a name="WaitCriteria" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.waitCriteria"></a>

```go
func WaitCriteria() DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItems">DataOciDevopsDeployStagesDeployStageCollectionItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsProductionLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRollbackPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount">BatchCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds">BatchDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage">BatchPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent">RampLimitPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchCount`<sup>Required</sup> <a name="BatchCount" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchCount"></a>

```go
func BatchCount() *f64
```

- *Type:* *f64

---

##### `BatchDelayInSeconds`<sup>Required</sup> <a name="BatchDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchDelayInSeconds"></a>

```go
func BatchDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `BatchPercentage`<sup>Required</sup> <a name="BatchPercentage" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.batchPercentage"></a>

```go
func BatchPercentage() *f64
```

- *Type:* *f64

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `RampLimitPercent`<sup>Required</sup> <a name="RampLimitPercent" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.rampLimitPercent"></a>

```go
func RampLimitPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy">DataOciDevopsDeployStagesDeployStageCollectionItemsRolloutPolicy</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsSetString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetString">DataOciDevopsDeployStagesDeployStageCollectionItemsSetString</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItems</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues">DataOciDevopsDeployStagesDeployStageCollectionItemsSetValues</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort">BackendPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName">ListenerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendPort`<sup>Required</sup> <a name="BackendPort" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.backendPort"></a>

```go
func BackendPort() *f64
```

- *Type:* *f64

---

##### `ListenerName`<sup>Required</sup> <a name="ListenerName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.listenerName"></a>

```go
func ListenerName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig">DataOciDevopsDeployStagesDeployStageCollectionItemsTestLoadBalancerConfig</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration">WaitDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType">WaitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WaitDuration`<sup>Required</sup> <a name="WaitDuration" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitDuration"></a>

```go
func WaitDuration() *string
```

- *Type:* *string

---

##### `WaitType`<sup>Required</sup> <a name="WaitType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.waitType"></a>

```go
func WaitType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria">DataOciDevopsDeployStagesDeployStageCollectionItemsWaitCriteria</a>

---


### DataOciDevopsDeployStagesDeployStageCollectionList <a name="DataOciDevopsDeployStagesDeployStageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesDeployStageCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesDeployStageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployStagesDeployStageCollectionOutputReference <a name="DataOciDevopsDeployStagesDeployStageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesDeployStageCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesDeployStageCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployStagesDeployStageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionItemsList">DataOciDevopsDeployStagesDeployStageCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployStagesDeployStageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesDeployStageCollection">DataOciDevopsDeployStagesDeployStageCollection</a>

---


### DataOciDevopsDeployStagesFilterList <a name="DataOciDevopsDeployStagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployStagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployStagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDevopsDeployStagesFilterOutputReference <a name="DataOciDevopsDeployStagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeploystages"

dataocidevopsdeploystages.NewDataOciDevopsDeployStagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployStagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployStages.DataOciDevopsDeployStagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



