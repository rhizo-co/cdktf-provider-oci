# `dataOciDevopsDeployEnvironments` Submodule <a name="`dataOciDevopsDeployEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployEnvironments <a name="DataOciDevopsDeployEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments oci_devops_deploy_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironments(scope Construct, id *string, config DataOciDevopsDeployEnvironmentsConfig) DataOciDevopsDeployEnvironments
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig">DataOciDevopsDeployEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig">DataOciDevopsDeployEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironments_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironments_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironments_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironments_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDevopsDeployEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDevopsDeployEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection">DeployEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DeployEnvironmentCollection`<sup>Required</sup> <a name="DeployEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection"></a>

```go
func DeployEnvironmentCollection() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter"></a>

```go
func Filter() DataOciDevopsDeployEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployEnvironmentsConfig <a name="DataOciDevopsDeployEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsConfig {
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
	ProjectId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#filter DataOciDevopsDeployEnvironments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}.

---

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection {

}
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems {

}
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors {

}
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems {

}
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel {

}
```


### DataOciDevopsDeployEnvironmentsFilter <a name="DataOciDevopsDeployEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

&dataocidevopsdeployenvironments.DataOciDevopsDeployEnvironmentsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">ComputeInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">SelectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceIds`<sup>Required</sup> <a name="ComputeInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```go
func ComputeInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelectorType`<sup>Required</sup> <a name="SelectorType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```go
func SelectorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors">ComputeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType">DeployEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupSelectors`<sup>Required</sup> <a name="ComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors"></a>

```go
func ComputeInstanceGroupSelectors() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeployEnvironmentType`<sup>Required</sup> <a name="DeployEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType"></a>

```go
func DeployEnvironmentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel"></a>

```go
func NetworkChannel() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a>

---


### DataOciDevopsDeployEnvironmentsFilterList <a name="DataOciDevopsDeployEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDevopsDeployEnvironmentsFilterOutputReference <a name="DataOciDevopsDeployEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironments"

dataocidevopsdeployenvironments.NewDataOciDevopsDeployEnvironmentsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



