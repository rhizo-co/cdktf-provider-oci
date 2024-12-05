# `dataOciDevopsDeployEnvironment` Submodule <a name="`dataOciDevopsDeployEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployEnvironment <a name="DataOciDevopsDeployEnvironment" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environment oci_devops_deploy_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironment(scope Construct, id *string, config DataOciDevopsDeployEnvironmentConfig) DataOciDevopsDeployEnvironment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig">DataOciDevopsDeployEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig">DataOciDevopsDeployEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDevopsDeployEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDevopsDeployEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDevopsDeployEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.computeInstanceGroupSelectors">ComputeInstanceGroupSelectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentType">DeployEnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.networkChannel">NetworkChannel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList">DataOciDevopsDeployEnvironmentNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentIdInput">DeployEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentId">DeployEnvironmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeInstanceGroupSelectors`<sup>Required</sup> <a name="ComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.computeInstanceGroupSelectors"></a>

```go
func ComputeInstanceGroupSelectors() DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeployEnvironmentType`<sup>Required</sup> <a name="DeployEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentType"></a>

```go
func DeployEnvironmentType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NetworkChannel`<sup>Required</sup> <a name="NetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.networkChannel"></a>

```go
func NetworkChannel() DataOciDevopsDeployEnvironmentNetworkChannelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList">DataOciDevopsDeployEnvironmentNetworkChannelList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DeployEnvironmentIdInput`<sup>Optional</sup> <a name="DeployEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentIdInput"></a>

```go
func DeployEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `DeployEnvironmentId`<sup>Required</sup> <a name="DeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.deployEnvironmentId"></a>

```go
func DeployEnvironmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

&dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors {

}
```


### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

&dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems {

}
```


### DataOciDevopsDeployEnvironmentConfig <a name="DataOciDevopsDeployEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

&dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeployEnvironmentId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.deployEnvironmentId">DeployEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environment#deploy_environment_id DataOciDevopsDeployEnvironment#deploy_environment_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeployEnvironmentId`<sup>Required</sup> <a name="DeployEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentConfig.property.deployEnvironmentId"></a>

```go
DeployEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environment#deploy_environment_id DataOciDevopsDeployEnvironment#deploy_environment_id}.

---

### DataOciDevopsDeployEnvironmentNetworkChannel <a name="DataOciDevopsDeployEnvironmentNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

&dataocidevopsdeployenvironment.DataOciDevopsDeployEnvironmentNetworkChannel {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">ComputeInstanceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">SelectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeInstanceIds`<sup>Required</sup> <a name="ComputeInstanceIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```go
func ComputeInstanceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelectorType`<sup>Required</sup> <a name="SelectorType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```go
func SelectorType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItems</a>

---


### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference <a name="DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```go
func Items() DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentComputeInstanceGroupSelectors</a>

---


### DataOciDevopsDeployEnvironmentNetworkChannelList <a name="DataOciDevopsDeployEnvironmentNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentNetworkChannelList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDevopsDeployEnvironmentNetworkChannelList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.get"></a>

```go
func Get(index *f64) DataOciDevopsDeployEnvironmentNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDevopsDeployEnvironmentNetworkChannelOutputReference <a name="DataOciDevopsDeployEnvironmentNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidevopsdeployenvironment"

dataocidevopsdeployenvironment.NewDataOciDevopsDeployEnvironmentNetworkChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDevopsDeployEnvironmentNetworkChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType">NetworkChannelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannel">DataOciDevopsDeployEnvironmentNetworkChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkChannelType`<sup>Required</sup> <a name="NetworkChannelType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.networkChannelType"></a>

```go
func NetworkChannelType() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDevopsDeployEnvironmentNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironment.DataOciDevopsDeployEnvironmentNetworkChannel">DataOciDevopsDeployEnvironmentNetworkChannel</a>

---



